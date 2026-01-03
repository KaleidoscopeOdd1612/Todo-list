const btns = document.querySelector(".item-list");

btns.addEventListener("click", (event) => {
  const btn = event.target.closest(".favorite-icon");
  
  if (!btn) return;
  
  btn.classList.toggle("filled");
  
  btn.innerHTML = btn.classList.contains("filled") ? "&#10084;" : "&#9825;"
});