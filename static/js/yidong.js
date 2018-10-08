    let hear=document.querySelector('header')
    let top1=hear.offsetHeight;
    $(window).scroll(function(){
        let top = $(this).scrollTop();
        if(top>top1){
            $('header').animate({height:.8+'rem'},2)
            $('#dao').animate({'margin-top':.9+'rem'},2)
            $('.top').animate({top:.1+'rem'},2)
        }else{
            $('header').animate({height:1.8+'rem'},2)
            $('#dao').animate({'margin-top':2+'rem'},2)
            $('.top').animate({top:.82+'rem'},2)
        }
    })



    // banner
    let ol=document.querySelectorAll(".banner-l");
    let dian=document.querySelectorAll(".b-dian");
    let now=0;
    let next=0;
    let t=setInterval(move,1000);
    function move() {
        next++;
        if(next==ol.length){
            next=0;
        }
        $(dian).css('backgroundColor','rgba(0,0,0,.8)')
            .eq(next).css('backgroundColor','#fff');

        ol[next].style.left=7+"rem";
        $(ol).eq(now).animate({left:-14+"rem"},500)
        $(ol).eq(next).animate({left:0+"rem"},500)
        now=next;
    }





    move5();
    setInterval(move5,1000)
    function move5() {
        let newtime = new Date()
        let liss = document.querySelectorAll(".hao-top span")
        let sa = newtime.getFullYear();
        let sb = newtime.getDate()
        let sc = newtime.getMonth()
        if (newtime.getHours() >= 18) {
            sb += 1;
        }
        let nexttime = new Date(sa, sc, sb, 18)
        let cha = Math.floor(nexttime.getTime() / 1000) - Math.floor(newtime.getTime() / 1000)
        let newh = 0;
        let newf = 0;
        let newm = 0;
        let a = [];
        let hour = Math.floor(cha / (60 * 60))
        let fen = Math.floor(cha % (60 * 60) / 60)
        let miao = Math.floor(cha % 60)
        if (Math.floor(hour / 10) == 0) {
            newh = "0" + hour;
        } else {
            newh = hour
        }
        a.push(newh)
        if (Math.floor(fen / 10) == 0) {
            newf = "0" + fen;
        } else {
            newf = fen
        }
        a.push(newf)

        if (Math.floor(miao / 10) == 0) {
            newm = "0" + miao;
        } else {
            newm = miao
        }
        a.push(newm)
        for (let i = 0; i < liss.length; i++) {
            liss[i].innerText = a[i]
        }
    }