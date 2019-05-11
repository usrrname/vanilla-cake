$(document).ready(function () {
        $('section').fadeIn();
});

function toggleNav() {
        const el = document.getElementsByClassName('menu__navbar')[0];
        const value = el.style.display

        this.show = () => {
                el.style.display = 'flex';
        }
        this.hide = () => {
                el.style.display = 'none';
        }
        if (value == 'none' || value == '') {
                return this.show();
        }
        if (value != 'none') {
                return this.hide();
        }
}

//toggle between responsive menu in smaller screens
const noBootstrap = () => {
        const listItems = document.getElementsByTagName('ul').children;
        const nav = listItems;
        for (let i in nav) {
                if (nav[i].children.className !== 'responsive') {
                        nav[i].classList.add = "responsive";
                        nav[i].style.display = "inline-block";
                } else if (nav[i].firstChild.className == 'responsive') {
                        nav[i].firstChild.className = "";
                        nav[i].firstChild.style.display = "none";
                }
        }
}
// function end