angular.module('heat', [ 'heatService' ]).controller(
		'heat',
		function($scope, $http, $compile, heatService) {
			$scope.heatItems = heatService.getHistoryData();

			var compiledHtml = $compile(heatService.getHtmlForm())($scope);
			$('#dynamicForm').append(compiledHtml);

			$('.from').datepicker({
				autoclose : true,
				minViewMode : 1,
				format : 'mm/yyyy'
			}).on(
					'changeDate',
					function(selected) {
						startDate = new Date(selected.date.valueOf());
						startDate.setDate(startDate.getDate(new Date(
								selected.date.valueOf())));
						$('.to').datepicker('setStartDate', startDate);
					});

			$scope.submit = function() {
				console.log($scope.indexVal);
				$scope.heatItems = [];
			}
		});