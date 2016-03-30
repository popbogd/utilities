angular.module('navbar', [])
	.controller('navbar', function($scope, $http) {
	    $http.get('user/').success(function(data) {
	        
	        if (data.hasProfileImage) {
	        	$('#userPicture').html('<img class="img-circle" src="' + data.profileImageUrl + '" />');
	        }
	        $('#userName').text(data.displayName)
	    });
	});