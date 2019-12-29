import React from 'react'
import { render } from '@testing-library/react'
import { FETCH_LIMIT } from '../../../utils/constants'
import { MockedProvider } from '@apollo/react-testing'
import LaunchesList from '../../../components/LaunchesList'
import { SPACE_X_LAUNCHES_QUERY } from '../../../graphQL/queries'

const mocks = [
  {
    request: {
      query: SPACE_X_LAUNCHES_QUERY,
      variables: { limit: FETCH_LIMIT }
    },
    result: {
      data: {
        launchesPast: [{ name: 'Douglas' }]
      }
    }
  },
  {
    request: { query: SPACE_X_LAUNCHES_QUERY },
    error: new Error('Something went wrong')
  }
]

it('runs the mocked query', () => {
  render(
    <MockedProvider mocks={mocks}>
      <LaunchesList />
    </MockedProvider>
  )

  // Run assertions on <MyQueryComponent/>
})

// it('renders error on error', () => {
//   const { getByText } = render(
//     <MockedProvider mocks={mocks}>
//       <LaunchesList />
//     </MockedProvider>
//   )

//   const linkElement = getByText(/Error/i)
//   expect(linkElement).toBeInTheDocument()

//   // Run assertions on <MyQueryComponent/>
// })
