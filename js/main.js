const r = new Router({
    about: new Layout(new Page('menu.html'), new Page('about.html')),
    resources: new Layout(new Page('menu.html'), new Page('resources.html')),
    contact: new Layout(new Page('menu.html'), new Page('contact.html')),
    '#default': new Layout(new Page('menu.html'), new Page('home.html'))
  },
  document.querySelector('main')
);