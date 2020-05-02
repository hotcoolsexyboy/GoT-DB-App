import React, {Component} from 'react';
import './item-list.sass';
import GOTService from '../../services/gotService.js';
import Spinner from '../spinner/spinner.js';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      charList: null
    };
    this.gotService = new GOTService();
  }

  componentDidMount() {
    this.gotService.getAllCharacters()
      .then(charList => {
        this.setState({charList});
      })
  }

  renderCharacter(arr) {
    return arr.map((char, i) => {
      return(
        <li key={i} className="list-group-item" onClick={() => this.props.onCharSelected(41 + i)}>
          {char.name}
        </li>
      )
    });
  }

  render() {
    const {charList} = this.state;

    if(!charList) {
      return <Spinner />
    };

    const elements = this.renderCharacter(charList);

    return (
      <ul className="item-list list-group">
        {elements}
      </ul>
    );
  }
}