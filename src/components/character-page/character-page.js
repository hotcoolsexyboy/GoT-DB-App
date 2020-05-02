import React, {Component} from 'react';
import ItemList from '../item-list/item-list.js';
import CharDetails from '../char-details/char-details.js';
import ErrorMessage from '../error-message/error-message.js'

export default class CharacterPage extends Component {

  state = {
    selectedChar: 130,
    error: false
  }

  componentDidCatch() {
		console.log("error");

		this.setState({error: true});
	}

  onCharSelected = (id) => {
		this.setState({
			selectedChar: id
		});
	}

  render() {

    if(this.state.error) {
			return <ErrorMessage />
		}

    return(
      <div className="row">
        <div className="col-md-6">
          <ItemList onCharSelected={this.onCharSelected}/>
        </div>
        <div className="col-md-6">
          <CharDetails charId={this.state.selectedChar}/>
        </div>
      </div>
    )
  }
}