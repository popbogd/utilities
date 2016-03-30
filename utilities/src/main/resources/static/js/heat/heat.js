angular.module('heat', [])
	.controller('heat', function($scope, $http, $compile) {
		$scope.heatItems = [{period: 'Aprilie 2014', 
								consumption: [{room: 'Bucatarie', startIndex: '100', endIndex: '103', consumption: '3'},
								              {room: 'Sufragerie', startIndex: '90', endIndex: '92', consumption: '2'}]},
				    	  {period: 'Mai 2014', 
								consumption: [{room: 'Bucatarie', startIndex: '103', endIndex: '105', consumption: '2'},
								              {room: 'Sufragerie', startIndex: '92', endIndex: '93', consumption: '1'}]},
				    	  {period: 'Iunie 2014', 
								consumption: [{room: 'Bucatarie', startIndex: '105', endIndex: '110', consumption: '5'},
								              {room: 'Sufragerie', startIndex: '105', endIndex: '110', consumption: '5'}]},	
				    	  {period: 'Iulie 2014',
								consumption: [{room: 'Bucatarie', startIndex: '93', endIndex: '98', consumption: '5'},
								              {room: 'Sufragerie', startIndex: '93', endIndex: '98', consumption: '5'}]}
				      ];
		$scope.toggleDetail = function($index) {
	        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
	    };

	    $scope.submit = function() {
	    	console.log($scope.indexVal);
	    	$scope.heatItems = [];
	    }
	    
	    var formFields = [{label: 'Sufragerie', name: 'index_1'}, 
	                      {label: 'Dormitor', name: 'index_2'},
	                      {label: 'Bucatarie', name: 'index_3'},
	                      {label: 'Baie', name: 'index_4'}];
	    
	    $.each(formFields, function(i, field) {
	    	var sourceHtml =
	    		'<div class="form-group">' +
	    			'<label class="col-sm-2 control-label">' + field.label + '</label>' +
	    			'<div class="col-sm-10">' +
	    				'<input type="number" class="form-control" placeholder="' + field.name + '" ng-model="' + field.name + '" />' +
	    			'</div>' +
	    		'</div>';
	    	
	    	 var compiledHtml = $compile(sourceHtml)($scope);
	    	 $('#dynamicForm').append(compiledHtml);
	    });
	    
	    $('.from').datepicker({
	        autoclose: true,
	        minViewMode: 1,
	        format: 'mm/yyyy'
	    }).on('changeDate', function(selected){
	            startDate = new Date(selected.date.valueOf());
	            startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
	            $('.to').datepicker('setStartDate', startDate);
	        }); 
	});