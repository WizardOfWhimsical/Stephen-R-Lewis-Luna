// footer js

// notes:getElementByTagName returns an array that i can use [] on.
// document.body is actually a thing

copyRightFooter()
function copyRightFooter() {
  const body = document.body
  const footer = document.createElement("footer");
  const copyRightHolder = document.createElement("p");
  const today = new Date();
  const thisYear = today.getFullYear();
  copyRightHolder.innerText = `Stephen Lewis \u00A9 ${thisYear}`;
  footer.append(copyRightHolder);
  footer.classList.add("centering")
  const script = document.querySelector("script[src='js/index.js']")
  body.insertBefore(footer, script)
}







    /**
      <footer>
    <h2>Contact Me:</h2>
        <section id="connect">
           <a href="https://github.com/WizardOfWhimsical" target="_blank" rel="noopener noreferrer" class="icons"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.linkedin.com/in/stephenrlewis/" target="_blank" rel="noopener noreferrer"class="icons"><i class="fab fa-linkedin"></i></a>
      <a href="mailto:st.rayis1085@yahoo.com" class="icons"><i class="fab fa-yahoo"></i></a>
      <a href="mailto:st.rayis1085@gmail.com" class="icons"><i class="fas fa-envelope"></i></a>
    </section>
</footer>

     */
