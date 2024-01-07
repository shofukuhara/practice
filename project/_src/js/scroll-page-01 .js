if (document.URL.match("/pages/scroll-page-01.html")) {
  function fadein(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        //クラス付与
        entry.target.classList.add("is-fade");
        observer.unobserve(entry.target);
      }
    });
  }

  // 監視する要素のセレクタ
  const items = document.querySelectorAll(".scroll-page-01_image");

  //オプション
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const fade = new IntersectionObserver(fadein, options);
  items.forEach((item) => {
    fade.observe(item);
  });

  const resetButton = document.querySelector(".scroll-page-01-button");
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
}
