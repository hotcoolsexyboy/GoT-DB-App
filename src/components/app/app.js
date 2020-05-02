import React, { Component } from 'react';
import Header from '../header/header.js';
import RandomChar from '../random-char/random-char.js';
import ErrorMessage from '../error-message/error-message.js'
import CharacterPage from '../character-page/character-page.js';
import './app.sass';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRandomChar: true,
			error: false
		};
		this.onShowRandomCharacter = this.onShowRandomCharacter.bind(this);
	}

	componentDidCatch() {
		console.log("error");

		this.setState({error: true});
	}

	onShowRandomCharacter() {
		this.setState(({showRandomChar}) => ({
			showRandomChar: !showRandomChar
		}));
	}
	
	render() {
		const {showRandomChar} = this.state;

		const randomChar = showRandomChar ? <RandomChar/> : null;

		if(this.state.error) {
			return <ErrorMessage />
		}

		return(
			<div className="app">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {randomChar}
              <button className="btn btn-outline-light btn-toggle" onClick={this.onShowRandomCharacter}>Toggle Random Character</button>
            </div>
          </div>
					<CharacterPage />
      	</div>
    	</div>
		)
	}
}