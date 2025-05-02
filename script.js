let score = 0;
let clickPower = 1;
let autoClickers = 0;
let rebirths = 0;

const scoreElement = document.getElementById("score");
const rebirthElement = document.getElementById("rebirth-count");
const clickBtn = document.getElementById("click-btn");
const upgradeBtn = document.getElementById("upgrade-btn");
const autoClickerBtn = document.getElementById("auto-clicker-btn");
const rebirthBtn = document.getElementById("rebirth-btn");
const resetBtn = document.getElementById("reset-btn");

// Click button logic
clickBtn.addEventListener("click", (event) => {
    score += clickPower;
    updateScore();

    // Show click animation
    let clickEffect = document.createElement("div");
    clickEffect.classList.add("score-pop");
    clickEffect.innerText = `+${clickPower}`;
    clickEffect.style.left = `${event.clientX}px`;
    clickEffect.style.top = `${event.clientY}px`;
    document.body.appendChild(clickEffect);
    
    setTimeout(() => document.body.removeChild(clickEffect), 500);
});

// Upgrade button logic
upgradeBtn.addEventListener("click", () => {
    if (score >= 10) {
        score -= 10;
        clickPower += 1;
        updateScore();
    }
});

// Auto Clicker logic
autoClickerBtn.addEventListener("click", () => {
    if (score >= 50) {
        score -= 50;
        autoClickers++;
        updateScore();
    }
});

// Rebirth mechanic
rebirthBtn.addEventListener("click", () => {
    if (score >= 1000) {
        score = 0;
        rebirths++;
        clickPower += 2;  // Boost click power permanently
        updateScore();
    }
});

// Reset game
resetBtn.addEventListener("click", () => {
    score = 0;
    clickPower = 1;
    autoClickers = 0;
    rebirths = 0;
    updateScore();
});

// Auto Clicker function
setInterval(() => {
    score += autoClickers;
    updateScore();
}, 1000);

// Function to update score
function updateScore() {
    scoreElement.textContent = score;
    rebirthElement.textContent = rebirths;
}
