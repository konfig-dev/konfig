import { Title, Box, Anchor, clsx } from "@mantine/core";

import "reactflow/dist/style.css";
import { useGraphicStyles } from "@/utils/use-graphic-styles";
import { TitleHighlight } from "./TitleHighlight";
import { SdkSectionFlex } from "./SdkSectionFlex";
import { useSectionStyles } from "./GetSdksWithZeroEffort/GetSdksWithZeroEffort";

export function CustomFlowsDemo() {
  const { classes, cx } = useSectionStyles();

  const {
    classes: { texture },
  } = useGraphicStyles({})();

  return (
    <Box className={"my-[200px]"}>
      <Box className={classes.sectionInner}>
        <SdkSectionFlex>
          <Box className={cx(classes.textColor, classes.textSection)}>
            <div
              className={cx(
                classes.triangle,
                classes.triangle1,
                classes.triangleTopRight,
                texture
              )}
            />
            <Box className={classes.textLayer}>
              <Title c="hsl(214 36% 58% / 1)" order={6}>
                Demos
              </Title>
              <Title className={classes.title}>
                Build <TitleHighlight>Interactive Demos</TitleHighlight> using
                Markdown
              </Title>
              <div className={classes.textSize}>
                <ul className="list-decimal list-inside sm:list-outside space-y-4">
                  <li>
                    Easily import an{" "}
                    <Anchor
                      className={classes.link}
                      target="_blank"
                      href="https://konfigthis.com/docs/getting-started/openapi-specification"
                    >
                      OpenAPI Specification
                    </Anchor>{" "}
                    or{" "}
                    <Anchor
                      className={classes.link}
                      target="_blank"
                      href="https://konfigthis.com/docs/getting-started/postman-collections"
                    >
                      Postman Collection
                    </Anchor>{" "}
                    and Konfig automatically generates and publishes SDKs in the
                    most popular languages with no further work from you.
                  </li>
                  <li>
                    Whenever you update your spec, Konfig{" "}
                    <Anchor
                      className={classes.link}
                      target="_blank"
                      href="https://konfigthis.com/docs/tutorials/automate-sdk-updates"
                    >
                      instantly republishes all your SDKs
                    </Anchor>
                    —keeping them current.
                  </li>
                </ul>
              </div>
            </Box>
          </Box>
          <Box className={clsx(classes.diagram, "w-[1500px]")}>hello</Box>
        </SdkSectionFlex>
      </Box>
    </Box>
  );
}
