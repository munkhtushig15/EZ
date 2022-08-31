// let alim = document.getElementById("aiim");

// for (let i = 0; i < 3; i++) {
//   let b = document.createElement("div");
//   b.classList.add("haha");
//   b.id = "hjhj-" + i;
//   alim.appendChild(b);
//   alim.prepend;
// }

// // for (let i = 0; i < 100; i++) {
// let ass = document.getElementById("hjhj");

// let bas = 10;

// const fn = () => {
//   ass.style.margin = `${bas * 10}px`;

//   bas += 3;
// };

// let aas = setInterval(() => {
//   fn();
// }, 500);

// setTimeout(() => {
//   clearInterval(aas);
// }, 3000);

let btn = document.getElementById("btn");
let alim = document.getElementById("aiim");

btn.addEventListener("click", () => {
  console.log("this is ");
  if (alim.style.display === "flex") {
    alim.style.display = "none";
  } else {
    alim.style.display = "flex";
  }
});
