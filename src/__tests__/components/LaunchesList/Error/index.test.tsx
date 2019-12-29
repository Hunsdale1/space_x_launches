import React from 'react'
import { ApolloError } from 'apollo-boost'
import { render } from '@testing-library/react'
import Error from '../../../../components/LaunchesList/Error'

const apolloError = new ApolloError({})

test('renders learn react link', () => {
  const { getByText } = render(<Error error={apolloError} />)
  const linkElement = getByText(/Error/i)
  expect(linkElement).toBeInTheDocument()
})
