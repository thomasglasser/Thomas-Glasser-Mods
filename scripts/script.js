const answer = document.querySelector("#answer p");
const heading = document.querySelector("#answer h2");

// Hamburger menu function
function hamburger() {
    const navLinks = document.getElementById("nav-links");
    const icon = document.getElementById("icon");
    const header = document.getElementById("header");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

// Function to get the answer from a json file
function getAnswer(question) {
    fetch("scripts/faq.json")
        .then(response => response.json())
        .then(data => {
            heading.style.display = "block";
            if (data[question] === undefined || data[question] === "")
            {
                answer.textContent = "Sorry, the answer to this question is not available.";
            }
            else if (answer.textContent === data[question])
            {
                heading.style.display = "none";
                answer.textContent = "";
            }
            else
            {
                answer.textContent = data[question];
            }
        });
}
