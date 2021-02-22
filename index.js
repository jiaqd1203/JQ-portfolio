window.onload = function(){
  // 不加[]代表数组，[]代表具体元素
    var slideIn = document.getElementsByClassName('project');
    function slide(){
      for(var i = 0; i<slideIn.length; i++){
        // 滚动到project框从底部探出一半的位置(视口viewport高度+页面滚动的距离而不是滚动条的-图片高度一半)
        var slideAt = window.innerHeight + window.scrollY - slideIn.height / 2;
        // 图片底部距文档顶部的距离（整个页面的顶部而不是当前视口的顶部+project的高度）
        var imageBottom = sliderIn.offsetTop + sliderIn.height;
        // 图片是否已经从底部出现并且显示了一半
        var halfProjectShown = slideAt > sliderIn.offsetTop;
        // 图片是否已经被完全滚动到从页面消失（总滚动距离和图片底部到顶部距离）
        var projectGone = window.scrollY < imageBottom;       
        if ( halfProjectShown && projectGone) {
          // 给project加个active类
          sliderIn.classList.add('active');
      } else {
          //移除active类 
          sliderIn.classList.remove('active');
      }
      }
    }
    window.addEventListener('scroll', slide);
}