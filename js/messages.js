//Globnal Variables
const messagesSection = document.getElementById("messages");
const messageList = messagesSection.querySelector("ul");

section.classList.toggle("hidden");
leaveMessageButton.classList.toggle("visible");
messagesSection.classList.toggle("visible");

/****************************************
 * 
 * SUBMIT BUTTON EVENT LISTENER FUNCTION
 * 
****************************************/
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const formData = document.forms.leaveMessage;

let listElement = new Message(formData.usersName.value, formData.usersEmail.value, formData.usersMessage.value); 
listElement.rendered(messageList);

  // Clear the form fields after submission
  inputName.value = "";
  inputEmail.value = "";
  textArea.value = "";
navigateToMessagesPage(); 
});
/*************************
 * 
 *        HELPERS
 * 
**************************/
closeButton.addEventListener("click", () => {
  section.classList.toggle("hidden");
  leaveMessageButton.classList.toggle("visible");
  messagesSection.classList.toggle("visible");
  console.log("Close Button Clicked");
});

class Message {
  constructor(userName, userEmail, userMessage) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userMessage = userMessage;
  }
createElement() {
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${this.userEmail}">${this.userName}</a> <span>${this.userMessage}</span>`;
    return newMessage;
  }
  createButton() {
    const removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.classList.add("button-uniform")
    removeButton.classList.add("callToActionButton")
    removeButton.classList.add("grabbingCursor");
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
