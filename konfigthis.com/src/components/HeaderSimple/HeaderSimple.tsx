import {
  createStyles,
  Header,
  Container,
  rem,
  Group,
  Anchor,
  Button,
} from "@mantine/core";
import logo from "./logo.png";
import Image from "@/components/image";
import { useSubtleLinkStyles } from "@/utils/use-subtle-link-styles";
import { IconCalendarEvent } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderSimple() {
  const { classes } = useStyles();
  const styles = useSubtleLinkStyles();

  return (
    <Header height={60}>
      <Container size="lg" className={classes.header}>
        <Image height={40} src={logo} placeholder="empty" alt="Konfig Logo" />
        <Group spacing="xs">
          <Anchor
            target="_blank"
            component="a"
            className={styles.classes.subtleLink}
            unstyled
            variant="subtle"
            href="/blog"
          >
            Blog
          </Anchor>
          <Anchor
            className={styles.classes.subtleLink}
            unstyled
            target="_blank"
            component="a"
            href="/docs"
          >
            Documentation
          </Anchor>
          <Button
            size="xs"
            target="_blank"
            color="dark"
            component="a"
            href="https://konfigthis.com/schedule-demo"
            leftIcon={<IconCalendarEvent size="0.9rem" />}
          >
            Book a demo
          </Button>
        </Group>
      </Container>
    </Header>
  );
}
