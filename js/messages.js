//Global Variables
const messagesSection = document.getElementById("messages");
const messageList = messagesSection.querySelector("ul");

section.classList.toggle("hidden");
leaveMessageButton.classList.toggle("visible");
messagesSection.classList.toggle("visible");

closeButton.addEventListener("click", () => {
  section.classList.toggle("hidden");
  leaveMessageButton.classList.toggle("visible");
  messagesSection.classList.toggle("hidden");
  console.log("Form Data Submitted:", formSave);
  console.log("Close Button Clicked");
});

/****************************************
 * SUBMIT BUTTON EVENT LISTENER FUNCTION
****************************************/
// const formSave=[];
submitButton.addEventListener("click", async (e) => {
  e.preventDefault();
// this right here, Fking Hah! if you would love to talk about this line of code, please reach out to me, I would love to discuss it with you.#nightMare
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

 const formData = document.forms.leaveMessage;
  console.log(formData)
  formSave.push({
    userName: inputName.value.trim(),
    userEmail: inputEmail.value.toLowerCase().trim(),
    userMessage: textArea.value.trim()
  });

clearList();
futureFetchSimulation(formSave);
form.reset();
navigateToMessagesPage();
});


// const formSave = async () => {
// let newArray = [];
// newArray.push({
//     userName: inputName.value.trim(),
//     userEmail: inputEmail.value.toLowerCase().trim(),
//     userMessage: textArea.value.trim()
//   })
// }