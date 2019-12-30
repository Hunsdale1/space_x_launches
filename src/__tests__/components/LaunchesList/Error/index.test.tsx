import React from 'react'
import { ApolloError } from 'apollo-boost'
import { render } from '@testing-library/react'
import { TEST_IDS } from '../../../../utils/constants'
import Error from '../../../../components/LaunchesList/Error'

describe('<Error />', () => {
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('renders error on error', () => {
    const apolloError = new ApolloError({})
    const { getByText } = render(<Error error={apolloError} />, container)
    const textElement = getByText(/Error/i)

    expect(textElement).toBeInTheDocument()
  })

  it('renders nothing if error is undefined', () => {
    const { queryByTestId } = render(<Error error={undefined} />, container)

    expect(queryByTestId(TEST_IDS.ERROR)).toBeNull()
  })
})
