import { Text, Title, Box, Stack, Group, Anchor, Flex } from "@mantine/core";
import {
  IconPackageExport,
  IconShieldCheck,
  IconShieldCheckFilled,
} from "@tabler/icons-react";
import ReactFlow, { Position, Node, Edge } from "reactflow";
import { useSectionStyles } from "../GetSdksWithZeroEffort/GetSdksWithZeroEffort";
import { useReactFlow } from "@/utils/use-react-flow";
import { useGraphicStyles } from "@/utils/use-graphic-styles";

const desktopNodes: Node[] = [
  {
    id: "validation",
    position: { x: 0, y: 0 },
    type: "input",
    data: {
      label: (
        <Group position="center">
          <Title order={6}>Validate</Title>
          <IconShieldCheck />
        </Group>
      ),
    },
    sourcePosition: Position.Right,
  },
  {
    id: "testing",
    position: { x: 200, y: 0 },
    data: {
      label: (
        <Group position="center">
          <Title order={6}>Test</Title>
          <IconShieldCheckFilled />
        </Group>
      ),
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: "publish",
    position: { x: 400, y: 0 },
    type: "output",
    data: {
      label: (
        <Group position="center">
          <Title order={6}>Publish</Title>
          <IconPackageExport />
        </Group>
      ),
    },
    targetPosition: Position.Left,
  },
];
const mobileNodes: Node[] = [
  {
    id: "validation",
    position: { x: 0, y: 0 },
    type: "input",
    data: {
      label: (
        <Group position="center">
          <Title order={6}>Validate</Title>
          <IconShieldCheck />
        </Group>
      ),
    },
    sourcePosition: Position.Bottom,
  },
  {
    id: "testing",
    position: { x: 0, y: 100 },
    data: {
      label: (
        <Group position="center">
          <Title order={6}>Test</Title>
          <IconShieldCheckFilled />
        </Group>
      ),
    },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  },
  {
    id: "publish",
    position: { x: 0, y: 200 },
    type: "output",
    data: {
      label: (
        <Group position="center">
          <Title order={6}>Publish</Title>
          <IconPackageExport />
        </Group>
      ),
    },
    targetPosition: Position.Top,
  },
];
const edges: Edge[] = [
  {
    id: "validation-testing",
    source: "validation",
    target: "testing",
    animated: true,
  },
  {
    id: "testing-publish",
    source: "testing",
    target: "publish",
    animated: true,
  },
];

export function EnsureHighQualitySdks() {
  const { classes, cx } = useSectionStyles();

  const { nodes, setInst, fitViewOptions } = useReactFlow({
    padding: 0.5,
    desktopNodes,
    mobileNodes,
  });

  const {
    classes: { texture },
  } = useGraphicStyles({})();

  return (
    <Box>
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
                classes.triangle2,
                classes.triangleBottomRight,
                texture
              )}
            />
            <Box className={classes.textLayer}>
              <Title c="hsl(214 36% 58% / 1)" order={6}>
                SDKs
              </Title>
              <Title className={classes.title}>
                Ensure{" "}
                <span className={classes.titleHighlight}>high quality</span>{" "}
                SDKs
              </Title>
              <Stack className={classes.textSize} spacing="xs">
                <Text>
                  {"Konfig's"}{" "}
                  <Anchor
                    className={classes.link}
                    target="_blank"
                    href="https://konfigthis.com/docs/lint-rules"
                  >
                    linter
                  </Anchor>{" "}
                  catches errors in your OpenAPI Specification before they can
                  reach your customers and cause confusion.
                </Text>
                <Text>
                  Konfig writes test cases for every SDK to ensure API updates
                  {" won't"} break the SDKs your customers are using.
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box className={classes.diagram}>
            <ReactFlow
              onInit={setInst}
              fitView
              fitViewOptions={fitViewOptions}
              preventScrolling={false}
              elementsSelectable={false}
              zoomOnDoubleClick={false}
              zoomOnScroll={false}
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
