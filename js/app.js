var count = [0,0,0,0,0,0];
for(var i = 1;i <= 5;i++){
	$('#li'+i).click(function(i){
		return function(){
			$('.container').empty();
			$('.container').append('<div id="1"><h1>KITTY</h1><img src="img/Cat'+i+'.jpg"><h2 id="a"></h2></div>');
			$('#a').text(count[i]);
			$('#1').click(function(){
			count[i]++;
			$('#a').text(count[i]);
			});
		}
	}(i));
}
/*$('#li1').click(function(){
	$('.container').empty();
	$('.container').append('<div id="1"><h1>KITTY</h1><img src="img/Cat1.jpg"><h2 id="a"></h2></div>');
	var count = 0;
	$('#1').click(function(){
		count++;
		$('#a').text(count);
	});
});
$('#li2').click(function(){
	$('.container').empty();
	$('.container').append('<div id="1"><h1>LUCY</h1><img src="img/Cat2.jpg"><h2 id="a"></h2></div>');
	var count = 0;
	$('#1').click(function(){
		count++;
		$('#a').text(count);
	});
});
$('#li3').click(function(){
	$('.container').empty();
	$('.container').append('<div id="1"><h1>SASA</h1><img src="img/Cat3.jpg"><h2 id="a"></h2></div>');
	var count = 0;
	$('#1').click(function(){
		count++;
		$('#a').text(count);
	});
});
$('#li4').click(function(){
	$('.container').empty();
	$('.container').append('<div id="1"><h1>BELLA</h1><img src="img/Cat4.jpg"><h2 id="a"></h2></div>');
	var count = 0;
	$('#1').click(function(){
		count++;
		$('#a').text(count);
	});
});
$('#li5').click(function(){
	$('.container').empty();
	$('.container').append('<div id="1"><h1>MISSY</h1><img src="img/Cat5.jpg"><h2 id="a"></h2></div>');
	var count = 0;
	$('#1').click(function(){
		count++;
		$('#a').text(count);
	});
});*/
