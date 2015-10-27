
angular.module('myApp', []).controller('appController',['$scope','dataService', function ($scope, dataService) {


    $scope.data = dataService.data;
    $scope.clickOpen = function (data) {

        $scope.data = data;
        for (var i = 0; i < $scope.data.length; i++) {
            if ($scope.data[i].checkFlag === true) {
                $scope.data[i].setFlag = true;
            }
        }
    }

    $scope.delete = function (dataset) {

        $scope.data.pop(dataset);
    }


}]).factory('dataService', function () {

    return {
        data: [
            {
                id: 0,
                name: 'name0',
                surname: 'surname0',
                dob: '2-18-1986',
                mobile: '8326913992',
                address: {
                    city: 'poznan',
                    street: 'dugla',
                    number: 2
                },
                checkFlag: false,
                setFlag: false

            },
            {
                id: 1,
                name: 'name1',
                surname: 'surname1',
                dob: '2-18-1986',
                mobile: '8326913992',
                address: {
                    city: 'poznan1',
                    street: 'dugla1',
                    number: 2
                },
                checkFlag: false,
                setFlag: false


            },
            {
                id: 2,
                name: 'name2',
                surname: 'surname2',
                dob: '2-18-1986',
                mobile: '8326913992',
                address: {
                    city: 'poznan3',
                    street: 'dugla3',
                    number: 3
                },
                checkFlag: false,
                setFlag: false


            },
            {
                id: 3,
                name: 'name3',
                surname: 'surname0',
                dob: '2-18-1986',
                mobile: '8326913992',
                address: {
                    city: 'poznan4',
                    street: 'dugla4',
                    number: 4
                },
                checkFlag: false,
                setFlag: false


            },
            {
                id: 4,
                name: 'name4',
                surname: 'surname0',
                dob: '2-18-1986',
                mobile: '8326913992',
                address: {
                    city: 'poznan5',
                    street: 'dugla5',
                    number: 5
                },
                checkFlag: false,
                setFlag: false


            },
            {
                id: 5,
                name: 'name5',
                surname: 'surname0',
                dob: '2-18-1986',
                mobile: '8326913992',
                address: {
                    city: 'poznan6',
                    street: 'dugla6',
                    number: 6
                },
                checkFlag: false,
                setFlag: false

            }

        ]
    }
});