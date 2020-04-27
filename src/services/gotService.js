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

  getAllCharacters() {
    return this.getResourse("/characters?page=5&pageSize=10");
  }

  getCharacter(id) {
    return this.getResourse(`/characters/${id}`);
  }

  getAllHouses() {
    return this.getResourse("/houses?page=1&pageSize=10");
  }

  getHouse(id) {
    return this.getResourse(`/houses/${id}`);
  }

  getAllBooks() {
    return this.getResourse("/books");
  }

  getBook(id) {
    return this.getResourse(`/books/${id}`);
  }
}