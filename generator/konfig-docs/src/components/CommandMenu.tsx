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

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start rounded-[0.5rem] bg-background text-muted-foreground shadow-none sm:pr-12 lg:w-[480px]"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search all Companies...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandItem>API 1</CommandItem>
          <CommandItem>API 2</CommandItem>
          <CommandItem>API 3</CommandItem>
          <CommandItem>API 4</CommandItem>
          <CommandItem>API 5</CommandItem>
          <CommandItem>API 6</CommandItem>
          <CommandItem>API 7</CommandItem>
          <CommandItem>API 8</CommandItem>
          <CommandItem>API 9</CommandItem>
          <CommandItem>API 10</CommandItem>
          <CommandItem>API 11</CommandItem>
          <CommandItem>API 12</CommandItem>
          <CommandItem>API 13</CommandItem>
          <CommandItem>API 14</CommandItem>
          <CommandItem>API 15</CommandItem>
          <CommandItem>API 16</CommandItem>
          <CommandItem>API 17</CommandItem>
          <CommandItem>API 18</CommandItem>
          <CommandItem>API 19</CommandItem>
          <CommandItem>API 20</CommandItem>
          <CommandItem>API 21</CommandItem>
          <CommandItem>API 22</CommandItem>
          <CommandItem>API 23</CommandItem>
          <CommandItem>API 24</CommandItem>
          <CommandItem>API 25</CommandItem>
          <CommandItem>API 26</CommandItem>
          <CommandItem>API 27</CommandItem>
          <CommandItem>API 28</CommandItem>
          <CommandItem>API 29</CommandItem>
          <CommandItem>API 30</CommandItem>
          <CommandItem>API 31</CommandItem>
          <CommandItem>API 32</CommandItem>
          <CommandItem>API 33</CommandItem>
          <CommandItem>API 34</CommandItem>
          <CommandItem>API 35</CommandItem>
          <CommandItem>API 36</CommandItem>
          <CommandItem>API 37</CommandItem>
          <CommandItem>API 38</CommandItem>
          <CommandItem>API 39</CommandItem>
          <CommandItem>API 40</CommandItem>
          <CommandItem>API 41</CommandItem>
          <CommandItem>API 42</CommandItem>
        </CommandList>
      </CommandDialog>
    </>
  );
}
