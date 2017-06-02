


app.service('MealService', function () {

    var uid = 2;
    

    var meals = [
      {
        id: 0,
        'mealName': 'Banana',
        'category': 'Lunch',
        'date': '2017-04-15'
    	},
      {
        id: 1,
        'mealName': 'Rice',
        'category': 'Dinner',
        'date': '2017-04-15'
    	},
      
    ];
  
  	var categories = [
      {name:'Breakfast'},
      {name:'Lunch'},
      {name:'Dinner'},

    ];
    

    this.save = function (meal) {
        if (meal.id == null) {

            meal.id = uid++;
            meals.push(meal);
        } else {

            for (i in meals) {
                if (meals[i].id == meal.id) {
                    meals[i] = meal;
                }
            }
        }

    }


    this.get = function (id) {
        for (i in meals) {
            if (meals[i].id == id) {
                return meals[i];
            }
        }

    }
    

    this.delete = function (id) {
        for (i in meals) {
            if (meals[i].id == id) {
                meals.splice(i, 1);
            }
        }
    }


    this.list = function () {
        return meals;
    }
    

    this.categoriesList = function () {
        return categories;
    }
    

    this.defaultCategory = function () {
        return categories[0].name; 
    }
    
    
});

app.controller('MealsController', function ($scope, MealService) {

    $scope.meals = MealService.list();
  
  	$scope.categories = MealService.categoriesList();
    
    $scope.newMeal = { "category": MealService.defaultCategory() };
  
  	$scope.category = MealService.defaultCategory();

    $scope.saveContact = function () {
        MealService.save($scope.newMeal);
        $scope.newMeal = { "category": MealService.defaultCategory() };
    }


    $scope.delete = function (id) {

        MealService.delete(id);
        if ($scope.newMeal.id == id) $scope.newMeal = { "category": MealService.defaultCategory() };;
    }


    $scope.edit = function (id) {
        $scope.newMeal = angular.copy(MealService.get(id));
    }
});