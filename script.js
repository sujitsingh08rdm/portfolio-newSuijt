let btns = document.querySelectorAll(".btn");
let submit = document.getElementById("submit");

btns.forEach(function (buttons) {
  buttons.addEventListener("click", function () {
    console.log(buttons.attributes.id.value);

    if (buttons.attributes.id.value == "dev") {
      document.getElementById("webDesign").style.display = "block";
      document.getElementById("guitar").style.display = "none";
      document.getElementById("projectM").style.display = "none";
    }
    if (buttons.attributes.id.value == "gpl") {
      document.getElementById("webDesign").style.display = "none";
      document.getElementById("guitar").style.display = "block";
      document.getElementById("projectM").style.display = "none";
    }
    if (buttons.attributes.id.value == "pma") {
      document.getElementById("webDesign").style.display = "none";
      document.getElementById("guitar").style.display = "none";
      document.getElementById("projectM").style.display = "block";
    }
    if (buttons.attributes.id.value == "all") {
      document.getElementById("webDesign").style.display = "block";
      document.getElementById("guitar").style.display = "block";
      document.getElementById("projectM").style.display = "block";
    }
  });
});

function downloadBtn() {
  alert("CV not found");
}

submit.addEventListener("click", function () {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let msg = document.getElementById("msg");

  if (name.value == "" || email.value == "" || msg.value == "") {
    alert("Please Fill Details");
  } else {
    alert("Thanks for connecting");
  }
});
