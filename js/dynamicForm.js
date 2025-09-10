/*************************
 *DYNAMIC FORM JAVASCRIPT 
**************************/

const section = document.createElement("section");
const heading = document.createElement("h2");
const form = document.createElement("form");

const labelName = document.createElement("label");
const inputName = document.createElement("input");
const labelEmail = document.createElement("label");
const inputEmail = document.createElement("input");
const textArea = document.createElement("textarea");

const submitButton = document.createElement("button");
const closeButton = document.createElement("button");

const nameDiv = document.createElement("div");
const emailDiv = document.createElement("div");
const containerDiv = document.createElement("div");
const btnContainerDiv = document.createElement("div");

const leaveMessageButton = document.createElement("h2");

const script = document.querySelector("script[src='../js/footer.js']");
const footer = document.querySelector("footer");

const body = document.body;

section.setAttribute("id","leaveMessage");

heading.textContent = "Leave a Message";

form.setAttribute("name","leaveMessage");

closeButton.textContent = "Close";
closeButton.classList.add("grabbingCursor","button-uniform","callToActionButton");
setAttributes(closeButton, {"type":"button","id":"close" })

submitButton.textContent = "Submit";
submitButton.classList.add("grabbingCursor","button-uniform","basicButton");
setAttributes(submitButton,{"type":"submit","id":"submit"})

labelName.textContent = "Name: ";
setAttributes(labelName, {
  "for":"name", "type":"text", "id":"name",
  "name":"usersName", "required":""
});
inputName.classList.add("spacingBelowInput");

labelEmail.textContent = "Email: ";
setAttributes(labelName, {
"for":"email","type":"text","id":"email","name":"usersEmail","pattern":"^([\\w]+)@([a-z]+)\\.([a-z]{3})$","title":"Please enter a valid email address","required":true
})
inputEmail.classList.add("spacingBelowInput");

setAttributes(textArea,{
"name":"usersMessage", "placeholder":"Leave a message here...", "required":""
})
textArea.classList.add("spacingBelowInput");

form.classList.add("centering");
section.classList.add("leaveMessageModal","hidden");

leaveMessageButton.setAttribute("id","leaveMessageButton");
leaveMessageButton.textContent = "Leave a Message";
leaveMessageButton.classList.add("centering","personalizedButton","callToActionButton","grabbingCursor");

nameDiv.append(labelName, inputName);
emailDiv.append(labelEmail, inputEmail);
containerDiv.append(nameDiv, emailDiv);
btnContainerDiv.append(submitButton, closeButton);
form.append(containerDiv, textArea, btnContainerDiv);
section.append(heading, form);

body.insertBefore(section, footer);
body.insertBefore(leaveMessageButton, footer);

leaveMessageButton.addEventListener("click", () => {
    navigateToMessagesPage();
});
