import { categoriesToMapTo } from "./assign-category-to-api";

export function getParentCategoryFromCategory(category: string): string {
  for (const parentCategory in categoriesToMapTo) {
    if (
      categoriesToMapTo[
        parentCategory as keyof typeof categoriesToMapTo
      ].includes(category)
    ) {
      return parentCategory;
    }
  }
  throw new Error(`No parent category found for ${category}`);
}
