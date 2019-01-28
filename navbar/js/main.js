var menuToggle = document.querySelector('#menu-toggle');
var menuBar = document.querySelector('#menu-bar');
var menuItems = document.querySelectorAll('.menu-item');


let show = false;
menuToggle.addEventListener('click', toggleMenu);




function toggleMenu() {
   if(!show)
   {
   	menuBar.classList.add('show'); 
   	menuItems.forEach(item=>{
	item.classList.add('show')
      })
   	show=true;
   }
   else{
   	menuBar.classList.remove('show');
   	 show=false;
   	    menuItems.forEach(item=>{
	item.classList.remove('show')
})
   	}

   // console.log('added class');
}


// Toggle dropdown
var menuDropDownBtn = document.querySelector('.menu-drop-down-btn');
var menuDropDown = document.querySelector('.menu-drop-down');
let dropdown = false;


menuDropDownBtn.addEventListener('click', toggleDropDown);

function toggleDropDown() {
	console.log('clicek')
	if(!dropdown)
	{
    menuDropDown.classList.add('drop');
	dropdown=true;
	}
	else{
		menuDropDown.classList.remove('drop');

	dropdown = false;
		}
}