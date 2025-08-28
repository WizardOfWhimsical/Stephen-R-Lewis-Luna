/*<li>Clear communication</li>
<li>Tenacity and drive to learn new concepts/technology</li>
<li>Not afraid to research, ask questions, or look foolish to grow</li>
<li>Time management under pressure</li>
<li>Team collaboration during moments of high-demand and moralistic support</li>
<li>Regular task status updates to management (“stakeholder communication”)</li>
<li>Project planning & task breakdown (early-stage project management)</li>
*/

const skillArray = ["Lifelong Learner",
"Asks the Right Questions",
"Quick to Research",
"Tech Adaptable",
"Persistent Problem Solver",
"Calm Under Pressure",
"Team-Oriented Mindset",
"Uplifts Morale",
"Communicates Progress Clearly",
"Ownership Mentality",
"Early-Stage PM Skills",
    "Modular Thinker"]

skillApending(skillArray)

function skillApending(array) {
    const skillEl = document.querySelector(".skillsList")
    for (let arr of array) {
        const listItem = document.createElement("li");
        listItem.innerText = arr
        skillEl.append(listItem)
    }
}

