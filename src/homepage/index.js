var page = require('page');

page('/', function(ctx, next){
	var main = document.getElementById('main-containter');
	main.innerHTML = '<a href="/signup">Signup</a>';
})