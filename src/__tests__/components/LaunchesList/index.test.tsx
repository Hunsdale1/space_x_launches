import React from 'react'
import { ApolloError } from 'apollo-boost'
import { render, act } from '@testing-library/react'
import LaunchesList from '../../../components/LaunchesList'
import { MockedProvider, wait } from '@apollo/react-testing'
import { FETCH_LIMIT, TEST_IDS } from '../../../utils/constants'
import { SPACE_X_LAUNCHES_QUERY } from '../../../graphQL/queries'
import { launchPastTestData_NoImages } from './LaunchTile/index.test'

const SUCCESS_MOCK = [
  {
    request: {
      query: SPACE_X_LAUNCHES_QUERY,
      variables: { limit: FETCH_LIMIT }
    },
    result: { data: { launchesPast: [launchPastTestData_NoImages] } }
  }
]

const FAIL_MOCK = [
  {
    request: {
      query: SPACE_X_LAUNCHES_QUERY,
      variables: { limit: FETCH_LIMIT }
    },

    errors: [
      new ApolloError({
        graphQLErrors: [],
        extraInfo: undefined,
        errorMessage: 'FAILED!',
        networkError: new Error(
          'ServerError: Response not successful: Received status code 400 at throwServerError (http://localhost:3000/static/js/0.chunk.js:6486:15) at http://localhost:3000/static/js/0.chunk.js:6509:9'
        )
      })
    ]
  }
]

describe('<LaunchesList />', () => {
  /**
   * Suppress React 16.8 act() warnings globally.
   * The react teams fix won't be out of alpha until 16.9.0.
   */
  const consoleError = console.error
  beforeAll(() => {
    // https://github.com/facebook/react/issues/14769
    jest.spyOn(console, 'error').mockImplementation((...args) => {
      if (!args[0].includes('act(...)')) {
        consoleError(...args)
      }
    })
  })

  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  it('renders without crashing', () =>
    act(() => {
      const { queryByTestId } = render(
        <MockedProvider addTypename={false} mocks={SUCCESS_MOCK}>
          <LaunchesList />
        </MockedProvider>,
        container
      )

      expect(queryByTestId(TEST_IDS.LOADING)).toBeInTheDocument()
    }))

  it('error response renders error message', () => {
    act(async () => {
      const { queryByTestId } = render(
        <MockedProvider addTypename={false} mocks={FAIL_MOCK}>
          <LaunchesList />
        </MockedProvider>,
        container
      )

      await wait(0)

      expect(queryByTestId(TEST_IDS.ERROR)).toBeInTheDocument()
    })
  })
})
