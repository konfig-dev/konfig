import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";
import { makePersistable, stopPersisting } from "mobx-persist-store";
import Link from "@docusaurus/Link";
import { Button } from "./ui/button";
import { cn } from "../util/util";

export type Filter = "all" | string;

type CategoryFiltersProps = {
  categories: {
    parentCategory: string;
    subCategories: { category: string; subpath: string }[];
    subpath: string;
  }[];
  filter: Filter;
  className?: string;
};

class AllCategories {
  categories: Record<string, ParentCategorySection>;

  constructor(categories: CategoryFiltersProps["categories"]) {
    this.categories = categories.reduce((acc, category) => {
      acc[category.parentCategory] = new ParentCategorySection();
      return acc;
    }, {});
    makeAutoObservable(this, {}, { autoBind: true });
    if (typeof window === "undefined") return;
    makePersistable(this, {
      name: "AllCategories",
      properties: ["categories"],
      storage: window.localStorage,
    });
  }

  get anyCategoryIsOpen() {
    return Object.values(this.categories).some((category) => category.isOpen);
  }

  stopStore() {
    stopPersisting(this);
  }
}

class ParentCategorySection {
  isOpen: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export const CategoryFilters = observer((props: CategoryFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Collapsible
        className="md:hidden w-full relative"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild>
          <Button className="w-full mb-2">
            {isOpen ? "Hide" : "Show"} Categories
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CategoryFilterControls {...props} />
        </CollapsibleContent>
      </Collapsible>
      <CategoryFilterControls className="hidden md:block" {...props} />
    </>
  );
});

export const CategoryFilterControls = observer(
  ({ categories, filter, className }: CategoryFiltersProps) => {
    const [allCategories] = useState(() => new AllCategories(categories));
    useEffect(() => {
      return () => {
        allCategories.stopStore();
      };
    }, []);
    return (
      <div className={cn("w-full md:w-[300px]", className)}>
        <h3>Categories</h3>
        <Button
          variant="outline"
          size="sm"
          className="mb-2 w-full"
          onClick={() => {
            const anyCategoryIsOpen = allCategories.anyCategoryIsOpen;
            Object.values(allCategories.categories).forEach((category) => {
              category.isOpen = !anyCategoryIsOpen;
            });
          }}
        >
          {allCategories.anyCategoryIsOpen ? "Close All" : "Expand All"}
        </Button>
        <ul className="pl-0 mb-0 list-none">
          <li>
            <CategoryLink
              selected={filter === "all"}
              indented={false}
              category="All Categories"
              subpath="/sdk/category/all"
              className="font-semibold"
            />
          </li>
          {categories.map(({ parentCategory, subCategories, subpath }, i) => (
            <Category
              allCategories={allCategories}
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
);

type CategoryProps = {
  parentCategory: string;
  subCategories: { category: string; subpath: string }[];
  filter: Filter;
  subpath: string;
  allCategories: AllCategories;
};

const Category = observer(
  ({
    parentCategory,
    subCategories,
    filter,
    subpath,
    allCategories,
  }: CategoryProps) => {
    const category = allCategories.categories[parentCategory];

    return (
      <Collapsible
        open={category.isOpen}
        onOpenChange={(open) => {
          category.isOpen = open;
        }}
        className="w-full md:w-[300px]"
      >
        <CollapsibleTrigger
          aria-selected={
            filter === parentCategory ||
            subCategories.map((sub) => sub.category).includes(filter)
          }
          className="group aria-selected:hover:bg-blue-100 aria-selected:bg-blue-100 aria-selected:text-blue-800 text-slate-500 hover:text-slate-800 rounded-md py-2 px-2 w-full hover:bg-slate-100 transition-all"
        >
          <li>
            <div className="flex items-center gap-x-2">
              {category.isOpen ? (
                <ChevronUp className="text-slate-400 group-aria-selected:text-blue-400" />
              ) : (
                <ChevronDown className="text-slate-400 group-aria-selected:text-blue-400" />
              )}
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
);

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
  className,
}: {
  category: string;
  className?: string;
  label?: string;
  selected?: boolean;
  indented?: boolean;
  subpath: string;
}) {
  return (
    <Link
      aria-selected={selected}
      data-indent={indented}
      className={cn(
        "pl-12 rounded-md data-[indent=false]:pl-2 aria text-slate-500 hover:text-slate-800 hover:no-underline block py-2 hover:bg-slate-100 transition-all aria-selected:hover:bg-blue-100 aria-selected:bg-blue-100 aria-selected:text-blue-800",
        className
      )}
      href={subpath}
    >
      {label ?? category}
    </Link>
  );
}
