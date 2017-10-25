function addSelector(){
	$('.start').append($('<select class="selector" name="	"></select>'));
	for(var i=1; i<=50; i++){
		$('.selector').append($('<option>', {
			value: i,
			text: i
		}));
	}
}

function randomColor(){
	var letter = '0123456789ABCDEF';
	var color = '#';
	for(var i=0; i<6; i++){
		color = color + letter[Math.floor(Math.random() * 16)];
	}

	return color;
}


$(document).ready(function(){
	$('.start-btn').click(function(){
		var inputText = $('<div class="input-col"><div>').text("Please choose your sketchpad size");
		$(this).fadeOut("slow", function(){
			$(this).remove();
			$('.start').append(inputText);
			addSelector();
			$('.start').append($('<button class="col-submit-btn" value="">Let\'s Go !</button>'));
			$('.col-submit-btn').click(function(){
				$('.container').each(function(){
					$(this).remove();
				});
				$('.col-submit-btn').html('Again Please !');
				var row = $('select option:selected').val();
				var column = $('select option:selected').val();
				for(row; row>0; row--){
					$('.start').append($('<div class="container"></div>'));
				};
				$('.container').each(function(){
					$('.container').append($('<div class="block"></div>'));
				});
				$('.block').hover(function(){
					$(this).css("background-color", randomColor());
				});
			});
		});
	});



});