let tabs = document.querySelectorAll(".tabs li");
let tabContents = document.querySelectorAll(".tab-content div");

tabs.forEach ((tab,index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach(content => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});


const navIcon = document.querySelector(".nav-icon");
const navMenu = document.querySelector(".nav-menu");

navIcon.addEventListener("click", () => {
    // navIcon.classList.toggle(".nav-open");
    navMenu.classList.toggle("open");
    
});

document.querySelectorAll("nav-menu").forEach(n => n.
    addEventListener("click", () => {
        navMenu.classList.remove("open");
    })
);

function clearText() {
    document.getElementById("nav-icon").value = ""
};




// document.getElementById("nav").classList.toggle("change");

// let mobileTabs = document.querySelectorAll(".mobile-tabs h3");
// let mobileContents = document.querySelectorAll(".mobile-tab-content div");

// mobileTabs.forEach ((tab,index) => {
//     tab.addEventListener("click", () => {
//         mobileContents.forEach(content => {
//             content.classList.remove("active");
//         });
//         mobileTabs.forEach((tab) => {
//             tab.classList.remove("active");
//         });
//         mobileContents[index].classList.add("active");
//         mobileTabs[index].classList.add("active");
//     });
// });

// let mobileTabs = document.querySelectorAll(".mobile-tabs h3");
// let mobileTabContents = document.querySelectorAll("mobile-tab-content div");

// mobileTabs.forEach ((tab,index) => {
//     tab.addEventListener("click", () => {
//         mobileTabContents.forEach(content => {
//             content.classList.remove("active");
//         });
//         mobileTabs.forEach((tab) => {
//             tab.classList.remove("active");
//         });
//         mobileTabContents[index].classList.add("active");
//         mobileTabs[index].classList.add("active");
//     });
// });
