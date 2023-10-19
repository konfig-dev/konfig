import { Title, Box } from "@mantine/core";

import "reactflow/dist/style.css";
import { useGraphicStyles } from "@/utils/use-graphic-styles";
import { TitleHighlight } from "./TitleHighlight";
import { SdkSectionFlex } from "./SdkSectionFlex";
import { useSectionStyles } from "./GetSdksWithZeroEffort/GetSdksWithZeroEffort";
import { MarkdownRenderer } from "./MarkdownRenderer";

const markdown = `# Getting Started

This is an interactive tutorial the Pet Store API.

## 1) Log user into the system

::::form

::input{name="KEY" label="API Key" placeholder="Your API Key"}
::input{name=USERNAME label="Username" placeholder="Username"}
::input{name=PASSWORD label="Password" placeholder="Password"}

\`\`\`python
from pprint import pprint
from petstore import Petstore

pestore = Petstore()

response = pestore.user.login(
    username="USERNAME",
    password="PASSWORD"
)
pprint(response.body)
\`\`\`

::button[Login]
::::`;

export function CustomFlowsDemo() {
  const { classes, cx } = useSectionStyles();

  const {
    classes: { texture },
  } = useGraphicStyles({})();

  return (
    <Box className={"my-[200px]"}>
      <Box className={classes.sectionInner}>
        <SdkSectionFlex breakpoint="lg">
          <Box className={cx(classes.textColor, classes.textSection)}>
            <div
              className={cx(
                classes.triangle,
                classes.triangle1,
                texture,
                "rounded-full"
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
                <ul className="list-disc list-inside lg:list-outside space-y-4">
                  <li>
                    Write and style text, add forms, and embed code snippets
                  </li>
                  <li>
                    Run code and make live calls to your API from the browser
                  </li>
                </ul>
              </div>
            </Box>
          </Box>
          <div className="p-4 relative text-sm bg-[#002b36] rounded-xl shadow-xl w-full lg:w-3/5">
            <MarkdownRenderer>{markdown}</MarkdownRenderer>
          </div>
        </SdkSectionFlex>
      </Box>
    </Box>
  );
}
