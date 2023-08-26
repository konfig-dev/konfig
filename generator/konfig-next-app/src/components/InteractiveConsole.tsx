import React, { useState, useRef, useEffect } from 'react'
import {
  Paper,
  Text,
  TextInput,
  Button,
  createStyles,
  Col,
  useMantineColorScheme,
} from '@mantine/core'
import { IconTerminal2, IconX } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
  draggableBar: {
    cursor: 'row-resize',
    height: '8px',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[4]
        : theme.colors.gray[2],
  },
  blinkingCursor: {
    animation: '1s blink step-end infinite',
    '@keyframes blink': {
      '50%': { visibility: 'hidden' },
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '4px',
  },
  inputBox: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    flexGrow: 1,
  },
}))

const InteractiveConsole: React.FC = () => {
  const [consoleOutput, setConsoleOutput] = useState<string[]>([])
  const [consoleVisible, setConsoleVisible] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const [consoleHeight, setConsoleHeight] = useState('33%')
  const consoleRef = useRef<HTMLDivElement>(null)
  const { classes } = useStyles()
  const { colorScheme } = useMantineColorScheme()

  const handleMouseDown = (e: MouseEvent) => {
    const initialY = e.clientY
    const initialHeight = consoleRef.current!.getBoundingClientRect().height

    const handleMouseMove = (e: MouseEvent) => {
      const newHeight = initialHeight - (e.clientY - initialY)
      setConsoleHeight(
        `${Math.min(Math.max(newHeight, 100), window.innerHeight * 0.8)}px`
      )
    }

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }

  const executeCommand = () => {
    try {
      const output = eval(input)
      setConsoleOutput([...consoleOutput, `➜ ${input}`, output.toString()])
    } catch (e: unknown) {
      if (e instanceof Error) {
        setConsoleOutput([...consoleOutput, `➜ ${input}`, e.message])
      }
    }
    setInput('')
  }

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.addEventListener('mousedown', handleMouseDown)
    }
    return () => {
      if (consoleRef.current) {
        consoleRef.current.removeEventListener('mousedown', handleMouseDown)
      }
    }
  }, [])

  return (
    <div>
      {!consoleVisible && (
        <Button
          onClick={() => setConsoleVisible(true)}
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 1000,
          }}
          variant={colorScheme === 'dark' ? 'filled' : 'light'}
          size="xs"
        >
          <IconTerminal2 size={16} />
        </Button>
      )}

      {consoleVisible && (
        <Paper
          ref={consoleRef}
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            height: consoleHeight,
            zIndex: 999,
          }}
        >
          <div className={classes.header}>
            <Text size="xs" style={{ margin: '0px' }}>
              JavaScript Console
            </Text>
            <Button size="xs" onClick={() => setConsoleVisible(false)}>
              <IconX />
            </Button>
          </div>
          <div className={classes.draggableBar}></div>
          <div style={{ padding: '10px' }}>
            {consoleOutput.map((text, index) => (
              <Text key={index}>{text}</Text>
            ))}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text style={{ marginRight: '4px' }}>➜</Text>
              <TextInput
                className={classes.inputBox}
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    executeCommand()
                  }
                }}
              />
              <span className={classes.blinkingCursor}>|</span>
            </div>
          </div>
        </Paper>
      )}
    </div>
  )
}

export default InteractiveConsole
