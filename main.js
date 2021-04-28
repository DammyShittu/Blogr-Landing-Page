// let newMenu = document.querySelector(".navbar-toggler");
// let mobileMenu=document.querySelector(".mobile-menu");
// function openMenu(){
//     newMenu.show('.mobile-menu')
//     mobile_menu.classList.toggle("active");
// }


function myFunction() {
  let showList = document.querySelector(".list1");
    if (showList.style.display === "none") {
      showList.style.display = "block";
    } else {
      showList.style.display = "none";
    }
  }
function myFunction1() {
  let showList = document.querySelector(".list2");
    if (showList.style.display === "none") {
      showList.style.display = "block";
    } else {
      showList.style.display = "none";
    }
  }
function myFunction2() {
  let showList = document.querySelector(".list3");
    if (showList.style.display === "none") {
      showList.style.display = "block";
    } else {
      showList.style.display = "none";
    }
  }

let toggleNavStatus = false;

let getMobileMenu = document.querySelector(".mobile-menu");
let getMobile = document.querySelector(".mobile")
let getMobileLinks = document.querySelectorAll(".link1");
let headerInfo = document.querySelector("#header-info");

let clickHamburger = function () {
  if (toggleNavStatus === false) {
   
    getMobileMenu.style.visibility = "visible";
    headerInfo.style.visibility = "hidden";
    getMobile.style.display = "flex";
    getMobile.style.flexDirection = "column";
    getMobile.style.justifyContent = "center";
    getMobile.style.alignItems = "center";
    getMobile.style.textAlign = "center"
    getMobile.style.margin = "0 auto";
    

    
    toggleNavStatus = true;
  }

  else if (toggleNavStatus === true) {
    getMobileMenu.style.visibility = "hidden";
    headerInfo.style.visibility = "visible";

      toggleNavStatus = false;
    }
  
} 

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.link1')) {
//   let dropdowns = document.getElementsByClassName("list1");
    
//     for (let i = 0; i <= dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }