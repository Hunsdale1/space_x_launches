import React from 'react'
import { ApolloError } from 'apollo-boost'

const Error = (error: { error: ApolloError | undefined }) => (
  <div>
    Error
    <p>{error.error?.message}</p>
  </div>
)

export default Error
