//target all elements to save to constants
const homebtn=document.querySelector("#homebtn");
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const menuItemsList=document.querySelector("nav ul");
var allpages=document.querySelectorAll(".page");

//select all subtopic pages
function hideall(_hiddenitems){ //function to hide all pages
    for(let _hiddenitem of _hiddenitems){ //go through all subtopic pages
        _hiddenitem.style.display="none"; //hide it
    }
}

function show(pgno){ //function to show selected page no
    hideall(allpages);
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    onepage.style.display="block"; //show the page
}


/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
homebtn.addEventListener("click", function () {
    show(0);
})
page1btn.addEventListener("click", function () {
    show(1);
});
page2btn.addEventListener("click", function () {
    show(2);
});
page3btn.addEventListener("click", function () {
    show(3);
});

hideall(allpages);
show(0);