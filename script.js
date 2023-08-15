function scrollCheck() {

    
    const scrolledInt = window.scrollY;
    
    const navbar = document.getElementById('desktopNav');
    const bannerLocation = document.getElementById('banner').offsetTop;
    const bannerElem = document.getElementById('bannerContent')
    const heading = document.getElementById('heroHeading');

    heading.style.translate = `0px -${scrolledInt / 4}px `
    
    //Adjust navbar styling based on scroll position.

    if (scrolledInt > 200) {
        navbar.style.backgroundColor = "black";
        navbar.style.height = "5vh"
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.height = "10vh"
    }

    //Sectioning banner items come in from left based on scroll position.

    if (scrolledInt >= (bannerLocation / 4)) {
        bannerElem.style.opacity = "1"
        bannerElem.style.position = "absolute"
        bannerElem.style.left = "0"
    } else {
        bannerElem.style.opacity = "0"
        bannerElem.style.position = "absolute"
        bannerElem.style.left = "-10vw";

}
}

function homeClick() {
    const homeSection = document.getElementById('homeSection').offsetTop;
    scrollTo(0,homeSection);
}

function aboutClick() {
    const aboutSection = document.getElementById('aboutSection').offsetTop;
    scrollTo(0,aboutSection);
}




const aboutSection = document.getElementById('aboutSection');
const selectedAboutBg = document.querySelectorAll('.bgicon');

const aboutBgArray = [
    'https://static.vecteezy.com/system/resources/previews/002/440/597/large_2x/bearded-dragon-on-a-black-background-free-photo.jpg',
    'https://wallpaperaccess.com/full/860701.jpg',
    'https://wallpaperset.com/w/full/f/8/4/69184.jpg',   
    'https://cdn.wallpapersafari.com/70/18/eMzAmO.jpg'
];

// Iterate through button arrays and apply separate iteration with a ternary operator to determine unselected buttons.
for (let i = 0; i < selectedAboutBg.length; i++) {
    selectedAboutBg[i].addEventListener('click', () => {
        for (let j = 0; j < selectedAboutBg.length; j++) {
            selectedAboutBg[j].style.opacity = i === j ? '1' : '0.5';
            selectedAboutBg[j].style.backgroundColor = i === j ? 'green' : 'white';
        }
        aboutSection.style.backgroundImage = `url(${aboutBgArray[i]})`;
    });
}