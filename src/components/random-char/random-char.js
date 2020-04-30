import React, {Component} from 'react';
import './random-char.sass';
import GOTService from '../../services/gotService.js';
import Spinner from '../spinner/spinner.js';
import ErrorMessage from '../error-message/error-message.js'

export default class RandomChar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      char: {},
      loading: true,
      error: false
    };
    this.gotService = new GOTService();
    this.updateChar();
  }

  updateChar() {
    const id = Math.floor(Math.random()*140 + 25);
    this.gotService.getCharacter(id)
      .then(char => {
        this.setState({
          char,
          loading: false
        })
      })
      .catch(err => this.setState({
        error: true,
        loading: false
      }));
  }

  render() {
    const {char, loading, error} = this.state;

    const loadingMessage = loading ? <Spinner /> : null;
    const contentMessage = !(loading || error) ? <View char={char}/> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    
    return (
      <div className="random-block rounded">
        {loadingMessage}
        {contentMessage}
        {errorMessage}
      </div>
    );
  }
}

const View = ({char}) => {
  const {name, gender, born, died, culture} = char;
  return(
    <React.Fragment>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </React.Fragment>
  )
}