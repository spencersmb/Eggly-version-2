angular.module('hero.module', ['hero.services', 'hero.filters'])
    .controller('heroCtrl', ['$scope','data', function ($scope, data) {

        $scope.title = 'Heroes Charge App';
        $scope.myHeroes = [];

        //method on the scope that takes in data and reassigns it to scope.heroes.
        $scope.setData = function(data){
            $scope.heroes = data.heroes;
            //console.log($scope.heroes);
        };
        //call get method from country.services injection passing in data location and the callback function which takes in the data.
        data.get('js/data/heroes.json', $scope.setData);

        //ADD HERO
        $scope.addHero = function(hero){
            var isAdded;

            if( $scope.myHeroes.length <= 4 ){

                isAdded = _.contains($scope.myHeroes, hero);

                if(isAdded){
                    alert('hero is already added');
                }else{
                    $scope.myHeroes.push(hero);
                }

            } else{
                alert('Your team is full!');
            }

        };

        $scope.removeHero = function(hero){
            var i = $scope.myHeroes.indexOf(hero);
            $scope.myHeroes.splice(i,1);
        };

        $scope.options = [
            { label: 'Newest', value: true },
            { label: 'Oldest', value: false }
        ];

        $scope.descending = $scope.options[0];

        $scope.filters = {
            query: "",
            tags: [
                {
                    label: "tag1",
                    selected: false
                },
                {
                    label: "tag2",
                    selected: false
                },
                {
                    label: "tag3",
                    selected: false
                },
                {
                    label: "tag4",
                    selected: false
                },
                {
                    label: "tag5",
                    selected: false
                }
            ]
        };

    }]);