
const observer = new IntersectionObserver((entries) => {
    //checking if entry is visible on the viewport, if true add it to the 'show' class
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } /* else {
            entry.target.classList.remove('show');
        } */
    });
});

//detcting all elements of the class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

//observing every entry of the hiddenElements variable
hiddenElements.forEach((el) => observer.observe(el));


//Force to load on top of the page when reloaded. If browser doesn't support scroll restoration, change
//scroll position to the top before unloading.
if (history.scrollRestoration) { 
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
}