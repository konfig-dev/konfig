import { useMdMediaQuery } from "@/utils/use-md-media-query";
import {
  Text,
  Col,
  Container,
  Grid,
  Title,
  rem,
  Box,
  Stack,
  ThemeIcon,
  Paper,
  Group,
} from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import {
  IconCertificate,
  IconPackageExport,
  IconShieldCheck,
  IconShieldCheckFilled,
  IconTestPipe,
} from "@tabler/icons-react";
import { useState, useEffect, useMemo } from "react";
import ReactFlow, {
  Position,
  Node,
  Edge,
  ReactFlowInstance,
  FitViewOptions,
} from "reactflow";

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
  const matches = useMdMediaQuery();
  const [nodes, setNodes] = useState(matches ? desktopNodes : mobileNodes);

  useEffect(() => {
    setNodes(matches ? desktopNodes : mobileNodes);
  }, [matches]);

  const [inst, setInst] = useState<ReactFlowInstance | null>(null);
  const { width, height } = useViewportSize();
  const [{ x, y }] = useWindowScroll();
  const fitViewOptions: FitViewOptions | undefined = useMemo(
    () => (matches ? undefined : { padding: 0.5 }),
    [matches]
  );
  useEffect(() => {
    inst?.fitView(fitViewOptions);
  }, [width, height, x, y, inst, fitViewOptions]);
  return (
    <Container my={rem(150)} size="lg">
      <Grid>
        <Col span={12} md={5}>
          <Title mb={rem(10)} order={2}>
            Ensure high quality SDKs
          </Title>
          <Stack>
            <Box c="dimmed">
              <ThemeIcon
                size={35}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: "dark", to: "gray" }}
              >
                <IconCertificate size={rem(22)} stroke={1.5} />
              </ThemeIcon>
              <Text fz="lg" mt="sm" fw={500}>
                Validation
              </Text>
              <Text c="dimmed" fz="sm">
                {"Konfig's"} proprietary linter catches errors in your OpenAPI
                Specification before they can reach your customers and cause
                confusion
              </Text>
            </Box>
            <Box c="dimmed">
              <ThemeIcon
                size={35}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: "dark", to: "gray" }}
              >
                <IconTestPipe size={rem(22)} stroke={1.5} />
              </ThemeIcon>
              <Text fz="lg" mt="sm" fw={500}>
                Testing
              </Text>
              <Text c="dimmed" fz="sm">
                Konfig writes test cases for every SDK to ensure any API update 
                {"won't"} break the SDKs your customers are using
              </Text>
            </Box>
          </Stack>
        </Col>
        <Col span={12} md={7}>
          <Paper
            radius="md"
            withBorder
            shadow="lg"
            h={{ base: rem(500), md: "100%" }}
          >
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
            ></ReactFlow>
          </Paper>
        </Col>
      </Grid>
    </Container>
  );
}
