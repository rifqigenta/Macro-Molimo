function search() {
    var input, filter;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName("card")
    titles = document.getElementsByClassName("card-title");        
    for (i = 0; i < cards.length; i++) {
      a = titles[i];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }