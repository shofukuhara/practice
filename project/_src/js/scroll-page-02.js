if (document.URL.match("/pages/scroll-page-02.html")) {
  const __split = () => {
    const texts = document.querySelectorAll(".scroll-page-02_chartext");
    texts.forEach((text) => {
      let html = "";
      const strs = text.textContent.split("");
      strs.forEach((str) => {
        // 濁点を無視する条件を追加
        const replacedStr = str
          .replace(/\s| /g, " ")
          .replace(/[\u309B\u309C]/, "");
        html += `<span class="scroll-page-02_js_chartext">${replacedStr}</span>`;
      });
      text.innerHTML = html;
    });
  };

  //特定のエリア内のクラスにdelayを付与
  const __delay = () => {
    const textAreas = document.querySelectorAll(".scroll-page-02_textArea");
    textAreas.forEach((textArea) => {
      const items = textArea.querySelectorAll(".scroll-page-02_js_chartext");
      items.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.05}s`;
      });
    });
  };

  window.addEventListener(
    "DOMContentLoaded",
    () => {
      __split();
      setTimeout(() => {
        __delay();
      });
    },
    2000
  );

  //スクロール処理
  window.addEventListener("load", () => {
    const items = document.querySelectorAll(".scroll-page-02_textArea");
    console.log(items);

    const options = {
      rootMargin: "-20% 0px",
    };

    const fadeIn = (target) => {
      target.classList.add("is-active");
    };

    const observeUse = (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // .scroll-page-02_js_chartext内の全ての直接の子孫要素(.i)に対して処理を行う
          const innerElements = entry.target.querySelectorAll(
            ".scroll-page-02_js_chartext"
          );
          innerElements.forEach((innerElement, index) => {
            fadeIn(innerElement);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observeUse, options);
    items.forEach((iSObserver) => {
      observer.observe(iSObserver);
    });
  });

  //リセットボタン
  const resetButton = document.querySelector(".scroll-page-01-button");
  resetButton.addEventListener("click", () => {
    window.location.reload();
  });
}
