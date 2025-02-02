///////////////////////////////////////////////////////////
// preloader
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

/* window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded");

    // Dodaj event listener za sve linkove sa klasom 'flagLink'
    document.querySelectorAll('.flagLink').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Spreči standardno ponašanje linka (osvežavanje stranice)

            let lang = this.getAttribute('data-lang'); // Uzimamo vrednost jezika (en ili ru)

            // Fetch fajla na osnovu jezika
            fetch(`/${lang}/index.html`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); // Vraćamo sadržaj fajla kao tekst
                })
                .then(data => {
                    document.querySelector('#content').innerHTML = data; // Učitaj sadržaj u #content
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        });
    });
}); */


/* document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded");
    }, 10)
}); */


///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".hero-text-box");
const logo1 = document.querySelector(".logo");
const logo2 = document.querySelector(".logo-sm");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        // console.log(ent);
        language.classList.add('noneDisplay');
        // callOptions.classList.add("noneDisplay");
        if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
            logo1.classList.add("none");
            logo2.classList.remove("none");
        } else {
            document.body.classList.remove("sticky");
            logo1.classList.remove("none");
            logo2.classList.add("none");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-20px",
    }
);
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});

let menu_items = document.querySelectorAll(".team-content-btt");
let headerEl1 = document.querySelectorAll(".team-content");

Array.from(headerEl1).forEach(function (menu) {
    menu.addEventListener("click", function () {
        this.classList.toggle("active")
    });
});


///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {


        // Close mobile naviagtion
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});


///////////////////////////////////////////////////////////
// Choose language
const languageImg = document.querySelector("#languageImg");
const language = document.querySelector(".language");

languageImg.addEventListener("click", (event) => {
    event.stopPropagation(); // Spreči propagaciju eventa dalje na document
    language.classList.toggle("noneDisplay");
});

// Klik bilo gde drugde na dokumentu da se doda klasa noneDisplay
document.addEventListener('click', () => {
    if (!language.classList.contains('noneDisplay')) {
        language.classList.add('noneDisplay');
    }
});


///////////////////////////////////////////////////////////
// Call as
/* const phoneNumber = document.querySelector(".phone-number");
const callOptions = document.querySelector(".call-options");

phoneNumber.addEventListener("click", (event) => {
    event.stopPropagation(); // Spreči propagaciju eventa dalje na document
    callOptions.classList.toggle("noneDisplay");
});

// Klik bilo gde drugde na dokumentu da se doda klasa noneDisplay
document.addEventListener('click', () => {
    if (!callOptions.classList.contains('noneDisplay')) {
        callOptions.classList.add('noneDisplay');
    }
}); */



///////////////////////////////////////////////////////////
// gallery
/* var lightbox = new PhotoSwipeLightbox({
    gallery: '#photoGallery',
    children: 'a',
    // dynamic import is not supported in UMD version
    pswpModule: PhotoSwipe
});
lightbox.init(); */


///////////////////////////////////////////////////////////
// pricing
// const checkboxes_1 = document.getElementById('checkboxes-1');
// const checkboxes_2 = document.getElementById('checkboxes-2');
// const checkboxes_2_deepWashing = document.querySelector('#deepWashing');
// const checkboxes_3 = document.getElementById('checkboxes-3');

// const checkboxes1 = checkboxes_1.querySelectorAll('input[type="checkbox"], input[type="radio"]');
// const checkboxes2 = checkboxes_2.querySelectorAll('input[type="checkbox"], input[type="radio"]');
// const checkboxes3 = checkboxes_3.querySelectorAll('input[type="checkbox"]');

// const callUs = document.querySelector('.callUs');
// // const box_close = document.querySelector('.hend');
// // const hend = document.querySelector('.hend');

// const output1 = document.getElementById('total-1');
// const output2 = document.getElementById('total-2');
// const output3 = document.getElementById('total-3');


// // Checkboxes 1
// /* ovo je za ceo niz */
// checkboxes1.forEach(function (checkbox) {
//     if (checkbox.checked === true) {
//         output1.innerHTML = "<span class='euro'>€</span>" + Number(checkbox.value).toFixed(2);
//     };
// });

// checkboxes_1.addEventListener('change', function () {
//     var total = 0;

//     checkboxes1.forEach(function (checkbox) {
//         if (!checkbox.checked) return;

//         total += Number(checkbox.value) || 0
//     });


//     /* if (total === 0) {
//        output1.innerHTML = "<span><img src='img/chbox/sl_3.png' class='checkImg'/></span><span id='red'> . . . Please enter data!</span>";
//     } else  if (total === 52.5) {
//        output1.innerHTML = output1.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2) + "<span class='level'> / full choice</span>";
//     } else {
//        output1.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2);
//     }*/

//     output1.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2);
// });


// // Checkboxes 2
// /* ovo je za ceo niz */
// checkboxes2.forEach(function (checkbox) {
//     if (checkbox.checked === true) {
//         output2.innerHTML = "<span class='euro'>€</span>" + Number(checkbox.value).toFixed(2) + "<span class='level'>sušenje ~ 24<sup>h</sup></span>";
//     };
// });

// checkboxes_2.addEventListener('change', function () {
//     var total = 0;

//     checkboxes2.forEach(function (checkbox) {
//         if (!checkbox.checked) return;

//         total += Number(checkbox.value) || 0
//     });


//     if (checkboxes_2_deepWashing.checked == true) {
//         output2.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2) + "<span class='level'>sušenje ~ 24<sup>h</sup></span>";
//     } else {
//         output2.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2);
//     }

//     // output2.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2);
// });


// // Checkboxes 3
// /* checkboxes_3.addEventListener('change', function () {
//     var total = 0;
//     var total_1 = 0;
//     // checkboxes3.length > 0
//     checkboxes3.forEach(function (checkbox, index) {
//         if (!checkbox.checked) return;


//         total += Number(checkbox.value) || 0
//         total_1++
//     });

//     if (total_1 === 1) {
//         output3.innerHTML = "<span class='euro'>€</span>" + total.toFixed(2) + "<span class='level wiggle'>cijene po dogovoru</sup></span>";
//         // callUs.classList.add("callUs-is-open");
//     } else if (total_1 < 1) {
//         // callUs.classList.remove("none");
//         // callUs.classList.remove("callUs-is-open");
//         // callUs_Open.classList.remove('open-callUs-is-open');
//         output3.innerHTML = "<span class='euro'>€</span>" + total_1.toFixed(2);
//     }
// }); */


///////////////////////////////////////////////////////////
// open call us dialog box
const callUs_Img = document.querySelector('.callUs');
const callUs_Img_Close = document.querySelector('.callUs-close');
const callUs_Icon = document.querySelector('.open-callUs');
const callUs_Open_Header = document.querySelector(".header");

// Otvori call us dialog i sakrij ikonu
callUs_Icon.addEventListener('click', () => {
    callUs_Img.classList.add("callUs-is-open");
    callUs_Icon.classList.add("open-callUs-remove");
});

// Zatvori call us dialog i prikaži ikonu
callUs_Img_Close.addEventListener('click', () => {
    callUs_Img.classList.remove("callUs-is-open");
    callUs_Icon.classList.remove("open-callUs-remove");
});

// Funkcija za proveru i ažuriranje stanja ikone
function updateCallUsVisibility() {
    let navPos = callUs_Open_Header.getBoundingClientRect().top;
    let scrollPos = window.scrollY;

    // Ako je vrh headera u prozoru ili je skrol manje od vrha + 250px, sakrij ikonu
    if (scrollPos < navPos + 500) {
        callUs_Icon.classList.add('open-callUs-remove');
    } else {
        // Prikazuj ikonu ako call us dijalog nije otvoren
        if (!callUs_Img.classList.contains('callUs-is-open')) {
            callUs_Icon.classList.remove('open-callUs-remove');
        }
    }
}

// Funkcija za skrolovanje koja zatvara call us dijalog ako je otvoren
function handleScroll() {
    if (callUs_Img.classList.contains('callUs-is-open')) {
        callUs_Img.classList.remove("callUs-is-open");
        callUs_Icon.classList.remove("open-callUs-remove");
    }
}

// Debounce za skrol događaj
const debouncedHandleScroll = debounce(handleScroll, 15);

// Dodaj event listener za skrolovanje
window.addEventListener('scroll', debouncedHandleScroll);

// Dodaj event listener za ažuriranje vidljivosti ikone tokom skrolovanja i resize-a
window.addEventListener("scroll", updateCallUsVisibility);
window.addEventListener("resize", updateCallUsVisibility);

// Pozovi funkciju odmah da postavi početno stanje
updateCallUsVisibility();





///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;