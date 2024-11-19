const container = document.querySelector("#container");


// a <p> with red text that says “Hey I’m red!”
const content = document.createElement("p");
content.textContent = "Hey I'm red!";
content.style.color = "red";
container.appendChild(content);

// an <h3> with blue text that says “I’m a blue h3!”

const h3content = document.createElement("h3")
h3content.textContent = "I'm a blue h3!" 
h3content.style.color = "blue";
container.appendChild(h3content);

// a <div> with a black border and pink background color
const divContent = document.createElement("div");
divContent.style.backgroundColor = "blue";
divContent.style.border = "1px solid black"

// with another <h1> that says “I’m in a div”
const h1Content = document.createElement("h1")
h1Content.textContent = "I'm in a div";
divContent.appendChild(h1Content);
// a <p> that says “ME TOO!”
const pContent = document.createElement("p");
pContent.textContent = "ME TOO!";
divContent.appendChild(pContent);


container.appendChild(divContent);



