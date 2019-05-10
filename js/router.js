class Router {
  constructor(routes, el) {
    this.routes = routes;
    this.el = el;
    this.addClass = function (elem, myClass) {
      elem = document.querySelector(elem);
      if (elem) {
        elem = [elem]
      }
      for (let i in elem) {
        // if class is not already found
        if ((' ' + elem[i].className + ' ').indexOf(' ' + myClass + ' ') < 0) {
          // add class
          return elem[i].classList.add(myClass);
        }
      }
    };
    this.removeClass = function (elem, myClass) {
      elem = document.querySelector(elem);
      if (elem) {
        elem = [elem]
      }
      for (let i in elem) {
        for (let j in elem[i].classList) {
          if (elem[i].classList[j] == myClass) {
            return elem[i].classList.remove(myClass);
          } else {
            return "no matching class to remove";
          }
        }
      }
    };
    window.onhashchange = this.hashChanged.bind(this);
    this.hashChanged();
  }

  async hashChanged(ev) {
    if (window.location.hash.length > 0) {
      const pageName = window.location.hash.substr(1);
      await this.removeClass('body', 'body__background');
      this.show(pageName);
    } else if (this.routes['#default']) {
      this.addClass('body', 'body__background');
      this.show('#default');
    }
  }

  async show(pageName) {
    const page = this.routes[pageName];
    await page.load();
    this.el.innerHTML = '';
    page.show(this.el);
  }
}