$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);

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
			renderRecipe();
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

	var tituloReceta = $(this).title;
	var autorReceta = $(this).name;
	console.log(tituloReceta , autorReceta);
	$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>" + tituloReceta + "</span><span class='metadata-recipe'><span class='author-recipe'>"+ autorReceta + "</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src='img/recipes/640x800/spring-fromage-fort.jpg' /></a>");
	
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	/*activitiesArray.forEach(function(data){

	})*/
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


