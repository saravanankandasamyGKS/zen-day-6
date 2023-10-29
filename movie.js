class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieList) {
        return movieList.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale)