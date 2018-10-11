(function() {
    'use strict';

    // Insert Module, Controller, and Service
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService);
        // .directive('foundItems', FoundItems)
        // .service('MenuSearchService', MenuSearchService)
        // .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    // // Directive Function
    // function FoundItems() {
    //     return {
    //         templateUrl: 'foundItems.html',
    //         scope: {
    //             menu: "=foundItems"
    //         }
    //     };
    // }

    // Narrow It Down Controller
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var items = this;
        console.log(items);

        // items.getMatchedMenuItems = function(searchTerm) {
        //     MenuSearchService.getMatchedMenuItems(searchTerm);
        // }
    }

    // Menu Search Service
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        console.log(service)

        // service.getMatchedMenuItems = function(searchTerm) {
        //     return $http({
        //         method: "GET",
        //         url: ApiBasePath
        //     }).then(function (result) {
        //         console.log(result);
        //     })
        // }
    }

});