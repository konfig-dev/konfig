import { Title, Box, Mark, clsx } from "@mantine/core";

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
        <div className="flex flex-col md:flex-row relative gap-0 md:gap-12">
          <Box
            className={cx(classes.textColor, classes.textSection, "basis-4/5")}
          >
            <div
              className={cx(
                classes.triangle,
                classes.triangle1,
                texture,
                "rounded-full"
              )}
            />
            <Box className={clsx(classes.textLayer, "w-11/12 md:w-full")}>
              <Title c="hsl(214 36% 58% / 1)" order={6}>
                Demos & Tutorials
              </Title>
              <Title className={classes.title}>
                <TitleHighlight>Interactive Demos & Tutorials</TitleHighlight>{" "}
                with Markdown
              </Title>
              <div className={classes.textSize}>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Simple Creation: Write, style, and embed code with{" "}
                    <a
                      target="_blank"
                      className="border-b text-white border-yellow-300 hover:border-b-2"
                      href="https://github.com/passiv/snaptrade-sdks/blob/master/demos/registering-users.md"
                    >
                      familiar Markdown
                    </a>
                    .
                  </li>
                  <li>
                    Immediate Engagement: Allow users to run code in-browser,
                    enhancing hands-on learning.
                  </li>
                  <li>
                    Quick Onboarding: Speed up user adoption with interactive
                    demos that teach as they engage.
                  </li>
                </ul>
              </div>
            </Box>
          </Box>
          <div className="p-2 md:p-6 w-full flex items-center relative text-sm bg-[#002b36] rounded-xl shadow-xl">
            <video
              className="rounded-xl w-full bg-video-bg shadow-xl"
              playsInline
              autoPlay
              muted
              loop
              src="/video/demo-quick.webm"
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}
