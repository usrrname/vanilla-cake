const r = new Router({
    about: new Layout(new Page('menu.html'), new Page('about.html')),
    recipes: new Layout(new Page('menu.html'), new Page('recipes.html')),
    contact: new Layout(new Page('menu.html'), new Page('contact.html')),
    '#default': new Layout(new Page('menu.html'), new Page('home.html'))
  },
  document.querySelector('main')
);