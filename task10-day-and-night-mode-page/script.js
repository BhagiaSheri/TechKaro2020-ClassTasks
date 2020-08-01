
// *************** function for dark mode!!! *************************

function darkMode() {
    
    // get toggle button to change icon
    let toggleBtn = document.getElementById("toggle-btn");
    toggleBtn.classList.toggle("fa-sun");
    
    // get other elements to apply changes on toggle
    let body = document.body;
    let navbar = document.getElementById("navbar");
    let navHeading = document.querySelector(".article-main-heading a");
    let navSpan = document.querySelector("#nav-left-items span");
    let articleHeadings = document.querySelectorAll(".article-heading a");

    // call css classes for dark mode changes
    body.classList.toggle("dark-mode-body");
    navbar.classList.toggle("dark-mode-navbar");
    toggleBtn.classList.toggle("dark-mode-toggle-btn");
    navHeading.classList.toggle("dark-mode-nav-heading");
    navSpan.classList.toggle("dark-mode-nav-span");

    // dark mode color changes for multiple articles headings
    articleHeadings.forEach(element => {
        element.classList.toggle("dark-mode-article-heading");
    });

    // on selection of text - background and text color changing
    document.documentElement.style.setProperty("--selection-bg", "#fcfcfc");
    document.documentElement.style.setProperty("--selection-color", "#030303");
}