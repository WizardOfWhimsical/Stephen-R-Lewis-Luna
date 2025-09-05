
const messagesSection = document.getElementById("messages");
const messageList = messagesSection.querySelector("ul");
const newMessage = document.createElement("li");

section.classList.toggle("hidden");
leaveMessageButton.classList.toggle("visible");
messagesSection.classList.toggle("visible");

const messageSavedData = [];
/****************************************
 * 
 * SUBMIT BUTTON EVENT LISTENER FUNCTION
 * 
****************************************/
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = document.forms.leaveMessage;
  const leaveMessageData = {}
  leaveMessageData.userName = formData.usersName.value;
  leaveMessageData.userEmail = formData.usersEmail.value;
  leaveMessageData.userMessage = formData.usersMessage.value;

  // Save data to localStorage to travel from one page to another
// localStorage.setItem("messageData", JSON.stringify(leaveMessageData));
  messageSavedData.push(leaveMessageData);
  createMessageElement(messageSavedData);
  // Clear the form fields after submission
  inputName.value = "";
  inputEmail.value = "";
  textArea.value = "";
navigateToMessagesPage();
});

closeButton.addEventListener("click", () => {
  section.classList.toggle("hidden");
  leaveMessageButton.classList.toggle("visible");
  messagesSection.classList.toggle("visible");
  console.log("Close Button Clicked");
});

//remove button 
const removeButton = document.createElement("button"); 
removeButton.setAttribute("type", "button");
removeButton.textContent = "Remove";

removeButton.addEventListener("click", function () {
    const entry = this.parentNode; 
    console.log("Message entry removed from the DOM:", entry);
    entry.remove();
})
// Function to create and append message elements
function createMessageElement(array) {
array.forEach((messageData) => {
newMessage.innerHTML = `<a href="mailto:${messageData.userEmail}">${messageData.userName}</a> <span>${messageData.userMessage}</span>`;

newMessage.appendChild(removeButton);
messageList.append(newMessage);
})
}


class Message {
  constructor(userName, userEmail, userMessage) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userMessage = userMessage;
  }
createElement() {
    const messageElement = document.createElement("li");
    messageElement.innerHTML = `<a href="mailto:${this.userEmail}">${this.userName}</a> <span>${this.userMessage}</span>`;
    return messageElement;
  }
  createButton() {
    const removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      const entry = this.parentNode;
      console.log("Message deletion", {entry});
      entry.remove();
    });
    return removeButton;
  }
  rendered(parent) {
    const messageElement = this.createElement();
    const removeButton = this.createButton();
    messageElement.append(removeButton);
    console.log("Appending message element to parent:",{messageElement});
    parent.append(messageElement);
  }
}
