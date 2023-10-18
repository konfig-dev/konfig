import {
  Box,
  Flex,
  Group,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
  createStyles,
  useMantineTheme,
} from "@mantine/core";
import { useSectionStyles } from "./GetSdksWithZeroEffort/GetSdksWithZeroEffort";
import { IconArrowRight, IconPhoto } from "@tabler/icons-react";
import { useGraphicStyles } from "@/utils/use-graphic-styles";

export const useFeatureStyles = createStyles((theme) => ({
  section: {},
  sectionInner: { position: "relative" },
  content: { position: "relative", zIndex: 2 },
  feature: {
    borderRadius: theme.radius.lg,
    height: 300,
    width: 300,
    color: "white",
    padding: theme.spacing.xl,
    border: "1px solid",
    borderColor: "black",
  },
  title: {
    ":after": {
      content: '""',
      display: "block",
      backgroundColor: "blue",
      width: 20,
      height: 5,
      marginTop: "sm",
    },
  },
  graphic: {
    position: "absolute",
    zIndex: 1,
    left: 250,
    top: -50,
    width: 300,
    height: 150,
  },
}));

export function SdkFeatures() {
  const { classes, cx } = useSectionStyles();
  const { classes: feature } = useFeatureStyles();
  const {
    classes: { texture },
  } = useGraphicStyles();
  return (
    <Box
      className={cx(classes.section, classes.paddingBottom, feature.section)}
    >
      <Box className={cx(classes.sectionInner, feature.sectionInner)}>
        <div className={cx(feature.graphic, texture)} />
        <Box className={feature.content}>
          <Box ta="left" mb={100}>
            <Title c="hsl(214 36% 58% / 1)" order={6}>
              SDK Features
            </Title>
            <Title className={classes.title}>
              <span className={classes.titleHighlight}>Beautifully </span>
              crafted SDKs
            </Title>
          </Box>
          <Flex justify="space-between" gap="xl">
            <Feature />
            <Feature />
            <Feature />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

function Feature() {
  const theme = useMantineTheme();
  const {
    classes: { feature },
  } = useFeatureStyles();
  return (
    <UnstyledButton className={feature}>
      <ThemeIcon mb="xl" radius="xl" size="xl" color="hsl(225 36% 40% / 1)">
        <IconPhoto />
      </ThemeIcon>
      <Title mb="sm" order={3}>
        Useful Documentation
      </Title>
      <Text c={theme.colors.gray[5]} fw={400} mb="xl">
        It feels like a human hand-wrote all the documentation
      </Text>
      <Group>
        <Text>See Example</Text>
        <IconArrowRight size="0.80rem" />
      </Group>
    </UnstyledButton>
  );
}
