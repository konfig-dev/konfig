import { UnstyledButton, clsx } from "@mantine/core";
import {
  IconBook2,
  IconChevronRight,
  IconCode,
  IconTerminal2,
  TablerIconsProps,
} from "@tabler/icons-react";

export function OurProducts() {
  return (
    <div className="flex flex-col items-center px-4 pt-36 pb-32 md:pb-64 bg-white">
      <h2 className="mb-8 md:mb-24 text-4xl text-gray-600">Our Products</h2>
      <div className="flex flex-col xl:flex-row gap-12">
        <Product
          product="SDKs"
          description="Publish SDKs in the most popular languages"
          className="bg-gradient-to-br hover:bg-gradient-to-bl"
          Icon={IconCode}
          scrollTo="sdks"
        />
        <Product
          product="Docs"
          description="Generate beautiful documentation for your API"
          className="bg-gradient-to-b hover:bg-gradient-to-br"
          Icon={IconBook2}
          scrollTo="docs"
        />
        <Product
          product="Demos & Tutorials"
          description="Build engaging demos and tutorials for your API"
          className="bg-gradient-to-bl hover:bg-gradient-to-br"
          Icon={IconTerminal2}
          scrollTo="demos"
        />
      </div>
    </div>
  );
}

function Product({
  product,
  description,
  className,
  scrollTo,
  Icon,
}: {
  product: string;
  description: string;
  className: string;
  scrollTo: string;
  Icon: (props: TablerIconsProps) => JSX.Element;
}) {
  return (
    <UnstyledButton
      onClick={() => scrollIntoView(scrollTo)}
      className={clsx(
        className,
        "shadow-lg hover:shadow-xl",
        "from-white to-gray-50 hover:to-gray-100 p-8 w-full xl:w-80 group rounded-xl border-solid border-gray-100 transition-all hover:scale-[1.01] bg-white"
      )}
    >
      <Icon className="text-gray-300 mb-2" />
      <div className="flex transition-all flex-row gap-2 items-center group-hover:gap-4">
        <div className="font-semibold text-2xl">{product}</div>
        <IconChevronRight className="text-gray-300 " />
      </div>
      <div className="text-gray-600 mt-4">{description}</div>
    </UnstyledButton>
  );
}

/**
 * Finds the element with the given id and scrolls it into view.
 * @param id
 */
function scrollIntoView(id: string) {
  const element = document.getElementById(id);
  console.log(element);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
