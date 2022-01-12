/*BASIC WEB*/

document.querySelector("#htmlrund").addEventListener("mouseover", startAnimation1);


function startAnimation1() {
    console.log("sidenVises1");

    document.querySelector("#html").classList.add("dukop");

    document.querySelector("#html").classList = "";

    document.querySelector("#html").offsetLeft;

    document.querySelector("#html").classList.add("dukop");
    document.querySelector("#html").addEventListener("animationend", visTing1);
}

function visTing1() {
    console.log("Hey");

    document.querySelector('.html_sprite').classList.add("show");

    document.querySelector("#htmlrund").addEventListener("mouseout", endHover1);
}
 
function endHover1() {
    document.querySelector('.html_sprite').classList.remove("show");
    // document.querySelector('.html_sprite').classList = "";

    // document.querySelector('.html_sprite').offsetLeft;

    // document.querySelector('.html_sprite').classList.add("dukop");
}

/*BASIC UX*/

document.querySelector("#uxrund").addEventListener("mouseover", startAnimation2);

function startAnimation2() {
    console.log("sidenVises");

    document.querySelector("#ux").classList.add("dukop");

    document.querySelector("#ux").classList = "";

    document.querySelector("#ux").offsetLeft;

    document.querySelector("#ux").classList.add("dukop");
    document.querySelector("#ux").addEventListener("animationend", visTing2);
}

function visTing2() {
    console.log("Hey");

    document.querySelector('.ux_sprite').classList.add("show");

    document.querySelector("#uxrund").addEventListener("mouseout", endHover2);
}
 
function endHover2() {
    console.log("endhover2");
    document.querySelector('.ux_sprite').classList.remove("show");
}

/*BASIC ANIMATION*/

document.querySelector("#animationrund").addEventListener("mouseover", startAnimation3);

function startAnimation3() {
    console.log("sidenVises3");

    document.querySelector("#animation").classList.add("dukop");

    document.querySelector("#animation").classList = "";

    document.querySelector("#animation").offsetLeft;

    document.querySelector("#animation").classList.add("dukop");

    document.querySelector("#animation").addEventListener("animationend", visTing3);
}

function visTing3() {
    console.log("Hey3");

    document.querySelector('.animation_sprite').classList.add("show");

    document.querySelector("#animationrund").addEventListener("mouseout", endHover3);
}
 
function endHover3() {
    console.log("endhover3");
    document.querySelector('.animation_sprite').classList.remove("show");
}
 
/*BASIC CONTENT*/

document.querySelector("#contentrund").addEventListener("mouseover", startAnimation4);


function startAnimation4() {
    console.log("sidenVises1");

    document.querySelector("#content").classList.add("dukop");

    document.querySelector("#content").classList = "";

    document.querySelector("#content").offsetLeft;

    document.querySelector("#content").classList.add("dukop");
    document.querySelector("#content").addEventListener("animationend", visTing4);
}

function visTing4() {
    console.log("Hey");

    document.querySelector('.content_sprite').classList.add("show");

    document.querySelector("#contentrund").addEventListener("mouseout", endHover4);
}
 
function endHover4() {
    document.querySelector('.content_sprite').classList.remove("show");
}
