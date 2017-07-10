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
		$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>"+ titulo +"</span><span class='metadata-recipe'><span class='author-recipe'>"+ name +"</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src= 'img/recipes/640x800/" + name +".jpg'></a>")
	
	
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
	console.log('Activities: ', activities);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


