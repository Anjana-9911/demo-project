
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links > li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Handle dropdown toggles on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                link.classList.toggle('active');
            }
        });
    });
}
navSlide();


const initSwiper = () => {
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChangeTransitionStart: function () {
                const activeSlide = this.slides[this.activeIndex];
                const prevSlide = this.slides[this.previousIndex];
                
                if (prevSlide) {
                    prevSlide.querySelector('h1').style.opacity = 0;
                    prevSlide.querySelector('h3').style.opacity = 0;
                    prevSlide.querySelector('.learn-more-btn').style.opacity = 0;
                }
                
                if (activeSlide) {
                    activeSlide.querySelector('h1').style.animation = 'none';
                    activeSlide.querySelector('h3').style.animation = 'none';
                    activeSlide.querySelector('.learn-more-btn').style.animation = 'none';
                    setTimeout(() => {
                        activeSlide.querySelector('h1').style.animation = '';
                        activeSlide.querySelector('h3').style.animation = '';
                        activeSlide.querySelector('.learn-more-btn').style.animation = '';
                    }, 10);
                }
            }
        }    });
}

initSwiper();
