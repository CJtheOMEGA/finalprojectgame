
const Robber2 = document.getElementById("Robber2");
const Spike2 = document.getElementById("Spike2");

function jump() {
  if (Robber2.classList != "jump") {
    Robber2.classList.add("jump");

    setTimeout(function () {
      Robber2.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let Robber2Top = parseInt(window.getComputedStyle(Robber2).getPropertyValue("top"));

  // get current cactus X position
  let Spike2Left = parseInt(
    window.getComputedStyle(Spike2).getPropertyValue("left")
  );

  // detect collision
  if (Spike2Left < 50 && Spike2Left > 0 && Robber2Top >= 140) {
    // collision
    alert("Game Over! The cops caught you");

  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

