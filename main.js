const menu = document.getElementById("menu");
const close = document.getElementById("close");
const contact = document.getElementById("contact");

contact.onclick = function() {
  menu.classList.remove('hidden')
}

close.onclick = function() {
  menu.classList.add('hidden')
}