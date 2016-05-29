/**
 * Created by Zura on 4/5/2016.
 */
$(function() {
    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        size: 'mini',
        // delay: false,
        position: 'right top'
    });

    //Basic example
    $('#functions').lobiList({
        useCheckboxes: false,
        controls: [],
        defaultStyle: 'lobilist-info',
        // Whether to show lists on single line or not
        onSingleLine: true,
        lists: [{

            title: 'Functions',
            useCheckboxes: false,
            items: []
        }],
        beforeItemUpdate: function(listObject, item) {
            console.log(listObject);
        },
        beforeItemAdd: function(listObject, item) {
            console.log(listObject[1].title, listObject[0].$globalOptions.lists[0].title);
        },
        beforeItemDelete: function(listObject, item) {
            console.log(listObject);
        },
        afterItemDelete: function(listObject, item) {
            console.log(listObject);
        }
    });

    $('#subfunctions').lobiList({
        useCheckboxes: false,
        controls: [],
        defaultStyle: 'lobilist-info',
        // Whether to show lists on single line or not
        onSingleLine: true,
        lists: [{

            title: 'Sub Functions',
            useCheckboxes: false,
            items: [{
                title: 'Test1'
            }]
        }],
        beforeItemUpdate: function(listObject, item) {
            console.log(listObject);
        },
        beforeItemAdd: function(listObject, item) {
            console.log(listObject[1].title, listObject[0].$globalOptions.lists[0].title);
        },
        beforeItemDelete: function(listObject, item) {
            console.log(listObject);
        },
        afterItemDelete: function(listObject, item) {
            console.log(listObject);
        }
    });

    $('#lobs').lobiList({
        useCheckboxes: false,
        controls: [],
        defaultStyle: 'lobilist-info',
        // Whether to show lists on single line or not
        onSingleLine: true,
        lists: [{

            title: 'LOBS',
            useCheckboxes: false,
            items: [{
                title: 'Test1'
            }]
        }],
        beforeItemUpdate: function(listObject, item) {
            console.log(listObject);
        },
        beforeItemAdd: function(listObject, item) {
            console.log(listObject[1].title, listObject[0].$globalOptions.lists[0].title);
        },
        beforeItemDelete: function(listObject, item) {
            console.log(listObject);
        },
        afterItemDelete: function(listObject, item) {
            console.log(listObject);
        }
    });

        $('#admins').lobiList({
        useCheckboxes: false,
        controls: [],
        defaultStyle: 'lobilist-info',
        // Whether to show lists on single line or not
        onSingleLine: true,
        lists: [{

            title: 'Admins',
            useCheckboxes: false,
            items: [{
                title: 'Test1'
            }]
        }],
        beforeItemUpdate: function(listObject, item) {
            console.log(listObject);
        },
        beforeItemAdd: function(listObject, item) {
            console.log(listObject[1].title, listObject[0].$globalOptions.lists[0].title);
        },
        beforeItemDelete: function(listObject, item) {
            console.log(listObject);
        },
        afterItemDelete: function(listObject, item) {
            console.log(listObject);
        }
    });

    var test = [];
    test.push({
        "title": 'Floor cool cinders'
    });
    test.push({
        "title": 'Test1'
    });

    var $lobilist = $('#functions').data('lobiList');

    //$lobilist.$lists will contain all List instances in this list group
    var ramesh = 'Ramesh';
    $lobilist.$lists[0].addItem({
        title: 'Test1'
    });

    $lobilist.$lists[0].addItem({
        title: ramesh
    });


    var $lobilisti = $('#subfunctions').data('lobiList');
    //console.log($lobilisti);

    $lobilisti.$lists[0].addItem({
        title: 'Test2'
    });




});