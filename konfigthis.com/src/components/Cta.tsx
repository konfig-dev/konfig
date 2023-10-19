import {
  createStyles,
  Text,
  Title,
  Button,
  rem,
  Container,
  clsx,
} from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
  },

  image: {
    maxWidth: "40%",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      margin: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {},
}));

export function Cta() {
  const { classes } = useStyles();
  return (
    <Container>
      <div
        className={clsx(
          classes.wrapper,
          "bg-white rounded-xl border shadow-md"
        )}
      >
        <div className={classes.body}>
          <Title className={classes.title}>
            Generate SDKs, Docs, and Demos today
          </Title>
          <Text fz="sm" c="dimmed">
            Impress your customers with an amazing onboarding experience
          </Text>

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
          </div>
        </div>
      </div>
    </Container>
  );
}
