import React, { Component } from 'react';
import './App.css';
import { Button, Card } from '@material-ui/core';
import web3Object from './web3/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allAccounts: [],
			ifNotMetaMask: true
		}
	}

	componentDidMount = () => {
		console.log("Our Web3 Object --> ", web3Object);
		if(web3Object.GlobalWeb3Object){
			console.log("Found Web3");
			this.setState({ ifNotMetaMask: false });
		}else{
			console.log("No Web3");
			this.setState({ ifNotMetaMask: true });
		}
	}

	fetchAccounts = async () => {
		let userAccounts = await web3Object.getAccounts();
		console.log("Found Accounts -> ", userAccounts);
		this.setState({ allAccounts: userAccounts });
	}

	render() {
		return (
			<div className="App">
				<pre>
					{`All Accounts --> ` + JSON.stringify(this.state.allAccounts)}
				</pre>
				<pre>
					{`State --> ` + JSON.stringify(this.state)}
				</pre>
				<Card>
					<Button onClick={this.fetchAccounts}>
						GET ALL ACCOUNTS
          </Button>
				</Card>
				<Card hidden={!this.state.ifNotMetaMask}>
					No web3 found. Please consider using MetaMask and refresh the page!
        </Card>
			</div>
		);
	}
}

export default App;
