const loading = document.querySelector(".kv-page-01_loading");
window.addEventListener("load", () => {
  setTimeout(() => {
    loading.classList.add("is-remove");
  }, 1000);
});

const loadingButton = document.querySelector(".kv-page-01-button");
loadingButton.addEventListener("click", () => {
  loading.classList.remove("is-remove");
  setTimeout(() => {
    loading.classList.add("is-remove");
  }, 2000);
});
