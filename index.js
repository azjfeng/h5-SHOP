var TAP = document.tap? "tap":"click";

var page = {
    clickEvent:function(){
        var scroll = document.getElementsByClassName('scroll_content');

        $('.nav').on(TAP,function(e){
            var index = e.target.dataset.index;
            $('.scroll_content').scrollTop(arr[index])
            scroll.removeEventListener(TAP,page.scrollEvent,false)
            $('li').eq(index).addClass('active').siblings().removeClass('active')
        });

        scroll.addEventListener(TAP,page.scrollEvent,false)
        // $('.scroll_content').on(TAP,function(){
        //     let scrollHight = $('.scroll_content').scrollTop()
        //     var height1 = 0,height2=0;
        //     for (var i = 0; i < arr.length; i++) {
        //         height1 = arr[i];
        //         height2 = arr[i+1];
        //         if (!height2 || (scrollHight >= height1 && scrollHight < height2)) {
        //             $('li').eq(i).addClass('active').siblings().removeClass('active')
        //           }
        //     }
        // })
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
        let scrollHight = $('.scroll_content').scrollTop()
        var height1 = 0,height2=0;
        for (var i = 0; i < arr.length; i++) {
            height1 = arr[i];
            height2 = arr[i+1];
            if (!height2 || (scrollHight >= height1 && scrollHight < height2)) {
                $('li').eq(i).addClass('active').siblings().removeClass('active')
              }
        }
    }

}
var  arr = page.onReady();
page.clickEvent();