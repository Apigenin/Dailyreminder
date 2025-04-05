// Daily quotes
const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Small steps every day.",
  "The body achieves what the mind believes.",
  "Discipline is choosing between what you want now and what you want most.",
  "Fitness is not about being better than someone else. It’s about being better than you used to be."
];

document.getElementById("dailyQuote").innerText =
  quotes[new Date().getDate() % quotes.length];

// Habit tracker (7 days)
const habitGrid = document.getElementById("habitGrid");
for (let i = 0; i < 7; i++) {
  const day = document.createElement("div");
  day.innerText = `Day ${i + 1}`;
  day.onclick = () => {
    day.classList.toggle("checked");
  };
  habitGrid.appendChild(day);
}

// Save workout log
function saveLog() {
  const log = document.getElementById("logInput").value;
  if (log.trim()) {
    localStorage.setItem("dailyWorkout", log);
    document.getElementById("savedMessage").innerText = "Workout saved!";
  } else {
    alert("Please enter something!");
  }
}