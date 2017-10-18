document.getElementById('nav-toggle').onclick = function() {
    document.getElementById("nav-toggle").classList.toggle("is-active");
    document.getElementById('nav').classList.toggle('nav--mobile');
    document.getElementsByTagName('body')[0].classList.toggle('nav-open');
};
