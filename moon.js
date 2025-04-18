let description = "";

function getMoon(date) {
    const synodicMonth = 29.53059;

    // Reference new moon: January 6, 2000 at 18:14 UTC (known new moon)
    const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14));
    const diff = date.getTime() - knownNewMoon.getTime();
    const daysSince = diff / (1000 * 60 * 60 * 24);

    const moonAge = daysSince % synodicMonth;
    let name = "";
    let img = "";

    if (moonAge < 1.84566) {
        name = "New Moon";
        img = "new-moon.png"
        description = "A shadow sails through silent skies, no silver gleam to greet our eyes. In darkness deep, new dreams are spun, a quiet start, the moon’s begun.";
    } else if (moonAge < 5.53699) {
        name = "Waxing Cresent"
        img = "wax-cres.png"
        description = "A slender smile in velvet night, hints of growth in silver light. A promise blooms on skyward face, the moon begins its steady race.";
    } else if (moonAge < 9.22831) {
        name = "First quarter"
        img = "first-quart.png"
        description = "Half aglow with strength anew, balanced bold in twilight's hue. A tale of rising, brave and bright, carved in clean-cut halves of light.";
    } else if (moonAge < 12.91963) {
        name = "Waxing Gibbous"
        img = "wax-gibb.png"
        description = "Growing strong with patient grace, more of her reveals her face. Almost whole, yet still to go, she climbs the heavens, soft and slow.";
    } else if (moonAge < 16.61096) {
        name = "Full Moon";
        img = "full-moon.png"
        description = "A lantern lit in midnight's dome, she shines like fire above the foam. The world beneath in silver gleams, alive with magic, thoughts, and dreams.";
    } else if (moonAge < 20.30228) {
        name = "Waning Gibbous";
        img = "wan-gibb.png"
        description = "Her brilliance wanes, but lingers still, a softer glow upon the hill. She whispers now of time to rest, of ebbing tides and nature’s quest.";
    } else if (moonAge < 23.99361) {
        name = "Last Quarter";
        img = "last-quart.png"
        description = "A half remains, the other gone, she marches calmly toward the dawn. A quiet strength, a fading call, preparing gently for the fall.";
    } else if (moonAge < 27.68493) {
        name = "Waning Cresent";
        img = "wan-cres.png";
        description = "A fading sliver, barely there, a ghost that haunts the open air. She bows before the coming shade, and slips into the dark she made.";
    } else {
        name = "New Moon";
        img = "new-moon.png";
        description = "A shadow sails through silent skies, no silver gleam to greet our eyes. In darkness deep, new dreams are spun, a quiet start, the moon’s begun.";
    }

    document.getElementById("phase-name").textContent = name;
    document.getElementById("moon-img").src = `images/${img}`;

    const descEl = document.getElementById("desc-text");
    descEl.style.display = "none";
    descEl.textContent = description;
    document.getElementById("phase-desc").textContent = "See description";

    let note = "";
    const isApril22 = date.getMonth() === 3 && date.getDate() === 22;
    const isOct15 = date.getMonth() === 9 && date.getDate() === 15;
    
    if (isApril22) {
        note = "🎂 Happy Birthday My Love! This moon is always yours on April 22nd.";
    } else if (isOct15) {
        note = "🌟 Nothing in the world belongs to me, but my love, mine oh mine, all mine";
    } else {
        note = "";
    }
    document.getElementById("special-note").textContent = note;

    const moonImg = document.getElementById("moon-img");
    moonImg.src = `images/${img}`;
    moonImg.alt = name;

    moonImg.style.animation = "none";
    void moonImg.offsetWidth; 
    moonImg.style.animation = "floatIn 1s ease forwards";

    const song = document.getElementById("special-song");
    song.pause();
    song.currentTime = 0;

}

getMoon(new Date());
document.getElementById("pick-date").addEventListener("change", (e) => {
    const selectedDate = new Date(e.target.value);
    getMoon(selectedDate);
});

checkSpecialSong(new Date());
document.getElementById("pick-date").addEventListener("change", (e) => {
    const selectedDate = new Date(e.target.value);
    getMoon(selectedDate);
    checkSpecialSong(selectedDate);
});

document.getElementById("play-song").addEventListener("click", () => {
    const song = document.getElementById("special-song");
    song.currentTime = 0;
    song.play();
});

document.getElementById("today").addEventListener("click", () => {
    const today = new Date();
    document.getElementById("pick-date").valueAsDate = today;
    getMoon(today);
    checkSpecialSong(today);
});

document.getElementById("phase-desc").addEventListener("click", () => {
    const descEl = document.getElementById("desc-text");
    const btn = document.getElementById("phase-desc");
    document.getElementById("main").style.overflowY = "auto";
    
    if (descEl.style.display === "none") {
        descEl.style.display = "block";
        descEl.style.maxHeight = "500px";
        btn.textContent = "Hide description";
    } else {
        descEl.style.display = "none";
        descEl.style.maxHeight = "0";
        btn.textContent = "See description";
    }
});


const clickSound = new Audio('knock.mp3');
function playClickSound() {
    clickSound.currentTime = 0; // Rewind to start
    clickSound.play();
}
// Attach to all buttons
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", playClickSound);
    });
});


const cloudsContainer = document.getElementById("clouds");

for (let i = 0; i < 6; i++) {
  const cloud = document.createElement("div");
  cloud.className = "cloud";
  cloud.style.top = `${Math.random() * 70 + 5}%`; // position vertically
  cloud.style.left = `${-300 + Math.random() * 100}px`; // start offscreen
  cloud.style.opacity = `${0.05 + Math.random() * 0.1}`;
  cloud.style.animationDuration = `${40 + Math.random() * 30}s`; // vary speed
  cloudsContainer.appendChild(cloud);
}

function checkSpecialSong(date) {
    const isSpecialDate = date.getFullYear() === 2025 && date.getMonth() === 3 && date.getDate() === 22;

    const songContainer = document.getElementById("special-song-container");
    if (isSpecialDate) {
        songContainer.style.display = "block";
    } else {
        songContainer.style.display = "none";
    }
}


