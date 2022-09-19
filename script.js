// Select and Manipulate on individual elements
// -- getElementById

const list = document.getElementById("list")
console.log(list);
// list.textContent = "Hello World"         
// list.textContent = "<h1>Hello World</h1>"         
// list.innerHTML = "<h1>Hello World</h1>"

// Select and Manipulate on individual elements
// -- querySelector

const el = document.querySelector("ul li:nth-child(2)")
el.querySelector('p .fa-times').style.color = "yellow"

// Select and Manipulate on multiple elements
// -- looping over getElementsByClassName

const icons = document.getElementsByClassName("fa")
console.log(icons);

for(let i = 0; i < icons.length; i++){
    console.log(icons[i]);
    icons[i].style.color = "blue"
}
