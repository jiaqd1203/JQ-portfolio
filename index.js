window.onload = function(){

  
    function slide(){
    // 不加[]代表数组，[]代表具体元素
    // 获取所有project
    var slideIn = document.getElementsByClassName('project');
    //目前viewport的底部到浏览器顶端的高度=viewport高度+总滑动距离
    var windowBottom = window.scrollY + window.innerHeight;
      for(var i = 0; i<slideIn.length; i++){
        // 每个单独的project
        var slideItem = slideIn[i];
        // // 图片露出一半=图片距离整个页面的顶部加image的可见高度的一半，包括填充，但不包括边框，滚动条或边距。
        var halfIn = slideItem.offsetTop + slideItem.clientHeight / 2;      
        // 图片底部=图片距离整个页面的顶部加image的可见高度，包括填充，但不包括边框，滚动条或边距。
        var proBottom = slideItem.offsetTop + slideItem.clientHeight;        
        // 如果目前viewport的底部到浏览器顶端的高度大于图片露出一半的高度并且
        // 图片底部距离浏览器顶部的距离大于总滚动的距离
        if(windowBottom > halfIn && proBottom > window.scrollY){
          slideItem.classList.add('active');
        }else{
          slideItem.classList.remove('active');
        }
      }  
    }
    window.addEventListener('scroll', slide);
}
/*
        // 滚动到project框从底部探出一半的位置(视口viewport高度+页面滚动的距离而不是滚动条的-图片高度一半)
        var slideAt = window.innerHeight + window.scrollY - slideItem.height / 2;
        // 图片底部距文档顶部的距离（整个页面的顶部而不是当前视口的顶部+project的高度）
        var imageBottom = slideItem.offsetTop + slideItem.height;
        // 图片是否已经从底部出现并且显示了一半
        var halfProjectShown = slideAt > slideItem.offsetTop;
        // 图片是否已经被完全滚动到从页面消失（总滚动距离和图片底部到顶部距离）
        var projectGone = window.scrollY < imageBottom;       
        if ( halfProjectShown && projectGone) {
          // 给project加个active类
          slideItem.classList.add('active');
      } else {
          //移除active类 
          slideItem.classList.remove('active');
      }
      }*/