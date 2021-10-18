setInterval(realtime,10)

function realtime(){
    //html要素の取得
    var timeview = document.getElementById('timeview');
    var dateview = document.getElementById('dateview');
    //日時の取得
    var nowTime = new Date();
    var nowYear = nowTime.getFullYear();
    var nowMonth = nowTime.getMonth() + 1;
    var nowDay = nowTime.getDate();
    var nowHour = nowTime.getHours();
    var nowMin = nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();
    //時間を見やすいように変換
    var viewHour = timeconv(nowHour);
    var viewMin = timeconv(nowMin);
    var viewSec = timeconv(nowSec);
    //表示
    //console.log(viewHour + ':' + viewMin + ':' + viewSec);
    //console.log(nowYear+'年' + nowMonth+'月' + nowDay+'日');
    timeview.innerText = viewHour + ':' + viewMin + ':' + viewSec;
    dateview.innerText = nowYear+'年' + nowMonth+'月' + nowDay+'日';
}

function timeconv(x){
    var y;
    y = ('00' + x).slice(-2);
    return y;
}