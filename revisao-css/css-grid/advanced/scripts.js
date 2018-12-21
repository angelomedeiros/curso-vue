const colors = {
  p: "#388e3c",
  div: "#1565c0",
  span: "#e53935",
  section: "#f67809",
  ul: "#5e35b1",
  ol: "#fbc02d",
  header: "#d81b60",
  nav: "#64dd17",
  main: "#00acc1",
  footer: "#304ffe",
  form: "#9f6581",
  body: "#25b6da",
  padrao: "#616161",
  get(tag) {
    return this[tag] ? this[tag] : this.padrao;
  }
};

/*
 *
 * Script to insert tagname into element without class
 *
 */

// const elements = document.body.childNodes;
//
// elements.forEach(element => {
//   if (element.nodeType === 1 && element.nodeName !== "SCRIPT") {
//     const elementName = element.nodeName.toLocaleLowerCase();
//     element.insertAdjacentHTML("afterbegin", `<span>${elementName}</span>`);
//   }
// });

/*
 *
 * Script to insert tagname into element with class
 *
 */

const elementsByClassName = document.querySelectorAll(".tag");

elementsByClassName.forEach(element => {
  const elementName = element.nodeName.toLocaleLowerCase();
  element.style.borderColor = colors.get(elementName);
  element.insertAdjacentHTML(
    "afterbegin",
    `<span style="background-color: ${colors.get(
      elementName
    )}">${elementName}</span>`
  );
});
