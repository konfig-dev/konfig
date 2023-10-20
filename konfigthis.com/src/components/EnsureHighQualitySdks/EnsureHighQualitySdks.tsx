import {
  Text,
  Title,
  Box,
  Stack,
  Group,
  Anchor,
  Flex,
  clsx,
} from "@mantine/core";
import {
  IconPackageExport,
  IconShieldCheck,
  IconShieldCheckFilled,
} from "@tabler/icons-react";
import ReactFlow, { Position, Node, Edge } from "reactflow";
import { useSectionStyles } from "../GetSdksWithZeroEffort/GetSdksWithZeroEffort";
import { useReactFlow } from "@/utils/use-react-flow";
import { useGraphicStyles } from "@/utils/use-graphic-styles";
import { SdkSectionFlex } from "../SdkSectionFlex";

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
        <SdkSectionFlex reverse>
          <Box className={cx(classes.textColor, classes.textSection, "sm:ml-")}>
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
              <div className={classes.textSize}>
                <ul className="list-disc list-insideist-outside space-y-2">
                  <li>
                    Before any errors reaches your customers,{" Konfig's "}
                    <Anchor
                      className={classes.link}
                      target="_blank"
                      href="https://konfigthis.com/docs/lint-rules"
                    >
                      linter
                    </Anchor>{" "}
                    identifies and rectifies them in your OpenAPI Specification.
                  </li>
                  <li>
                    Konfig writes test cases for every SDK to ensure API updates
                    {" won't"} break the SDKs your customers are using.
                  </li>
                </ul>
              </div>
            </Box>
          </Box>
          <Box className={clsx(classes.diagram, "w-[1300px]")}>
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
        </SdkSectionFlex>
      </Box>
    </Box>
  );
}
