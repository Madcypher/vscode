document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("accessForm");
  const door = document.getElementById("doorStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const token = document.getElementById("token").value.trim();

    // Demo logic: valid token is 'VIBE123'
    if (!email || !token) {
      showLocked("Please provide email and token");
      return;
    }

    if (token === "VIBE123") {
      showOpen("Door unlocked — welcome back!");
    } else {
      showLocked("Invalid token. Access denied.");
    }
  });

  function showOpen(msg) {
    door.classList.remove("locked");
    door.classList.add("open");
    door.textContent = msg;
  }

  function showLocked(msg) {
    door.classList.remove("open");
    door.classList.add("locked");
    door.textContent = msg;
  }
});
