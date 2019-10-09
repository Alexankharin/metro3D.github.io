<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>mosmetro</title>
		<style>
			#info {
				position: absolute;
				top: 10px;
				width: 100%;
				text-align: center;
				z-index: 100;
				display:block;
				color:#ffffff;
			}
		</style>
	</head>
	<body>
		<div id="canvas">
		</div>
		<div id="info">
		</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"></script>
		<script src="https://threejs.org/examples/js/controls/OrbitControls.js"></script>
		<script src="./data.js"></script>
		<script src="./render.js"></script>
	</body>
</html>
