class starwarsAPI {
  static getAllStarWars(API_LOC = 'https://swapi.co/api/') {
    return fetch(API_LOC).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default starwarsAPI;
