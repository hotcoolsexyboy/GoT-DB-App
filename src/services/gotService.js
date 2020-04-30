export default class GOTService {

  constructor() {
    this._apiBase = "https://anapioficeandfire.com/api";
  }

  async getResourse(url) {
    const response = await fetch(`${this._apiBase}${url}`);
  
    if(!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}.`);
    }
  
    return await response.json();
  };

  async getAllCharacters() {
    const res = await this.getResourse("/characters?page=5&pageSize=10");
    return res.map(this._transformCharacter);
  }

  async getCharacter(id) {
    const char = await this.getResourse(`/characters/${id}`);
    return this._transformCharacter(char);
  }

  async getAllHouses() {
    const res = await this.getResourse("/houses?page=1&pageSize=10");
    return res.map(this._transformHouse);
  }

  async getHouse(id) {
    const house = await this.getResourse(`/houses/${id}`);
    return this._transformHouse(house);
  }

  async getAllBooks() {
    const res = await this.getResourse("/books");
    return res.map(this._transformBook);
  }

  async getBook(id) {
    const book = await this.getResourse(`/books/${id}`);
    return this._transformBook(book);
  }

  _transformData(data) {
    for(let item in data) {
      if(data[item] === "") {
        data[item] = "N / A";
      }
    }
    return data;
  }

  _transformCharacter(char) {
    const charData = {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture
    };

    this._transformData(charData);

    return charData;
  }

  _transformHouse(house) {
    const houseData = {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    };

    this._transformData(houseData);

    return houseData;
  }

  _transformBook(book) {
    const bookData = {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publisher: book.publisher,
      released: book.released
    };

    this._transformData(bookData);

    return bookData;
  }
}