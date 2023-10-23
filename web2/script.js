// Wait for the DOM to fully load before running the JavaScript code
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the HTML elements we'll work with
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add an event listener to the "Add Task" button
    addTaskButton.addEventListener("click", () => {
        // Get the task text from the input field and trim any extra whitespace
        const taskText = taskInput.value.trim();

        // Check if the task text is not empty
        if (taskText !== "") {
            // Create a new <li> element for the task
            const taskItem = document.createElement("li");
            // Populate the <li> element with HTML content
            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
                <button class="delete-task">Delete</button>
            `;
            // Add the new task to the task list
            taskList.appendChild(taskItem);
            // Clear the input field
            taskInput.value = "";
            // Attach event listeners to the new task
            attachTaskEvents(taskItem);
        }
    });

    // Function to attach event listeners to a task item
    function attachTaskEvents(taskItem) {
        const deleteButton = taskItem.querySelector(".delete-task");
        const checkbox = taskItem.querySelector(".task-checkbox");

        // Add a click event listener to the "Delete" button
        deleteButton.addEventListener("click", deleteTask);
        // Add a change event listener to the checkbox
        checkbox.addEventListener("change", completeTask);
    }

    // Function to delete a task
    function deleteTask() {
        // Remove the parent <li> element of the clicked "Delete" button
        this.parentNode.remove();
    }

    // Function to mark a task as complete
    function completeTask() {
        const taskText = this.nextElementSibling;

        // Check if the checkbox is checked
        if (this.checked) {
            // Apply a line-through style and gray color to the task text
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "#999";
        } else {
            // Remove the line-through style and reset the color
            taskText.style.textDecoration = "none";
            taskText.style.color = "#000";
        }
    }
});

// Get references to the HTML elements
const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const notification = document.getElementById("notification");

// Function to show a notification
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.style.backgroundColor = isError ? "red" : "green";
    notification.style.display = "block";
    
    // Automatically hide the notification after 3 seconds (adjust as needed)
    setTimeout(() => {
        notification.style.display = "none";
    }, 3000);
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;
    let errorMessage = "";

    // Validate name
    if (nameInput.value.trim() === "") {
        isValid = false;
        errorMessage += "Name is required. ";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        errorMessage += "Invalid email address. ";
    }

    if (!isValid) {
        showNotification(errorMessage, true); // Display an error notification
    } else {
        showNotification("Form submitted successfully"); // Display a success notification
    }
}

// Add form submit event listener
myForm.addEventListener("submit", validateForm);


// Function to start the countdown timer
function startTimer() {
    const durationInput = document.getElementById("duration");
    const display = document.getElementById("display");
    const duration = parseInt(durationInput.value);

    if (duration > 0) {
        let timer = duration;

        const interval = setInterval(function () {
            display.textContent = timer;
            timer--;

            if (timer < 0) {
                clearInterval(interval);
                display.textContent = "Time's up!";
                alert("Time's up!"); // Display an alert when the timer is up
            }
        }, 1000);
    }
}

// Function to open a specific tab and hide others
function openTab(tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    document.getElementById(tabId).style.display = "block";
}
// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;
    let errorMessage = "";

    // Validate name
    if (nameInput.value.trim() === "") {
        isValid = false;
        errorMessage += "Name is required. ";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        errorMessage += "Invalid email address. ";
    }

    if (!isValid) {
        showNotification(errorMessage, true); // Display an error notification
    } else {
        showNotification("Form submitted successfully"); // Display a success notification
        alert("Form submitted successfully"); // Display an alert
        // You can replace the alert with a custom dialog/modal for a better user experience
    }
}