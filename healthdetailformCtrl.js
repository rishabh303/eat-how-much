/**
 * Created by Somya Kumar Sodani on 16-04-2017.
 */

app.controller('healthdetailformCtrl', function($scope,$state){

    $scope.change_state=function () {

        $state.go('mealplanner');
    }

    $scope.cal_required=2678;

});
