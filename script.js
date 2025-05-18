// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    e.preventDefault();
  } else if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

// To-Do List Functionality
document.getElementById("addBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
  document.getElementById("taskList").appendChild(li);

  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });

  taskInput.value = "";
});
