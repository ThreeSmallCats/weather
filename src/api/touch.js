// 滑动函数
export function touch(ele, moveFn, leftFn,rightFn) {
    let startX = 0
    let startY = 0
    let endX = 0
    let endY = 0
    let moveX = 0
    let moveY = 0
    let lastY = 0
    // let moveYa = 0
    ele.addEventListener('touchstart',function (event) {
        // console.log(event);
        startX = event.touches[0].clientX
        startY = event.touches[0].clientY
        // console.log(startX,startY);

    })
    ele.addEventListener('touchmove',function (event) {
        // 判断上下滑
        // console.log(event);
        // moveX = event.touches[0].clientX
        moveY = event.touches[0].clientY - startY
        // console.log(moveY);
        // moveYa = event.touches[0].clientY
        // console.log(moveY);
        // console.log(moveYa);
    //    if (startY - moveY > 0 ) {
    //     //    上滑
    //     console.log('top tap');
    //    }else if(startY - moveY < 0){
    //     //    下滑
    //     console.log('bottom tap');

    //    }
        moveFn(moveY,lastY)
    // idele.style.transform = `translateY(${lastY + moveY}px)`
    // if (lastY + moveY < -400) {
    //     idele.style.transform = `translateY(-400px)`
            
    //     }
    })
    ele.addEventListener('touchend',function (event) {
        //  判断左右滑
        // console.log(event);
        endX = event.changedTouches[0].clientX
        endY = event.changedTouches[0].clientY
        lastY += moveY
        if (startX - endX > 0 && Math.abs(startX-endX) > 50) {
            // 左滑
            // console.log('left tap');
            leftFn()
        } else if (startX - endX < 0 && Math.abs(startX - endX) > 50){
            // 右滑
            // console.log('right tap');
            rightFn()
        }
        // console.log(endX,endY);

    })
}