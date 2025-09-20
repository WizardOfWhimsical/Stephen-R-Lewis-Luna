
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
    // console.log("rawlist:", listElement);
    listElement.rendered(messageList);
  })
}

class RepoItemPuntInDOM{
  constructor(obj){
    this.name = obj.name;
    this.url = `https://wizardofwhimsical.github.io/${obj.name}`;
    this.desription =  obj.desription
  }
  createHeader(){
    return document.createElement("h2").innertext = this.name;
  }
  createSpan(){
    return document.createElement("span").innerText = this.desription;
  }
  createAnchor(){
    const url = document.createElement("a");
    url.innerText = `${this.name} Site`;
    url.setAttribute("href", this.url);
    return url
  }
  appendRepoListItem(parent){
    const container = document.createElement("div");
    container.append(this.createHeader(), this.createSpan(), this.createAnchor);
    return container
  }
}

function setAttributes(el, attr){
  for(let key in attr){
    el.setAttribute(key, attr[key]);
  }
}


/*************************
 * 
 *    My Locale Dev Model
 *
 * **************************/
function navigateToMessagesPage() {
  const currentPath = window.location.pathname;
  const fileName = currentPath.split("/").pop();
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
// function navigateToMessagesPage() {
// try {
//   const currentPath = window.location.pathname;
//   const fileName = currentPath.split("/").pop();
//   switch (fileName) {
//     case "messages.html":
//         section.classList.toggle("hidden");
//         leaveMessageButton.classList.toggle("visible");
//         messagesSection.classList.toggle("visible");
//       break;
//     default:
//       window.location.href = "/Stephen-R-Lewis-Luna/html/messages.html";
//   }
// } catch (error) {
//   console.error("❌ JS Error:", error);
// }
// }
