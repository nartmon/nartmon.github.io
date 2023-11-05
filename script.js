import data from './data.js';






const gun = document.getElementsByClassName("gun");
const boom = document.getElementsByClassName("boom");
const boomImageList = ["./src/boom1.png", "./src/boom2.png", "./src/boom3.png", "./src/boom4.png", "./src/boom5.png", "./src/boom6.png", "./src/boom7.png", "./src/boom8.png", "./src/boom9.png", "./src/boom10.png"]

const content = document.querySelector('.content');

const slide = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = document.querySelector('.future').clientWidth;

const docscolumnleft = document.querySelector('.docs-column-left');
const docscolumncenter = document.querySelector('.docs-column-center');
const docscolumnright = document.querySelector('.docs-column-right');
let currentIndex = 0;

for (var i = 0; i < boomImageList.length; i++) {
    var img = new Image();
    img.src = boomImageList[i];
}



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
    boomImage.style.width = 260 + "px"
    boomImage.style.height = "auto"
    boomImage.style.left = (x - 130)+ "px";
    boomImage.style.top = (y - 140)  + "px";
    boom[0].appendChild(boomImage);
});

/*rotate cards*/
const gallery = document.querySelector('.gallery');
const items = gallery.querySelectorAll('li');

if (window.innerWidth <= 768) {
    items.forEach((item, index) => {
        let randomAngle;
        if (index === 0) {
            randomAngle = 0;
        } else {
            randomAngle = Math.random() * 4 - 2;
        }
        item.style.transform = `rotate(${randomAngle}deg)`;
    });
}
else {
    items.forEach((item, index) => {
        let randomAngle;
        if (index === 0) {
            randomAngle = 0;
        } else {
            randomAngle = Math.random() * 2 - 1;
        }
        item.style.transform = `rotate(${randomAngle}deg)`;
    });
}



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
    docscolumnleft.style.filter = 'invert(34%) sepia(58%) saturate(535%) hue-rotate(120deg) brightness(93%) contrast(90%)'
    docscolumncenter.style.filter = 'invert(79%) sepia(81%) saturate(826%) hue-rotate(180deg) brightness(100%) contrast(89%)'
    docscolumnright.style.filter = 'invert(77%) sepia(59%) saturate(1932%) hue-rotate(329deg) brightness(97%) contrast(87%)'
    docs.style.backgroundColor = "#F4F0E9"
    docsNav.style.backgroundColor = "#F4F0E9"
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';



    setTimeout(function() {

    docs.style.display = "none"
    textBg.style.display = "none"
    }, 300)

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

    docscolumnleft.style.filter = 'invert(34%) sepia(58%) saturate(535%) hue-rotate(120deg) brightness(93%) contrast(90%)'
    docscolumncenter.style.filter = 'invert(79%) sepia(81%) saturate(826%) hue-rotate(180deg) brightness(100%) contrast(89%)'
    docscolumnright.style.filter = 'invert(77%) sepia(59%) saturate(1932%) hue-rotate(329deg) brightness(97%) contrast(87%)'
    docs.style.backgroundColor = "#F4F0E9"
    docsNav.style.backgroundColor = "#F4F0E9"
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'auto';



    setTimeout(function() {

    docs.style.display = "none"
    textBg.style.display = "none"
    }, 300)

})

const audio = document.getElementById("audio");
const audios = [audio]


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
        console.log(audio);
        document.body.style.overflow = 'hidden';

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






//슬라이드 넘기기

    
    nextBtn.addEventListener('click', () => {


        if (currentIndex < 1) {

            currentIndex++;
            nextBtn.style.visibility = 'hidden'
            prevBtn.style.visibility = 'visible'

            docscolumnleft.style.filter = 'invert(20%) sepia(7%) saturate(2971%) hue-rotate(11deg) brightness(94%) contrast(79%)'
            docscolumncenter.style.filter = 'invert(31%) sepia(24%) saturate(269%) hue-rotate(161deg) brightness(98%) contrast(90%)'
            docscolumnright.style.filter = 'invert(40%) sepia(7%) saturate(2013%) hue-rotate(276deg) brightness(93%) contrast(88%)'

            characterdetail.innerHTML = textcaption
            characterdescription.innerHTML = textdescription 
            charactername.innerHTML = textname
            characterimg.innerHTML = textphoto

            docs.style.backgroundColor = "#A5A3A0"
            docsNav.style.backgroundColor = "#A5A3A0"

        }

    });
    
    prevBtn.addEventListener('click', () => {

        if (currentIndex > 0) {
            currentIndex--;
            nextBtn.style.visibility = 'visible'
            prevBtn.style.visibility = 'hidden'

            docscolumnleft.style.filter = 'invert(34%) sepia(58%) saturate(535%) hue-rotate(120deg) brightness(93%) contrast(90%)'
            docscolumncenter.style.filter = 'invert(79%) sepia(81%) saturate(826%) hue-rotate(180deg) brightness(100%) contrast(89%)'
            docscolumnright.style.filter = 'invert(77%) sepia(59%) saturate(1932%) hue-rotate(329deg) brightness(97%) contrast(87%)'

           
            characterdetail.innerHTML = textcharacterdetail
            characterdescription.innerHTML = textcharacterdescription
            charactername.innerHTML = textcharactername
            characterimg.innerHTML = textcharacterimg
            docs.style.backgroundColor = "#F4F0E9"
            docsNav.style.backgroundColor = "#F4F0E9"


        }
    });




