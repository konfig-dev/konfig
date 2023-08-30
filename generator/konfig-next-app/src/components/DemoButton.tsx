import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import {
  Button as MantineButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { useContext } from 'react'
import { CellContext } from './DemoForm'
import { IconCheck, IconAlertCircle } from '@tabler/icons-react'
import { DemoOutput } from './DemoOutput'

const _DemoButton: Components['button'] = ({
  node,
  children,
  siblingCount,
  ...props
}) => {
  const cell = useContext(CellContext)
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  if (cell === null) {
    return <MantineButton {...props}>{children}</MantineButton>
  }
  return (
    <>
      <DemoOutput cell={cell} />
      <MantineButton
        loading={cell.running}
        color={
          colorScheme === 'dark'
            ? cell.ranSuccessfully
              ? 'brand.9'
              : cell.failed
              ? 'red'
              : 'brand.8'
            : cell.ranSuccessfully
            ? 'brand.6'
            : cell.failed
            ? 'red'
            : 'brand.7'
        }
        disabled={cell.canRunCell === 'no'}
        leftIcon={
          cell.ranSuccessfully ? (
            <IconCheck size="1rem" />
          ) : cell.failed ? (
            <IconAlertCircle size="1rem" />
          ) : undefined
        }
        type="submit"
        compact
        variant="filled"
        sx={{ borderRadius: theme.radius.xs }}
        {...props}
      >
        {children}
      </MantineButton>
    </>
  )
}

export const DemoButton = observer(_DemoButton)
