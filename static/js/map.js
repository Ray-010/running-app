// function initMap() {
//   // Geolocation APIに対応している
//   if (navigator.geolocation) {
//     // 現在地を取得
//     navigator.geolocation.getCurrentPosition(
//       // 取得成功した場合
//       function(position) {
//         // 緯度・経度を変数に格納
//         var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         // マップオプションを変数に格納
//         var mapOptions = {
//           zoom : 15,          // 拡大倍率
//           center : mapLatLng  // 緯度・経度
//         };
//         // マップオブジェクト作成
//         var map = new google.maps.Map(
//           document.getElementById("map"), // マップを表示する要素
//           mapOptions         // マップオプション
//         );
//         //　マップにマーカーを表示する
//         var marker = new google.maps.Marker({
//           map : map,             // 対象の地図オブジェクト
//           position : mapLatLng   // 緯度・経度
//         });

//         // new google.maps.Circle({
//         //   center: mapLatLng,       // 中心点(google.maps.LatLng)
//         //   fillColor: '#ff0000',   // 塗りつぶし色
//         //   fillOpacity: 0.1,       // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
//         //   map: map,             // 表示させる地図（google.maps.Map）
//         //   radius: 1500,          // 半径（ｍ）
//         //   strokeColor: '#ff0000', // 外周色
//         //   strokeOpacity: 1,       // 外周透過度（0: 透明 ⇔ 1:不透明）
//         //   strokeWeight: 1         // 外周太さ（ピクセル）
//         // });
//       },
//       // 取得失敗した場合
//       function(error) {
//         // エラーメッセージを表示
//         switch(error.code) {
//           case 1: // PERMISSION_DENIED
//             alert("位置情報の利用が許可されていません");
//             break;
//           case 2: // POSITION_UNAVAILABLE
//             alert("現在位置が取得できませんでした");
//             break;
//           case 3: // TIMEOUT
//             alert("タイムアウトになりました");
//             break;
//           default:
//             alert("その他のエラー(エラーコード:"+error.code+")");
//             break;
//         }
//       }
//     );
//   // Geolocation APIに対応していない
//   } else {
//     alert("この端末では位置情報が取得できません");
//   }
// }

// function clickBtn3() {
//   const number2 = document.getElementById("number2");
//   var distanse = document.getElementById("number2").value;
//   distanse = Number(distanse)*1000;
//   document.getElementById("span2").textContent = number2.value;
  
//   // Geolocation APIに対応している
//   if (navigator.geolocation) {
//     // 現在地を取得
//     navigator.geolocation.getCurrentPosition(
//       // 取得成功した場合
//       function(position) {
//         // 緯度・経度を変数に格納
//         var mapLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//         // マップオプションを変数に格納
//         var mapOptions = {
//           zoom : 15,          // 拡大倍率
//           center : mapLatLng  // 緯度・経度
//         };
//         // マップオブジェクト作成
//         var map = new google.maps.Map(
//           document.getElementById("map"), // マップを表示する要素
//           mapOptions         // マップオプション
//         );
//         //　マップにマーカーを表示する
//         var marker = new google.maps.Marker({
//           map : map,             // 対象の地図オブジェクト
//           position : mapLatLng   // 緯度・経度
//         });

//         new google.maps.Circle({
//           center: mapLatLng,       // 中心点(google.maps.LatLng)
//           fillColor: '#ff0000',   // 塗りつぶし色
//           fillOpacity: 0.1,       // 塗りつぶし透過度（0: 透明 ⇔ 1:不透明）
//           map: map,             // 表示させる地図（google.maps.Map）
//           radius: distanse,          // 半径（ｍ）
//           strokeColor: '#ff0000', // 外周色
//           strokeOpacity: 1,       // 外周透過度（0: 透明 ⇔ 1:不透明）
//           strokeWeight: 1         // 外周太さ（ピクセル）
//         });
//       },
//       // 取得失敗した場合
//       function(error) {
//         // エラーメッセージを表示
//         switch(error.code) {
//           case 1: // PERMISSION_DENIED
//             alert("位置情報の利用が許可されていません");
//             break;
//           case 2: // POSITION_UNAVAILABLE
//             alert("現在位置が取得できませんでした");
//             break;
//           case 3: // TIMEOUT
//             alert("タイムアウトになりました");
//             break;
//           default:
//             alert("その他のエラー(エラーコード:"+error.code+")");
//             break;
//         }
//       }
//     );
//   // Geolocation APIに対応していない
//   } else {
//     alert("この端末では位置情報が取得できません");
//   } 
// }

function click_start() {
  let getKm = document.getElementById("span2").textContent;
  // if (getKm) {
  //   $('#timer-wrapper').removeClass('hidden');
  count_timer();
  // } else {
  //   alert('距離を設定してください');
  // }
}
// 後で消す
function clickBtn3() {
  const number2 = document.getElementById("number2");
  var distanse = document.getElementById("number2").value;
  document.getElementById("span2").textContent = number2.value;
}

let cnt = 0;
function count_timer() {
  $('#timer-wrapper').removeClass('hidden');
  $('#start-run').removeClass('hidden');
  $('#click-start').addClass('hidden');
  cover_on()
  predict_run_time()

  cnt = 0;
  var timer = document.getElementById('timer');
  timer.innerText = cnt;
  id = setInterval(function() {
    cnt++;
    timer.innerText = cnt;
  }, 1000)
}
function stop_timer() {
  clearInterval(id)  
  insert_result(cnt)
  $('#timer-end-wrapper').removeClass('hidden');
}
function display_none() {
  $('#timer-wrapper').addClass('hidden');
  cover_off()
}
function display_block() {
  $('#timer-wrapper').removeClass('hidden');
  cover_on()
}
function cover_on() {
  $('#cover').removeClass('hidden');
}
function cover_off() {
  $('#cover').addClass('hidden');
}

// 終了画面
function close_result() {
  $('#timer-end-wrapper').addClass('hidden');
  $('#timer-wrapper').addClass('hidden');
  $('#cover').addClass('hidden');
  $('#start-run').addClass('hidden');
  $('#click-start').removeClass('hidden');
}

// 終了後画面
// 18km/h → 5 m/s
let max_run_speed = 5;
function predict_run_time() {
  const number2 = document.getElementById("number2");
  var set_distanse = document.getElementById("number2").value*1000;
  let result = Math.floor(set_distanse/max_run_speed);
  document.getElementById('predict_run_time').textContent = result;
}

function insert_result(cnt) {
  let set_distance = document.getElementById('number2').value;
  let run_time = cnt;
  let burned_calory = 0;

  document.getElementById('set_distance').textContent = set_distance;
  document.getElementById('run_time').textContent = run_time;
  document.getElementById('burned_calory').textContent = burned_calory;

  user_point = set_distance*10;
  test()
}