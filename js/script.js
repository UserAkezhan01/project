
// const personalMovieDB = {
//     count:0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?');
//         while (personalMovieDB.count == '' || personalMovieDB.count == null) {
//             personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 1; i <= 2;i++) {
//             let a = prompt ('Один из последних просмотренных фильмов?'),
//                 b = prompt ('На сколько оцените его?');
//             if (a != '' && a != null && b != '' && b != null && a.length < 50) {
//              personalMovieDB.movies[a] = b;
//             } else {
//                 console.log ('Error');
//                 i--;
//             }
//      }
//     },
//     detectPersonalLevel:function () {
//         if (personalMovieDB.count < 10) {
//             console.log ('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//             console.log ('Вы классический зритель');
//         } else if (personalMovieDB.count > 30) {
//             console.log ('Вы киноман');
//         } else {
//             console.log ('Произошла ошибка');
//         }
//     },
//     showMyDB:function () {
//         if (personalMovieDB.privat == false) {
//             console.log (personalMovieDB);
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i <= 3;i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             if (genre === '' || genre == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;
//             } 
//         }
//         personalMovieDB.genres.forEach ((item, num) => {
//             console.log (`Любимый жанр ${num+1} это ${item}`);
//         });
//     },
//     toggleVisibleMyDB: function () {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },

// };

// personalMovieDB.start ();
// personalMovieDB.rememberMyFilms ();
// personalMovieDB.detectPersonalLevel ();
// personalMovieDB.showMyDB ();
// personalMovieDB.writeYourGenres ();
// personalMovieDB.toggleVisibleMyDB ();
// personalMovieDB.console.log (personalMovieDB);