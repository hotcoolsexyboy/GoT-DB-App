import React, {Component} from 'react';
import './item-list.sass';
import GOTService from '../../services/gotService.js'

export default class ItemList extends Component {

  showData() {
    const got = new GOTService();
    
    got.getAllCharacters()
          .then(res => res.forEach(item => console.log(`All Characters: ${item.name}`)))
          .catch(error => console.error(error));
    
    got.getCharacter(583)
          .then(res => console.log(`Single Character: ${res.name}`))
          .catch(error => console.error(error));

    got.getAllHouses()
          .then(res => res.forEach(item => console.log(`All Houses: ${item.name}`)))
          .catch(error => console.error(error));

    got.getHouse(1)
          .then(res => console.log(`Single House: ${res.name}`))
          .catch(error => console.error(error));

    got.getAllBooks()
          .then(res => res.forEach(item => console.log(`All Books: ${item.name}`)))
          .catch(error => console.error(error));

    got.getBook(1)
          .then(res => console.log(`Single Book: ${res.name}`))
          .catch(error => console.error(error));
  }

  render() {
    this.showData();
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          John Snow
        </li>
        <li className="list-group-item">
          Brandon Stark
        </li>
        <li className="list-group-item">
          Geremy
        </li>
      </ul>
    );
  }
}