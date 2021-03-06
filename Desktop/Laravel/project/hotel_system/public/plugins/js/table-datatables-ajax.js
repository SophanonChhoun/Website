var TableDatatablesAjax = function () {

    var handleDemo1 = function () {

        var grid = new Datatable();

        grid.init({
            src: $("#datatable_ajax"),
            onSuccess: function (grid, response) {
                // grid:        grid object
                // response:    json object of server side ajax response
                // execute some code after table records loaded
            },
            onError: function (grid) {
                // execute some code on network or other general error  
            },
            onDataLoad: function(grid) {
                // execute some code on ajax data load
            },
            loadingMessage: 'Loading...',
            dataTable: { // here you can define a typical datatable settings from http://datatables.net/usage/options 

                // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
                // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/scripts/datatable.js). 
                // So when dropdowns used the scrollable div should be removed. 
                //"dom": "<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r>t<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",
                
                // save datatable state(pagination, sort, etc) in cookie.
                "bStateSave": true, 

                // save custom filters to the state
                // "fnStateSaveParams":    function ( oSettings, sValue ) {
                //     $("#datatable_ajax tr.filter .form-control").each(function() {
                //         sValue[$(this).attr('name')] = $(this).val();
                //     });
                //
                //     return sValue;
                // },

                // read the custom filters from saved state and populate the filter inputs
                // "fnStateLoadParams" : function ( oSettings, oData ) {
                //     //Load custom filters
                //     $("#datatable_ajax tr.filter .form-control").each(function() {
                //         var element = $(this);
                //         if (oData[element.attr('name')]) {
                //             element.val( oData[element.attr('name')] );
                //         }
                //     });
                //
                //     return true;
                // },

                "lengthMenu": [
                    [10, 20, 50, 100, 150, -1],
                    [10, 20, 50, 100, 150, "All"] // change per page values here
                ],
                "pageLength": 10, // default record count per page
                "ajax": {
                    "url": "http://saorin.codingate.com/api/province", // ajax source
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader ("Authorize", "5b04c0f2c62a1cd5e02435c6394c129bb5b0eb60c81e99c4c7d9ea1735c3a6f1");
                    },
                    'type': 'GET'
                },
                "ordering": false,
                "order": [
                    [1, "asc"]
                ]// set first column as a default sort by asc
            }
        });

        // handle group actionsubmit button click
        grid.getTableWrapper().on('click', '.table-group-action-submit', function (e) {
            e.preventDefault();
            var action = $(".table-group-action-input", grid.getTableWrapper());
            if (action.val() != "" && grid.getSelectedRowsCount() > 0) {
                grid.setAjaxParam("customActionType", "group_action");
                grid.setAjaxParam("customActionName", action.val());
                grid.setAjaxParam("id", grid.getSelectedRows());
                grid.getDataTable().ajax.reload();
                grid.clearAjaxParams();
            } else if (action.val() == "") {
                App.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'Please select an action',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            } else if (grid.getSelectedRowsCount() === 0) {
                App.alert({
                    type: 'danger',
                    icon: 'warning',
                    message: 'No record selected',
                    container: grid.getTableWrapper(),
                    place: 'prepend'
                });
            }
        });

        //grid.setAjaxParam("customActionType", "group_action");
        //grid.getDataTable().ajax.reload();
        //grid.clearAjaxParams();
    }

    return {

        //main function to initiate the module
        init: function () {
            handleDemo1();
        }

    };

}();

jQuery(document).ready(function() {
    TableDatatablesAjax.init();
});