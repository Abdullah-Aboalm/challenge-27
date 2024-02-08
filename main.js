const myDivs = document.querySelectorAll(".input-cont");
const myBtn = document.querySelector("#Btn");
const myEmail = document.querySelector("#Email");
const myEm_Err = document.querySelector("#EM-err");
const myFname = document.querySelector("#fNAme");

window.onload = () => {
  myFname.focus();
};

myBtn.addEventListener("click", () => {
  myDivs.forEach(function (item) {
    let input = item.querySelector("input");
    let p = item.querySelector("p");
    if (input.value.length === 0) {
      item.classList.add("error");
      p.classList.add("appear");
      input.style.cssText = "border-color: #ff6161";
    }
    input.addEventListener("input", () => {
      item.classList.remove("error");
      p.classList.remove("appear");
      input.style.cssText =
        "outline-color: rgb(93, 93, 93); border-color: rgb(92, 92, 92)";
    });
    if (
      /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/.test(myEmail.value) ===
      false
    ) {
      myEmail.classList.add("error");
      myEm_Err.classList.add("appear");
      myEmail.style.cssText = "border-color: #ff6161";
    }
  });
});
