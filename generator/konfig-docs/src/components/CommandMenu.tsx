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
import { defaultFilter } from "../util/default-filter";
import { useRef } from "react";

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

  // https://github.com/pacocoursey/cmdk/issues/233#issuecomment-1991365294
  const listRef = useRef<HTMLDivElement>(null);
  const scrollId = useRef<ReturnType<typeof setTimeout>>();

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
      <CommandDialog
        commandProps={{
          filter: (value, search, keywords) => {
            let score = defaultFilter(value, search, keywords) * 0.5;

            // if lowercased value equals search or keywords include substring match of search then add 0.5
            if (
              value.toLowerCase() === search.toLowerCase() ||
              keywords.some((keyword) =>
                keyword.toLowerCase().includes(search.toLowerCase())
              )
            ) {
              score += 0.5;
            }

            return score;
          },
        }}
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput
          onValueChange={() => {
            // https://github.com/pacocoursey/cmdk/issues/233#issuecomment-1991365294

            // clear pending scroll
            clearTimeout(scrollId.current);

            // the setTimeout is used to create a new task
            // this is to make sure that we don't scroll until the user is done typing
            // you can tweak the timeout duration ofc
            scrollId.current = setTimeout(() => {
              // inside your list select the first group and scroll to the top
              const div = listRef.current;
              div?.scrollTo({ top: 0 });
            }, 0);
          }}
          placeholder="Type to search APIs by name, use case, and more..."
        />
        <CommandList ref={listRef}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {companies.map((company) => {
              return <CompanyItem key={company.company} {...company} />;
            })}
          </CommandGroup>
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
    ...keywords,
    ...parentCategories,
    ...subCategories,
  ];
  return (
    <CommandItem
      keywords={allKeywords}
      className="justify-between"
      onSelect={(value) => console.log(value)}
    >
      <div className="flex flex-row">
        <img className="h-4 w-4 mr-2" src={favicon} alt={company} />
        {company}
      </div>
      <div className="overflow-x-scroll text-xs text-muted-foreground">
        {parentCategories.join(", ")}
      </div>
    </CommandItem>
  );
}
