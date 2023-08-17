import React, { Children, PropsWithChildren, useEffect, useRef } from "react";

function Wrapper({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    import("swiper/element/bundle").then((swiper) => {
      swiper.register();
      const els = document.querySelectorAll("swiper-container");
      els.forEach((el) => {
        Object.assign(el, {
          injectStyles: [
            `.swiper-button-prev, .swiper-button-next {
  padding: 5px;
}
:host {
  --swiper-navigation-size: 25px;
}

@media (max-width: 640px) {
  :host {
    --swiper-navigation-size: 0px;
  }
}
`,
          ],
        });
      });
      els.forEach((el) => {
        el.initialize();
      });
    });
  }, []);
  return (
    <swiper-container
      loop
      navigation
      pagination
      pagination-clickable
      init={false}
    >
      {Children.toArray(children)
        .filter((c) => {
          return React.isValidElement(c) && c.type === Slide;
        })
        .map((c, idx) => {
          return <swiper-slide key={idx}>{c}</swiper-slide>;
        })}
    </swiper-container>
  );
}

function Slide({ children }: PropsWithChildren<{}>) {
  return children;
}

export const Carousel = {
  Wrapper,
  Slide,
};
