import {
  createStyles,
  Header,
  Container,
  rem,
  Group,
  Anchor,
  Button,
  UnstyledButton,
  Menu,
  Burger,
} from "@mantine/core";
import logo from "../../../public/portal-logo-light.png";
import Image from "@/components/Image";
import { useSubtleLinkStyles } from "@/utils/use-subtle-link-styles";
import { IconCalendar, IconCalendarEvent } from "@tabler/icons-react";
import { useState } from "react";

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
  const [opened, setOpened] = useState(false);

  return (
    <div className="h-16 fixed w-full bg-white/95 backdrop-blur-md  z-50">
      <Container size="lg" className={classes.header}>
        <Image height={40} src={logo} placeholder="empty" alt="Konfig Logo" />
        <Menu
          opened={opened}
          onChange={setOpened}
          position="bottom-end"
          shadow="md"
          width={200}
        >
          <Menu.Target>
            <Burger className="sm:hidden" opened={opened} />
          </Menu.Target>
          <Menu.Dropdown>
            <a target="_blank" href="https://konfigthis.com/schedule-demo">
              <Menu.Item
                className="font-bold"
                icon={<IconCalendar size={16} />}
              >
                Book a Demo
              </Menu.Item>
            </a>
            <a target="_blank" href="/docs">
              <Menu.Item className="text-gray-700">Documentation</Menu.Item>
            </a>
            <a target="_blank" href="/blog">
              <Menu.Item className=" text-gray-700">Blog</Menu.Item>
            </a>
          </Menu.Dropdown>
        </Menu>
        <Group className="hidden sm:flex" spacing="md">
          <a
            className="text-gray-600 hover:text-black"
            target="_blank"
            href="/blog"
          >
            Blog
          </a>
          <a
            className="text-gray-600 hover:text-black"
            target="_blank"
            href="/docs"
          >
            Documentation
          </a>
          <Button
            color="dark"
            component="a"
            radius="lg"
            target="_blank"
            href="https://konfigthis.com/schedule-demo"
            leftIcon={<IconCalendarEvent size="0.9rem" />}
          >
            Book a demo
          </Button>
        </Group>
      </Container>
    </div>
  );
}
