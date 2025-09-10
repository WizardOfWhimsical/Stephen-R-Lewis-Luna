//Global Variables
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
const formSave=[];
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
// this right here, Fking Hah! if you would love to talk about this line of code, please reach out to me, I would love to discuss it with you.#nightMare
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = document.forms.leaveMessage;

  formSave.push({
    userName: formData.usersName.value,
    userEmail: formData.usersEmail.value,
    userMessage: formData.usersMessage.value
  });

clearList();
futureFetchSimulation(formSave);

// remove the old list before appendign the new list to avoid duplication of messages in the list
console.log(messageList.querySelectorAll("li"))


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
  messagesSection.classList.toggle("hidden");
  console.log("Form Data Submitted:", formSave);
  console.log("Close Button Clicked");
});


function clearList() {
  if (messageList.querySelectorAll("li").length > 0) {
  messageList.querySelectorAll("li").forEach((li) => {
    li.remove();
  })
  };
}

function futureFetchSimulation(arrayOfMessages) {
  arrayOfMessages.forEach((formData) => {
  let listElement = new Message(formData.userName, formData.userEmail, formData.userMessage); 
    console.log("rawlist:", listElement);
    listElement.rendered(messageList);
  })
}

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
