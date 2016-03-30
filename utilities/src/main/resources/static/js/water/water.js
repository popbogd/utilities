angular.module('water', ['ngTable'])
	.controller('water', ['$scope', 'NgTableParams', function($scope, NgTableParams) {
		$scope.tableParams = new NgTableParams({
			sorting: { id: "asc" },  
			// initial grouping
		      group: "period"
		   // initial sort order
		      
		    }, {
		      dataset: [{id: '1', period: 'Aprilie 2014', room: 'Bucatarie', type: 'Rece', startIndex: '100', endIndex: '103', consumption: '3'},
		    	  {id: '1', period: 'Aprilie 2014', room: 'Bucatarie', type: 'Calda', startIndex: '90', endIndex: '92', consumption: '2'},
		    	  {id: '2', period: 'Mai 2014', room: 'Bucatarie', type: 'Rece', startIndex: '103', endIndex: '105', consumption: '2'},
		    	  {id: '2', period: 'Mai 2014', room: 'Bucatarie', type: 'Calda', startIndex: '92', endIndex: '93', consumption: '1'},
		    	  {id: '3', period: 'Iunie 2014', room: 'Bucatarie', type: 'Rece', startIndex: '105', endIndex: '110', consumption: '5'},
		    	  {id: '4', period: 'Iulie 2014', room: 'Bucatarie', type: 'Calda', startIndex: '93', endIndex: '98', consumption: '5'}
		      ]
		    });
	}]);
//	.run(["ngTableDefaults", function configureDefaults(ngTableDefaults) {
//		console.log(ngTableDefaults);
//	    ngTableDefaults.params.count = 5;
//	    ngTableDefaults.settings.counts = [];
//	  }]);
//  

  


