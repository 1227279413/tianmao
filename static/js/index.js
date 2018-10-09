   // banner
    let index=0;
    let t=setInterval(move,2000)
        $(".banner").hover(function () {
            clearInterval(t)
        },function () {
            t=setInterval(move,2000)
        })
       for(let i=0;i<$(".b-dian").length;i++){
           $(".b-dian").eq(i).mouseenter(function () {
               index=i-1
               move()
           })
       }
        function move(){
            index++
            if(index>$(".banner ol").length-1){
                index=0
            }
        $(".b-dian").css("background-color","rgba(0,0,0,.7)")
                        .eq(index).css("background-color","#fff")

        $(".banner ol").css("z-index","0")
            .eq(index).css("z-index","10")
   }

    let ind=0;
    let ti=setInterval(move1,2000)
        $(".chao-bbox").hover(function () {
            clearInterval(ti)
        },function () {
            ti=setInterval(move1,2000)
        })
        function move1(){
            ind++
            if(ind==$(".chao-nei").length){
                ind=0
            }
        $(".chao-left").css({
           "background-color":"#F1F1F1",
           "color":"#000"})
           .eq(ind).css({
           "background-color":"#00B262",
           "color":"#fff"})
        $(".chao-nei").css("z-index","0")
            .eq(ind).css("z-index","10")
   }





// 楼层
    let arr=$(".tiann").map(function () {
        return  Math.floor($(this).offset().top);
    })
    arr=arr.toArray();
    // console.log(arr);


    $(window).scroll(function () {
        let top=Math.floor($(this).scrollTop())-500
        top>=1000?$("#lou").slideDown():$("#lou").fadeOut();
        top>=300?$(".fu").slideDown():$(".fu").fadeOut();

        let index=arr.findIndex((item)=>item>top)

            if(index>=0){
                $("#lou li").css("background-color","rgba(0,0,0,.8)")
                            .eq(index).css("background-color","blue");
            }
    })

    $("#lou li").click(function () {
        let index =$(this).index()-1

        $(this).css("background-color","rgba(0,0,0,.8)")
            .eq(index).css("background-color","blue");
        $("html")
            .stop()
            .animate({scrollTop:arr[index]-100})

    })
// tou
   let hea=document.querySelector('.header-top').querySelectorAll('ul')
   let tan=document.querySelector('.header-top').querySelectorAll('.header-tan')
   let dang=document.querySelector('.header-top').querySelectorAll('.header-dang')
   for (let j=0 ; j<hea.length;j++) {
       hea[j].onmouseenter = function () {
           tan[j].style.display = 'block';
           dang[j].style.display = 'block'
       }
   }
   for (let i=0 ; i<hea.length;i++){
       hea[i].onmouseleave=function () {
           tan[i].style.display='none';
           dang[i].style.display='none'
       }
   }
  // 品牌/banner的nav
   function btn(ab,u,a){
      let abc=document.getElementById(ab)
       let ula=abc.querySelectorAll(u)
       let uls=abc.querySelectorAll(a)
       for (let i=0 ; i<uls.length;i++){
           ula[i].onmouseenter=function () {
               uls[i].style.display='block'
           }
           ula[i].onmouseleave=function () {
               uls[i].style.display='none'
           }
       }
   }
   btn('banner','li','.b-tan');
   btn('pai','ul','.pai-img');






