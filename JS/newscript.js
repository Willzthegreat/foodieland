let open = document.querySelector('.bx-menu');
let close = document.querySelector('.bx-x');
let nav = document.querySelector('.nav-links');

open.addEventListener("click", () => {
    nav.classList.toggle('active');
    console.log('my Work just got started.');

})

close.addEventListener("click", () => {
    nav.classList.toggle('active');
    console.log('my Work is done.');
    
})


// Mobile navigation Bar Ends at this Point






















// function HamburgerOpen(click) {
//     if (1 > 5) {
//         'I love God '
//     } else {
//         'I will walk with God'
//     }

// }