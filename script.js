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
// ONE-TIME FLOWER SHOWER — 8 SECONDS
// ======================================

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("flowerShower");

  if (!container) return;

  const flowers = [
    "🌸",
    "🌺",
    "🌷",
    "🌼",
    "💮",
    "🌹"
  ];

  const flowerCount = 40;

  for (let i = 0; i < flowerCount; i++) {

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.textContent =
      flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left =
      Math.random() * 100 + "%";

    flower.style.animationDelay =
      Math.random() * 2 + "s";

    flower.style.animationDuration = "8s";

    flower.style.fontSize =
      (18 + Math.random() * 12) + "px";

    // IMPORTANT:
    // Do NOT set transform here.
    // CSS animation controls the movement.

    container.appendChild(flower);
  }

  setTimeout(function () {
    container.remove();
  }, 10000);

});
