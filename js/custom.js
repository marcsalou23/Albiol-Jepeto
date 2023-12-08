// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector('#displayYear').innerHTML = currentYear;
}

getYear();

//  owl carousel script
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 2,
        },
    },
});

//    end owl carousel script

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(41.25225743727103, 1.0874838588981983),
        zoom: 18,
    };

    var map = new google.maps.Map(
        document.getElementById('googleMap'),
        mapProp
    );

    // Create a marker and set its position
    var marker = new google.maps.Marker({
        position: mapProp.center,
        map: map,
        title: 'Albioljepeto',
    });
}
