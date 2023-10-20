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
import {
  IconArrowRight,
  IconBook,
  IconCode,
  IconMouse,
  TablerIconsProps,
} from "@tabler/icons-react";
import { useGraphicStyles } from "@/utils/use-graphic-styles";

export const useFeatureStyles = createStyles((theme) => ({
  sectionInner: { position: "relative" },
  content: { position: "relative", zIndex: 2 },
  feature: {
    borderRadius: theme.radius.lg,
    color: "white",
    padding: theme.spacing.xl,
    ":hover": {
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
    <Box className={"my-[200px]"}>
      <Box className={cx(classes.sectionInner, feature.sectionInner)}>
        <div
          className={cx(feature.graphic, texture, classes.triangleBottomLeft)}
        />
        <Box className={cx(feature.content, classes.textColor)}>
          <Box ta="left" mb={75}>
            <Title c="hsl(214 36% 58% / 1)" order={6}>
              SDK Features
            </Title>
            <Title className={classes.title}>
              <span className={classes.titleHighlight}>Beautifully</span>{" "}
              crafted SDKs
            </Title>
          </Box>
          <Flex
            className={"items-center flex-col xl:flex-row"}
            justify="space-between"
            gap="xl"
          >
            <Feature
              gradientAngle={50}
              title="Documentation"
              description="Every SDK you generate features a branded and user-friendly README.md, simplifying the onboarding process for developers."
              Icon={IconBook}
              link={{
                label: "Explore a sample README.md",
                href: "https://github.com/humanloop/humanloop-node#readme",
              }}
            />
            <Feature
              gradientAngle={230}
              title="Ergonomics"
              description="Our SDKs are not just easy to use; they're crafted to adhere to the best practices of their respective programming languages."
              Icon={IconMouse}
              link={{
                label: "Dive into a code snippet example",
                href: "https://github.com/passiv/snaptrade-sdks/tree/master/sdks/typescript#getting-started",
              }}
            />
            <Feature
              gradientAngle={160}
              title="Customization"
              description="With Konfig, integrating custom code into your SDKs is a breeze. Enhance your SDKs with features such as streaming, request signing, and polling with ease."
              Icon={IconCode}
              link={{
                label: "Discover more in our documentation",
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
            theme.fn.darken("#1b354e", 0.0),
            theme.fn.darken("#1b354e", 0.3)
          ),
        },
      }}
      target="_blank"
      href={link.href}
      component="a"
      className={cx(
        feature,
        "w-full group transition-all ease-in-out border border-solid border-transparent hover:border-[#3f3f61]"
      )}
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
      <Group noWrap>
        <Text className="whitespace-nowrap">{link.label}</Text>
        <IconArrowRight
          className="transition-all group-hover:ml-1"
          size="0.80rem"
        />
      </Group>
    </UnstyledButton>
  );
}
