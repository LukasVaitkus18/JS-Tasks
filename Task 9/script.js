/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
// class Movie {
//   constructor(title, director, budget) {
//     this.title = title;
//     this.director = director;
//     this.budget = budget;
//   }
//   wasExpensive(other) {
//     if (this.budget > 100000000) {
//       console.log(
//         `Movie ${this.title} by ${this.director} is more expensive than 100 000 000 USD `
//       );
//       //   console.log(true);
//     } else {
//       console.log(
//         `Movie ${this.title} by ${this.director} is less than 100 000 000 USD`
//       );
//       //   console.log(false);
//     }
//   }
// }
// const answer = new Movie("West Side Story", "Steven Spielberg", 1000000001);
// answer.wasExpensive();

const Movie = {
  title: "West side story",
  director: "Steven Spielberg",
  budget: 100000001,
  wasExpensive: function () {
    if (this.budget > 100000000) {
      console.log(true);
    } else {
      console.log(false);
    }
  },
};
Movie.wasExpensive();
