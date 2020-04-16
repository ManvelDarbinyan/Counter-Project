const buttons = document.querySelectorAll("button");
let count = 0;
buttons.forEach((button) => {
  button.addEventListener("click", changeCount);
  function changeCount() {
    if (button.classList.contains("loweCount")) {
      count--;
    } else if (button.classList.contains("addCount")) {
      count++;
    }
    console.log(count);
    const sum = document.querySelector("h1");
    sum.textContent = count;

    if (count < 0) {
      sum.style.color = "red";
    } else if (count > 0) {
      sum.style.color = "green";
    } else {
      sum.style.color = "#333333";
    }
  }
});
