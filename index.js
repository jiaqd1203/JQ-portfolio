window.onload = function(){
    var slideIn = document.getElementsByClassName('project');
    function slide(){
        slideIn.forEach(sliderimage => {
            // 滑动到图片显示的一半
            const slideAt = window.innerHeight + window.scrollY - sliderimage.height / 2;
            // 图片底部距文档顶部的距离
            const imageBottom = sliderimage.offsetTop + sliderimage.height;
            // 图片是否已经显示了一半
            const isHalfShown = slideAt > sliderimage.offsetTop;
            // 图片是否已经被完全滚动出去
            const isNotScrolledPast = window.scrollY < imageBottom;
            if (isHalfShown && isNotScrolledPast) {
              sliderimage.classList.add('active');
            } else {
              sliderimage.classList.remove('active');
            }
          });

        }
    window.addEventListener('scroll', slide);
}