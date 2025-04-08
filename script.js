const loginModal = document.getElementById("loginModal");
const signupModal = document.getElementById("signupModal");
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const openSignupModal = document.getElementById("openSignupModal");
const openLoginModal = document.getElementById("openLoginModal");
const closeLoginModal = document.getElementsByClassName("close")[0];
const closeSignupModal = document.getElementsByClassName("close-signup")[0];

loginBtn.onclick = function () {
    loginModal.style.display = "flex";
};

signupBtn.onclick = function () {
    signupModal.style.display = "flex";
};

openSignupModal.onclick = function () {
    loginModal.style.display = "none";
    signupModal.style.display = "flex";
};

openLoginModal.onclick = function () {
    signupModal.style.display = "none";
    loginModal.style.display = "flex";
};

closeLoginModal.onclick = function () {
    loginModal.style.display = "none";
};

closeSignupModal.onclick = function () {
    signupModal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
};

const projects = [
    { name: "Project A", status: "ongoing", progress: "50%" },
    { name: "Project B", status: "not-start", progress: "0%" },
    { name: "Project C", status: "done", progress: "100%" },
    { name: "Project D", status: "stop", progress: "25%" },
    { name: "Project E", status: "ongoing", progress: "75%" },
];

function displayProjects(category) {
    const projectList = document.getElementById("project-list");
    projectList.innerHTML = "";

    const filteredProjects = category === "all"
        ? projects
        : projects.filter(project => project.status === category);

    if (filteredProjects.length === 0) {
        projectList.innerHTML = "<p>No projects found.</p>";
    } else {
        filteredProjects.forEach(project => {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");
            projectItem.innerHTML = `
                <h3>${project.name}</h3>
                <p>Status: ${project.status}</p>
                <p>Progress: ${project.progress}</p>
            `;
            projectList.appendChild(projectItem);
        });
    }
}
