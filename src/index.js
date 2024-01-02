import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Dashboard from './views/dashboard'
import NotFound from './views/not-found'

import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { CosmosWalletConnectors } from "@dynamic-labs/cosmos";
const App = () => {
  return (
    <DynamicContextProvider
    settings={{
      // Find your environment id at https://app.dynamic.xyz/dashboard/developer
      environmentId: "74bd1bf3-bdd5-43ba-8ea3-e744ebfaaaf2",
      walletConnectors: [
        EthereumWalletConnectors,
        CosmosWalletConnectors,
        SolanaWalletConnectors
      ],
    }}
  >
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  </DynamicContextProvider>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
