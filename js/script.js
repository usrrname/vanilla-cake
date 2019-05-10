$(document).ready(function()
{
  $('.content').fadeIn();
});

//toggle between responsive menu in smaller screens
const listItems= document.getElementsByTagName('ul').children;
const noBootstrap = () => {
        const nav = listItems;
      console.log(listItems);
                for (var i = 0; i < nav.length; i++) {
                if (nav[i].firstChild.className !== 'responsive') {           
                        nav[i].firstChild.className = "responsive";
                      nav[i].firstChild.style.display = "inline-block";
                }
                else if (nav[i].firstChild.className === 'responsive'){
                        nav[i].firstChild.className = "";
                nav[i].firstChild.style.display = "none";
        }
        }       
}
// function end