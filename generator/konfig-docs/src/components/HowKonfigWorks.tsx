import React from 'react'

export function HowKonfigWorks() {
  return (
    <div className="py-20 px-3 bg-gradient-to-br from-[rgb(8,17,25)] to-[hsl(243_75%_20%)]">
      <h2 className="text-2xl sm:text-3xl text-white text-center font-bold">
        How Konfig Works
      </h2>
      <p className="px-8 mx-auto text-base sm:text-xl text-center max-w-[550px] text-[hsl(243_75%_95%)]">
        Konfig collects APIs and automatically generates SDKs so you can focus
        on building your application.
      </p>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 px-16 py-20 items-center">
        <div className="shadow-xl  lg:w-[500px] shrink-0 rounded-md overflow-hidden">
          <a
            target="_blank"
            href="https://github.com/konfig-sdks/openapi-examples"
          >
            <img src="/img/openapi-examples.png" alt="openapi-examples" />
          </a>
        </div>
        <div className="grow-0">
          <h3 className="text-[hsl(243_75%_97%)] text-2xl leading-tight sm:text-3xl">
            Konfig maintains the highest quality collection of OpenAPI
            Specifications on the internet in a{' '}
            <a
              target="_blank"
              className="text-white hover:text-white hover:no-underline border-b-2 hover:border-b-4 border-b-[hsl(243_75%_70%)]"
              href="https://github.com/konfig-sdks/openapi-examples"
            >
              GitHub repository
            </a>
          </h3>
          <p className="text-xl text-[hsl(243_75%_95%)]">
            We pull OpenAPI Specifications from public sources, fix any errors,
            and make sure they pass our{' '}
            <a
              className="text-white hover:text-white hover:no-underline border-b hover:border-b-2 border-b-[hsl(243_75%_70%)]"
              href="/docs/lint-rules/"
            >
              lint rules
            </a>
            . We continually make sure the repository is up-to-date and collect
            up-time and response time metrics for every API.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 px-16 py-20 items-center">
        <div className="shadow-xl  lg:w-[500px] shrink-0 rounded-md overflow-hidden">
          <img
            src="/img/openapi-examples-to-konfig.png"
            alt="openapi-examples-to-konfig"
          />
        </div>
        <div className="grow-0">
          <h3 className="text-[hsl(243_75%_97%)] text-2xl leading-tight sm:text-3xl">
            Generates SDKs from{' '}
            <span className="font-mono whitespace-nowrap">
              openapi-examples
            </span>
          </h3>
          <p className="text-xl text-[hsl(243_75%_95%)]">
            Our SDK generator is trusted by growing API companies and goes
            through a rigorous testing process to ensure the generated SDKs are
            high-quality and easy to use.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-24 px-16 py-20 items-center">
        <div className="shadow-xl  lg:w-[500px] shrink-0 rounded-md overflow-hidden">
          <img
            src="/img/konfig-to-package-managers.png"
            alt="konfig-to-package-managers"
          />
        </div>
        <div className="grow-0">
          <h3 className="text-[hsl(243_75%_97%)] text-2xl leading-tight sm:text-3xl">
            Publishes to standard package managers
          </h3>
          <p className="text-xl text-[hsl(243_75%_95%)]">
            We publish to standard package managers like npm, PyPI, and Maven so
            you can easily integrate the SDK into your application.
          </p>
        </div>
      </div>
    </div>
  )
}
