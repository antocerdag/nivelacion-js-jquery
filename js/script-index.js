$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

	//Ocultar flecha en index.html 
	$(".js-back").hide('fast', function() {
		
	});

	function printNews(){
		$(".callout-news p").append('NUEVAS RECETAS')
	}
	printNews();
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	
	recipesArray.forEach(function(dato){
		if(dato.highlighted == true){
			renderRecipe(dato);
		}
	})
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
		var titulo = $(recipe).attr("title");
		var name = $(recipe).attr("name");
		$(".list-recipes").append("<a class='item-recipe' href='recipe.html'><span class='attribution'><span class='title-recipe'>"+ titulo +"</span><span class='metadata-recipe'><span class='author-recipe'>"+ name +"</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src= 'img/recipes/640x800/" + name +".jpg'></a>")
	
	
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {


	activities.forEach(function(data){
		renderActivity(data);
		if(activities.length > 0){
			$(".wrapper-message").hide('400', function() {
				
			});
		}
	})


/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var userAvatar = $(recipe).attr("userAvatar");
	var userName =  $(recipe).attr("userName");
	var recipeName = $(recipe).attr("recipeName");
	var text = $(recipe).attr("text");
	var place = $(recipe).attr("place");
	var image = $(recipe).attr("image");
	
	$(".list-activities").append("<a href='#' class= 'item-activity'><span class='attribution'><span class= 'avatar'><img src = '" + userAvatar + "' class='image-avatar'></span><span class = 'meta'><span class='author'>"+userName +"</span> made <span class='recipe'>"+ recipeName +"</span>: "+ text +"<span class= 'location'>&mdash;"+ place +"</span></span></span><div class ='bg-image' style='background-image:url("+ image + ");'></div></a>");
}
}


