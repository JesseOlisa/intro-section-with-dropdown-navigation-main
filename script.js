// DECLARING VARIABLES
let hamburger = document.querySelector('.ham-container');
let navContainer = document.querySelector('.nav-container');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-btn');

let moreLinks = document.querySelectorAll('.more-links');
let subNavContainer = document.querySelectorAll('.sub-nav-links-container')


//TO REMOVE PRELOAD
window.onload = function () {
    document.body.className = "";
}

// OPEN AND CLOSES NAV
hamburger.addEventListener('click', ()=> {
    modal.classList.add('show-modal');
    navContainer.classList.add('show-nav');
});
closeBtn.addEventListener('click', ()=> {
    modal.classList.remove('show-modal');
    navContainer.classList.remove('show-nav');   
});

// OPEN AND CLOSES SUB LINKS
moreLinks.forEach((moreLink) => {
    moreLink.addEventListener('click', ()=> {
        let sublinks = moreLink.querySelector('.sub-nav-links-container');
        for(let i = 0; i < subNavContainer.length; i++) {
            if(subNavContainer[i].classList.contains('sub-nav-display')) {
                subNavContainer[i].classList.remove('sub-nav-display');
            }
        }
        if(moreLink.classList.contains('open')) {
            moreLink.classList.remove('open');
            sublinks.classList.remove('sub-nav-display');
        }
        else {
            moreLink.classList.add('open');
            sublinks.classList.add('sub-nav-display');
        }
        
    })
});
