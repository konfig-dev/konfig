import { Title, Box, createStyles } from "@mantine/core";

import { useGraphicStyles } from "@/utils/use-graphic-styles";
import { ReactElement } from "react";

export const useSectionStyles = createStyles((theme) => ({
  titleHighlight: {
    fontWeight: "bolder",
    color: theme.black,
    borderBottom: "4px solid hsl(214 36% 58% / 1)",
  },
  textSection: {
    position: "relative",
    marginBottom: 70,
  },
  textLayer: {
    position: "relative",
    zIndex: 2,
  },
  graphicLayer: {
    position: "absolute",
    zIndex: 1,
    width: 200,
    height: 200,
  },
  topRight: {
    right: 0,
    top: -50,
  },
}));

export function ProductSection({
  parent,
  Section,
  Description,
  Visual,
  noTopPadding,
}: {
  parent: string;
  Section: () => ReactElement;
  Description: () => ReactElement;
  Visual: () => ReactElement;
  noTopPadding?: boolean;
}) {
  const { classes, cx } = useSectionStyles();
  const {
    classes: { texture },
  } = useGraphicStyles({})();

  return (
    <Box className={"my-[200px]"}>
      <Box className="max-w-[1100px] relative m-auto">
        <div className={"flex flex-col lg:flex-row gap-0 lg:gap-12"}>
          <Box className={cx("text-gray-800", classes.textSection)}>
            <div
              className={cx(
                classes.graphicLayer,
                texture,
                "right-0 top-[-50px] w-200 h-200"
              )}
            />
            <Box className={classes.textLayer}>
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
