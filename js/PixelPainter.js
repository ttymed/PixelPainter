$(document).ready (function(){
	function PixelPainter(width, height, size){
		this.width= width;
		this.height= height;
		this.size= size;

		this.render = function(where, what){
			$(where).css("height", "50%").css("width", "50%").css("float", "left");
			for(var i = 0; i < height;i++){
				$(where).append("<tr id='" + what+"row"+i+"'>");
				$("#"+what+"row"+i).css("border", "1px solid black");

				for(var k = 0; k < width; k++) {
					$("#"+what+"row"+i).append("<td class='columns"+k+"'>");
					$(".columns"+k).css("border", "1px solid black");
					$(".columns"+k).css("width", size);
					$(".columns"+k).css("height", size);
				}
			}
				$("td").click(function(){
					$(this).css("background-color", current_color);
				});
			
		};
		this.easel = function(ewhere, ewhat){
			$(ewhere).css("height", "100px").css("width", "100px").css("float", "left");
			for (var f = 0; f < 6; f++) {
				$(ewhere).append("<tr id='"+ewhat+"erow"+f+"'>");
				for(var h = 0; h < 5; h++){
					var color_cell = $("<td id='" + "erow" + f + "ebox"+h+"' class='ecolumns"+h+"'>");
					$("#"+ewhat+"erow"+h).append(color_cell);
					$(".ecolumns"+h).css("border", "2px solid black");
					$(".ecolumns"+h).css("width", "25px");
					$(".ecolumns"+h).css("height", "25px");
				color_cell.click(function(){
					current_color = $(this).css("background-color");
		});
				}
			}
		};
		
	}
	var pixelPainter = new PixelPainter(50, 50, 10);
	pixelPainter.render("#container", "toolbar");
	pixelPainter.easel("#easel", "easel");
});