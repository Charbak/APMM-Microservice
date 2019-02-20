<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>GEO Feeder</title>
<link href="/static/layout.css" rel="stylesheet">
<link href="/static/bootstrap.min.css" rel="stylesheet">
<script src="/static/jquery-2.2.1.min.js"></script>
<script src="/static/bootstrap.min.js"></script>
</head>

<body>
	<header>
		<h2>GEO Feeder</h2>
	</header>
	<main>
	<div class="col-md-offset-1 col-md-10">
		<form action="/geofeeder" method="post">
			<div class="form-group">
				<font color="red">${errorMessage}</font> <font color="green">${sucessMessage}</font>&nbsp;
			</div>
			<div class="form-group">
				<label>Enter message</label>
				<textarea class="form-control input-sm" cols="30" rows="15"
					id="message" name="message" placeholder="Enter your message"></textarea>
			</div>
			<div class="form-group">
				<button class="btn btn-success" id="sendMessage">Send message</button>
				<button class="btn btn-success" id="clear" type="reset">Clear</button>
			</div>
		</form>
	</div>
	</main>
	<footer>
		<p>&nbsp;</p>
	</footer>
</body>
</html>