import { useMdMediaQuery } from "@/utils/use-md-media-query";
import {
  Text,
  Button,
  Col,
  Container,
  Grid,
  Title,
  Group,
  Box,
  ThemeIcon,
  rem,
  Stack,
  Paper,
  Anchor,
  useMantineTheme,
  createStyles,
  Flex,
} from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { IconCode, IconRefresh } from "@tabler/icons-react";

import Image from "@/components/Image";
import { useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Edge,
  FitViewOptions,
  Node,
  Position,
  ReactFlowInstance,
} from "reactflow";
import oas from "../../../public/oas.png";
import postman from "../../../public/postman.webp";
import typescript from "../../../public/typescript.png";
import python from "../../../public/python.png";
import go from "../../../public/go.png";
import java from "../../../public/java.png";
import csharp from "../../../public/csharp.png";
import ruby from "../../../public/ruby.png";
import swift from "../../../public/swift.png";
import php from "../../../public/php.png";
import favicon from "../../../public/favicon.png";
import "reactflow/dist/style.css";
import { useReactFlow } from "@/utils/use-react-flow";
import { useGraphicStyles } from "@/utils/use-graphic-styles";

const desktopNodes: Node[] = [
  {
    id: "oas",
    position: { x: 0, y: -50 },
    data: {
      label: (
        <>
          <Image
            className="m-auto"
            src={oas}
            width={40}
            height={40}
            alt="OpenAPI Specification"
          />
          <Text c="dimmed">OpenAPI Specification</Text>
        </>
      ),
    },
    sourcePosition: Position.Right,
    type: "input",
  },
  {
    id: "postman",
    position: { x: 0, y: 50 },
    data: {
      label: (
        <>
          <Image
            className="m-auto"
            src={postman}
            width={35}
            height={35}
            alt="Postman"
          />
          <Text c="dimmed">Postman</Text>
        </>
      ),
    },
    sourcePosition: Position.Right,
    type: "input",
  },
  {
    id: "konfig",
    position: { x: 190, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    data: {
      label: (
        <>
          <Image
            className="m-auto"
            src={favicon}
            width={40}
            height={40}
            alt="Konfig"
          />
          <Text c="dimmed">Konfig</Text>
        </>
      ),
    },
  },
  {
    id: "sdks",
    position: { x: 375, y: -8.5 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    type: "output",
    data: {
      label: (
        <>
          <Group position="center" spacing="xs">
            <Image src={typescript} width={20} height={20} alt="TypeScript" />
            <Image src={python} width={18} height={20} alt="Python" />
            <Image src={go} width={25} height={25} alt="Go" />
            <Image src={java} width={11} height={20} alt="Java" />
            <Image src={csharp} width={18} height={20} alt="C#" />
            <Image src={ruby} width={17} height={17} alt="Ruby" />
            <Image src={swift} width={17} height={17} alt="Swift" />
            <Image src={php} width={34} height={18} alt="PHP" />
          </Group>
          <Text mt={rem(2)} c="dimmed">
            SDKs
          </Text>
        </>
      ),
    },
  },
];

const mobileNodes: Node[] = [
  {
    id: "oas",
    position: { x: -100, y: 0 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <Image src={oas} width={40} height={40} alt="OpenAPI Specification" />
          <Text c="dimmed">OpenAPI Specification</Text>
        </div>
      ),
    },
    sourcePosition: Position.Bottom,
    type: "input",
  },
  {
    id: "postman",
    position: { x: 100, y: 0 },
    data: {
      label: (
        <div className="flex flex-col items-center">
          <Image src={postman} width={35} height={35} alt="Postman" />
          <Text c="dimmed">Postman</Text>
        </div>
      ),
    },
    sourcePosition: Position.Bottom,
    type: "input",
  },
  {
    id: "konfig",
    position: { x: 0, y: 150 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    data: {
      label: (
        <div className="flex flex-col items-center">
          <Image src={favicon} width={40} height={40} alt="Konfig" />
          <Text c="dimmed">Konfig</Text>
        </div>
      ),
    },
  },
  {
    id: "sdks",
    position: { x: 0, y: 300 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    type: "output",
    data: {
      label: (
        <>
          <Group position="center" spacing="xs">
            <Image src={typescript} width={20} height={20} alt="TypeScript" />
            <Image src={python} width={18} height={20} alt="Python" />
            <Image src={go} width={25} height={25} alt="Go" />
            <Image src={java} width={11} height={20} alt="Java" />
            <Image src={csharp} width={18} height={20} alt="C#" />
            <Image src={ruby} width={17} height={17} alt="Ruby" />
            <Image src={swift} width={17} height={17} alt="Swift" />
            <Image src={php} width={34} height={18} alt="PHP" />
          </Group>
          <Text mt={rem(2)} c="dimmed">
            SDKs
          </Text>
        </>
      ),
    },
  },
];
const edges: Edge[] = [
  { id: "oas-konfig", source: "oas", target: "konfig", animated: true },
  { id: "postman-konfig", source: "postman", target: "konfig", animated: true },
  { id: "konfig-sdks", source: "konfig", target: "sdks", animated: true },
];

export const useSectionStyles = createStyles((theme) => ({
  sectionInner: {
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
    fontSize: 36,
    fontWeight: "normal",
    marginBottom: 50,
    order: 1,
  },
  titleHighlight: {
    fontWeight: "bolder",
    color: "white",
    borderBottom: "4px solid hsl(214 36% 58% / 1)",
  },
  textColor: {
    color: theme.colors.gray[3],
  },
  textSize: {
    fontSize: theme.fontSizes.lg,
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
  triangle: {
    position: "absolute",
    zIndex: 1,
    width: 200,
    height: 200,
  },
  triangle1: {
    right: 0,
    top: -50,
  },
  triangle2: {
    right: 0,
    bottom: -50,
  },
  triangleTopRight: {
    clipPath: "polygon(100% 0%, 0% 0%, 100% 100%)",
  },
  triangleBottomRight: {
    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
  },
  triangleBottomLeft: {
    clipPath: "polygon(0% 100%, 0% 0%, 100% 100%)",
  },
  link: {
    color: theme.white,
    fontWeight: 600,
    textDecoration: "none !important",
    borderBottom: `1px solid ${theme.colors.yellow[6]}`,
    wordWrap: "break-word",
    ":hover": {
      borderBottomWidth: "2px",
    },
  },
}));

export function GetSdksWithZeroEffort() {
  const { classes, cx } = useSectionStyles();

  const { setInst, fitViewOptions, nodes } = useReactFlow({
    padding: 0.2,
    desktopNodes,
    mobileNodes,
  });
  const {
    classes: { texture },
  } = useGraphicStyles({})();

  return (
    <Box className={cx(classes.paddingBottom, classes.paddingTop)}>
      <Box className={classes.sectionInner}>
        <Flex
          className={classes.content}
          gap="xl"
          direction={{ base: "column", sm: "row" }}
        >
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
                SDKs
              </Title>
              <Title className={classes.title}>
                Get SDKs with{" "}
                <span className={classes.titleHighlight}>zero</span> effort
              </Title>
              <Stack className={classes.textSize} spacing="xs">
                {/* <Group my="xl">
                  <Image
                    src={oas}
                    width={40}
                    height={40}
                    alt="OpenAPI Specification"
                  />
                  <Image src={postman} width={35} height={35} alt="Postman" />
                </Group> */}
                <Text>
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
                </Text>
                <Text>
                  Any time you publish a change to your spec, Konfig{" "}
                  <Anchor
                    className={classes.link}
                    target="_blank"
                    href="https://konfigthis.com/docs/tutorials/automate-sdk-updates"
                  >
                    automatically update and republish all of your SDKs
                  </Anchor>
                  .
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box className={classes.diagram}>
            <ReactFlow
              fitView
              fitViewOptions={fitViewOptions}
              onInit={setInst}
              preventScrolling={false}
              elementsSelectable={false}
              zoomOnScroll={false}
              zoomOnDoubleClick={false}
              nodesConnectable={false}
              draggable={false}
              nodesDraggable={false}
              panOnDrag={false}
              zoomOnPinch={false}
              proOptions={{ hideAttribution: true }}
              nodes={nodes}
              edges={edges}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
