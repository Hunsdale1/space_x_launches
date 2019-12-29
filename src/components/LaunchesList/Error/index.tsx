import React from 'react'
import { ApolloError } from 'apollo-boost'

import './style.sass'

const Error = (error: { error: ApolloError | undefined }) => (
  <div className={'error'}>
    <h1>Error</h1>
    <p>{error.error?.message}</p>
  </div>
)

export default Error
