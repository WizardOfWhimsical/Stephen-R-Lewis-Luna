// This script dynamically creates a leave message form and appends it to the DOM
const section = document.createElement("section");
const heading = document.createElement("h2");
const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
const labelName = document.createElement("label");
const inputName = document.createElement("input");
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const textArea = document.createElement("textarea");
const submitButton = document.createElement("button");
const closeButton = document.createElement("button");
const breakLine = document.createElement("br");
//attching it to footer
const body = document.body;
const footer = document.querySelector("footer");
//section attributes and appending to the DOM
section.setAttribute("id","leaveMessage");//for navigation
// Setting text content for the heading
heading.textContent = "Leave a Message";
//form attributes
form.setAttribute("name","leaveMessage");
//button attributes and text content
submitButton.setAttribute("type","submit");
submitButton.setAttribute("id","submit");
closeButton.setAttribute("type","button");
closeButton.setAttribute("id","close");
submitButton.textContent = "Submit";
closeButton.textContent = "Close";
closeButton.classList.add("grabbingCursor");
submitButton.classList.add("grabbingCursor");
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
form.append(labelName, inputName, breakLine, labelEmail, inputEmail, textArea, breakLine, submitButton, breakLine, closeButton);
section.append(heading, breakLine, form);
//change classes to modal.css later
form.classList.add("centering");
section.classList.add("leaveMessageModal");
section.classList.add("hidden");

// Appending the section to the body before the script tag
body.insertBefore(section, footer);

//making button to toggle modal visibility for leave message form
const leaveMessageButton = document.createElement("h2");
leaveMessageButton.setAttribute("id","leaveMessageButton");
// leaveMessageButton.setAttribute("type","button");
leaveMessageButton.textContent = "Leave a Message";
leaveMessageButton.classList.add("centering");
leaveMessageButton.classList.add("grabbingCursor");
body.insertBefore(leaveMessageButton, footer);
// Adding event listener to toggle visibility of the leave message section
leaveMessageButton.addEventListener("click", () => {
  section.classList.toggle("hidden");
  leaveMessageButton.classList.toggle("hidden");
  console.log("Leave Message Button Clicked");
});

closeButton.addEventListener("click", () => {
  section.classList.toggle("hidden");
  leaveMessageButton.classList.toggle("hidden");
  console.log("Close Button Clicked");
});
console.log("*********");
console.log(section);
