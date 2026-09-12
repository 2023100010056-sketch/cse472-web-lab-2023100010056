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
