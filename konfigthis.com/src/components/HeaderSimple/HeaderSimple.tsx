import {
  Group,
  Button,
  Burger,
  MediaQuery,
  NavLink,
  Transition,
  MantineTransition,
} from "@mantine/core";
import logo from "../../../public/portal-logo-light.png";
import Image from "@/components/Image";
import { IconCalendarEvent, IconExternalLink } from "@tabler/icons-react";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { scrollIntoView } from "@/utils/scroll-into-view";
import { useSmMediaQuery } from "@/utils/use-sm-media-query";
import { useCallback, useEffect } from "react";

const scaleY: MantineTransition = {
  in: {
    // remove y translation
    transform: "translateY(0)",
    opacity: 1,
    filter: "blur(0)",
  },
  out: {
    // add small Y translation
    transform: "translateY(16px)",
    opacity: 0,
    filter: "blur(12px)",
  },
  transitionProperty: "transform, opacity, filter",
};

export function HeaderSimple() {
  const [opened, handlers] = useDisclosure(false);

  const close = useCallback(() => {
    handlers.close();
    document.body && document.body.classList.remove("overflow-hidden");
  }, [handlers]);

  const open = () => {
    handlers.open();
    document.body && document.body.classList.add("overflow-hidden");
  };

  const [_, scrollTo] = useWindowScroll();

  const greaterThanSm = useSmMediaQuery();

  useEffect(() => {
    if (greaterThanSm) close();
  }, [greaterThanSm, close]);

  return (
    <div className="h-16 fixed w-full bg-white/95 backdrop-blur-md  z-50">
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Transition
          mounted={opened}
          transition={scaleY}
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <div
              style={styles}
              className={
                "bg-white absolute top-full w-full h-[calc(100vh-theme(spacing.16))]"
              }
            >
              <div className="ml-3 my-2 text-lg text-gray-500">Products</div>
              <NavLink
                className="pl-5 py-4 text-gray-600 border-t border-solid border-gray-100"
                label="SDKs"
                description="Publish SDKs in the most popular languages"
                classNames={{
                  label: "text-lg",
                }}
                onClick={() => {
                  close();
                  scrollIntoView("sdks");
                }}
              />
              <NavLink
                className="pl-5 py-4 text-gray-600 border-t border-solid border-gray-100"
                classNames={{
                  label: "text-lg",
                }}
                label="Docs"
                description="Create beautiful documentation sites for your API"
                onClick={() => {
                  close();
                  scrollIntoView("docs");
                }}
              />
              <NavLink
                className="pl-5 py-4 text-gray-600 border-t border-solid border-gray-100"
                label="Demos & Tutorials"
                classNames={{
                  label: "text-lg",
                }}
                description="Build engaging demos and tutorials for your API"
                onClick={() => {
                  close();
                  scrollIntoView("demos");
                }}
              />
              <NavLink
                className="py-4 text-gray-600 border-t border-solid border-gray-100"
                label="Documentation"
                classNames={{
                  label: "text-lg",
                }}
                target="_blank"
                href="/docs"
                rightSection={<IconExternalLink stroke={1.5} />}
                component="a"
              />
              <NavLink
                className="py-4 text-gray-600 border-t border-solid border-gray-100"
                label="Blog"
                classNames={{
                  label: "text-lg",
                }}
                rightSection={<IconExternalLink stroke={1.5} />}
                target="_blank"
                href="/blog"
                component="a"
              />
              <NavLink
                className="py-4 font-bold border-t border-solid border-gray-100"
                label="Book a Demo"
                classNames={{
                  label: "text-lg",
                }}
                component="a"
                href="/schedule-demo"
                target="_blank"
                rightSection={<IconCalendarEvent />}
              />
            </div>
          )}
        </Transition>
      </MediaQuery>
      <div className="flex justify-between items-center h-full px-4 mx-auto max-w-5xl">
        <Image
          className="cursor-pointer"
          onClick={() => scrollTo({ y: 0 })}
          height={35}
          src={logo}
          placeholder="empty"
          alt="Konfig Logo"
        />
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            size="md"
            onClick={() => {
              if (opened) {
                close();
              } else {
                open();
              }
            }}
            opened={opened}
          />
        </MediaQuery>

        {/* <Menu.Dropdown>
          <a target="_blank" href="https://konfigthis.com/schedule-demo">
            <Menu.Item className="font-bold" icon={<IconCalendar size={16} />}>
              Book a Demo
            </Menu.Item>
          </a>
          <a target="_blank" href="/docs">
            <Menu.Item className="text-gray-700">Documentation</Menu.Item>
          </a>
          <a target="_blank" href="/blog">
            <Menu.Item className=" text-gray-700">Blog</Menu.Item>
          </a>
        </Menu.Dropdown> */}
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <Group className="flex" spacing="md">
              <a
                className="text-gray-600 hover:text-black"
                target="_blank"
                href="/sdk"
              >
                SDKs
              </a>
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
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}
