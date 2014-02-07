$(document).ready (function(){
	function PixelPainter(width, height, size){
		this.width= width;
		this.height= height;
		this.size= size;

		this.render = function(where, what){
			$(where).css("height", "50%").css("width", "50%").css("display", "inline").css("float", "right");
			for(var i = 0; i < height;i++){
				$(where).append("<tr id='" + what+"row"+i+"'>");
				$("#"+what+"row"+i).css("border", "1px solid black");

				for(var k = 0; k < width; k++) {
					$("#"+what+"row"+i).append("<td class='color_cell columns"+k+"'>");
					$(".columns"+k).css("border", "1px solid black");
					$(".columns"+k).css("width", size);
					$(".columns"+k).css("height", size);
				}
			}
				$("#container tr td").click(function(){
					$(this).css("background-color", current_color);
				});
				var isMouseDown = false;

				$("#container").mousedown(function() {
				isMouseDown = true;
				});
				$("#container").mouseup(function() {
						isMouseDown = false;
					});

				$('#container tr td').mouseenter(function() {
					if(isMouseDown)
					$(this).css("background-color",current_color);});

				$('#container td').click(function() {
					$(this).css("background-color", current_color);
				});
			
		};
		this.easel = function(ewhere, ewhat){
			$(ewhere).css("height", "100px").css("width", "100px").css("float", "left");
			for (var f = 0; f < 5; f++) {
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
			$("#easel").append("<button id='clear'>Clear</button>");
			$("#easel").append("<button id='black'>Blaaaaaack</button>");
			$("#easel").append("<button id='reset_color'>Reset Cursor</button>");
			$("#easel").append("<button id='toggle_borders'>Toggle Borders</button>");
			var toggle_borders = $('#toggle_borders');
			var reset_cell = $('#clear');
			var black = $('#black');
			var reset_cursor = $('#reset_color');
			var borderlands = "border: 1 px solid black";
			toggle_borders.click(function(){
				$("#container tr .color_cell").toggle(borderlands);});
			reset_cursor.click(function(){
				current_color = "";
			});
			black.click(function(){
				$("#container tr .color_cell").css("background-color", "black").
				css("border", "1px solid white");
			});
			reset_cell.click(function(){
				$("#container tr .color_cell").css("background-color", "white").
				css("border", "1px solid black");
			
 
			});
		};
	}
	var pixelPainter = new PixelPainter(50, 50, 10);
	pixelPainter.render("#container", "toolbar");
	pixelPainter.easel("#easel", "easel");
});