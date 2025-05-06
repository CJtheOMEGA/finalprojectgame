const Robber1 = document.getElementById("Robber1");
const Spike = document.getElementById("Spike");

function jump() {
  if (Robber1.classList != "jump") {
    Robber1.classList.add("jump");

    setTimeout(function () {
      Robber1.classList.remove("jump");
    }, 300);
  }

}

let isAlive = setInterval(function () {
  // get current dino Y position
  let Robber1Top = parseInt(window.getComputedStyle(Robber1).getPropertyValue("top"));

  // get current cactus X position

  let SpikeLeft = parseInt(
    window.getComputedStyle(Spike).getPropertyValue("left")
  );

  // detect collision
  if (SpikeLeft < 50 && SpikeLeft > 0 && Robber1Top >= 140) {
    // collision
    alert("Game Over! The cops caught you");

  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

