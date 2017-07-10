$(document).ready(function() {
	
	console.log("archivo script-recipe.js listo!");
	//Ocultar menú en recipe.html 
	$(".js-menu").hide('fast', function() {
		
	}); 
	showRecipe(recipesArray);
	makeRecipe(recipesArray);
	
	
});


function showRecipe(recipes){
	
	recipes.forEach(function(r){
		var titulo = $(r).attr("title");
		var ingredientes = $(r).attr("ingredients");
		$(".js-show-recipe").click(function() {
			$(".list-ingredients").append("<li class='item-ingredient'>"+ ingredientes + "</li>")
			$(".page").removeClass('make');
		});
	})
	

}

function makeRecipe(recipes){
	recipes.forEach(function(r){
		var make = $(r).attr("directions");
		$(".js-show-make").click(function() {
			$(".list-directions ").append("<li class='item-direction'>" + make + "</li>");
			$(".page").addClass('make');
		});
	})
	
	
}