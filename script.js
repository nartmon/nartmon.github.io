import data from './data.js';


const gun = document.getElementsByClassName("gun");
const boom = document.getElementsByClassName("boom");
const boomImageList = ["./src/boom1.png", "./src/boom2.png", "./src/boom3.png", "./src/boom4.png", "./src/boom5.png", "./src/boom6.png", "./src/boom7.png", "./src/boom8.png", "./src/boom9.png", "./src/boom10.png"]

const content = document.querySelector('.content');

const slide = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = document.querySelector('.future').clientWidth;


content.addEventListener("click", function(event) {
    const x = event.pageX
    const y = event.pageY

    /*gun*/
    const gunImage = document.createElement('img');
    gunImage.src = "./src/bullet.png";
    gunImage.style.width = "12px"
    gunImage.style.height = "12px"
    gunImage.style.left = (x - 10) + "px";
    gunImage.style.top = (y - 10)  + "px";
    gun[0].appendChild(gunImage);

    /*boom*/

    let boomImageSrc = boomImageList[Math.floor(Math.random() * boomImageList.length)]
    const boomImage = document.createElement('img');
    boomImage.src = boomImageSrc
    boomImage.style.width = 240 + "px"
    boomImage.style.height = "auto"
    boomImage.style.left = (x - 100)+ "px";
    boomImage.style.top = (y - 110)  + "px";
    boom[0].appendChild(boomImage);
});

/*rotate cards*/
const gallery = document.querySelector('.gallery');
const items = gallery.querySelectorAll('li');
items.forEach(item => {
    const randomAngle = Math.floor(Math.random() * 0);
    item.style.transform = `rotate(${randomAngle}deg)`;
});


/*close docs*/
const docsNav = document.querySelector('.docsNav');
const docs = document.querySelector('.docs');
const textBg = document.querySelector('.textBg');

docsNav.addEventListener("click", function(event) {
    docs.classList.remove("slide-down");
    textBg.classList.remove("opacity-down");
    docs.classList.add("slide-down");
    textBg.classList.add("opacity-down");
    slide.style.transform = `translateX(0px)`;
    nextBtn.style.visibility = 'visible'
    prevBtn.style.visibility = 'hidden'
    currentIndex = 0;

    characterdetail.innerHTML = textcharacterdetail
    characterdescription.innerHTML = textcharacterdescription
    charactername.innerHTML = textcharactername
    characterimg.innerHTML = textcharacterimg


    setTimeout(function() {

    docs.style.display = "none"
    textBg.style.display = "none"
    }, 400)

})
textBg.addEventListener("click", function(event) {
    docs.classList.remove("slide-down");
    textBg.classList.remove("opacity-down");
    docs.classList.add("slide-down");
    textBg.classList.add("opacity-down");
    slide.style.transform = `translateX(0px)`;
    nextBtn.style.visibility = 'visible'
    prevBtn.style.visibility = 'hidden'
    currentIndex = 0;

    characterdetail.innerHTML = textcharacterdetail
    characterdescription.innerHTML = textcharacterdescription
    charactername.innerHTML = textcharactername
    characterimg.innerHTML = textcharacterimg

    setTimeout(function() {

    docs.style.display = "none"
    textBg.style.display = "none"
    }, 400)

})

const audio = document.getElementById("audio");
const audioa = document.getElementById("audioa");
const audiob = document.getElementById("audiob");
const audioc = document.getElementById("audioc");
const audiod = document.getElementById("audiod");
const audios = [audio, audioa, audiob, audioc, audiod]


/*fill docs*/

var listItems = document.querySelectorAll("ul li");
const name = document.querySelector('.name');
const photo = document.querySelector('.photo');
const caption = document.querySelector('.caption');
const description = document.querySelector('.description');
const characterdetail = document.querySelector('.characterdetail');
const characterdescription = document.querySelector('.characterdescription');
const charactername = document.querySelector('.charactername');
const characterimg = document.querySelector('.characterimg');

let textname = ""
let textphoto = ""
let textcaption = ""
let textdescription = ""
let textcharacterdetail = ""
let textcharacterdescription = ""
let textcharactername = ""
let textcharacterimg = ""



listItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
        docs.classList.remove("slide-up");
        textBg.classList.remove("opacity-up");
        docs.classList.remove("slide-down");
        textBg.classList.remove("opacity-down");

        audios[Math.floor(Math.random() * audios.length)].play();
        console.log(audio)

        setTimeout(function() {
        docs.style.display = "flex"
        textBg.style.display = "flex"

            textname = data[index].name
            textphoto = data[index].photo
            textcaption = data[index].caption
            textdescription = data[index].description
            textcharacterdetail = data[index].characterdetail
            textcharacterdescription =  data[index].characterdescription
            textcharactername =data[index].charactername
            textcharacterimg = data[index].characterimg

        characterdetail.innerHTML = textcharacterdetail
        characterdescription.innerHTML = textcharacterdescription
        charactername.innerHTML = textcharactername
        characterimg.innerHTML = textcharacterimg


        docs.classList.add("slide-up");
        textBg.classList.add("opacity-up");


        }, 200)  
    });
});




const docscolumnleft = document.querySelector('.docs-column-left');
const docscolumncenter = document.querySelector('.docs-column-center');
const docscolumnright = document.querySelector('.docs-column-right');
let currentIndex = 0;

//슬라이드 넘기기

    
    nextBtn.addEventListener('click', () => {


        if (currentIndex < 1) {

            currentIndex++;
            nextBtn.style.visibility = 'hidden'
            prevBtn.style.visibility = 'visible'

            docscolumnleft.style.filter = 'invert(82%) sepia(10%) saturate(2466%) hue-rotate(4deg) brightness(92%) contrast(80%)'
            docscolumncenter.style.filter = 'invert(74%) sepia(4%) saturate(4989%) hue-rotate(184deg) brightness(90%) contrast(84%)'
            docscolumnright.style.filter = 'invert(40%) sepia(52%) saturate(1280%) hue-rotate(294deg) brightness(96%) contrast(96%)'

            characterdetail.innerHTML = textcaption
            characterdescription.innerHTML = textdescription 
            charactername.innerHTML = textname
            characterimg.innerHTML = textphoto

        }

    });
    
    prevBtn.addEventListener('click', () => {

        if (currentIndex > 0) {
            currentIndex--;
            nextBtn.style.visibility = 'visible'
            prevBtn.style.visibility = 'hidden'

            docscolumnleft.style.filter = 'invert(93%) sepia(98%) saturate(5244%) hue-rotate(330deg) brightness(101%) contrast(101%)'
            docscolumncenter.style.filter = 'invert(76%) sepia(6%) saturate(1243%) hue-rotate(184deg) brightness(111%) contrast(103%)'
            docscolumnright.style.filter = 'invert(71%) sepia(62%) saturate(215%) hue-rotate(299deg) brightness(103%) contrast(101%)'
           
            characterdetail.innerHTML = textcharacterdetail
            characterdescription.innerHTML = textcharacterdescription
            charactername.innerHTML = textcharactername
            characterimg.innerHTML = textcharacterimg
        }
    });




