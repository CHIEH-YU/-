//當畫面元素(靜態元素)載入完成後才能執行程式
//function(){要執行的元素}=>函式
$(document).ready(function () {
    //畫面元素載入完成後要執行的程式
    //啟用wow.js
    new WOW().init();
    //1.設定anv-link的點擊事件
    //選擇.navbar裡面所有的.nav-link
    $('.navbar .nav-link , #scrollTopBtn').click(function () {
        //2.取得移動目標
        //$(this)被點擊的nav-link
        //attr可以取得目前被點擊屬性 並把屬性的
        const target = $(this).attr('href');
        console.log(target);
        //#introSection(這是target)
        //3.取得移動目標座標
        const position = $(target).offset().top;
        //取出高度座標
        console.log(position);
        //4.使用動畫移動到目標的座標
        const navbarHeight = 56;
        //先停止目前執行的動畫 在執行新的動畫
        //.animate({},動畫秒數)
        $('html,body').stop().animate({
            scrollTop: position - navbarHeight
        }, 1000);
    });

    //準備google map所需的資料
    const myPosition = {

        lat: 24.9874833,
        lng: 121.5760354
    };
    //啟用google map
    //選擇畫面上要放置地圖的元素
    //必須要是標籤格式：<div></div>
    const mapElement = $('#map')[0];
    //Map(地圖的畫面元素,{})
    const googleMap = new google.maps.Map(mapElement, {
        //設定地圖的中心點
        center: myPosition,
        //設定地圖的縮放
        zoom: 12,
        styles: mapStyles,
        draggable: false
        //style:(把snazzymap貼近來)
        //放置marker
    });

    const mapMarker = new google.maps.Marker({
        position: myPosition,
        map: googleMap
    });

    //icon:'./img⋯⋯ 可以用icon屬性換圖
});