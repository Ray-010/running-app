// 別ファイルからコピペした関数
// -=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==
// -=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==

function show_user_info()
{
	user_name = "Mori";
	fetch_user_info().then(() =>
	{
		document.getElementById('user_name').textContent = user_name;
		document.getElementById('user_weight').textContent = body_weight;
		document.getElementById('user_goal_weight').textContent = user_name;
		document.getElementById('user_point').textContent = user_point;
	});
}

async function fetch_user_info()
{
	const login_json_info =
	{
		"OperationType": "login",
		"Keys": { "Name": user_name }
	};
	await fetch_aws_api(api_uri, login_json_info).then
	(data => 
		{
			user_id = data.body["Items"][0].ID;
			user_name = data.body["Items"][0].Name;
			body_weight = data.body["Items"][0].Weight;
			user_point = data.body["Items"][0].Point;
		}
	);
}

// -=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==
// -=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==

