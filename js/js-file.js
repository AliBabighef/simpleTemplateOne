// document.querySelector("body").innerHTML = location.href
let buttonSet = document.querySelector(".icon span");

let conOfOptoin = document.querySelector(".intro .setting-con");

let con = document.querySelector(".con");

let allColor = document.querySelectorAll(".option li");

let img = [
    "background-2.JPEG",
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg"
]

let randBackBut = document.querySelectorAll(".option .stateChoosen span");

let statBack = true;

let stopBackgroundInt;

if (localStorage.getItem("SaveStateBack") !== null) {

    document.querySelectorAll(".stateChoosen span").forEach(span => {

        span.classList.remove("active")

    })


    if (localStorage.getItem("SaveStateBack") === "true") {

        statBack = true;

        if (document.querySelector(".stateChoosen span").dataset.background === "yes") {

            document.querySelector(".stateChoosen span").classList.add("active")

        }

    } else if (localStorage.getItem("SaveStateBack") === "false") {

        statBack = false;

        if (document.querySelector(".stateChoosen span").nextElementSibling.dataset.background === "no") {

            document.querySelector(".stateChoosen span").nextElementSibling.classList.add("active");


        }


    }

}


allColor.forEach((li, idxLi) => {

    li.addEventListener("click", function (e) {

        localStorage.setItem("saveColor", e.target.dataset.color)

        document.documentElement.style.setProperty("--min-color", localStorage.getItem("saveColor"))

        document.querySelectorAll(".option li").forEach(ReAllLi => {

            ReAllLi.classList.remove("active");

        })

        li.classList.add("active");

    })
    // console.log(li)
    if (localStorage.getItem("saveColor") !== null) {

        if (localStorage.getItem("saveColor") === li.dataset.color) {

            li.classList.add("active")
            document.documentElement.style.setProperty("--min-color", localStorage.getItem("saveColor"))

        }

    }

})

document.querySelector(".home-icon").addEventListener("click", function (e) {

    document.querySelector(".home").scrollIntoView({

        behavior: "smooth"

    })

})

buttonSet.onclick = function () {

    conOfOptoin.classList.toggle("closed")
    conOfOptoin.firstElementChild.classList.toggle("return");

    document.querySelector(".home-icon").classList.toggle("return");

    document.querySelector(".home").classList.toggle("return");

}


document.querySelectorAll(".stateChoosen span").forEach(allSpan => {

    allSpan.addEventListener("click", function (e) {


        randBackBut.forEach(span => {

            span.classList.remove("active")

        })

        e.target.classList.add("active")

        if (e.target.dataset.background === "yes") {

            statBack = true;
            localStorage.setItem("SaveStateBack", statBack);
            randomiseBack()


        } else {

            statBack = false;
            localStorage.setItem("SaveStateBack", statBack);
            clearInterval(stopBackgroundInt)

        }



    })

})

function randomiseBack() {


    if (statBack === true) {

        stopBackgroundInt = setInterval(function () {

            let randomImg = Math.floor(Math.random() * img.length);

            con.style.backgroundImage = `url("image/background/${img[randomImg]}")`;


        }, 10000)

    } else {

        clearInterval(stopBackgroundInt)

    }

}
randomiseBack()

let arryImg = Array.from(img);

function creatingEllemnts() {

    // create Ellemnt and put img inside it

    arryImg.forEach(img => {

        let crSpan = document.createElement("span");

        let crImg = document.createElement("img");

        crImg.src = `image/background/${img}`;

        crImg.dataset.img = `image/background/${img}`;

        crSpan.append(crImg);

        document.querySelector(".stateChoosen .placeImg").appendChild(crSpan);

    })

    let allSpn = document.querySelectorAll(".placeImg span img");

    // i added class active and remove all active not neccessty
    document.querySelectorAll(".placeImg span img").forEach(spanImg => {

        spanImg.addEventListener("click", function (e) {

            allSpn.forEach(reAllAct => {

                reAllAct.classList.remove("active");

            })

            e.target.classList.add("active");

            // added background sellect in containner and save it in localStorage
            con.style.backgroundImage = `url(${e.target.dataset.img})`;

            localStorage.setItem("saveBack", e.target.dataset.img)

            // spanImg.style.opacity = `${localStorage.removeItem("numOfOp")}`;



        })

        // i did loop for if data dataset equal number of images ellements 
        // for save too opcity of background in localStorage

        if (localStorage.getItem("saveBack") === spanImg.dataset.img) {

            localStorage.setItem("numOfOp", 1);
            spanImg.classList.add("active");

        }


    })


}

creatingEllemnts()

if (localStorage.getItem("saveBack") !== null) {

    con.style.backgroundImage = `url(${localStorage.getItem("saveBack")})`;

}

let progerrsEl = document.querySelector(".skils")

this.onscroll = function () {

    let WindTopHeight = window.pageYOffset;

    let winNurmalHeight = window.innerHeight;

    let topHeiEll = progerrsEl.offsetTop;

    let natHeiEll = progerrsEl.offsetHeight;

    if (WindTopHeight > (topHeiEll + natHeiEll - winNurmalHeight)) {

        let arr = [];

        document.querySelectorAll(".progreess div span").forEach((span, i) => {

            arr.push(span.dataset.width);

            span.dataset.w = arr[i];

            span.style.width = span.dataset.w;

        })


    } else {

        document.querySelectorAll(".progreess div span").forEach(span => {

            span.style.width = span.style.width = "0%";

        })

    }

}

function greatingImg() {


    arryImg.forEach(img => {

        let crDiv = document.createElement("div");
        crDiv.className = "img";

        let crImg = document.createElement("img");
        crImg.src = `image/background/${img}`;
        crImg.dataset.imgs = `image/background/${img}`;
        crDiv.appendChild(crImg)

        document.querySelector(".galory-img").appendChild(crDiv)

        crImg.addEventListener("click", function (e) {

            let cropacityDiv = document.createElement("div");
            cropacityDiv.className = "opacity";
            document.body.appendChild(cropacityDiv);

            let crDiv2 = document.createElement("div");
            crDiv2.className = "img-scale";

            let crImg2 = document.createElement("img");
            crImg2.src = e.target.dataset.imgs;
            // crImg2.dataset.imgs = e.target.dataset.imgs
            crDiv2.appendChild(crImg2)

            let crSpn = document.createElement("span");
            let crTxtSpn = document.createTextNode("x");
            crSpn.appendChild(crTxtSpn);
            crDiv2.appendChild(crSpn);

            document.querySelector(".paceImgScal").appendChild(crDiv2);
            crSpn.addEventListener("click", function () {

                document.querySelectorAll(".paceImgScal .img-scale").forEach(allEll => {

                    allEll.remove();
                    cropacityDiv.remove();

                })

            })

        })


    })

}
greatingImg()

let allSection = document.querySelectorAll(".header a");

allSection.forEach(section => {

    // creat place section for append it 
    let crDiv = document.createElement("div");
    crDiv.className = "bullets";

    let creChildDiv = document.createElement("div");
    creChildDiv.className = "tooltip";
    creChildDiv.dataset.saveSection = `.${section.textContent}`;
    let crChildtxt = document.createTextNode(section.textContent)
    creChildDiv.appendChild(crChildtxt);

    crDiv.appendChild(creChildDiv);

    document.querySelector(".nav-bullets").appendChild(crDiv);

    creChildDiv.addEventListener("click", function (e) {

        document.querySelector(e.target.dataset.saveSection).scrollIntoView({

            behavior: "smooth"

        })

    })

    section.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(`.${e.target.dataset.anchor}`).scrollIntoView({

            behavior: "smooth"

        })

    })

})


document.querySelectorAll(".option-bullets span").forEach(e => {

    e.addEventListener("click", function (ell) {

        document.querySelectorAll(".option-bullets span").forEach(reAllAct => {

            reAllAct.classList.remove("active");

        })

        ell.target.classList.add("active")

        if (ell.target.dataset.bullets === "yes") {

            localStorage.setItem("saveBullets", "yes")

            document.querySelector(".option-bullets .h4").textContent = "shown Bullets";

            document.querySelectorAll(".nav-bullets .bullets ").forEach(ell => {

                ell.style.display = "block"

            })


        } else {

            localStorage.setItem("saveBullets", "no")

            document.querySelector(".option-bullets .h4").textContent = "hidden bullets";

            document.querySelectorAll(".nav-bullets .bullets").forEach(ell => {

                ell.style.display = "none"

            })



        }
    })

})

if (localStorage.getItem("saveBullets") !== null) {

    document.querySelectorAll(".option-bullets span").forEach(el => {

        el.classList.remove("active");

        if (el.dataset.bullets === localStorage.getItem("saveBullets")) {

            el.classList.add("active");

            if (localStorage.getItem("saveBullets") === "yes") {

                document.querySelector(".option-bullets .h4").textContent = "hidden bullets";

                document.querySelectorAll(".nav-bullets .bullets").forEach(ell => {

                    ell.style.display = "block"

                })

            } else {

                document.querySelector(".option-bullets .h4").textContent = "hidden bullets";

                document.querySelectorAll(".nav-bullets .bullets").forEach(ell => {

                    ell.style.display = "none"

                })

            }

        }

    })

}

document.querySelector(".reset").onclick = _ => {

    localStorage.clear();
    window.location.reload();

}

let navMenu = document.querySelector(".nav-menu");

let link = document.querySelector(".link");

let menu = document.querySelector(".nav-menu");

link.onclick = function (e) {

    e.stopPropagation();

}

// starting deal with link 

menu.addEventListener("click", function (e) {

    document.querySelectorAll(".nav-menu span").forEach(spn => {

        spn.addEventListener("click", function (e) {


            e.stopPropagation();
            // e.preventDefault();

        })
        link.classList.toggle("open")
        navMenu.classList.toggle("menu-active")

    })

    // link.classList.toggle("open")
    // navMenu.classList.toggle("menu-active")

})
// starting deal with link 

let navHeader = document.querySelectorAll(".nav-header span");

let optionHeader = document.querySelectorAll(".option-header span");

optionHeader.forEach(span => {

    span.addEventListener("click", function (e) {

        navHeader.forEach(ell => {

            ell.classList.remove("active");

        })

        e.target.classList.add("active");


        if (e.target.dataset.header === "static") {

            localStorage.setItem("saveHeader", e.target.dataset.header);

            document.querySelector(".header .containner-link").style.position = localStorage.getItem("saveHeader");

        } else {

            localStorage.setItem("saveHeader", e.target.dataset.header);

            document.querySelector(".header .containner-link").style.position = localStorage.getItem("saveHeader");


        }

    })


    if (localStorage.getItem("saveHeader") !== null) {

        span.classList.remove("active");

        if (localStorage.getItem("saveHeader") === span.dataset.header) {

            span.classList.add("active");

            document.querySelector(".header .containner-link").style.position = localStorage.getItem("saveHeader");

        }

    }

})


