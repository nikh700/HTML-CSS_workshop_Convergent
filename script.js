// script.js

// Alert message when the page loads
window.onload = function() {
  alert("Welcome to my Nikhil Kabra's personal website!");
};

// Function to change the text when button is clicked
function changeText() {
  document.getElementById("myParagraph").innerHTML = `
  <div style="text-align: left;">
    <strong>Qorvo (Semiconductor and Micro Devices) – Software Engineering Intern</strong>
    <ul>
      <li>Designed a web application in Python and Dash to automate electrical design review, reducing manual checking time by 98%</li>
      <li>Integrated a web-hosted Django database to pull design data and verify elements such as notes, 3D model, and board layers</li>
      <li>Developed and executed an extensive test suite to ensure app functionality and bug-free deployment using GitLab CI/CD</li>
      <li>Created a custom searchable wiki page using HTML/CSS/JS and Bootstrap to reduce employee onboarding time by 37%</li>
    </ul>
  </div>
  `;
}
