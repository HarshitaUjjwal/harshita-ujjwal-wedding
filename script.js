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
// NATURAL ROSE PETAL SHOWER — 8 SECONDS
// ======================================

document.addEventListener("DOMContentLoaded", function () {

  const container = document.getElementById("flowerShower");

  if (!container) return;

  const petalCount = 32;

  for (let i = 0; i < petalCount; i++) {

    const petal = document.createElement("div");

    petal.className = "rose-petal";

    // Random horizontal starting position
    petal.style.left = Math.random() * 100 + "%";

    // Different falling speeds
    petal.style.animationDelay =
  (Math.random() * 2.5) + "s";

petal.style.animationDuration =
  (6 + Math.random() * 3) + "s";
    
    // Different petal sizes
    const size =
      7 + Math.random() * 10;

    petal.style.setProperty(
      "--size",
      size + "px"
    );

    // Natural sideways drifting
    const drift1 =
      (-100 + Math.random() * 200) + "px";

    const drift2 =
      (-120 + Math.random() * 240) + "px";

    const drift3 =
      (-100 + Math.random() * 200) + "px";

    petal.style.setProperty(
      "--drift1",
      drift1
    );

    petal.style.setProperty(
      "--drift2",
      drift2
    );

    petal.style.setProperty(
      "--drift3",
      drift3
    );

    // Random rotation
    const rotation =
      Math.random() * 360;

    petal.style.setProperty(
      "--rotation",
      rotation + "deg"
    );

    // Random spin direction
    const spin =
      Math.random() > 0.5 ? 1 : -1;

    petal.style.setProperty(
      "--spin",
      spin
    );

    container.appendChild(petal);
  }

  // Remove shower after 8 seconds
  setTimeout(function () {
    container.remove();
  }, 8000);

});
