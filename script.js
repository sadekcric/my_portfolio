const mobileMenu=document.getElementById(`mobile_menu`)

mobileMenu.addEventListener(`click`, function(){
  let list=document.getElementById(`mobile_list`);
  list.classList.toggle(`mobile_list_item`)
})