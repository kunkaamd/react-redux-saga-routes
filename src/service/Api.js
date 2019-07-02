function* getMoviesFromApi() {
    const response = yield fetch("http://dummy.restapiexample.com/api/v1/employees", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
    const movies = yield response.json();   
    return movies;
}
export const Api = {
    getMoviesFromApi
}; 