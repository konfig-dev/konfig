import { observer } from 'mobx-react'
import { useContext } from 'react'
import { Components } from 'react-markdown'
import { DemoStateContext } from './DemoMarkdown'
import { Transition } from '@mantine/core'
import { extractLanguageFromElement } from './DemoCode'
import { Element } from 'hast-util-to-text/lib'

const DO_NOT_HIDE_LANGUAGES = ['markdown', 'yaml', 'shell']

const _DemoPre: Components['pre'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const demoState = useContext(DemoStateContext)
  const language = extractLanguageFromElement(node.children[0] as Element)
  const doNotHide =
    language === undefined || DO_NOT_HIDE_LANGUAGES.includes(language)
  const mounted =
    doNotHide ||
    (demoState?.showCode ? true : demoState?.portal?.showCode ?? false)
  return (
    <Transition
      mounted={mounted}
      transition="pop"
      duration={400}
      timingFunction="ease"
    >
      {(styles) => {
        return (
          <pre style={styles} {...props}>
            {children}
          </pre>
        )
      }}
    </Transition>
  )
}

export const DemoPre = observer(_DemoPre)
