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
const script = document.querySelector("script[src='../js/footer.js']");

const body = document.body;
const footer = document.querySelector("footer");

section.setAttribute("id","leaveMessage");

heading.textContent = "Leave a Message";

form.setAttribute("name","leaveMessage");

submitButton.setAttribute("type","submit");
submitButton.setAttribute("id","submit");
closeButton.setAttribute("type","button");
closeButton.setAttribute("id","close");

submitButton.textContent = "Submit";
closeButton.textContent = "Close";

closeButton.classList.add("grabbingCursor");
closeButton.classList.add("button-uniform");
closeButton.classList.add("callToActionButton");
submitButton.classList.add("grabbingCursor");
submitButton.classList.add("button-uniform");
submitButton.classList.add("basicButton");

labelName.setAttribute("for","name");
labelName.textContent = "Name: ";
inputName.setAttribute("type","text");
inputName.setAttribute("id","name");
inputName.setAttribute("required","");
inputName.setAttribute("name","usersName");
inputName.classList.add("spacingBelowInput");

labelEmail.setAttribute("for","email");
labelEmail.textContent = "Email: ";
inputEmail.setAttribute("type","text");
inputEmail.setAttribute("id","email");
inputEmail.setAttribute("required","");
inputEmail.setAttribute("name","usersEmail");
inputEmail.classList.add("spacingBelowInput");

textArea.setAttribute("name","usersMessage");
textArea.setAttribute("required","");
textArea.classList.add("spacingBelowInput");




form.append(labelName, inputName, breakLine, labelEmail, inputEmail, textArea, breakLine, submitButton, breakLine, closeButton);
section.append(heading, breakLine, form);

form.classList.add("centering");
section.classList.add("leaveMessageModal");
section.classList.add("hidden");

body.insertBefore(section, footer);

const leaveMessageButton = document.createElement("h2");
leaveMessageButton.setAttribute("id","leaveMessageButton");
leaveMessageButton.textContent = "Leave a Message";
leaveMessageButton.classList.add("centering");
leaveMessageButton.classList.add("personalizedButton");
leaveMessageButton.classList.add("callToActionButton");
leaveMessageButton.classList.add("grabbingCursor");

body.insertBefore(leaveMessageButton, footer);

leaveMessageButton.addEventListener("click", () => {
    navigateToMessagesPage();
});

/*************************
 * 
 *    My Locale Dev Model
 *
 * **************************/


function navigateToMessagesPage() {
  debugger;
  console.log("🔥 JS loaded");
  const currentPath = window.location.pathname;
  console.log("Current path:", currentPath);
  const fileName = currentPath.split("/").pop();
  console.log("Current path spilt", currentPath.split("/"));
  console.log("Current file name:", fileName);

  switch (fileName) {
    case "index.html":
      window.location.href = "./html/messages.html";
      break;
    case "messages.html":
        section.classList.toggle("hidden");
        leaveMessageButton.classList.toggle("visible");
        messagesSection.classList.toggle("visible");
      break;
    default:
      window.location.href = "./messages.html";
  }
}



/*************************
 * 
 *  Github Production Model
 *
 * **************************/
/*

function navigateToMessagesPage() {
  debugger;
try {
  console.log("🔥 JS loaded");
  const currentPath = window.location.pathname;
  console.log("Current path:", currentPath);
  const fileName = currentPath.split("/").pop();
  console.log("Current path spilt", currentPath.split("/"));
  console.log("Current file name:", fileName);

  switch (fileName) {
    // case "index.html":
    //   window.location.href = "/Stephen-R-Lewis-Luna/html/messages.html";
    //   break;
    case "messages.html":
        section.classList.toggle("hidden");
        leaveMessageButton.classList.toggle("visible");
        messagesSection.classList.toggle("visible");
      break;
    default:
      window.location.href = "/Stephen-R-Lewis-Luna/html/messages.html";
  }
} catch (error) {
  console.error("❌ JS Error:", error);
}

}

*/


