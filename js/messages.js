//grabbing and clearing message data
// const messageData = JSON.parse(localStorage.getItem("messageData"));
// localStorage.removeItem("messageData");

section.classList.toggle("hidden");
leaveMessageButton.classList.toggle("visible");



const messagesSection = document.getElementById("messages");
messagesSection.classList.toggle("visible");
const messageList = messagesSection.querySelector("ul");
const newMessage = document.createElement("li");

//remove button <button type="button">Remove</button>
const removeButton = document.createElement("button"); 
removeButton.setAttribute("type", "button");
removeButton.textContent = "Remove";

removeButton.addEventListener("click", () => {
    const entry = this.parentNode; //find the button's parent element
    
    console.log("Message entry removed from the DOM:", entry);

    entry.remove();
})

//.innerHTML? thought it was a security risk but it seems to be the only way to add HTML content to a list item

newMessage.innerHTML = `<a href="mailto:${messageData.userEmail}">${messageData.userName}</a> <span>${messageData.userMessage}</span>`;

newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
// console.log("Messages Section Element:", messageList);