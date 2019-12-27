import './App.sass'
import React from 'react'
import client from './apolloClient'
import { ApolloProvider } from '@apollo/react-hooks'
import LaunchesList from './components/LaunchesList'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={'app'}>
        <header className={'app-header'}>
          <span id={'left'}>
            <img src={'https://www.kairostech.io/img/logo.svg'} className='kairos-logo' alt='kairos-logo' />
          </span>

          <span id={'center'}>
            <h3>SpaceX Launches</h3>
          </span>
          <span id={'right'} />
        </header>
        <div className={'app-body'}>
          <LaunchesList />
        </div>
      </div>
    </ApolloProvider>
  )
}

export default App
