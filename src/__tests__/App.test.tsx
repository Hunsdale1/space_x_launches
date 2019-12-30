import App from '../App'
import React from 'react'
import { render } from '@testing-library/react'
import { TEST_IDS } from '../utils/constants'

describe('<App />', () => {
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('renders main app header text', () => {
    const { getByText } = render(<App />, container)
    const linkElement = getByText(/SpaceX Launches/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders main app header image', () => {
    const { queryByTestId } = render(<App />, container)

    expect(queryByTestId(TEST_IDS.KAIROS_LOGO)).toBeInTheDocument()
  })

  it('renders main app body', () => {
    const { queryByTestId } = render(<App />, container)

    expect(queryByTestId(TEST_IDS.APP_BODY)).toBeInTheDocument()
  })
})
