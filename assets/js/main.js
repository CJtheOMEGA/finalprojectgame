const Cop = document.getElementById("Cop");
const Robber1 = document.getElementById("Robber1");
const Robber2 = document.getElementById("Robber2");
const Trash = document.getElementById("Trash");
const Fence = document.getElementById("Fence");
const Spike = document.getElementById("Spike");
const Spike2 = document.getElementById("Spike2");

function jump() {
  if (Cop.classList != "jump") {
    Cop.classList.add("jump");

    setTimeout(function () {
      Cop.classList.remove("jump");
    }, 300);
  }
  if (Robber1.classList != "jump") {
    Robber1.classList.add("jump");

    setTimeout(function () {
      Robber1.classList.remove("jump");
    }, 300);
  }
  if (Robber2.classList != "jump") {
    Robber2.classList.add("jump");

    setTimeout(function () {
      Robber2.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let CopTop = parseInt(window.getComputedStyle(Cop).getPropertyValue("top"));
  let Robber1Top = parseInt(window.getComputedStyle(Robber1).getPropertyValue("top"));
  let Robber2Top = parseInt(window.getComputedStyle(Robber2).getPropertyValue("top"));

  // get current cactus X position
  let TrashLeft = parseInt(
    window.getComputedStyle(Trash).getPropertyValue("left")
  );

  // detect collision
  if (TrashLeft < 50 && TrashLeft > 0 && CopTop >= 140) {
    // collision
    alert("Game Over! The robber got away");
  }

  let FenceLeft = parseInt(
    window.getComputedStyle(Fence).getPropertyValue("left")
  );

  // detect collision
  if (FenceLeft < 50 && FenceLeft > 0 && CopTop >= 140) {
    // collision
    alert("Game Over! The robber got away");
  }

  let SpikeLeft = parseInt(
    window.getComputedStyle(Spike).getPropertyValue("left")
  );

  // detect collision
  if (SpikeLeft < 50 && SpikeLeft > 0 && Robber1Top >= 140) {
    // collision
    alert("Game Over! The cops caught you");

  }

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

