var TAP = document.tap? "tap":"click";

var page = {
    clickEvent:function(){
        $('.nav').click(function(e){
            var index = e.target.dataset.index;
            $('.scroll_content').scrollTop(arr[index])
            $('li').eq(index).addClass('active').siblings().removeClass('active')
        });
        $('.scroll_content').scroll(function(e){
            let scrollHight = $('.scroll_content').scrollTop()
            var height1 = 0,height2=0;
            for (var i = 0; i < arr.length; i++) {
                height1 = arr[i];
                height2 = arr[i+1];
                if (!height2 || (scrollHight >= height1 && scrollHight < height2)) {
                    $('li').eq(i).addClass('active').siblings().removeClass('active')
                  }
            }
        })
    },
    onReady:function(){
        var nodeList = document.querySelectorAll('.scroll_box');
        var scrollArr = [0];
        var height = 0 ;
        for (var i = 0; i < nodeList.length; i++) {
            // console.log(nodeList[i])
            height += nodeList[i].offsetHeight;
            scrollArr.push(height);
            
        }
        console.log(scrollArr)
        return scrollArr
    },
    scrollEvent:function(){
    }

}
var  arr = page.onReady();
page.clickEvent();