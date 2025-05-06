const Cop = document.getElementById("Cop");
const Fence = document.getElementById("Fence");

function jump() {
  if (Cop.classList != "jump") {
    Cop.classList.add("jump");

    setTimeout(function () {
      Cop.classList.remove("jump");
    }, 300);
  }
  
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let CopTop = parseInt(window.getComputedStyle(Cop).getPropertyValue("top"));

  // get current cactus X position

  let FenceLeft = parseInt(
    window.getComputedStyle(Fence).getPropertyValue("left")
  );

  // detect collision
  if (FenceLeft < 50 && FenceLeft > 0 && CopTop >= 140) {
    // collision
    alert("Game Over! The robber got away");
  }

}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

