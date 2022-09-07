// let body = (document.body.style = "width: 100vw; height: 100vh; background-color: cyan; display: flex; align-items: center; justify-content: center;");
// let con = document.createElement("div");
// con.classList.add = "container";
// let toDo = document.createElement("div");
// toDo.classList.add = "toDo";
// let lists = document.createElement("div");
// lists.classList.add = "lists";
// con.style = "width: 600px; height: 700px; background-color: white; border-radius: 20px;";
// document.body.appendChild(con);
// con.appendChild(toDo);
// con.appendChild(lists);
// let search = document.createElement("input");
// search.classList.add = "search";
// let button = document.createElement("button");
// button.classList.add = "button";

const body = (document.body.style =
  "width: 100vw; height: 100vh; background-color: cyan; display: flex; align-items: center; justify-content: center;");
const container = document.createElement("div");
const toppp = document.createElement("div");
const bottom = document.createElement("div");
const srchh = document.createElement("input");
const btnn = document.createElement("button");
const text = document.createElement("div");
const text1 = document.createElement("div");
const text2 = document.createElement("div");
const text3 = document.createElement("div");

btnn.innerText = "Add";
text.innerText = "i will wake up at 8 in the morning";
text1.innerText = "i will practice HTML for 1 hour";
text2.innerText = "i will give time for 2 hours css";
text3.innerText = "Then i will have breakfast";

// append children

bottom.appendChild(text);
bottom.appendChild(text1);
bottom.appendChild(text2);
bottom.appendChild(text3);
toppp.appendChild(srchh);
toppp.appendChild(btnn);
container.appendChild(toppp);
container.appendChild(bottom);
document.body.appendChild(container);

// classnames

container.classList.add = "container";
srchh.classList.add = "Srch";

// style

text.style = "width: 95%; height: 15%; background-color: cyan; display: flex; align-items: center; padding-left: 5%;";
text1.style = "width: 95%; height: 15%; background-color: cyan; display: flex; align-items: center; padding-left: 5%;";
text2.style = "width: 95%; height: 15%; background-color: cyan; display: flex; align-items: center; padding-left: 5%;";
text3.style = "width: 95%; height: 15%; background-color: cyan; display: flex; align-items: center; padding-left: 5%;";
srchh.style =
  "width: 60%; height: 30%; border-radius: 5px; border: 1px solid gray; padding-left: 10px; font-size: 20px;";
btnn.style =
  "width: 12%; height: 30%; background-color: cyan; border: 1px solid gray; border-radius: 10px;";
toppp.style =
  "width: 100%; height: 20%; display: flex; align-items: center; justify-content: space-between;";
bottom.style =
  "width: 100%; height: 80%; display: flex; flex-direction: column; align-items: center; gap: 5%; justify-content: center;";
container.style =
  "width: 500px; height: 500px; background-color: #fff; border-radius: 20px; display: flex; flex-direction: column; padding: 20px; justify-content: space-between;";

console.log(container);
