import './App.sass'
import React from 'react'
import client from './graphQL/apolloClient'
import { TEST_IDS } from './utils/constants'
import { ApolloProvider } from '@apollo/react-hooks'
import LaunchesList from './components/LaunchesList'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={'app'}>
        <div className={'app-header'}>
          <span id={'left'}>
            <img src={'https://www.kairostech.io/img/logo.svg'} className='kairos-logo' alt='kairos-logo' data-testid={TEST_IDS.KAIROS_LOGO} />
          </span>

          <span id={'center'}>
            <h3 data-testid={TEST_IDS.HEADER_TITLE}>SpaceX Launches</h3>
          </span>

          <span id={'right'} />
        </div>
        <div className={'app-body'} data-testid={TEST_IDS.APP_BODY}>
          <LaunchesList />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
