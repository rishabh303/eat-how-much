/**
 * Created by Somya Kumar Sodani on 16-04-2017.
 */


app.controller('mealplannerCtrl', function($scope){

    $scope.testing_var="somya here again";
    $scope.breakfast = [
        {
            name: 'Milk',
            price: 550,
            active:true
        },{
            name: 'Bread',
            price: 300,
            active:true
        },{
            name: 'Toast',
            price: 250,
            active:true
        },{
            name: 'Apple',
            price: 220,
            active:true
        }
    ];

    $scope.lunch = [
        {
            name: 'Rice',
            price: 550,
            active:true
        },{
            name: 'Chapati',
            price: 350,
            active:true
        },{
            name: 'Vegetable',
            price: 250,
            active:true
        },{
            name: 'Lime Water',
            price: 220,
            active:true
        }
    ];

        $scope.dinner = [
            {
                name: 'Salad',
                price: 500,
                active:true
            },{
                name: 'Chapati',
                price: 300,
                active:true
            },{
                name: 'Vegetable',
                price: 250,
                active:true
            },{
                name: 'Sweet Dish',
                price: 220,
                active:true
            }
        ];

        $scope.toggleActive = function(s){
            s.active = s.active;
        };

        // Helper method for calculating the total price

        $scope.total_bf = function(){

            var total = 0;


            angular.forEach($scope.breakfast, function(s){
                if (s.active){
                    total+= s.price;
                }
            });

            return total;
        };




    $scope.total_lunch = function(){

        var total = 0;


        angular.forEach($scope.lunch, function(s){
            if (s.active){
                total+= s.price;
            }
        });

        return total;
    };


    $scope.total_dinner = function(){

        var total = 0;


        angular.forEach($scope.dinner, function(s){
            if (s.active){
                total+= s.price;
            }
        });

        return total;
    };

$scope.total_cal=$scope.total_bf()+$scope.total_dinner()+$scope.total_lunch();





});

