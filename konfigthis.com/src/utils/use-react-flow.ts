/* eslint-disable react-hooks/exhaustive-deps */
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { useState, useEffect, useMemo } from "react";
import { ReactFlowInstance, FitViewOptions, Node } from "reactflow";
import { useMdMediaQuery } from "./use-md-media-query";

export function useReactFlow({
  padding,
  desktopNodes,
  mobileNodes,
}: {
  padding: number;
  desktopNodes: Node[];
  mobileNodes: Node[];
}) {
  const matches = useMdMediaQuery();
  const [nodes, setNodes] = useState(matches ? desktopNodes : mobileNodes);

  useEffect(() => {
    setNodes(matches ? desktopNodes : mobileNodes);
  }, [matches]);

  const [inst, setInst] = useState<ReactFlowInstance | null>(null);
  const { width, height } = useViewportSize();
  const [{ x, y }] = useWindowScroll();
  const fitViewOptions: FitViewOptions | undefined = useMemo(
    () => (matches ? undefined : { padding }),
    [matches]
  );
  useEffect(() => {
    inst?.fitView(fitViewOptions);
  }, [width, height, x, y, inst, fitViewOptions]);
  return { setInst, nodes, fitViewOptions };
}
