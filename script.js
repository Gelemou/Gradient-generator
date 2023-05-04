let generate;
let firstColorNum = "";
let SecondColorNum = "";
let i = null;

// button for Generate Color
generate = document.getElementById("generate");
generate.addEventListener("click", generateRandomHex);

function generateRandomHex() {
  firstColorNum = "";
  SecondColorNum = "";
  for (let i = 0; i < 6; i++) {
    // get 0 ~ (n - 1) random number and convert it to HEX
    firstColorNum += Math.floor(Math.random() * 16).toString(16);
    SecondColorNum += Math.floor(Math.random() * 16).toString(16);
  }
  document.getElementById("firstColor").innerHTML = firstColorNum;
  document.getElementById("secondColor").innerHTML = SecondColorNum;
  document.body.style.background = `linear-gradient(45deg, #${firstColorNum}, #${SecondColorNum})`;
}

let copy;

// button for copy HexColor
copy = document.getElementById("copy");
copy.addEventListener("click", copyHex);

let HexColor = "";

function copyHex() {
  HexColor = `background: linear-gradient(45deg, #${firstColorNum}, #${SecondColorNum})`;
  firstColorNum == ""
    ? navigator.clipboard.writeText(
        "background: linear-gradient(45deg, #000000, #000000)"
      )
    : navigator.clipboard.writeText(HexColor);
}
