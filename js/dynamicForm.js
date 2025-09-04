const section = document.createElement("section");
const heading = document.createElement("h2");
const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
const labelName = document.createElement("label");
const inputName = document.createElement("input");
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const textArea = document.createElement("textarea");
const button = document.createElement("button");
const breakLine = document.createElement("br");
const footer = document.querySelector("footer");//attching it to footer
//section attributes and appending to the DOM
section.setAttribute("id","leaveMessage");//for navigation
// Setting text content for the heading
heading.textContent = "Leave a Message";
//form attributes
form.setAttribute("name","leaveMessage");
//button attributes and text content
button.setAttribute("type","submit");
button.textContent = "Submit";
// Setting attributes and text content for the name input field
labelName.setAttribute("for","name");
labelName.textContent = "Name: ";
inputName.setAttribute("type","text");
inputName.setAttribute("id","name");//for label association
inputName.setAttribute("required","");
inputName.setAttribute("name","usersName");
// Setting attributes and text content for the email input field
labelEmail.setAttribute("for","email");
labelEmail.textContent = "Email: ";
inputEmail.setAttribute("type","text");
inputEmail.setAttribute("id","email");//for label association
inputEmail.setAttribute("required","");
inputEmail.setAttribute("name","usersEmail");
// Setting attributes for the textarea
textArea.setAttribute("name","usersMessage");
textArea.setAttribute("required","");








// Appending elements to the form and section
//so stoked when i found out about chainding append method calls, makes it so much cleaner
form.append(labelName, inputName, breakLine, labelEmail, inputEmail, textArea, breakLine, button);
section.append(heading, breakLine, form);
//change classes to modal.css later
form.classList.add("centering");
section.classList.add("centering");

// Appending the section to the body before the script tag
const body = document.body;

body.insertBefore(section, footer);

console.log("*********");
console.log(section);
