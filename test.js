describe('Unit testing the applications', function () {

// before running this test please make sure you have injected the angular & angular mock

    var scope, dataService;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller, _dataService_) {
        scope = $rootScope.$new();
        dataService = _dataService_;

        $controller('appController', {$scope: scope});

        scope.data = [{
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
        ];

    }));


    it('Testing the data injected from the service', function () {

        expect(scope.data.length).tobe(6);
    });

    it('Testing the fields to edit', function () {

        var obj1 = {
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
            checkFlag: true,
            setFlag: true
        };
        expect(scope.obj1.checkFlag).tobe(scope.obj1.setFlag);
    });

    it('Testing the fields to delete', function () {
        var dataset = [{
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
        }];
        scope.delete(dataset);
        expect(scope.data.length).tonotbe(6);
    });


});