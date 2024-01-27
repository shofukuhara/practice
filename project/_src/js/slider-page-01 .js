if (document.URL.match("/pages/slider-page-01.html")) {
  let circle_items = document.querySelectorAll(".slider-page-01_circle");
  let circle_area = document.querySelector(".slider-page-01_circleArea");
  let circle_item = circle_items.length;
  console.log(circle_items);

  let deg = 360.0 / circle_item;
  let radians = (deg * Math.PI) / 180.0;
  let radians90 = (90 * Math.PI) / 180.0;
  let circle_r = circle_area.offsetWidth / 2; // innerWidthではなくoffsetWidthを使用

  circle_items.forEach((element, i) => {
    // 引数の順序を修正
    let radians_i = radians * i - radians90;
    let x = Math.cos(radians_i) * circle_r + circle_r;
    let y = Math.sin(radians_i) * circle_r + circle_r;
    //vw変換
    const rate = 100 / window.innerWidth;
    const itemX = rate * x * 1;
    const itemY = rate * y * 1;
    element.style.left = itemX + "vw"; // ピクセル単位を指定
    element.style.top = itemY + "vw"; // ピクセル単位を指定
  });
  //VWの値に変換できる関数(関数のカッコにquerySelectorを格納したクラスをいれる・横のVW)
  const __widthVw = (item) => {
    const width = window.innerWidth;
    const innerWidth = item.clientWidth;
    const rate = 100 / width;
    // console.log(rate * innerWidth * 1);
    return;
  };

  let currentRotation = 0;

  const __slideNext = () => {
    let circle_items = document.querySelectorAll(".slider-page-01_circle");
    let circle_area = document.querySelector(".slider-page-01_circleArea");
    let circle_item = circle_items.length;
    let deg = 360.0 / circle_item;
    currentRotation += deg;
    circle_area.style.transform = "rotate(" + -currentRotation + "deg)";
  };

  const __slidePrev = () => {
    let circle_items = document.querySelectorAll(".slider-page-01_circle");
    let circle_area = document.querySelector(".slider-page-01_circleArea");
    let circle_item = circle_items.length;
    let deg = 360.0 / circle_item;
    currentRotation += deg;
    circle_area.style.transform = "rotate(" + currentRotation + "deg)";
  };

  const Next = document.querySelector(".slider-page-01_buttonNext");
  Next.addEventListener("click", () => {
    __slideNext();
    console.log(currentRotation);
  });

  const Prev = document.querySelector(".slider-page-01_buttonPrev");
  Prev.addEventListener("click", () => {
    __slidePrev();
    console.log(currentRotation);
  });
}
