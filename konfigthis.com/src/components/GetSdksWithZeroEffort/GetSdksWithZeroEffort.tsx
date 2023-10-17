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

import Image from "@/components/image";
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

const desktopNodes: Node[] = [
  {
    id: "oas",
    position: { x: 0, y: -50 },
    data: {
      label: (
        <>
          <Image src={oas} width={40} height={40} alt="OpenAPI Specification" />
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
          <Image src={postman} width={35} height={35} alt="Postman" />
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
          <Image src={favicon} width={40} height={40} alt="Konfig" />
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
        <>
          <Image src={oas} width={40} height={40} alt="OpenAPI Specification" />
          <Text c="dimmed">OpenAPI Specification</Text>
        </>
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
        <>
          <Image src={postman} width={35} height={35} alt="Postman" />
          <Text c="dimmed">Postman</Text>
        </>
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
        <>
          <Image src={favicon} width={40} height={40} alt="Konfig" />
          <Text c="dimmed">Konfig</Text>
        </>
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
  section: {
    background: theme.colors.dark[6],
    color: theme.white,
  },
  sectionInner: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    maxWidth: 1100,
    margin: "auto",
  },
  diagram: {
    maxWidth: "100%",
    backgroundColor: theme.colors.gray[1],
    width: 1500,
    borderRadius: theme.radius.lg,
    height: 300,
    [theme.fn.smallerThan("sm")]: {
      height: 500,
    },
  },
  paddingTop: {
    paddingTop: 400,
  },
  paddingBottom: {
    paddingBottom: 400,
  },
  title: {
    fontSize: 35,
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
    marginBottom: 70,
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

  return (
    <Box
      className={cx(classes.section, classes.paddingBottom, classes.paddingTop)}
    >
      <Box className={classes.sectionInner}>
        <Flex gap="xl" direction={{ base: "column", sm: "row" }}>
          <Box className={cx(classes.textColor, classes.textSection)}>
            <Title className={classes.title}>
              Get SDKs with <span className={classes.titleHighlight}>zero</span>{" "}
              effort
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
                most popular languages with no further work from you
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
              </Text>
            </Stack>
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
