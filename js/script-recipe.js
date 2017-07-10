$(document).ready(function() {
	
	console.log("archivo script-recipe.js listo!");
	//Ocultar menú en recipe.html 
	$(".js-menu").hide('fast', function() {
		
	}); 
	showRecipe(recipesArray);
	makeRecipe(recipesArray);
	
	
});


function showRecipe(recipes){
	var titulo = $(recipesArray).attr("title");
	var ingredientes = $(recipesArray).attr("ingredients");

	$(".js-show-recipe").click(function(e) {
		$(".list-ingredients").append("<li class='item-ingredient'>"+ ingredientes + "</li>")
		$(".page").removeClass('make');
	});

}

function makeRecipe(recipes){
	var make = $(recipesArray).attr("directions");
	$(".js-show-make").click(function(event) {
		$(".list-directions .item-direction").append(make);
		$(".page").addClass('make');
	});
	
}