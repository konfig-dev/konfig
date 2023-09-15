import { Button, createStyles, rem } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'

const useStyles = createStyles((theme) => ({
  apiButton: {
    height: 'unset',
    [`& .mantine-Button-inner`]: {
      padding: `${rem(3)} ${rem(6)}`,
    },
    [`& .mantine-Button-label`]: {
      whiteSpace: 'normal',
    },
  },
}))

export function DemoInlineLinkButton({
  label,
  href,
  leftIcon,
  rightIcon,
  ...props
}: {
  label: ReactNode | ReactNode[]
  href: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles = useStyles()
  return (
    <Link href={href} {...props}>
      <Button
        className={styles.classes.apiButton}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        size="sm"
        variant="default"
        p={0}
        compact
      >
        {label}
      </Button>
    </Link>
  )
}
