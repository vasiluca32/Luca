export function handleImputs() {
  // console.log(this.state)
  // let imputTitle = document.getElementById("title");
  // let imputYear = document.getElementById("year");
  // let imputRuntime = document.getElementById("runtime");
  // let imputGenre = document.getElementById("genre");
  // let imputLanguage = document.getElementById("language");
  // let imputCountry = document.getElementById("country");
  // let imputPoster = document.getElementById("poster");
  // let imputRating = document.getElementById("rating");
  // let imputVotes = document.getElementById("votes");
  // let imputImdbId = document.getElementById("imdbID");
  // let imputType = document.getElementById("type");

  // let myImputs = [
  //   imputTitle,
  //   imputYear,
  //   imputRuntime,
  //   imputGenre,
  //   imputLanguage,
  //   imputCountry,
  //   imputPoster,
  //   imputRating,
  //   imputVotes,
  //   imputImdbId,
  //   imputType,
  // ];

  // for (let i = 0; i < myImputs.length; i++) {
  //   if (myImputs[i].value.length === 0) {
  //     myImputs[i].style.borderColor = "red";
  //   } else {
  //     myImputs[i].style.borderColor = "#ced4da";
  //   }
  // }
  // for (let i = 0; i < myImputs.length; i++) {
  //   if ((myImputs[i].style.borderColor = "red")) {
  //     return false;
  //   }
  // }

  // return true;

  return false;
}

export function shouldAddMovie({ Title, Year, Runtime, Genre, Language, Country, Poster, imdbRating, imdbVotes, imdbID, Type }) {
  if (Title && Year && Runtime && Genre && Language && Country && Poster && imdbRating && Number(imdbRating) > 0 && Number(imdbRating) <= 10 && imdbVotes && imdbID && Type) return true;
  // if (Number(imdbRating) > 0 && Number(imdbRating) <= 10) return true;
  else {
    alert("Please check all highlighted fields!")
    return false;
  }

}
