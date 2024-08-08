var images = document.getElementsByTagName("img");
  function callback(entries) {
   for (let i of entries) {
     if (i.isIntersecting) {
         let img = i.target;
         let trueSrc = img.getAttribute("data-src");
         img.setAttribute("src", trueSrc);
         observer.unobserve(img);
     }
   } 
 }
     const observer = new IntersectionObserver(callback);
     for (let i of images) {
       observer.observe(i);
     }

// 排除懒加载的图片
function callback(entries) {
  for (let i of entries) {
    if (i.isIntersecting) {
      let img = i.target;
      if (img.id !== "yyimg") {
        let trueSrc = img.getAttribute("data-src");
        img.setAttribute("src", trueSrc);
        observer.unobserve(img);
      }
    }
  }
}