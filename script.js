const weddingDate = new Date("2026-11-25T20:00:00+05:30").getTime();

function tick() {
  const now = Date.now();
  const d = weddingDate - now;

  const vals = d > 0 ? {
    days: Math.floor(d / 86400000),
    hours: Math.floor(d / 3600000) % 24,
    minutes: Math.floor(d / 60000) % 60,
    seconds: Math.floor(d / 1000) % 60
  } : {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  for (const [id, val] of Object.entries(vals)) {
    document.getElementById(id).textContent =
      String(val).padStart(2, "0");
  }
}

tick();
setInterval(tick, 1000);


// ===============================
// WEDDING MUSIC
// ===============================

const music = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");

let musicStarted = false;

musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicStarted = true;
      musicBtn.innerHTML = "❚❚ <span>Music</span>";
    } else {
      music.pause();
      musicBtn.innerHTML = "♪ <span>Music</span>";
    }
  } catch (e) {
    alert("Please add your chosen song as music.mp3.");
  }
});


// Start music on the visitor's first interaction
async function startWeddingMusic() {
  if (musicStarted) return;

  try {
    await music.play();
    musicStarted = true;
    musicBtn.innerHTML = "❚❚ <span>Music</span>";
  } catch (e) {
    // Browser may require another interaction
  }
}

document.addEventListener("click", startWeddingMusic);
document.addEventListener("touchstart", startWeddingMusic);


// ===============================
// WEDDING RSVP
// ===============================

document.getElementById("rsvpForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value.trim();

  const text =
`💍 WEDDING RSVP — HARSHITA & UJJWAL

1. Name: ${name}
2. Will you attend?: ${attendance}
3. Number of guests: ${guests}
4. Message: ${message || "—"}

#harshojjwal`;

  const whatsappURL =
    `https://wa.me/919454732985?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank", "noopener");
});
// One-time flower shower when invitation opens
// ======================================
// ROSE PETAL SHOWER — 10 SECONDS
// ======================================

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("flowerShower");

  if (!container) return;

  const petalCount = 55;

  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");

    petal.className = "rose-petal";

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDelay = Math.random() * 2 + "s";
    petal.style.animationDuration = (5 + Math.random() * 3) + "s";

    const size = 10 + Math.random() * 14;
    petal.style.width = size + "px";
    petal.style.height = size * 0.65 + "px";

    container.appendChild(petal);
  }

  setTimeout(function () {
    container.remove();
  }, 8000);
});
