if(document.URL.match("/pages/kv-page-01.html")){const loading=document.querySelector(".kv-page-01_loading");window.addEventListener("load",(()=>{setTimeout((()=>{loading.classList.add("is-remove")}),1e3)}));const loadingButton=document.querySelector(".kv-page-01-button");loadingButton.addEventListener("click",(()=>{loading.classList.remove("is-remove");setTimeout((()=>{loading.classList.add("is-remove")}),2e3)}))}if(document.URL.match("/pages/scroll-page-01.html")){function fadein(entries,observer){entries.forEach((entry=>{if(entry.isIntersecting){entry.target.classList.add("is-fade");observer.unobserve(entry.target)}}))}const items=document.querySelectorAll(".scroll-page-01_image");const options={root:null,rootMargin:"0px",threshold:0};const fade=new IntersectionObserver(fadein,options);items.forEach((item=>{fade.observe(item)}));const resetButton=document.querySelector(".scroll-page-01-button");resetButton.addEventListener("click",(()=>{window.location.reload()}))}if(document.URL.match("/pages/slider-page-01.html")){const swiper=new Swiper(".swiper",{spaceBetween:50,slidesPerView:2,loop:true,loopAdditionalSlides:1,centeredSlides:true,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}