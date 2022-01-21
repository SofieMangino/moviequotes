function generate() {
  let ranNum = Math.floor(Math.random() * quoteArr.length);
  let lineVar = document.querySelector("blockquote");
  let movieVar = document.querySelector("cite");
  lineVar.innerText = quoteArr[ranNum].line;
  movieVar.innerText = quoteArr[ranNum].movie;
};
generate()
