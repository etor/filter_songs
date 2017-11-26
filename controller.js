var app = angular.module("Search", []);


app.filter('filter', function(){


    return function(arr, searchSong){
	
        if(!searchSong){
            return arr;
        }

        var result = [];

        searchString = searchSong.toLowerCase();

        angular.forEach(arr, function(song){

            if(song.title.toLowerCase().indexOf(searchSong) !== -1){
                result.push(song);
            }

        });

        return result;
    };

});


function SearchCtrl($scope){

    $scope.songs = [
        {
            title: 'Colpa di Alfredo',
            image: 'img/vasco_songs/vasco1.png'
        },
        {
            title: 'Non siamo mica gli americani',
            image: 'img/vasco_songs/vasco2.png'
        },
        {
            title: 'Fronte del Parco',
            image: 'img/vasco_songs/vasco3.png'
        },
        {
            title: 'Tutto in una notte',
            image: 'img/vasco_songs/vasco4.png'
        },
        {
            title: 'Vado al massimo',
            image: 'img/vasco_songs/vasco5.png'
        },
        {
            title: 'Ma cosa vuoi che sia una canzone',
            image: 'img/vasco_songs/vasco6.png'
        },
        {
            title: 'Nessun pericolo per te',
            image: 'img/vasco_songs/vasco7.png'
        },
        {
            title: 'Sono innocente',
            image: 'img/vasco_songs/vasco8.png'
        },
        {
            title: 'Canzoni per me',
            image: 'img/vasco_songs/vasco9.png'
        },
        {
            title: 'Va bene, va bene cosi',
            image: 'img/vasco_songs/vasco10.png'
        }
    ];

}
