import React from 'react';
import Header from '../header/header.js';
import RandomChar from '../random-char/random-char.js';
import ItemList from '../item-list/item-list.js';
import CharDetails from '../char-details/char-details.js';

const App = () => {
  return (
    <div className="app">
        <div className="container">
            <Header />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <RandomChar/>
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
  );
};

export default App;