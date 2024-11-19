function generateResume(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName")
        .value;
    var lastName = document.getElementById("lastName")
        .value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value
        .split(",")
        .map(function (skill) { return skill.trim(); });
    var experience = [];
    var experienceElements = document.querySelectorAll(".experience-entry");
    experienceElements.forEach(function (entry) {
        var jobtitle = entry.querySelector(".jobtitle")
            .value;
        var companyName = entry.querySelector(".companyName").value;
        var duration = entry.querySelector(".duration")
            .value;
        var details = entry.querySelector(".details")
            .value;
        experience.push({
            jobtitle: jobtitle,
            company: companyName,
            duration: duration,
            details: details,
        });
    });
    var education = [];
    var educationElements = document.querySelectorAll(".education-entry");
    educationElements.forEach(function (entry) {
        var degree = entry.querySelector(".degree").value;
        var school = entry.querySelector(".school").value;
        var graduationYear = entry.querySelector(".graduationYear").value;
        education.push({
            degree: degree,
            school: school,
            graduationYear: graduationYear,
        });
    });
    var resume = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        skills: skills,
        experience: experience,
        education: education,
    };
    displayResume(resume);
}
function displayResume(resume) {
    var resumeDisplay = document.getElementById("resume-display");
    resumeDisplay.style.display = "block";
    form.style.display = "none";
    var resumeHTML = "\n  <main class=\"main-container\">\n    <div class=\"black-section\">\n    <h1>".concat(resume.firstName, " ").concat(resume.lastName, "</h1>\n    <p>Email: ").concat(resume.email, "</p>\n    <p>Phone: ").concat(resume.phone, "</p> \n      <div>\n        <h2>Skills:</h2>\n        <ul>\n          ").concat(resume.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n        </ul>\n      </div>\n      <div>\n        <h2>Education:</h2>\n        ").concat(resume.education
        .map(function (edu) { return "\n            <div class=\"education\">\n            <h4>".concat(edu.school, " <span class=\"educ-span\">").concat(edu.graduationYear, "</span></h4>\n            <h3>").concat(edu.degree, "</h3>\n            </div>"); })
        .join(""), "\n        </div>\n\n    </div>\n        <h2>Experience:</h2>\n        ").concat(resume.experience
        .map(function (exp) { return "\n            <div class=\"experience\">\n            <h4>".concat(exp.company, " </h4>\n            <h3>").concat(exp.jobtitle, "<span>").concat(exp.duration, "</span></h3>\n              <p>").concat(exp.details, "</p>\n            </div>"); })
        .join(""), "\n      </div>  \n   \n      \n    </main>\n  ");
    resumeDisplay.innerHTML = resumeHTML;
}
var form = document.getElementById("resume-form");
form.addEventListener("submit", generateResume);
function addExperienceFields() {
    var experienceContainer = document.getElementById("experience-container");
    var newExperienceEntry = document.createElement("div");
    newExperienceEntry.classList.add("experience-entry");
    newExperienceEntry.innerHTML = "\n    <input type=\"text\" class=\"jobtitle\" placeholder=\"Job Title\" required>\n    <input type=\"text\" class=\"companyName\" placeholder=\"Company Name\" required>\n    <input type=\"text\" class=\"duration\" placeholder=\"Duration\" required>\n    <textarea class=\"details\" placeholder=\"Job Details\" required></textarea>\n  ";
    experienceContainer.appendChild(newExperienceEntry);
}
function addEducationFields() {
    var educationContainer = document.getElementById("education-container");
    var newEducationEntry = document.createElement("div");
    newEducationEntry.classList.add("education-entry");
    newEducationEntry.innerHTML = "\n    <input type=\"text\" class=\"degree\" placeholder=\"Degree\" required>\n    <input type=\"text\" class=\"school\" placeholder=\"School\" required>\n    <input type=\"text\" class=\"graduationYear\" placeholder=\"Graduation Year\" required>\n    <textarea class=\"educationDetails\" placeholder=\"Details\" required></textarea>\n  ";
    educationContainer.appendChild(newEducationEntry);
}
var addExperienceButton = document.getElementById("addExperience");
addExperienceButton.addEventListener("click", addExperienceFields);
var addEducationButton = document.getElementById("addEducation");
addEducationButton.addEventListener("click", addEducationFields);
