import Layout from "@theme/Layout";
import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { yarnLock, apiYaml, readmeMd, makeRequestTs } from "./_vm";
import packageJson from "./_vm/package.json";
import salesPackageJson from "./_vm/sales-demo-package.json";
import tsconfigJson from "./_vm/tsconfig.json";
import sdk, { VM } from "@stackblitz/sdk";
import styles from "./index.module.css";

// @ts-ignore
import Step1 from "./_steps/1.mdx";
// @ts-ignore
import Step2 from "./_steps/2.mdx";
// @ts-ignore
import Step3 from "./_steps/3.mdx";
// @ts-ignore
import Recap from "./_steps/recap.mdx";

import MDXContent from "@theme/MDXContent";
import clsx from "clsx";

type CheckIfStepIsComplete = (vm: VM) => Promise<boolean>;
interface Step {
  content: React.JSX.Element;
  checkIfStepIsComplete: CheckIfStepIsComplete;
  hint?: string;
  action: string;
}

const steps: Step[] = [
  {
    content: <Step1 />,
    action: "Lets go!",
    checkIfStepIsComplete: async (vm: VM) => {
      return vm != null;
    },
  },
  {
    action: "Awesome, can't wait to try it!",
    content: <Step2 />,
    checkIfStepIsComplete: async (vm: VM) => {
      return true;
    },
  },
  {
    action: `I ran "konfig init" to create a konfig.yaml file`,
    content: <Step3 />,
    checkIfStepIsComplete: async (vm: VM) => {
      return true;
    },
  },
  {
    action: "N/A",
    content: <Recap />,
    checkIfStepIsComplete: async (vm: VM) => {
      return true;
    },
  },
];

export default function LiveDemo({ sales }: { sales?: boolean }) {
  const [vm, setVm] = useState<VM>(null);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    window.onbeforeunload = confirmExit;
    function confirmExit() {
      return "Leaving this page will erase all progress. Are you sure?";
    }
    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    sdk
      .embedProject(
        "ide",
        {
          title: "Konfig Interactive Tutorial",
          description: "How to generate SDKs for your REST API",
          template: "node",
          files: {
            "setup.sh": `alias konfig="cd ../; yarn konfig"`,
            "package.json": JSON.stringify(
              sales ? salesPackageJson : packageJson,
              undefined,
              2
            ),
            "api.yaml": apiYaml,
            "yarn.lock": yarnLock,
            ...(sales
              ? {
                  "make-request.ts": makeRequestTs,
                  "tsconfig.json": JSON.stringify(tsconfigJson, undefined, 2),
                }
              : {
                  "README.md": readmeMd,
                }),
          },
        },
        {
          openFile: sales ? "make-request.ts" : "README.md",
          terminalHeight: 30,
          view: "editor",
        }
      )
      .then((newVm) => setVm(newVm));
    return () => {
      setVm(null);
    };
  }, []);

  return (
    <Layout
      title={sales ? "Sales Demo" : "Interactive Tutorial"}
      description="Generate SDKs for your REST API with Konfig"
    >
      <div className="flex relative">
        <div className={clsx(sales ? "w-0" : "w-2/5")}>
          <MDXContent>
            <Steps
              steps={steps}
              vm={vm}
              increment={() => setCurrentStep((step) => step + 1)}
              currentStep={currentStep}
            />
          </MDXContent>
        </div>
        <div
          className={clsx(
            sales ? "w-full" : "w-3/5",
            "sticky h-[calc(100vh-60px)] top-[60px]"
          )}
        >
          <div id="ide" className="w-full h-full bg-[#14181f]" />
        </div>
      </div>
    </Layout>
  );
}

interface StepButtonProps {
  selected: boolean;
  checkIfStepIsComplete: CheckIfStepIsComplete;
  isComplete: boolean;
  increment: () => void;
  hint?: string;

  /**
   * Describe the action to go to the next step
   */
  action: string;

  vm: VM;
}

function Steps({
  steps,
  vm,
  increment,
  currentStep,
}: {
  steps: Step[];
  vm: VM;
  increment: () => void;
  currentStep: number;
}) {
  const refs = Array.from({ length: steps.length }).map(() =>
    useRef<HTMLDivElement>()
  );

  useEffect(() => {
    if (currentStep === 0) return;
    refs[currentStep].current.scrollIntoView({
      behavior: "smooth", // Use 'auto' for immediate scrolling without smooth animation
      block: "start", // 'start', 'center', 'end', or 'nearest'
      inline: "nearest", // 'start', 'center', 'end', or 'nearest'
    });
  }, [currentStep]);

  return steps.map((step, i) => {
    const isNotLastStep = i < steps.length - 1;
    const selected = i === currentStep;
    const isComplete = i < currentStep;
    return (
      <Step ref={refs[i]} key={i} selected={selected}>
        <div>{step.content}</div>
        {isNotLastStep && (
          <StepButton
            isComplete={isComplete}
            selected={selected}
            checkIfStepIsComplete={step.checkIfStepIsComplete}
            increment={increment}
            hint={step.hint}
            vm={vm}
            action={step.action}
          />
        )}
      </Step>
    );
  });
}

function StepButton({
  checkIfStepIsComplete,
  isComplete,
  increment,
  selected,
  hint,
  action,
  vm,
}: StepButtonProps) {
  const [showHint, setShowHint] = useState(false);
  return (
    <div className="flex gap-2 items-end">
      <button
        className={clsx(
          selected ? "cursor-pointer" : "cursor-not-allowed",
          "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-2 pr-4 border border-solid border-gray-400 rounded shadow flex items-center"
        )}
        disabled={!selected}
        onClick={async (e) => {
          e.preventDefault();
          if (!selected) return;
          if (await checkIfStepIsComplete(vm)) {
            increment();
          } else setShowHint(true);
        }}
      >
        <input
          checked={isComplete}
          type="checkbox"
          className={styles.taskStatus}
        />
        {action}
      </button>
      {showHint && hint && (
        <span className="text-xs text-green-700">{hint}</span>
      )}
    </div>
  );
}

const Step = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ selected?: boolean }>
>(({ children, selected }, ref) => {
  return (
    <div
      ref={ref}
      style={{ scrollMarginTop: "60px", boxShadow: "none", margin: 0 }}
      {...(selected ? { "data-selected": true } : {})}
      className="ch-scrollycoding-step-content data-[selected]:opacity-100 opacity-50"
    >
      {children}
    </div>
  );
});
