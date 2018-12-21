const elementParent = document.getElementById("scroll");

elementParent.addEventListener("click", function (e) {
  if (!!e.target.dataset.scroll) {
    const idScrollElement = e.target.dataset.scroll;
    const scrollElement = document.getElementById(idScrollElement);
    const positionScrollElement = () => {
      const positionElementDefault = scrollElement.getBoundingClientRect().top + window.scrollY;
      if (window.getComputedStyle(elementParent).position === "fixed") {
        return positionElementDefault - elementParent.offsetHeight;
      } else {
        return positionElementDefault;
      }
    };
    window.scroll({
      top: positionScrollElement(),
      behavior: "smooth"
    });
  }
});
