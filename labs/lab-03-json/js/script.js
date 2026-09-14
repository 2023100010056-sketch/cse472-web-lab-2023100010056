// Number of seats still available for SEU Tech Fest 2026
let availableSeats = 12;

// Interaction 1: Show the registration status on the page
function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}

// Interaction 2: Check the seats and show a message based on the number
function checkSeats() {
    let message = document.getElementById("seatMessage");

    if (availableSeats > 0) {
        message.textContent = "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent = "Sorry, no seats are available.";
    }
}

// Interaction 3: Read the typed name and show a personal greeting
function showGreeting() {
    let name = document.getElementById("studentName").value;
    let output = document.getElementById("greetingMessage");
    output.textContent = "Welcome, " + name + "!";
}

// Independent improvement: Show a reminder for the event day
function showReminder() {
    let reminder = document.getElementById("reminderMessage");
    reminder.textContent = "Reminder: Registration and the opening ceremony start at 09:00 AM " +
        "in the Main Auditorium. Bring your student ID card.";
}

// ================= LAB 04: Forms, Validation, JSON and Local Storage =================

// Read the form, check the values, create an object, convert it to JSON and save it
function submitRegistration() {
    let name = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let email = document.getElementById("studentEmail").value;
    let workshop = document.getElementById("workshop").value;
    let message = document.getElementById("formMessage");

    // Simple validation: stop if any required value is empty
    if (name === "") {
        message.textContent = "Please enter your full name.";
        return;
    }

    if (studentId === "") {
        message.textContent = "Please enter your student ID.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    if (workshop === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    // Group the four values in one object
    let registration = {
        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop
    };

    // Convert the object to JSON text and save it in the browser
    let jsonData = JSON.stringify(registration);
    localStorage.setItem("registration", jsonData);

    document.getElementById("jsonOutput").textContent = jsonData;
    message.textContent = "Registration saved successfully.";
}

// Load the saved JSON, convert it back to an object and show it as a sentence
function showSavedRegistration() {
    let savedData = localStorage.getItem("registration");
    let output = document.getElementById("savedMessage");

    if (savedData === null) {
        output.textContent = "No saved registration was found.";
        return;
    }

    let registration = JSON.parse(savedData);
    output.textContent =
        registration.name + " (ID: " + registration.studentId + ") registered for " +
        registration.workshop + ". Confirmation will be sent to " + registration.email + ".";
}

// Remove the saved practice data
function clearRegistration() {
    localStorage.removeItem("registration");
    document.getElementById("jsonOutput").textContent = "No registration saved yet.";
    document.getElementById("savedMessage").textContent = "Saved registration cleared.";
}
