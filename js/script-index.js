$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//renderActivities(activitiesArray);

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
	
		$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>"+ $(recipe).attr("title") +"</span><span class='metadata-recipe'><span class='author-recipe'>"+ $(recipe).attr("name") +"</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src= 'img/recipes/640x800/" + $(recipe).attr("name") +".jpg'></a>")
	
	
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	$.ajax({
		url: 'data/activities.js',
		type: 'GET',
		dataType: 'json',
		data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

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


