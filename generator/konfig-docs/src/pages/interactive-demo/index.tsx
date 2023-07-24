import Layout from "@theme/Layout";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { api } from "./api";
import packageJson from "./package.json";
import { yarnLock } from "./yarnLock";
import sdk, { VM } from "@stackblitz/sdk";

// @ts-ignore
import Step1 from "./_Step1.mdx";
// @ts-ignore
import Step2 from "./_Step2.mdx";
import MDXContent from "@site/src/theme/MDXContent";

type IsStepComplete = (vm: VM) => Promise<boolean>;
interface Step {
  content: React.JSX.Element;
  isStepComplete: IsStepComplete;
  hint?: string;
}

export default function LiveDemo() {
  const [vm, setVm] = useState<VM>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      content: <Step1 />,
      isStepComplete: async (vm: VM) => {
        sdk
          .embedProject(
            "ide",
            {
              title: "Konfig Live Demo IDE",
              description: "A basic Node.js project",
              template: "node",
              files: {
                "setup.sh": `alias konfig="cd ../; yarn konfig"`,
                "package.json": JSON.stringify(packageJson, undefined, 2),
                "api.yaml": api,
                "yarn.lock": yarnLock,
              },
            },
            {
              openFile: "api.yaml",
              clickToLoad: true,
              terminalHeight: 30,
              view: "editor",
            }
          )
          .then((newVm) => setVm(newVm));
        return true;
      },
    },
    {
      content: <Step2 />,
      isStepComplete: async (vm: VM) => {
        return true;
      },
    },
  ];

  return (
    <Layout
      title={`Schedule Demo`}
      description="Learn more about Konfig through a live Demo"
    >
      <div className="container mx-auto py-6">
        <div className="flex relative">
          <div className="flex-1">
            <MDXContent>
              {steps.map((step, i) => {
                return (
                  <Step key={i} selected={i === currentStep}>
                    <div>{step.content}</div>
                    <StepButton
                      isStepComplete={step.isStepComplete}
                      increment={() => setCurrentStep((value) => value + 1)}
                      hint={step.hint}
                      vm={vm}
                    />
                  </Step>
                );
              })}
            </MDXContent>
          </div>
          <div className="w-3/5 sticky h-[80vh] top-[9vh]">
            <div
              id="ide"
              className="twisted-shape w-full h-full bg-black"
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function StepButton({
  isStepComplete,
  increment,
  hint,
  vm,
}: {
  isStepComplete: IsStepComplete;
  increment: () => void;
  hint?: string;
  vm: VM;
}) {
  const [showHint, setShowHint] = useState(false);
  return (
    <div className="flex gap-2 items-end">
      <button
        onClick={async (e) => {
          e.preventDefault();
          if (await isStepComplete(vm)) increment();
          else setShowHint(true);
        }}
      >
        I clicked "Run Project"
      </button>
      {showHint && hint && (
        <span className="text-xs text-green-700">{hint}</span>
      )}
    </div>
  );
}

function Step({
  children,
  selected,
}: PropsWithChildren<{ selected?: boolean }>) {
  return (
    <div
      {...(selected ? { "data-selected": true } : {})}
      className="ch-scrollycoding-step-content"
    >
      {children}
    </div>
  );
}
