const dateTimeDisplays = document.querySelectorAll("[data-current-datetime]");

function updateDateTime() {
  const now = new Date();
  const formattedDateTime = now.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  });

  dateTimeDisplays.forEach((display) => {
    display.textContent = formattedDateTime;
    display.dateTime = now.toISOString();
  });
}

updateDateTime();
window.setInterval(updateDateTime, 1000);
