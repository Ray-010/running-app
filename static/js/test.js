//計算する系の関数（なくてもいいかも）

function calculate_used_calories(body_weight, distance)
{
	return (body_weight * distance);
}

function calculate_new_points(user_point, used_calories, point_rate)
{
	return (user_point + used_calories * point_rate);
}

function calculate_snack_count(used_calories, snack_calory)
{
	return (used_calories / snack_calory);
}

// APIを叩くための関数

async function fetch_aws_api(api_uri, json_info)
{
	// HTTPリクエストの情報
	const requestOptions = {
		method: 'POST',
		headers: 
		{
			'Accept': 'application/json',
			'Content-Type': 'application/json'

		},
		body: JSON.stringify(json_info),
	};

	const response = await fetch(api_uri, requestOptions);
	return (response.json());
}

// グローバル変数

// 固定のポイントレート？
const point_rate = 10;
const api_uri = "https://k1hbhurn94.execute-api.us-east-2.amazonaws.com/homepage/info";

// 本当はログイン画面で取得してくる
let user_name = "Mori";

// 本当はinputから取得してくる
let distance = 10;

let user_id;
let user_point;
let body_weight;
let snack_id;
let snack_name;
let snack_calory;
let used_calories;
let snack_count;

function fetch_user_info()
{
	const login_json_info =
	{
		"OperationType": "login",
		"Keys": { "Name": user_name }
	};
	fetch_aws_api(api_uri, login_json_info).then
	(data => 
		{
			user_id = data.body["Items"][0].ID;
			user_name = data.body["Items"][0].Name;
			body_weight = data.body["Items"][0].Weight;
			user_point = data.body["Items"][0].Point;
		}
	);
}

function fetch_snack_info()
{
	used_calories = calculate_used_calories(body_weight, distance);
	user_point = calculate_new_points(user_point, used_calories, point_rate);
	const snack_json_info =
	{
		"OperationType": "get_snack_num",
		"Keys": {
			"burned_calories": used_calories,
			"Name": user_name,
			"updated_point": user_point
		}
	};

	fetch_aws_api(api_uri, snack_json_info).then	
	(data =>
		{
			snack_id = data.body["Item"].ID;
			snack_calory = data.body["Item"].Calory;
			snack_name = data.body["Item"].Name;	
			snack_count = calculate_snack_count(used_calories, snack_calory);
		}
	);
}

function test()
{
	fetch_user_info();
	fetch_snack_info();

	// fetch_user_info ユーザ情報
	console.log("user_id       = " + user_id);
	console.log("user_name     = " + user_name);
	console.log("user_point    = " + user_point);
	console.log("body_weight   = " + body_weight);

	// fetch_snack_info スナック情報＆ポイント
	console.log("snack_id      = " + snack_id);
	console.log("snack_name    = " + snack_name);
	console.log("snack_calory  = " + snack_calory);
	console.log("used_calories = " + used_calories);
	console.log("snack_count   = " + snack_count);
	console.log("user_point    = " + user_point);
}
