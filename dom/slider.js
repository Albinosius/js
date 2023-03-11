const leftbtn = document.querySelector("#left");
const rightbtn = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);


rightbtn.addEventListener("click", e => {
  e.preventDefault();

  let currentRight = parseInt(computedStyles.right);

  console.log(currentRight);

  if (currentRight < 600) {
    items.style.right = `${currentRight + 200}px`;
  }
  
});

leftbtn.addEventListener("click", (e) => {
  e.preventDefault();

  let currentRight = parseInt(computedStyles.right);

  console.log(currentRight);

  if (currentRight > 0) {
    items.style.right = `${currentRight - 200}px`;}
  
});