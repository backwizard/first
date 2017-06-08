(function () {
    'use strict';

    var app = angular.module('application', []);

    app.controller('storeController', function () {
        this.sushi = {
            nam: 'Maguro',
            price: 200,
            description: 'Fat tuna'
        };
    });
})();