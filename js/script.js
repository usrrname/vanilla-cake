$(document).ready(function () {
        $('.content').fadeIn();
});

function toggleNav() {
        const el = document.getElementsByClassName('menu__navbar')[0];
        this.show = () => {
                el.style.display = 'block'
        }
        this.hide = () => {
                el.style.display = 'none'
        }
        const value = el.style.display;
        if (value == 'none') {
                this.show();
        }
        if (value != 'none') {
                this.hide();
        }
        return value;
}

//toggle between responsive menu in smaller screens
const noBootstrap = () => {
        const listItems = document.getElementsByTagName('ul').children;
        const nav = listItems;
        console.log(listItems);
        for (var i = 0; i < nav.length; i++) {
                if (nav[i].firstChild.className !== 'responsive') {
                        nav[i].firstChild.className = "responsive";
                        nav[i].firstChild.style.display = "inline-block";
                } else if (nav[i].firstChild.className === 'responsive') {
                        nav[i].firstChild.className = "";
                        nav[i].firstChild.style.display = "none";
                }
        }
}
// function end