(function() {
    'use strict';

    // https://davids-restaurant.herokuapp.com/menu_items.json

    // Insert Module, Controller, and Service
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

    // Directive Function
    function FoundItems() {
        return {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                title: '@title'
            }
        };
    }

    // Narrow It Down Controller
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var items = this;

        items.searchTerm = "";

        items.getMatchedMenuItems = function() {
            var promise = MenuSearchService.getMatchedMenuItems(items.searchTerm.toLowerCase().trim());

            promise.then(function (response) {
                console.log(response);
                items.found = response;
            }).catch(function (error) {
                console.log("[ERROR]: " + error);
            })
        }

    }

    // Menu Search Service
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {

        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "menu_items.json")
            }).then(function (result) {
                // Grab the "menu_items"
                var resultDataArr = result.data.menu_items;

                // Map Function
                var foundItems = resultDataArr.map(function (menuItem) {
                    var description = menuItem.description.toLowerCase().trim();
                    if (description.includes(searchTerm)) {
                        return menuItem;
                    }
                }).filter(Boolean);

                return foundItems;
            });
        }
    }

})();
