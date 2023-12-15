import os
import pyperclip
from urllib.parse import urlparse

def get_comment(file_path):
    """Fetches the comment of a file on MacOS using AppleScript."""
    script = f'''
    tell application "Finder"
        set theItem to (POSIX file "{file_path}") as alias
        get comment of theItem
    end tell
    '''
    return os.popen(f"osascript -e '{script}'").read().strip()

def extract_source_website(url):
    """Extracts the source website from a given URL."""
    netloc = urlparse(url).netloc
    if "youtube" in netloc:
        return "YouTube"
    elif "news.ycombinator" in netloc:
        return "Hacker News"
    elif "twitter" in netloc:
        return "Twitter"
    elif "reddit" in netloc:
        return "Reddit"
    else:
        # Return the domain name as default if no other conditions match
        return netloc

def generate_string(folder_path):
    output_str = "<Carousel.Wrapper>"
    for file_name in os.listdir(folder_path):
        if file_name.endswith('.png'):
            file_path = os.path.join(folder_path, file_name)

            comment = get_comment(file_path)
            source_website = extract_source_website(comment)

            file_name_without_ext = os.path.splitext(file_name)[0]
            folder_name = os.path.basename(os.path.normpath(folder_path))  # This gives 'bad-result' for './before/bad-result'

            slide = f"""
  <Carousel.Slide>
      <Figure caption={{<a href="{comment}">{source_website}</a>}}>
        ![{file_name_without_ext}](./grpc-assets/slides/after/{folder_name}/{file_name})
      </Figure>
  </Carousel.Slide>"""
            output_str += slide

    output_str += "\n</Carousel.Wrapper>"
    return output_str

folder_path = input("Enter the path of the folder containing the images (e.g. ./before/bad-result): ")
output = generate_string(folder_path)
print(output)

# Copy the output to the clipboard
pyperclip.copy(output)
print("The generated string has been copied to the clipboard!")
