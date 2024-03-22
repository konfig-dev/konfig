import * as React from "react";
import { cn } from "@site/src/util/util";
import { Button } from "@site/src/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@site/src/components/ui/command";
import { DialogProps } from "@radix-ui/react-dialog";
import companies from "@site/src/pages/sdk/companies.json";

type Company = (typeof companies)[number];

export function CommandMenu({ ...props }: DialogProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const groupedByParentCategories = React.useMemo(() => {
    return companies.reduce((acc, company) => {
      if (company.parentCategories) {
        company.parentCategories.forEach((parentCategory) => {
          if (!acc[parentCategory]) {
            acc[parentCategory] = [];
          }
          acc[parentCategory].push(company);
        });
      }
      return acc;
    }, {} as Record<string, Company[]>);
  }, [companies]);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start rounded-[0.5rem] bg-background text-muted-foreground shadow-none sm:pr-12 lg:w-[640px]"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">
          Search APIs by name, use case, and more...
        </span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedByParentCategories).map(
            ([parentCategory, companies], index) => {
              return (
                <React.Fragment key={index}>
                  <CommandGroup heading={parentCategory}>
                    {companies.map((company) => {
                      return <CompanyItem key={company.company} {...company} />;
                    })}
                  </CommandGroup>
                  {index <
                    Object.keys(groupedByParentCategories).length - 1 && (
                    <CommandSeparator />
                  )}
                </React.Fragment>
              );
            }
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}

function CompanyItem({
  company,
  favicon,
  parentCategories,
  subCategories,
  keywords,
}: Company) {
  const allKeywords = [
    company,
    ...parentCategories,
    ...subCategories,
    ...keywords,
  ];
  console.log(company, allKeywords);
  return (
    <CommandItem
      onSelect={(value) => console.log(value)}
      keywords={allKeywords}
    >
      <img className="h-4 w-4 mr-2" src={favicon} alt={company} />
      {company}
    </CommandItem>
  );
}
