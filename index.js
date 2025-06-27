//змінні
let countHome = 0;
let countGuest = 0;
let timeLeft = 60;
let timerInterval;
let timerStarted = false;

let homeScore = document.querySelector(".gol");
let guestScore = document.querySelector(".gol2")

function startTimer() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.innerText = `Time: ${timeLeft}`;

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.innerText = "Time's up!";
      endGame();
    } else {
      timerDisplay.innerText = `Time: ${timeLeft}`;
    }
  }, 1000);
}

function add1Home() {
   if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }
  let incrm = countHome +=1;
  homeScore.innerText = incrm;
  throwBallFromHome();
  leadingTeam();
}
function add1Guest() {
   if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }
  let incrm = countGuest +=1;
  guestScore.innerText = incrm;
  throwBallFromGuest();
  leadingTeam();
}
function add2Home() {
   if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }
  let incrm = countHome += 2;
  homeScore.innerText = incrm;
  throwBallFromHome();
  leadingTeam();
}
function add2Guest() {
   if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }
  let incrm = countGuest += 2;
  guestScore.innerText = incrm;
  throwBallFromGuest();
  leadingTeam();
}
function add3Home() {
   if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }
  let incrm = countHome += 3;
  homeScore.innerText = incrm;
  throwBallFromHome();
  leadingTeam();
}
function add3Guest() {
   if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }
  let incrm = countGuest += 3;
  guestScore.innerText = incrm;
  throwBallFromGuest();
  leadingTeam();
}

function endGame() {
  const buttons = document.querySelectorAll(".block");

  buttons.forEach(button => {
    button.style.pointerEvents = "none"; // Блокує всі кліки
    button.style.opacity = "0.5";         // Робить візуально "неактивним"
    button.style.cursor = "default";      // Міняє курсор
  });
}
function newGame() {
  // Скидаємо рахунки
  countHome = 0;
  countGuest = 0;
  document.querySelector(".gol").innerText = 0;
  document.querySelector(".gol2").innerText = 0;

  // Скидаємо таймер
  clearInterval(timerInterval);
  timeLeft = 60;
  document.getElementById("timer").innerText = "Time: 60";
  timerStarted = false;

  // Розблоковуємо кнопки
  const buttons = document.querySelectorAll(".block");
  buttons.forEach(button => {
    button.style.pointerEvents = "auto";
    button.style.opacity = "1";
    button.style.cursor = "pointer";
  });

  // Скидаємо лідера
  document.getElementById("leading-home-team").innerText = "";
  document.getElementById("leading-guest-team").innerText = "";
}


function throwBallFromHome() {
  const ball = document.createElement('img');
  ball.src = 'ball.png';
  ball.classList.add('ball', 'from-home');
  document.querySelector('.hoop-container').appendChild(ball);
  setTimeout(() => ball.remove(), 1000);
  playScoreSound();
}

function throwBallFromGuest() {
  const ball = document.createElement('img');
  ball.src = 'ball.png';
  ball.classList.add('ball', 'from-guest');
  document.querySelector('.hoop-container').appendChild(ball);
  setTimeout(() => ball.remove(), 1000);
  playScoreSound();
}
function playScoreSound() {
  const sound = new Audio('score.mp3');
  sound.play();
}
function leadingTeam() {
  if (countHome > countGuest) {
    document.getElementById("leading-home-team").innerText = "Leading team";
    document.getElementById("leading-guest-team").innerText = "";
  } else if (countGuest > countHome) {
    document.getElementById("leading-guest-team").innerText = "Leading team";
    document.getElementById("leading-home-team").innerText = "";
  } else if (countGuest === countHome) {
        document.getElementById("leading-guest-team").innerText = "Draw";
        document.getElementById("leading-home-team").innerText = "Draw";

  }
}

