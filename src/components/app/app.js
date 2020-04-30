import React, { Component } from 'react';
import Header from '../header/header.js';
import RandomChar from '../random-char/random-char.js';
import ItemList from '../item-list/item-list.js';
import CharDetails from '../char-details/char-details.js';
import './app.sass';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hide: false
		};
		this.onHideRandomCharacter = this.onHideRandomCharacter.bind(this);
	}

	onHideRandomCharacter() {
		this.setState(({hide}) => ({
			hide: !hide
		}));
	}
	
	render() {
		const {hide} = this.state;

		const randomChar = !hide ? <RandomChar/> : null;

		return(
			<div className="app">
        <div className="container">
          <Header />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              {randomChar}
              <button className="btn btn-outline-light btn-toggle" onClick={this.onHideRandomCharacter}>Toggle Random Character</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ItemList />
            </div>
            <div className="col-md-6">
              <CharDetails />
            </div>
          </div>
      	</div>
    	</div>
		)
	}
}