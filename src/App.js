import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import { Button, Card } from '@material-ui/core';

const providerFromWbe3 = Web3.givenProvider;
const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAccounts: []
    }
  }
  getAccounts = () => {
    web3.eth.getAccounts().then((accounts) => {
      console.log("Accounts --> ", accounts);
      console.log("Providers --> ", providerFromWbe3);
      this.setState({ allAccounts: accounts });

    });
  }
  render() {
    return (
      <div className="App">
        <pre>
          {`All Accounts --> ` + JSON.stringify(this.state.allAccounts)}
        </pre>
        <Card>
          <Button onClick={this.getAccounts}>
            GET ALL ACCOUNTS
            			</Button>
        </Card>
      </div>
    );
  }
}

export default App;
