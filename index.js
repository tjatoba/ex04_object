class Film {
  constructor(name, genre, director, year, studio) {
    this.name = name;
    this.genre = genre;
    this.director = director;
    this.year = year;
    this.studio = studio;
  }
  chosenFilm() {
    console.log(
      `O filme escolhido foi "${this.name}", um(a) ${this.genre} digido(a) por ${this.director}, do ano de ${this.year}, distribuido(a) pelo(a) ${this.studio}`
    );
  }
}
const user1 = new Film(
  "Uma Linda Mulher",
  "comédia romantica",
  "Garry Marshal",
  1990,
  "Buena Vista/Disney"
);
const user2 = new Film(
  "Alien, o oitavo passageiro",
  "ficção cientifica",
  "Ridley Scott",
  1979,
  "20th Century Fox"
);
const user3 = new Film(
  "Iracema, a virgem dos lábios de mel",
  "drama",
  "Carlos Coimbra",
  1978,
  "Embrafilme"
);

user1.chosenFilm();
user2.chosenFilm();
user3.chosenFilm();
