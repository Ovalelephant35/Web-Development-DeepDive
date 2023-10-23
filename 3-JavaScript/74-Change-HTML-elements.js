//add-change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)



const nameTag = document.createElement("h1");
nameTag.textContent = "Anurag";
document.body.append(nameTag);

const mylist = document.querySelector("#Fruits");
const item = document.createElement("li");
item.textContent = "mango";
mylist.append(item);
mylist.prepend(item);
mylist.insertBefore(item , mylist.getElementsByTagName("li")[2]);

