document.querySelectorAll(".js-submenu").forEach(function(e){
  e.addEventListener('click', function (event) {this.parentElement.querySelector('.submenu').classList.toggle("is-open");});
});
