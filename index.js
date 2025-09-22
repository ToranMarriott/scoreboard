let home = document.getElementById("home-count")
let guest = document.getElementById("guest-count")
const homeLabel = document.getElementById("home-label");
const guestLabel = document.getElementById("guest-label");

homeCount = 0
guestCount = 0

home.innerText = homeCount
guest.innerText = guestCount

function home1() {
    homeCount += 1
    home.innerText = homeCount
    updateGlow();
}

function home2() {
    homeCount += 2
    home.innerText = homeCount
    updateGlow();
}

function home3() {
    homeCount += 3
    home.innerText = homeCount  
    updateGlow();
}

function guest1() {
    guestCount += 1
    guest.innerText = guestCount
    updateGlow();
}

function guest2() {
    guestCount += 2
    guest.innerText = guestCount  
    updateGlow();
}

function guest3() {
    guestCount += 3
    guest.innerText = guestCount
    updateGlow();
}

function newGame() {
    homeCount = 0
    guestCount = 0
    home.innerText = homeCount
    guest.innerText = guestCount
    updateGlow();
}

function updateGlow() {
  // clear any glow first
  homeLabel.classList.remove("glow");
  guestLabel.classList.remove("glow");

  if (homeCount > guestCount) {
    homeLabel.classList.add("glow");
  } else if (guestCount > homeCount) {
    guestLabel.classList.add("glow");
  }
  // if they’re equal, nothing glows
}