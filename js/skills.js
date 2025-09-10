/*********
 SKILL.JS
*********/


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

