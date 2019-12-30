import React from 'react'
import { isNullOrUndefined } from 'util'
import { ApolloError } from 'apollo-boost'
import { TEST_IDS } from '../../../utils/constants'

import './style.sass'

const Error = (error: { error: ApolloError | undefined }) => {
  if (isNullOrUndefined(error.error)) return null

  return (
    <div className={'error'} data-testid={TEST_IDS.ERROR}>
      <h1>Error</h1>
      <p>{error.error.message}</p>
    </div>
  )
}

export default Error
