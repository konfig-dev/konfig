import { Command as CommandPrimitive } from "cmdk";
import { commandScore } from "./command-score";
export type CommandProps = React.ComponentPropsWithoutRef<
  typeof CommandPrimitive
>;
export const defaultFilter: CommandProps["filter"] = (
  value,
  search,
  keywords
) => commandScore(value, search, keywords);
