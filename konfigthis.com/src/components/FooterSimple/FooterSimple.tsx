import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
  rem,
  Title,
  Box,
} from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";
import logo from "./logo.png";
import Image from "@/components/image";
import { useEffect } from "react";
import Script from "next/script";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  logo: {
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      paddingInline: rem(25),
      flexDirection: "column",
      alignItems: "start",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "grid",
      grid: "auto/repeat(2,1fr)",
      marginTop: rem(20),
      width: "100%",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 600,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  footerLogo: {
    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export function FooterSimple({ data }: FooterLinksProps) {
  const { classes, cx } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        target="_blank"
        href={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={cx(classes.wrapper, "mb-8")} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  useEffect(() => {
    // @ts-ignore
    window.CustomSubstackWidget = {
      substackUrl: "konfig.substack.com",
      placeholder: "Email",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#1d344e",
        input: "#FFFFFF",
        email: "#000000",
        text: "#FFFFFF",
      },
    };
  }, []);

  return (
    <>
      <Script src="https://substackapi.com/widget.js" async />
      <footer className={classes.footer}>
        <Container className={classes.inner}>
          <div className={classes.logo}>
            <div style={{ marginBottom: rem(20) }}>
              <Title order={5}>Subscribe to our newsletter</Title>
              <Text size="sm" style={{ marginBottom: "10px" }} color="dimmed">
                APIs, SDKs, and all things Konfig
              </Text>
              <div style={{ width: "100%" }}>
                <div id="custom-substack-embed" />
              </div>
            </div>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={cx(classes.afterFooter, "flex-col sm:flex-row")}>
          <div className={classes.footerLogo}>
            <Image
              className="m-auto sm:m-0"
              src={logo}
              height={25}
              alt="Konfig Logo"
            />
            <Text color="dimmed" size="xs" className={classes.description}>
              Copyright © Konfig Inc.
            </Text>
          </div>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <a target="_blank" href="https://www.linkedin.com/company/konfig">
              <ActionIcon size="lg">
                <IconBrandLinkedin size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </a>
          </Group>
        </Container>
      </footer>
    </>
  );
}
