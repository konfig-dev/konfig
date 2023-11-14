import React, { PropsWithChildren } from 'react'

interface HighlightTextProps {
  children: string
  bold: string[]
  className?: string
}

const HighlightTextComponent: React.FC<HighlightTextProps> = ({
  children,
  bold,
  className,
}) => {
  if (bold.length === 0 || (bold.length === 1 && bold[0] === ''))
    return <Demphasized>{children}</Demphasized>
  // Function to create a regex from the bold strings
  const createRegex = (strings: string[]): RegExp => {
    return new RegExp(
      strings.map((s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'),
      'gi'
    )
  }

  // Splitting the children string based on the bold strings
  const splitWithBold = (
    text: string,
    boldStrings: string[]
  ): { matched: boolean; parts: React.ReactNode[] } => {
    // empty strings or empty arrays cause issues
    const cleaned = boldStrings.filter((s) => s !== '' && s.length > 1)

    if (!cleaned || cleaned.length === 0)
      return { matched: false, parts: [text] }

    const regex = createRegex(cleaned)
    const parts: React.ReactNode[] = []
    let match: RegExpExecArray | null
    let lastIndex = 0

    let matched = false
    while ((match = regex.exec(text)) !== null) {
      matched = true
      const matchIndex = match.index
      if (lastIndex !== matchIndex) {
        parts.push(
          <Demphasized>{text.substring(lastIndex, matchIndex)}</Demphasized>
        )
      }
      parts.push(
        <span
          className="text-mantine-gray-800 dark:text-mantine-gray-200"
          key={matchIndex}
        >
          {match[0]}
        </span>
      )
      lastIndex = matchIndex + match[0].length
    }

    if (lastIndex < text.length) {
      parts.push(<Demphasized>{text.substring(lastIndex)}</Demphasized>)
    }

    return { parts, matched }
  }

  const { parts } = splitWithBold(children, bold)

  return <div className={className}>{parts}</div>
}

function Demphasized({ children }: PropsWithChildren<{}>) {
  return (
    <span className="text-mantine-gray-600 dark:text-mantine-gray-500">
      {children}
    </span>
  )
}

export default HighlightTextComponent
