import { render } from '@redwoodjs/testing/web'

import PublishPage from './PublishPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PublishPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PublishPage />)
    }).not.toThrow()
  })
})
