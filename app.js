const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const ourStoryMenu = document.querySelector('#our-story-page');
    const faqsMenu = document.querySelector('#faqs-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      ourStoryMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      ourStoryMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      faqsMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
      faqsMenu.classList.add('highlight');
      ourStoryMenu.classList.remove('highlight');
      return;
    }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
};
  
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
};
  
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);



var faq = document.getElementsByClassName("faq__page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

// Modal items
const modal = document.getElementById('jtp-modal');
const openNavBtn = document.querySelector('.navbar__btn');
const openHeroBtn = document.querySelector('.hero__btn');
const closeBtn = document.querySelector('.close-btn');

// Click events
openNavBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});
openHeroBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click',() => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

//Form validation
const form = document.getElementById('form');
const formName = document.getElementById('name');
const email = document.getElementById('email');

//Show Error message
function showError(input, message){
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation error';

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}

//Show valid message
function showValid(input){
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation valid';
}

//Check required fields
function checkRequired(inputArr){
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showValid(input);
    }
  })
}

//Get fieldname
function getFieldName(input){
  return input.name.charAt(0).toUpperCase()+input.name.slice(1);
}

//Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([formName, email]);

})