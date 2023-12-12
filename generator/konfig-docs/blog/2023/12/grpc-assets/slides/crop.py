import os
import cv2
import numpy as np
from PIL import Image

def find_content_bounds(image_path, buffer_pixels=5):
    # Load the image using OpenCV
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)

    # Apply Canny edge detection
    edges = cv2.Canny(img, threshold1=100, threshold2=200)

    # Find contours of the content
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    if contours:
        # Find the bounding rectangle of the largest contour
        largest_contour = max(contours, key=cv2.contourArea)
        x, y, w, h = cv2.boundingRect(largest_contour)

        # Add buffer to the detected content region
        x -= buffer_pixels
        y -= buffer_pixels
        w += 2 * buffer_pixels
        h += 2 * buffer_pixels

        # Ensure the new region does not go outside the image bounds
        x = max(0, x)
        y = max(0, y)
        w = min(img.shape[1], x + w) - x
        h = min(img.shape[0], y + h) - y

        return x, y, x + w, y + h

    return None

def crop_and_pad_center(image_path, output_path, padding):
    # Find content bounds
    content_bounds = find_content_bounds(image_path)

    if content_bounds:
        # Open the image using Pillow
        img = Image.open(image_path)

        # Check if the image has an alpha channel (transparency)
        has_alpha = img.mode == 'RGBA'

        # Calculate cropping coordinates
        left, upper, right, lower = content_bounds

        # Crop the content
        cropped_img = img.crop((left, upper, right, lower))

        # Calculate new dimensions for the padded image
        new_width = cropped_img.width + 2 * padding
        new_height = cropped_img.height + 2 * padding

        # Create a new image with padding
        padded_img = Image.new('RGBA' if has_alpha else 'RGB', (new_width, new_height), (255, 255, 255, 0) if has_alpha else (255, 255, 255))
        padded_img.paste(cropped_img, (padding, padding))

        # Save the result to the output path
        padded_img.save(output_path)
    else:
        print("No content detected in", image_path)


def process_images_in_folder(input_folder, output_folder, padding):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Recursively get a list of all relative file files in the input folder
    file_list = []
    for root, directories, files in os.walk(input_folder):
        for filename in files:
            # Skip hidden files
            if not filename.startswith('.'):
                # Get relative path to file
                file_path = os.path.join(root, filename)
                relative_file_path = os.path.relpath(file_path, input_folder)
                file_list.append(relative_file_path)

    for relative_file_path in file_list:
        # Check if the file is an image (you can modify the extensions if needed)
        if relative_file_path.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
            # Get the input and output image paths
            input_image_path = os.path.join(input_folder, relative_file_path)
            output_image_path = os.path.join(output_folder, relative_file_path)

            # create any missing directores for the output_image_path
            os.makedirs(os.path.dirname(output_image_path), exist_ok=True)

            # Crop and pad the image
            crop_and_pad_center(input_image_path, output_image_path, padding)

if __name__ == "__main__":
    input_folder_path = "./before"  # Specify the input folder path
    output_folder_path = "./after"  # Specify the output folder path
    padding_amount = 20  # Specify the padding amount in pixels

    process_images_in_folder(input_folder_path, output_folder_path, padding_amount)
