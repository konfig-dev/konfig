import {
  createStyles,
  Container,
  Button,
  Title,
  Text,
  rem,
  AspectRatio,
  Box,
} from "@mantine/core";
import { IconCalendarEvent, IconExternalLink } from "@tabler/icons-react";
import { useMdMediaQuery } from "@/utils/use-md-media-query";
import { LiveSandbox } from "../LiveSandbox/LiveSandbox";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(40),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(50),
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(42),
      textAlign: "left",
    },
  },

  highlight: {},

  description: {
    textAlign: "center",
    fontSize: rem(20),

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  control: {
    marginLeft: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,
      marginTop: theme.spacing.md,
      marginLeft: 0,
    },
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container className={classes.wrapper} size={1400}>
        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text
              variant="gradient"
              component="span"
              className={classes.highlight}
              inherit
            >
              Generate{" "}
            </Text>
            SDKs for your REST API
          </Title>

          <Container p={0} size={700}>
            <Text size="lg" color="dimmed" className={classes.description}>
              Konfig makes it easy for you to onboard external developers.
              Easily publish SDKs in all major languages so your customers can
              quickly integrate your API.
            </Text>
          </Container>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              size="lg"
              target="_blank"
              color="dark"
              component="a"
              href="https://calendly.com/dylan-konfig/meet"
              leftIcon={<IconCalendarEvent />}
            >
              Book a demo
            </Button>
            <Button.Group>
              <Button
                fullWidth
                component="a"
                href="https://konfigthis.com/docs/getting-started/openapi-specification"
                target="_blank"
                className={classes.control}
                leftIcon={<IconExternalLink />}
                size="lg"
                variant="default"
                color="gray"
              >
                OpenAPI
              </Button>
              <Button
                fullWidth
                component="a"
                href="https://konfigthis.com/docs/getting-started/postman-collections"
                target="_blank"
                className={classes.control}
                leftIcon={<IconExternalLink />}
                size="lg"
                variant="default"
                color="gray"
              >
                Postman
              </Button>
            </Button.Group>
          </div>
        </div>
        <Box mt={rem(30)}>
          <AspectRatio mx="auto" maw={600} ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/_rbFV2RmAc4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Container>
    </div>
  );
}
