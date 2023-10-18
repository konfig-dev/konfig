import { Title, Box, createStyles, Flex } from "@mantine/core";

import "reactflow/dist/style.css";
import { useGraphicStyles } from "@/utils/use-graphic-styles";
import docs from "../../public/docs.png";
import Image from "./Image";

export const useSectionStyles = createStyles((theme) => ({
  title: {
    fontSize: 35,
    fontWeight: "normal",
    marginBottom: 50,
    order: 1,
  },
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

export function UpdatingDocs() {
  const { classes, cx } = useSectionStyles();
  const {
    classes: { texture },
  } = useGraphicStyles({ bg: "#f3f4f6" })();

  return (
    <Box className={cx("bg-gray-100 pb-[300px] pt-[300px]")}>
      <Box className="px-4 max-w-[1100px] relative m-auto">
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
                Documentation
              </Title>
              <Title className={classes.title}>
                API Docs & References that{" "}
                <span className="text-black font-bold border-b-4 border-solid border-blue-900">
                  auto-update
                </span>
              </Title>
              <div className="text-lg">
                Ensure your docs and SDKs are always in sync with a single
                source of truth. Any time you publish a change to your spec,
                Konfig{" "}
                <a
                  className="text-black font-semibold border-b border-yellow-600 break-words hover:border-b-2"
                  target="_blank"
                  href="https://konfigthis.com/docs/tutorials/automate-sdk-updates"
                >
                  automatically updates your docs
                </a>
                .
              </div>
            </Box>
          </Box>
          <Image
            className="w-full lg:w-3/5 shadow-lg rounded-xl"
            alt="API Documentation"
            src={docs}
          />
        </div>
      </Box>
    </Box>
  );
}
