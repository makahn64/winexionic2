import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';

@Injectable()
export class LocationService {

	constructor(cordovaGeolocation: Geolocation) { }

	napaCoords: position = {
		coords: {
			latitude: 38.292326,
			longitude: 122.457790
		}
	}

	

}


interface position {
	coords: {
		latitude: number,
		longitude: number
	},
	timestamp?: number
}




/**
 * Created by mkahn on 6/5/16.
 */

// app
//     .factory( 'locationService', function ( $log, $cordovaGeolocation, $rootScope, $timeout, userDefaults ) {

//         var service = {};

//         /**
//          *  position: { coords: { accuracy, alitutde, altitudeAccuracy, heading, latitude, longitude, speed }, timestamp: 142... }
//          */

//          var napaCoords = {
//             coords:    { latitude: 38.292326, longitude: 122.457790 },
//             timestamp: new Date().getTime()
//          }

//         service.here = userDefaults.getObjectForKey( 'lastLocation', napaCoords );
        
//         service.hereAsLatLng = function(){
        
            
//         }

//         service.start = function () { $log.info( "Starting location updates" )};

//         var watchOptions = {
//             timeout:            10000,
//             enableHighAccuracy: false // may cause errors if true
//         };

//         function captureLastLocation() {
//             // JSON.Stringify does not work on Geolocation objects
//             var shallowPos = {
//                 coords: { latitude: service.here.coords.latitude, longitude: service.here.coords.longitude },
//                 timestamp: service.here.timestamp
//             }
//             userDefaults.setObjectForKey( 'lastLocation', shallowPos );
//         }

//         var watch = $cordovaGeolocation.watchPosition( watchOptions );

//         function runWatcher() {
//             watch.then(
//                 null,
//                 function ( err ) {
//                     $log.error( "Error watching GPS" );
//                     $timeout( runWatcher, 5000 );
//                 },
//                 function ( position ) {
//                     service.here = position;
//                     captureLastLocation();
//                     $rootScope.$broadcast( 'NEW_POSITION', position );
//                 } );

//         }

//         runWatcher();

//         service.getBestPosition = function () {

//             var options = { timeout: 30000, enableHighAccuracy: false };

//             return $cordovaGeolocation.getCurrentPosition( options )
//                 .then( function ( lowacc ) {
//                     $log.debug( "Got a low accuracy GPS, grabbing" );
//                     service.here = lowacc;
//                     captureLastLocation();
//                     options.enableHighAccuracy = true;
//                     options.timeout = 30000;
//                     // Take a swing at a high acc
//                     return $cordovaGeolocation.getCurrentPosition( options )
//                         .then( function ( hiacc ) {
//                             $log.debug( "Got a low accuracy GPS, grabbing" );
//                             service.here = hiacc;
//                             captureLastLocation();
//                         } );
//                 } )
//                 .catch( function ( err ) {

//                     $log.error( "Error occured trying to get a solid location: " + err.toString() );
//                     $log.info( "Don't sweat it, we should have something..." );

//                 } )
//                 .finally( function () {

//                     return service.here;
//                 } )

//         }


//         service.getHighAccuracyLocation = function () {

//             var options = { timeout: 10000, enableHighAccuracy: true };
//             return $cordovaGeolocation.getCurrentPosition( options )
//                 .then( function ( position ) {
//                     service.here = position;
//                     captureLastLocation();
//                     return position;
//                 } );

//         }


//         service.distance = function ( lat1, lon1, lat2, lon2, unit ) {
//             var radlat1 = Math.PI * lat1 / 180;
//             var radlat2 = Math.PI * lat2 / 180;
//             var theta = lon1 - lon2;
//             var radtheta = Math.PI * theta / 180;
//             var dist = Math.sin( radlat1 ) * Math.sin( radlat2 ) + Math.cos( radlat1 ) * Math.cos( radlat2 ) * Math.cos( radtheta );
//             dist = Math.acos( dist );
//             dist = dist * 180 / Math.PI;
//             dist = dist * 60 * 1.1515;
//             if ( unit == "K" ) {
//                 dist = dist * 1.609344;
//             }
//             if ( unit == "N" ) {
//                 dist = dist * 0.8684;
//             }
//             return dist
//         }

//         service.distanceFromHere = function ( lat, long, unit ) {

//             if ( service.here && service.here.coords ) {
//                 unit = unit || 'N';
//                 return service.distance( service.here.coords.latitude, service.here.coords.longitude, lat, long, unit );
//             }

//             return undefined;

//         }

//         service.getBestPosition();


//         return service;

//     } )
//     .directive( 'distanceFromHere', function ( $log, locationService, $rootScope ) {

//         return {
//             restrict: "E",
//             template: "<span>{{ distance }}</span>",
//             scope:    {
//                 position: '='
//             },
//             link:     function ( scope, element, attrs ) {

//                 var distance;

//                 function calcDistance() {
//                     distance = locationService.distanceFromHere( scope.position.latitude, scope.position.longitude );
//                     if ( distance )
//                         scope.distance = distance.toFixed( 2 ) + " miles";
//                 }

//                 $rootScope.$on( "NEW_POSITION", function () {
//                     calcDistance();
//                 } );

//                 calcDistance();

//             }
//         }

//     } )