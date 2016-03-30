angular
		.module('heatService', [])
		.service(
				'heatService',
				function() {

					this.getHistoryData = function() {
						console
								.log('getHistoryData - getting the heat data from the server');
						return [ {
							period : 'Aprilie 2014',
							consumption : [ {
								room : 'Bucatarie',
								startIndex : '100',
								endIndex : '103',
								consumption : '3'
							}, {
								room : 'Sufragerie',
								startIndex : '90',
								endIndex : '92',
								consumption : '2'
							} ]
						}, {
							period : 'Mai 2014',
							consumption : [ {
								room : 'Bucatarie',
								startIndex : '103',
								endIndex : '105',
								consumption : '2'
							}, {
								room : 'Sufragerie',
								startIndex : '92',
								endIndex : '93',
								consumption : '1'
							} ]
						}, {
							period : 'Iunie 2014',
							consumption : [ {
								room : 'Bucatarie',
								startIndex : '105',
								endIndex : '110',
								consumption : '5'
							}, {
								room : 'Sufragerie',
								startIndex : '105',
								endIndex : '110',
								consumption : '5'
							} ]
						}, {
							period : 'Iulie 2014',
							consumption : [ {
								room : 'Bucatarie',
								startIndex : '93',
								endIndex : '98',
								consumption : '5'
							}, {
								room : 'Sufragerie',
								startIndex : '93',
								endIndex : '98',
								consumption : '5'
							} ]
						} ]
					};

					this.getHtmlForm = function() {
						console
								.log('getCompiledHtmlForm - getting form meta-data from the server');
						var formFields = [ {
							label : 'Sufragerie',
							name : 'index_1'
						}, {
							label : 'Dormitor',
							name : 'index_2'
						}, {
							label : 'Bucatarie',
							name : 'index_3'
						}, {
							label : 'Baie',
							name : 'index_4'
						} ];

						console.log('getCompiledHtmlForm - received '
								+ formFields.length + ' form fields');
						var sourceHtml = '';
						$
								.each(
										formFields,
										function(i, field) {
											sourceHtml += '<div class="form-group">'
													+ '<label class="col-sm-2 control-label">'
													+ field.label
													+ '</label>'
													+ '<div class="col-sm-10">'
													+ '<input type="number" class="form-control" placeholder="'
													+ field.name
													+ '" ng-model="'
													+ field.name
													+ '" />'
													+ '</div>' + '</div>';
										});

						return sourceHtml;
					};
				});