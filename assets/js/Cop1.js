const Cop = document.getElementById("Cop");
const Trash = document.getElementById("Trash");

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
  let TrashLeft = parseInt(
    window.getComputedStyle(Trash).getPropertyValue("left")
  );

  // detect collision
  if (TrashLeft < 50 && TrashLeft > 0 && CopTop >= 140) {
    // collision
    alert("Game Over! The robber got away");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

