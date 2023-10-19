import { Title, Box, clsx } from "@mantine/core";
import { useGraphicStyles } from "@/utils/use-graphic-styles";
import { ReactElement } from "react";

export function ProductSection({
  parent,
  Section,
  Description,
  Visual,
  graphicBottom,
  reverse,
}: {
  parent: string;
  Section: () => ReactElement;
  Description: () => ReactElement;
  Visual: () => ReactElement;
  graphicBottom?: boolean;
  reverse?: boolean;
}) {
  const {
    classes: { texture },
  } = useGraphicStyles({})();

  return (
    <Box className={"my-[200px]"}>
      <Box className="max-w-[1100px] relative m-auto">
        <div
          className={clsx("flex relative flex-col gap-0 lg:gap-20", {
            ["lg:flex-row"]: !reverse,
            ["lg:flex-row-reverse"]: reverse,
          })}
        >
          <Box className={"text-gray-800 mb-16 relative"}>
            <div
              className={clsx(
                texture,
                "right-0 w-[200px] h-[200px] r-0 z-10 absolute",
                {
                  ["top-[-50px]"]: !graphicBottom,
                  ["bottom-[-25px] lg:bottom-[25px]"]: graphicBottom,
                }
              )}
            />
            <Box className="relative z-20">
              <Title className="text-blue-900" order={6}>
                {parent}
              </Title>
              <Title className="text-4xl order-1 mb-12 font-normal">
                <Section />
              </Title>
              <div className="text-lg">
                <Description />
              </div>
            </Box>
          </Box>
          <Visual />
        </div>
      </Box>
    </Box>
  );
}
