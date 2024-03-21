import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type Filter = "all" | string;

type CategoryFiltersProps = {
  categories: {
    parentCategory: string;
    subCategories: { category: string; subpath: string }[];
    subpath: string;
  }[];
  filter: Filter;
};

export function CategoryFilters({ categories, filter }: CategoryFiltersProps) {
  return (
    <div>
      <h3>Categories</h3>
      <ul className="pl-0 mb-0 list-none">
        <li>
          <CategoryLink
            selected={filter === "all"}
            indented={false}
            category="All Categories"
            subpath="/sdk/category/all"
          />
        </li>
        {categories.map(({ parentCategory, subCategories, subpath }, i) => (
          <Category
            filter={filter}
            key={i}
            parentCategory={parentCategory}
            subCategories={subCategories}
            subpath={subpath}
          />
        ))}
      </ul>
    </div>
  );
}

type CategoryProps = {
  parentCategory: string;
  subCategories: { category: string; subpath: string }[];
  filter: Filter;
  subpath: string;
};
function Category({
  parentCategory,
  subCategories,
  filter,
  subpath,
}: CategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[300px]">
      <CollapsibleTrigger className="group text-slate-500 hover:text-slate-800 rounded-md py-2 px-2 w-full hover:bg-slate-100 transition-all">
        <li>
          <div className="flex items-center gap-x-2">
            <ChevronDown
              className={`text-slate-400 group-aria-expanded:-rotate-180 duration-150 transition-transform`}
            />
            <div className="font-semibold">{parentCategory}</div>
          </div>
        </li>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-0">
        <ul className="mb-0 pl-0 list-none">
          <SubCategory
            filter={filter}
            label={`All ${parentCategory}`}
            category={parentCategory}
            subpath={subpath}
          />
          {subCategories.map(({ category, subpath }) => (
            <SubCategory
              subpath={subpath}
              filter={filter}
              key={category}
              category={category}
            />
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

type SubCategoryProps = {
  category: string;
  label?: string;
  filter: string;
  subpath: string;
};
function SubCategory({ category, label, filter, subpath }: SubCategoryProps) {
  return (
    <li>
      <CategoryLink
        subpath={subpath}
        selected={filter === category}
        category={category}
        label={label}
      />
    </li>
  );
}

function CategoryLink({
  category,
  label,
  indented,
  selected = false,
  subpath,
}: {
  category: string;
  label?: string;
  selected?: boolean;
  indented?: boolean;
  subpath: string;
}) {
  return (
    <a
      aria-selected={selected}
      data-indent={indented}
      className={
        "pl-12 rounded-md data-[indent=false]:pl-2 aria text-slate-500 hover:text-slate-800 hover:no-underline block py-2 hover:bg-slate-100 transition-all aria-selected:hover:bg-blue-100 aria-selected:bg-blue-100 aria-selected:text-blue-800"
      }
      href={subpath}
    >
      {label ?? category}
    </a>
  );
}
