window.onload = function() {
	test()
	document.getElementById('user_name').textContent = user_name;
	document.getElementById('user_weight').textContent = body_weight;
	document.getElementById('user_goal_weight').textContent = user_name;
	document.getElementById('user_point').textContent = user_point;
}

// 編集
function save_info() {
  user_name = document.getElementById('new_user_name')
  // body_weight = document.getElementById('new_body_weight')
  test()
}

// 編集画面を閉じる
function display_none() {
  $('#editing-wrapper').addClass('hidden');
  cover_off()
}
function edit_profile() {
  $('#editing-wrapper').removeClass('hidden');
  cover_on()
}
function cover_on() {
  $('#cover').removeClass('hidden');
}
function cover_off() {
  $('#cover').addClass('hidden');
}