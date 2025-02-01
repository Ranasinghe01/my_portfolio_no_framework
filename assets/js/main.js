
/*===============SHOW MENU================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=====================REMOVE MENU MOBILE==================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each navLink
    navMenu.classList.add('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=================ADD BLUR HEADER====================*/
const blurHeader = () => {
    const header = document.getElementById('header')
    //Add a class if the bottom offset is greater than 50 of the
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*===============EMAIL JS================*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //ServiceID - templateID - #form - public key
    emailjs.sendForm('service_y4xhyvm', 'template_eup2ji7', '#contact-form', 'XOhcZq8I5uYviVrU1')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message Sent Successfully ✅'

            //Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //Clear text fields
            contactForm.reset()
        }, () => {
            //show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)


/*===============SHOW SCROLL UP================*/


/*===============SCROLL SECTION ACTIVE LINK================*/


/*===============SCROLL REVEAL ANIMATION================*/