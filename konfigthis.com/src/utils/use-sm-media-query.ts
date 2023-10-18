import { useMediaQuery } from "@mantine/hooks";

export function useSmMediaQuery() {
  // the default "md" breakpoint is 48em
  // https://mantine.dev/styles/responsive/#configure-breakpoints
  return useMediaQuery("(min-width: 48em)");
}
