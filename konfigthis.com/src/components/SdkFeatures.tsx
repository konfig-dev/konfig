import {
  Anchor,
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
import {
  IconArrowRight,
  IconBook,
  IconCode,
  IconMouse,
  TablerIconsProps,
} from "@tabler/icons-react";
import { useGraphicStyles } from "@/utils/use-graphic-styles";

export const useFeatureStyles = createStyles((theme) => ({
  section: {},
  sectionInner: { position: "relative" },
  content: { position: "relative", zIndex: 2 },
  feature: {
    borderRadius: theme.radius.lg,
    color: "white",
    padding: theme.spacing.xl,
    border: "1px solid",
    borderColor: theme.colors.dark[8],

    // ease out transition
    transition: "all 200ms ease-in-out",
    ":hover": {
      borderColor: theme.colors.dark[6],

      // scale by 3%
      transform: "scale(1.01)",
    },
  },
  title: {
    borderBottom: `1.5px solid hsl(225 36% 60% / 1)`,
  },
  graphic: {
    position: "absolute",
    zIndex: 1,
    left: 250,
    top: -50,
    width: 200,
    height: 200,
  },
}));

export function SdkFeatures() {
  const { classes, cx } = useSectionStyles();
  const { classes: feature } = useFeatureStyles();
  const {
    classes: { texture },
  } = useGraphicStyles({})();
  return (
    <Box className={cx(classes.paddingBottom, feature.section)}>
      <Box className={cx(classes.sectionInner, feature.sectionInner)}>
        <div
          className={cx(feature.graphic, texture, classes.triangleBottomLeft)}
        />
        <Box className={cx(feature.content, classes.textColor)}>
          <Box ta="left" mb={150}>
            <Title c="hsl(214 36% 58% / 1)" order={6}>
              SDK Features
            </Title>
            <Title className={classes.title}>
              <span className={classes.titleHighlight}>Beautifully</span>{" "}
              crafted SDKs
            </Title>
          </Box>
          <Flex
            className={"items-center flex-col md:flex-row"}
            justify="space-between"
            gap="xl"
          >
            <Feature
              gradientAngle={50}
              title="Documentation"
              description="All your SDKs come with branded and well-written READMEs that makes it easy for developers to get started."
              Icon={IconBook}
              link={{
                label: "See example README",
                href: "https://github.com/humanloop/humanloop-node#readme",
              }}
            />
            <Feature
              gradientAngle={230}
              title="Ergonomic"
              description="We make sure your SDKs are easy to use and follow the best practices of the language they are written in."
              Icon={IconMouse}
              link={{
                label: "See example code snippet",
                href: "https://github.com/passiv/snaptrade-sdks/tree/master/sdks/typescript#getting-started",
              }}
            />
            <Feature
              gradientAngle={160}
              title="Customization"
              description="We made it easy to add custom code to your SDKs so you can add features like streaming, request signing, or polling."
              Icon={IconCode}
              link={{
                label: "Read the documentation",
                href: "https://konfigthis.com/docs/custom-sdks",
              }}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

function Feature({
  title,
  description,
  link,
  Icon,
  gradientAngle,
}: {
  title: string;
  description: string;
  link: { label: string; href: string };
  Icon: (props: TablerIconsProps) => JSX.Element;
  gradientAngle: number;
}) {
  const theme = useMantineTheme();
  const {
    classes: { feature, title: titleClass },
    cx,
  } = useFeatureStyles();
  return (
    <UnstyledButton
      sx={{
        ":hover": {
          background: theme.fn.linearGradient(
            gradientAngle,
            theme.fn.darken("#1b354e", 0.4),
            theme.fn.darken("#1b354e", 0.6)
          ),
        },
      }}
      target="_blank"
      href={link.href}
      component="a"
      className={cx(feature, "group")}
    >
      <ThemeIcon size="xl" mb="xl" radius="xl" color="hsl(225 36% 40% / 1)">
        <Icon />
      </ThemeIcon>
      <Title mb="sm" order={3}>
        <span className={cx(titleClass, "pb-1")}>{title}</span>
      </Title>
      <Text c={theme.colors.gray[5]} fw={400} mb="xl">
        {description}
      </Text>
      <Group>
        <Text>{link.label}</Text>
        <IconArrowRight
          className="transition-all group-hover:ml-1"
          size="0.80rem"
        />
      </Group>
    </UnstyledButton>
  );
}
