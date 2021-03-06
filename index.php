<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Mokausi</title>
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="lib/bootstrap/dist/css/bootstrap-theme.css">
    <link rel="stylesheet" href="lib/angular/angular-csp.css">
    <link rel="stylesheet" href="css/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="/">
</head>

<body ng-app="myApp">

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</nav>

<div class="container">
    <h1>Labas</h1>

    <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odio, quam voluptatem eum, ipsam quia quisquam
        excepturi aliquam saepe quibusdam illo, natus rem tempore molestias aut voluptates id omnis beatae.
    </p>

    <h2>Test</h2>

    <div class="wrapper">
        <div ng-view=""></div>
    </div>
</div>


<script src="lib/angular/angular.min.js"></script>
<script src="lib/angular-resource/angular-resource.min.js"></script>
<script src="lib/angular-route/angular-route.min.js"></script>
<script src="lib/ng-lodash/build/ng-lodash.min.js"></script>
<script src="lib/jQuery/dist/jquery.min.js"></script>
<script src="lib/bootstrap/dist/js/bootstrap.min.js"></script>

<script src="app/app.js"></script>
<script src="app/controllers/testCtrl.js"></script>
<script src="app/services/userService.js"></script>
<script src="app/factories/UserResFactory.js"></script>

</body>

</html>