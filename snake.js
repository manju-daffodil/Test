var num;
let max;

rollDice = () => {
  num = Math.ceil(Math.random() * 6);
  alert(num);
};
document.onclick = changeElement;

function changeElement() {
  let div = document.getElementById("player1");
  div.style.top = "575px";
  div.style.left = "120px";
}
max = max + num;

setTimeout(() => {
  for (let i = 1; i <= num; i++) {
    if (div.style.top === "575px" && div.style.left <= "700px") {
      div.style.left = parseInt(div.style.left) + 70 + "px";
      console.log("left", i, "==", div.style.left);
    }
  }
}, 0);
