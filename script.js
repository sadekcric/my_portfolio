const mobileMenu = document.getElementById(`mobile_menu`);

mobileMenu.addEventListener(`click`, function () {
  let list = document.getElementById(`mobile_list`);
  list.classList.toggle(`mobile_list_item`);
});

let typed = new Typed(".span", {
  strings: ["Web Developer", "Frontend Developer"],
  typeSpeed: 150,
  backSpeed:150,
  loop:true
});
