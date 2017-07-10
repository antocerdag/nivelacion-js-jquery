$(document).ready(function() {
	
	console.log("archivo script-recipe.js listo!");
	//Ocultar menú en recipe.html 
	$(".js-menu").hide('fast', function() {
		
	}); 
	showRecipe(recipes);

});


function showRecipe(recipes){
	var titulo = $(recipe).attr("title");
	var ingredientes = $(recipe).attr("ingredients");

	$(".js-show-recipe").click(function(e) {
		$(".list-ingredients").append("<li class='item-ingredient'>"+ ingredientes + "</li>")
	});
}