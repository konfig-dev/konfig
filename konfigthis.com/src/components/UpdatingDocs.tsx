import {
  Text,
  Title,
  Box,
  Stack,
  Anchor,
  createStyles,
  Flex,
} from "@mantine/core";

import "reactflow/dist/style.css";
import { useGraphicStyles } from "@/utils/use-graphic-styles";

export const useSectionStyles = createStyles((theme) => ({
  section: {
    background: theme.colors.gray[1],
    color: theme.white,
  },
  sectionInner: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    maxWidth: 1100,
    position: "relative",
    margin: "auto",
  },
  diagram: {
    maxWidth: "100%",
    backgroundColor: theme.colors.gray[1],
    width: 1500,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.lg,
    height: 300,
    [theme.fn.smallerThan("sm")]: {
      height: 500,
    },
  },
  paddingTop: {
    paddingTop: 300,
  },
  paddingBottom: {
    paddingBottom: 300,
  },
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
  content: {},
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
  bottomRight: {
    right: 0,
    bottom: -50,
  },
  link: {
    color: theme.black,
    fontWeight: 600,
    textDecoration: "none !important",
    borderBottom: `1px solid ${theme.colors.blue[8]}`,
    wordWrap: "break-word",
    ":hover": {
      borderBottomWidth: "2px",
    },
  },
}));

export function UpdatingDocs() {
  const { classes, cx } = useSectionStyles();
  const {
    classes: { texture },
  } = useGraphicStyles();

  return (
    <Box
      className={cx(classes.section, classes.paddingBottom, classes.paddingTop)}
    >
      <Box className={classes.sectionInner}>
        <Flex
          className={classes.content}
          gap="xl"
          direction={{ base: "column", sm: "row" }}
        >
          <Box className={cx("text-gray-800", classes.textSection)}>
            {/* <div
              className={cx(
                classes.graphicLayer,
                classes.topRight,
                texture,
                "w-200 h-200"
              )}
            /> */}
            <Box className={classes.textLayer}>
              <Title className="text-blue-900" order={6}>
                Documentation
              </Title>
              <Title className={classes.title}>
                API Docs & References that{" "}
                <span className="text-black font-bold border-t-0 border-l-0 border-r-0 border-b-4 border-solid border-blue-900">
                  auto-update
                </span>
              </Title>
              <div className="text-lg">
                Ensure your docs and SDKs are always in sync with a single
                source of truth. Any time you publish a change to your spec,
                Konfig{" "}
                <Anchor
                  className={classes.link}
                  target="_blank"
                  href="https://konfigthis.com/docs/tutorials/automate-sdk-updates"
                >
                  automatically updates your docs
                </Anchor>
              </div>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
