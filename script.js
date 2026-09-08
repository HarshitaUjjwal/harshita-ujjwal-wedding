const weddingDate = new Date("2026-11-25T20:00:00+05:30").getTime();
function tick(){
  const now=Date.now(), d=weddingDate-now;
  const vals = d > 0 ? {
    days:Math.floor(d/86400000),
    hours:Math.floor(d/3600000)%24,
    minutes:Math.floor(d/60000)%60,
    seconds:Math.floor(d/1000)%60
  } : {days:0,hours:0,minutes:0,seconds:0};
  for(const [id,val] of Object.entries(vals)) document.getElementById(id).textContent=String(val).padStart(2,"0");
}
tick(); setInterval(tick,1000);

const music=document.getElementById("weddingMusic"), musicBtn=document.getElementById("musicBtn");
musicBtn.addEventListener("click", async ()=>{
  try{
    if(music.paused){ await music.play(); musicBtn.innerHTML="❚❚ <span>Music</span>"; }
    else { music.pause(); musicBtn.innerHTML="♪ <span>Music</span>"; }
  }catch(e){ alert("Add your chosen song as music.mp3 in this folder, then tap Music."); }
});

document.getElementById("rsvpForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const attendance=document.getElementById("attendance").value;
  const guests=document.getElementById("guests").value;
  const message=document.getElementById("message").value.trim();
  const text=`Wedding RSVP — Harshita & Ujjwal%0A%0AName: ${encodeURIComponent(name)}%0AAttendance: ${encodeURIComponent(attendance)}%0AGuests: ${encodeURIComponent(guests)}%0AMessage: ${encodeURIComponent(message || "—")}%0A%0A25 November 2026 · Dehradun`;
  window.open(`https://wa.me/919454732985?text=${text}`,"_blank","noopener");
});
// Start wedding music on the visitor's first interaction
let musicStarted = false;

function startWeddingMusic() {
    if (musicStarted) return;

    const music = document.getElementById("weddingMusic");

    if (music) {
        music.play()
            .then(() => {
                musicStarted = true;
            })
            .catch(() => {
                // Browser may still require another interaction
            });
    }
}

document.addEventListener("click", startWeddingMusic, { once: false });
document.addEventListener("touchstart", startWeddingMusic, { once: false });
