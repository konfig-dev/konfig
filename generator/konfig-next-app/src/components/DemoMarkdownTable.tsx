import { Box, Table, createStyles } from '@mantine/core'
import { Components } from 'react-markdown'

const useStyles = createStyles((theme) => ({
  table: {
    // remove top and bottom border from all <tr> elements
    td: {
      // remove border from top
      borderTop: 'none !important',
    },
  },
}))

export const DemoMarkdownTable: Components['table'] = ({ children }) => {
  const { classes } = useStyles()
  return (
    <Box w="100%" style={{ overflowX: 'scroll' }}>
      <Table className={classes.table} striped style={{ width: '100%' }}>
        {children}
      </Table>
    </Box>
  )
}
