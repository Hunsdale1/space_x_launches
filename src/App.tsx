import './App.css'
import './index.css'
import React from 'react'
import client from './apolloClient'
import { ApolloProvider } from '@apollo/react-hooks'
import CountriesList from './components/CountriesList'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <header className='App-header'>
          <img src={'https://www.kairostech.io/img/logo.svg'} className='kairos-logo' alt='kairos-logo' />
        </header>
        <body>
          <CountriesList />
        </body>
        <footer></footer>
      </div>
    </ApolloProvider>
  )
}

export default App

//"apollo:generate": "apollo client:codegen --target=typescript --excludes=node_modules/* --includes=**/*.tsx --endpoint=https://countries.trevorblades.com/ --tagName=gql --outputFlat src/generated"
