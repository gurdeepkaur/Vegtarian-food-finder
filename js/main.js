
// We are creating a variable called 'foodieApp'
// We are storing the value returned by the angular.module() function here
// The first argument we pass to the function is the name of the app we mentioned in 'ng-app' directive
// The second parameter is an array of 'extra powers' we want to add to our app ,here the extra power is routing.


//this part of the code has been provided the ngRoute to make the routing available in the app between various pages
var foodieApp = angular.module('foodieApp',['ngRoute']);

//this part of the code contains the config part with the url that will direct to their specified page and their controller
foodieApp.config(function ($routeProvider) {
  $routeProvider
  //this part is for login
  .when('/',{
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  //this part is for main
  .when('/home',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  //this part is for about
  .when('/about',{
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })

  //this part is for restaurant
  .when('/restaurant/:id', {
    templateUrl: 'pages/restaurant.html',
    controller: 'restaurantController'
  })
})

//this part of our code act as login controller
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		//console.log('Do Something')
		$location.url('home');
	}
})

//this part of our code act as main controller
foodieApp.controller('mainController',function($scope) {
  //the following is the array of objects that contain various information about different restaurants
  $scope.restaurants = [{
	id: '1',
	name: 'Wenger Restaurant',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {                 // Here we made object in object
	name: 'Burger King',
	image: 'https://images.pexels.com/photos/161675/abstract-barbeque-bbq-beauty-161675.jpeg?h=350&auto=compress&cs=tinysrgb'
	},
	image: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants= {
		id: '2',
	name: 'Farzi Cafe',
	address: '38/50, Level 8, Block E , Inner Circle, Indore',
	location: 'Indore',
	category: 'Casual Dining',
	vote: '4',
	cuisines: 'Modern Indian,italian',
	cost: '2500',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
$scope.restaurants = {
		id: '3',
	name: 'Pizza Hut',
	address: '#56, Block A , outer Circle, Amritsar',
	location: 'Amritsar',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Modern Indian,sea food',
	cost: '3500',
	hours: '10 AM to 11 PM (Mon-Sun)',
	bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	},
	image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
		id: '4',
	name: 'Sagar Ratna',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
		id: '5',
	name: 'Haveli',
	address: '38/39, Level 1, Block E , Inner Circle, Pune',
	location: ' Pune',
	category: 'Casual Dining, Bar',
	vote: '3.4',
	cuisines: 'south  Indian,chinese',
	cost: '2000',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
	name: 'Paneer Tikka',
	image: 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
	},
	image: 'https://images.pexels.com/photos/76784/pexels-photo-76784.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
		id: '6',
	name: 'Modhgil Restaurant',
	address: '38/39, Level 1, Block E , Ambala cantt',
	location: 'Ambala cantt',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Modern Indian,italian',
	cost: '2500',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
$scope.restaurants = {
		id: '7',
	name: 'Burger Point',
	address: '38/39, Level 1, Block E , Jalander cantt',
	location: 'Jalander cantt',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'south Indian,punjabi,italian',
	cost: '2500',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
		id: '8',
	name: 'Mezbaan Restaurant',
	address: '38/39, Level 1, Block E ,New Dehli',
	location: 'New Dehli',
	category: 'Casual Dining, Bar',
	vote: '4.4',
	cuisines: 'Modern Indian,italian',
	cost: '3000',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	bestDish: {
	name: 'cheese pasta',
	image: 'https://images.pexels.com/photos/262961/pexels-photo-262961.jpeg?h=350&auto=compress&cs=tinysrgb'
	},
	image: 'https://images.pexels.com/photos/209459/pexels-photo-209459.jpeg?h=350&auto=compress&cs=tinysrgb'
},
]

});

//this part of our code act as about controller
foodieApp.controller('aboutController',function($scope,$location) {
  $scope.goToAbout = function() {
    // console.log('Do Something')
    $location.url('about')
  }
})
//this part of our code act as restaurant controller
/foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
  $scope.restaurantId = $routeParams.id;
  //here is the array of objects containing restaurant's information with the best dish of the restaurant and the image of the dish
  var restaurants = [{
  id:'1',
name: 'Wenger Restaurant',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'Modern Indian',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
name: 'Burger King',
image: 'https://images.pexels.com/photos/161675/abstract-barbeque-bbq-beauty-161675.jpeg?h=350&auto=compress&cs=tinysrgb'
},
image: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants= {
id:'2',
name: 'Farzi Cafe',
address: '38/50, Level 8, Block E , Inner Circle, Indore',
location: 'Indore',
category: 'Casual Dining',
vote: '4',
cuisines: 'Modern Indian,italian',
cost: '2500',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
            name: 'Pineapple Raita',
            image: 'https://b.zmtcdn.com/data/pictures/1/18425751/c701bb54622a293a52945a82dfb617d7_featured_v2.jpg'
           },
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
$scope.restaurants = {
  id: '3',
name: 'Pizza Hut',
address: '#56, Block A , outer Circle, Amritsar',
location: 'Amritsar',
category: 'Casual Dining, Bar',
vote: '4.4',
cuisines: 'Modern Indian,sea food',
cost: '3500',
hours: '10 AM to 11 PM (Mon-Sun)',
bestDish: {
name: 'Corn Pizza',
image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
},
image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
  id: '4',
name: 'Sagar Ratna',
address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
location: 'Connaught Place',
category: 'Casual Dining, Bar',
vote: '4.4',
cuisines: 'Modern Indian',
cost: '2200',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
            name: 'Chicken Sandwiches',
            image: 'http://www.cbc.ca/inthekitchen/assets_c/2012/01/ChickenSalad3106-thumb-596x350-156972.jpg'
           },
image: 'https://images.pexels.com/photos/247685/pexels-photo-247685.png?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
  id: '5',
name: 'Haveli',
address: '38/39, Level 1, Block E , Inner Circle, Pune',
location: ' Pune',
category: 'Casual Dining, Bar',
vote: '3.4',
cuisines: 'south  Indian,chinese',
cost: '2000',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
name: 'Paneer Tikka',
image: 'https://images.pexels.com/photos/111131/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
},
image: 'https://images.pexels.com/photos/76784/pexels-photo-76784.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
  id: '6',
name: 'Modhgil Restaurant',
address: '38/39, Level 1, Block E , Ambala cantt',
location: 'Ambala cantt',
category: 'Casual Dining, Bar',
vote: '4.4',
cuisines: 'Modern Indian,italian',
cost: '2500',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
            name: 'chicken Biryani',
            image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg'
           },
image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
$scope.restaurants = {
  id: '7',
name: 'Burger Point',
address: '38/39, Level 1, Block E , Jalander cantt',
location: 'Jalander cantt',
category: 'Casual Dining, Bar',
vote: '4.2',
cuisines: 'south Indian,punjabi,italian',
cost: '2500',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
            name: 'Mojito',
            image: 'https://b.zmtcdn.com/data/reviews_photos/142/bf24e6176ea8e8f4768db5f9205d3142_1493225174.jpg?fit=around%7C160%3A160&crop=160%3A160%3B%2A%2C%2A'
           },
image: 'https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg?h=350&auto=compress&cs=tinysrgb'
},
$scope.restaurants = {
  id: '8',
name: 'Mezbaan Restaurant',
address: '38/39, Level 1, Block E ,New Dehli',
location: 'New Dehli',
category: 'Casual Dining, Bar',
vote: '4.4',
cuisines: 'Modern Indian,italian',
cost: '3000',
hours: '12 Noon to 1 AM (Mon-Sun)',
bestDish: {
name: 'cheese pasta',
image: 'https://images.pexels.com/photos/262961/pexels-photo-262961.jpeg?h=350&auto=compress&cs=tinysrgb'
},
image: 'https://images.pexels.com/photos/209459/pexels-photo-209459.jpeg?h=350&auto=compress&cs=tinysrgb'
},

]

	$scope.restaurant = restaurants[$routeParams.id - 1];

// this code is used to get the ingredients

	$scope.getIngredients = function(url) {
		var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
    //here the $http object in the restaurantController definition is added and a POST request to Clarifai is made
    //and get the ingredients of the best dish of the restaurants
		$http({
			'method': 'POST',
			'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
			'headers': {
				'Authorization': 'Key 16c7ecad252b4d5b88b89ef804f93dd8',
				'Content-Type': 'application/json'
			},
			'data': data
		}).then(function (response) {
				console.log(response);
				var ingredients = response.data.outputs[0].data.concepts;
	  			for (var i =0;i<ingredients.length;i++) {
	  				$scope.ingredients.push(ingredients[i].name);
	  				$scope.probabilityvalue.push(ingredients[i].value);
	  			}
          var symbol =0;
    			ingredients_list = $scope.ingredients;
    			probability_value= $scope.probabilityvalue;
    			var elements = probability_value.filter(function(a)
          {
            return a > 0.75;
          }
        );
    			ingredients_list.splice(elements.length,20);
           //this is the array containing the non-vegetarian items
    			var nonveglist = ["egg","meat","bacon","chicken","fish","beef","crab","sushi","pork","steak"];
    			var nonvegs = "<div><img src='http://dwarakacurrypoint.com/img/category4.png' class='vegnonveg' ></div>"
    			var veg = "<div><img src='http://www.kamdarsweets.com/pub/media/wysiwyg/homebanner/100_VEG.png' class='vegnonveg' ></div>"
          //if the ingredients of best dish having probability value above 0.75 is present in the non-vegetarian list then the dish is non-vegetarian otherwise
          //the dish is vegetarian. If the dish is vegetarian then the background color will be changed to green with the vegetarian food logo
          //otherwise it will be changed to red for the non-vegetarian dish with the logo of non-vegetarian food
    			for(j=0;j<ingredients_list.length;j++){
    				for(i=0;i<nonveglist.length;i++){
    					if(ingredients_list[j] == nonveglist[i]){
    						symbol=1;
    						break;
    					}
    				}
    			if(symbol==1){
    				$(".rest-extra").append(nonvegs);
            $(".colored").css("background-color", "red");
    				break;
    			}

    		}
    		if(symbol==0){
          $(".rest-extra").append(veg);
          $(".colored").css("background-color", "green");
      }


	        }, function (xhr) {
	        	console.log(xhr);
	        })
		}

		$scope.ingredients = [];
		$scope.probabilityvalue=[];
})
