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
// function pencarian() {
//     let filter = document.getElementById('searchbar').value.toLowerCase();
//     let item = document.getElementsByClassName('card');
//     let cari = document.getElementsByClassName('card-title');
    
//     for (var i = 0; i < cari.length; i++) {
//         let a = item[i].getElementsByClassName('card-title')[0];

//         let value = a.innerHTML || a.innerText || a.textContent;
//         if (value.toLowerCase().indexOf(filter) > -1) {
//             item[i].style.display = "";
//         } else {
//             item[i].style.display = "none ";
//         }
//     }
// }