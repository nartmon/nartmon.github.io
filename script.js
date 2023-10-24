import data from './data.js';

console.log(data[0].number)

const gun = document.getElementsByClassName("gun");
const boom = document.getElementsByClassName("boom");
const boomImageList = ["./_src/boom1.png", "./_src/boom2.png", "./_src/boom3.png", "./_src/boom4.png", "./_src/boom5.png"]

const content = document.querySelector('.content');

content.addEventListener("click", function(event) {
    const x = event.pageX
    const y = event.pageY

    /*gun*/
    const gunImage = document.createElement('img');
    gunImage.src = "./_src/bullet.png";
    gunImage.style.width = "12px"
    gunImage.style.height = "12px"
    gunImage.style.left = (x - 10) + "px";
    gunImage.style.top = (y - 10)  + "px";
    gun[0].appendChild(gunImage);

    /*boom*/

    let boomImageSrc = boomImageList[Math.floor(Math.random() * 5)]
    const boomImage = document.createElement('img');
    boomImage.src = boomImageSrc
    boomImage.style.width = "200px"
    boomImage.style.height = "200px"
    boomImage.style.left = (x - 100)+ "px";
    boomImage.style.top = (y - 100)  + "px";
    boom[0].appendChild(boomImage);
});

/*rotate cards*/
const gallery = document.querySelector('.gallery');
const items = gallery.querySelectorAll('li');
items.forEach(item => {
    const randomAngle = Math.floor(Math.random() * 2.5 - 1.25);
    item.style.transform = `rotate(${randomAngle}deg)`;
});


/*close docs*/
const docsNav = document.querySelector('.docsNav');
const docs = document.querySelector('.docs');
const textBg = document.querySelector('.textBg');

docsNav.addEventListener("click", function(event) {
    docs.style.display = "none"
    textBg.style.display = "none"
})
textBg.addEventListener("click", function(event) {
    docs.style.display = "none"
    textBg.style.display = "none"
})

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


listItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
        docs.style.display = "flex"
        textBg.style.display = "flex"
        name.innerHTML = data[index].name
        photo.innerHTML = data[index].photo
        caption.innerHTML = data[index].caption
        description.innerHTML = data[index].description
        characterdetail.innerHTML = data[index].characterdetail
        characterdescription.innerHTML = data[index].characterdescription
        charactername.innerHTML = data[index].charactername
        characterimg.innerHTML = data[index].characterimg
        
    });
});


const slide = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = document.querySelector('.future').clientWidth;

let currentIndex = 0;

// 이미지 로드 후에 슬라이더의 너비를 가져오기

    
    nextBtn.addEventListener('click', () => {
        const slideWidth = document.querySelector('.future').clientWidth;

        console.log(slideWidth)

        if (currentIndex < 1) {
            currentIndex++;
            slide.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            nextBtn.style.visibility = 'hidden'
            prevBtn.style.visibility = 'visible'
        }

    });
    
    prevBtn.addEventListener('click', () => {

        const slideWidth = document.querySelector('.future').clientWidth;

        if (currentIndex > 0) {
            currentIndex--;
            slide.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            nextBtn.style.visibility = 'visible'
            prevBtn.style.visibility = 'hidden'
        }
    });

