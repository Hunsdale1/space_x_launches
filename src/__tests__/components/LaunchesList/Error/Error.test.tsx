import React from 'react'
import { ApolloError } from 'apollo-boost'
import { render } from '@testing-library/react'
import Error from '../../../../components/LaunchesList/Error'

const apolloError = new ApolloError({})

describe('<Error />', () => {
  it('Renders Error on Error', () => {
    const { getByText } = render(<Error error={apolloError} />)
    const linkElement = getByText(/Error/i)

    expect(linkElement).toBeInTheDocument()
  })

  it('Renders Nothing if Error undefined', () => {
    const { queryByTestId } = render(<Error error={undefined} />)

    expect(queryByTestId('error')).toBeNull()
  })
})
