import { Code, Transition } from '@mantine/core'
import { Prism, PrismProps } from '@mantine/prism'
import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Prism as ReactPrism } from 'prism-react-renderer'
import { toText } from 'hast-util-to-text'
import { Element } from 'hast-util-to-text/lib'
import { useContext } from 'react'
import { DemoStateContext } from './DemoMarkdown'

// this is how you add language support to prism according to:
// https://github.com/FormidableLabs/prism-react-renderer#custom-language-support
;((typeof global !== 'undefined' ? global : window) as any).Prism = ReactPrism
require('prismjs/components/prism-csharp')
require('prismjs/components/prism-ruby')
require('prismjs/components/prism-php')
require('prismjs/components/prism-shell-session')
require('prismjs/components/prism-java')

type Language = PrismProps['language']

const langDisplayName = {
  python: { name: 'Python' },
  typescript: { name: 'TypeScript' },
  markdown: { name: 'Markdown' },
  ruby: { name: 'Ruby' },
  csharp: { name: 'C#' },
  php: { name: 'PHP' },
  yaml: { name: 'YAML' },
  shell: { name: 'Shell' },
  go: { name: 'Go' },
  java: { name: 'Java' },
  json: { name: 'JSON' },
} as Record<
  Language | 'ruby' | 'csharp' | 'php' | 'shell' | 'java',
  { name: string }
>

export const extractLanguageFromClassName = (className?: string) =>
  /language-(\w+)/.exec(className || '')

export const extractLanguageFromElement = (element: Element) => {
  const classNames = element.properties?.['className']
  if (!Array.isArray(classNames)) return
  const className = classNames[0]
  if (typeof className === 'number') return
  const match = extractLanguageFromClassName(className)
  if (match === null) return
  const language = match[1]
  if (!(language in langDisplayName)) return
  return language
}

const _DemoCode: Components['code'] = ({
  node,
  inline,
  className,
  children,
  siblingCount,
  ...props
}) => {
  const demoState = useContext(DemoStateContext)
  if (node.children.length > 1) {
    // find all children that are code blocks and render them in tabs
    const childCodeBlocks: {
      language: keyof typeof langDisplayName
      code: string
    }[] = []
    for (const child of node.children) {
      if (child.type !== 'element') continue
      if (child.children.length === 0) continue
      const codeBlock = child.children[0]
      if (codeBlock.type !== 'element') continue
      if (codeBlock.tagName !== 'code') continue
      const language = extractLanguageFromElement(codeBlock)
      if (language === undefined) continue
      const code = toText(codeBlock, { whitespace: 'pre' })
      childCodeBlocks.push({
        language: language as keyof typeof langDisplayName,
        code,
      })
    }
    const mounted = demoState?.showCode
      ? true
      : demoState?.portal?.showCode ?? false
    return (
      <Transition
        mounted={mounted}
        transition="pop"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => {
          return (
            <Prism.Tabs
              style={styles}
              defaultValue={childCodeBlocks[0].language}
            >
              <Prism.TabsList>
                {childCodeBlocks.map(({ language }) => {
                  return (
                    <Prism.Tab key={language} value={language}>
                      {
                        langDisplayName[
                          language as keyof typeof langDisplayName
                        ].name
                      }
                    </Prism.Tab>
                  )
                })}
              </Prism.TabsList>
              {childCodeBlocks.map(({ language, code }) => {
                return (
                  <Prism.Panel
                    key={language}
                    value={language}
                    language={language as Language}
                  >
                    {String(code).replace(/\n$/, '')}
                  </Prism.Panel>
                )
              })}
            </Prism.Tabs>
          )
        }}
      </Transition>
    )
  }

  if (inline) return <Code>{children}</Code>
  const match = extractLanguageFromClassName(className)
  if (match === null) {
    return (
      <Code block {...props} className={className}>
        {children}
      </Code>
    )
  }
  const language = match[1]
  if (!(language in langDisplayName)) {
    return (
      <Code block {...props} className={className}>
        {children}
      </Code>
    )
  }

  return (
    <Prism.Tabs value={language}>
      <Prism.TabsList>
        <Prism.Tab value={language}>
          {langDisplayName[language as keyof typeof langDisplayName].name}
        </Prism.Tab>
      </Prism.TabsList>
      <Prism.Panel value={language} language={language as Language}>
        {String(children).replace(/\n$/, '')}
      </Prism.Panel>
    </Prism.Tabs>
  )
}

export const DemoCode = observer(_DemoCode)
