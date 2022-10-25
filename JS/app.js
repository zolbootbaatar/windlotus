var button = document.getElementById("l-d");
var icon = document.getElementById("icon")
button.onclick = function() {
      document.body.classList.toggle('light-theme');
      if(document.body.classList.contains('light-theme')) {
            icon.class = "fa-sharp fa-solid fa-moon";
      }
      else {
            icon.class = "fa-sharp fa-solid fa-sun";
      }
}