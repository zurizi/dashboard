document.addEventListener('DOMContentLoaded', function() {
    let links = document.links
    for (let i = 0, ie = links.length; i < ie; i++) f(links[i])
    function f(link) {
        // stop func if link doesn't refer to the current page
        if (link.hostname !== location.hostname ||
            link.pathname !== location.pathname)
                return

        // get target element (# -> <body>), stop func if there is no target
        let target = link.hash.slice(1) ? document.getElementById(link.hash.slice(1)) : document.body
        if (!target) return

        // prevent sudden jump on click, instead scroll smoothly to the target
        // after scrolling, add hash to url
        link.addEventListener('click', function(e) {
            e.preventDefault()
            smoothScroll(target.getBoundingClientRect().top)
            setTimeout(function() {location.hash = link.hash}, 600)
        })
    }

    // smoothly scroll window to the next position, stop when target is reached
    // scrolling takes about 500ms
    function smoothScroll(distance) {
        // steps -> number of steps to the destination
        let steps = 75, stepInterval = 1, i = 0, stepLength = distance / steps
        let currentPos = window.pageYOffset || document.documentElement.scrollTop 

        // scroll to the next intermediate step until destination is reached
        let interval = setInterval(function() {
            currentPos += stepLength // next scroll position
            window.scrollTo(0, currentPos)
            if (++i >= steps) clearInterval(interval) // clear after steps
        }, stepInterval)
    }
})

const links = document.querySelectorAll('.nav-li');
const sections = document.querySelectorAll('section');

function linkkk() {
  let index = sections.length;

  while(--index && window.scrollY - 150 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

linkkk();
window.addEventListener('scroll', linkkk);

document.querySelector('.menu-toogle').addEventListener('click',function(){
    document.querySelector('nav ul').classList.toggle('slide');
    document.querySelector('.logo').style.zIndex = '-2';
    document.querySelector('.menu-toogle').classList.toggle('garisx');
    document.querySelector('#header').classList.toggle('mobile');


});

const navClick = document.querySelectorAll('#header nav ul li a');
navClick.forEach(element => {
    element.addEventListener('click',function(){
        document.querySelector('nav ul').classList.toggle('slide');
        document.querySelector('#header').classList.toggle('mobile');
        document.querySelector('.menu-toogle').classList.toggle('garisx')
    })
});

