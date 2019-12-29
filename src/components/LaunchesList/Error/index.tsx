import React from 'react'
import { ApolloError } from 'apollo-boost'

import './style.sass'
import { isNullOrUndefined } from 'util'

const Error = (error: { error: ApolloError | undefined }) => {
  if (isNullOrUndefined(error.error)) return null

  return (
    <div className={'error'} data-testid={'error'}>
      <h1>Error</h1>
      <p>{error.error.message}</p>
    </div>
  )
}

export default Error
