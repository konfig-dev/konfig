import React, { useCallback, useLayoutEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

export default function BlogSidebarDesktop({ sidebar }) {
  const ref = useRef(null);

  const saveScrollPosition = useCallback(() => {
    if (ref.current === null) return;
    localStorage.setItem("blog-sidebar-scroll", ref.current.scrollTop);
  }, []);

  useLayoutEffect(() => {
    if (ref.current === null) return;
    let top = localStorage.getItem("blog-sidebar-scroll");
    if (top === null) return;
    ref.current.scrollTop = parseFloat(top);
  }, []);

  return (
    <aside className="col col--3">
      <nav
        id="blog-sidebar"
        ref={ref}
        onClick={saveScrollPosition}
        className={clsx(styles.sidebar)}
        aria-label={translate({
          id: "theme.blog.sidebar.navAriaLabel",
          message: "Blog recent posts navigation",
          description: "The ARIA label for recent posts in the blog sidebar",
        })}
      >
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          {sidebar.title}
        </div>
        <ul
          className={clsx(styles.sidebarItemList, "clean-list font-semibold")}
        >
          {sidebar.items.map((item) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
