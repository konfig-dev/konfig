import Layout from "@theme/Layout";
import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  yarnLock,
  apiYaml,
  readmeMd,
  makeRequestTs,
  makeRequestTsFixed,
  makeRequestTsRefactored,
  makeRequestTsRefactoredFixed,
} from "./_vm";
import stackblitzrc from "./_vm/stackblitzrc.json";
import packageJson from "./_vm/package.json";
import salesPackageJson from "./_vm/sales-demo-package.json";
import tsconfigJson from "./_vm/tsconfig.json";
import sdk, { VM } from "@stackblitz/sdk";
import party from "party-js";
import styles from "./index.module.css";

// @ts-ignore
import Problem from "./_steps/problem.mdx";
// @ts-ignore
import Problem2 from "./_steps/problem-2.mdx";
// @ts-ignore
import Step1 from "./_steps/1.mdx";
// @ts-ignore
import Step2 from "./_steps/2.mdx";
// @ts-ignore
import Step3 from "./_steps/3.mdx";
// @ts-ignore
import Step4 from "./_steps/4.mdx";
// @ts-ignore
import Step5 from "./_steps/5.mdx";
// @ts-ignore
import Recap from "./_steps/recap.mdx";
// @ts-ignore
import Generate from "./_steps/generate.mdx";
// @ts-ignore
import GeneratedSdk from "./_steps/generated-sdk.mdx";
// @ts-ignore
import Refactoring from "./_steps/refactoring.mdx";
// @ts-ignore
import Fixed from "./_steps/fixed.mdx";

import MDXContent from "@theme/MDXContent";
import clsx from "clsx";

type CheckIfStepIsComplete = (vm: VM) => Promise<true | string>;
interface Step {
  content: React.JSX.Element;
  checkIfStepIsComplete: CheckIfStepIsComplete;
  action: string;
}

const steps: Step[] = [
  {
    content: <Step1 />,
    action: "Let the learning begin!",
    checkIfStepIsComplete: async (vm: VM) => {
      const files = await vm.getFsSnapshot();
      for (const file in files) {
        console.log(file, files[file]);
      }

      const hasVmStarted = vm != null;
      if (!hasVmStarted) return "The VM has not started";
      await vm.editor.openFile("make-request.ts");
      await vm.editor.setCurrentFile("make-request.ts");
      return true;
    },
  },
  {
    action: "Apply the above fix",
    content: <Problem />,
    checkIfStepIsComplete: async (vm: VM) => {
      await vm.applyFsDiff({
        create: { "make-request.ts": makeRequestTsFixed },
        destroy: [],
      });
      return true;
    },
  },
  {
    action: "So, how do I publish SDKs for my API?",
    content: <Problem2 />,
    checkIfStepIsComplete: async (vm: VM) => {
      return true;
    },
  },
  {
    action: "Awesome, can't wait to try it!",
    content: <Step2 />,
    checkIfStepIsComplete: async (vm: VM) => {
      await vm.editor.openFile("api.yaml");
      await vm.editor.setCurrentFile("api.yaml");
      return true;
    },
  },
  {
    action: `Understood, we are turning an OpenAPI Specification into an SDK`,
    content: <Step3 />,
    checkIfStepIsComplete: async (vm: VM) => {
      return true;
    },
  },
  {
    action: `I ran "konfig init" to create a konfig.yaml file`,
    content: <Step4 />,
    checkIfStepIsComplete: async (vm: VM) => {
      const files = await vm.getFsSnapshot();
      for (const file in files) {
        if (file !== "konfig.yaml") continue;
        if (!files[file].includes("typescript:\n")) {
          await vm.applyFsDiff({ create: {}, destroy: ["konfig.yaml"] });
          return `Did you answer the questions as directed? Make sure select "TypeScript" when asked what languages to generate SDKs in.`;
        }
        if (!files[file].includes("clientName: Petstore\n")) {
          await vm.applyFsDiff({ create: {}, destroy: ["konfig.yaml"] });
          return `Did you answer the questions as directed? Make sure to name your package "petstore".`;
        }
        await vm.editor.openFile("konfig.yaml");
        await vm.editor.setCurrentFile("konfig.yaml");
        await vm.editor.showSidebar(true);
        return true;
      }
      return `🤔 A "konfig.yaml" does not exist in your development environment. Did you follow the above directions and run "konfig init" in terminal?`;
    },
  },
  {
    action: `Let's generate a TypeScript SDK!`,
    content: <Step5 />,
    checkIfStepIsComplete: async (vm: VM) => {
      return true;
    },
  },
  {
    action: `I ran "konfig generate"`,
    content: <Generate />,
    checkIfStepIsComplete: async (vm: VM) => {
      const files = await vm.getFsSnapshot();
      for (const file in files) {
        if (file !== "typescript/README.md") continue;
        await vm.editor.openFile("typescript/README.md");
        await vm.editor.setCurrentFile("typescript/README.md");
        await vm.editor.showSidebar(true);
        return true;
      }
      return `Did you run "konfig generate"?`;
    },
  },
  {
    action: `Show me the money 💰`,
    content: <GeneratedSdk />,
    checkIfStepIsComplete: async (vm: VM) => {
      await vm.applyFsDiff({
        create: { "make-request.ts": makeRequestTsRefactored },
        destroy: [],
      });
      await vm.editor.openFile("make-request.ts");
      await vm.editor.setCurrentFile("make-request.ts");
      await vm.editor.showSidebar(false);
      return true;
    },
  },
  {
    action: `Fix the compilation error`,
    content: <Refactoring />,
    checkIfStepIsComplete: async (vm: VM) => {
      const files = await vm.getFsSnapshot();
      for (const file in files) {
        if (file !== "typescript/dist/index.js") continue;
        vm.applyFsDiff({
          create: { "make-request.ts": makeRequestTsRefactoredFixed },
          destroy: [],
        });
        return true;
      }
      return `Did you run "yarn && yarn build" inside the "typescript/" directory?`;
    },
  },
  {
    action: `Recap`,
    content: <Fixed />,
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
            "package.json": JSON.stringify(
              sales ? salesPackageJson : packageJson,
              undefined,
              2
            ),
            "api.yaml": apiYaml,
            ".stackblitzrc": JSON.stringify(stackblitzrc, undefined, 2),
            "yarn.lock": yarnLock,
            "make-request.ts": makeRequestTs,
            "tsconfig.json": JSON.stringify(tsconfigJson, undefined, 2),
            ...(sales
              ? {}
              : {
                  "README.md": readmeMd,
                }),
          },
        },
        {
          openFile: sales ? "make-request.ts" : "README.md",
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
      <div className="flex relative markdown">
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
            "sticky h-[calc(100vh-var(--ifm-navbar-height))] top-[var(--ifm-navbar-height)]"
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
    setTimeout(() => {
      refs[currentStep].current.scrollIntoView({
        behavior: "smooth", // Use 'auto' for immediate scrolling without smooth animation
        block: "start", // 'start', 'center', 'end', or 'nearest'
        inline: "nearest", // 'start', 'center', 'end', or 'nearest'
      });
    }, 300);
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
  action,
  vm,
}: StepButtonProps) {
  const [hint, setHint] = useState<boolean | string>(false);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isComplete) return;
    party.confetti(ref.current, {
      count: party.variation.range(40, 60),
      spread: 20,
    });
  }, [isComplete]);

  return (
    <div>
      <button
        ref={ref}
        className={clsx(
          selected ? "cursor-pointer" : "cursor-not-allowed",
          "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 pl-2 pr-4 border border-solid border-gray-400 rounded shadow flex items-center"
        )}
        disabled={!selected}
        data-complete={isComplete}
        onClick={async (e) => {
          e.preventDefault();
          if (!selected) return;
          const isComplete = await checkIfStepIsComplete(vm);
          if (isComplete === true) {
            increment();
          } else setHint(isComplete);
        }}
      >
        <input
          checked={isComplete}
          type="checkbox"
          className={styles.taskStatus}
        />
        {action}
      </button>
      {!isComplete && typeof hint === "string" && (
        <div className="text-sm mt-2">{hint}</div>
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
