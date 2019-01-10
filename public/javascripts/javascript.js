$(document).ready(function() {
     var t = $('#example').DataTable( {
        "columnDefs": [ {
            "searchable": false,
            "orderable": false,
            "targets": 0
        } ],
        "order": [[ 1, 'asc' ]]
    } );
 
    t.on( 'order.dt search.dt', function () {
        t.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
            cell.innerHTML = i+1;
        } );
    } ).draw();
    
    $('#addRow').click();
} );

$(document).ready(function() {
    var table = $('#example').DataTable();
 
    $('#example tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );


fillInTable();
function fillInTable(){
    var table = document.querySelector("#myTable");
    console.log(table.length);
    for (var i = 0; i < trans.length; i++) {
        var row = table.insertRow(table.length);
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);

        var info = trans[i].split(",");

        cell0.innerHTML = i;
        cell1.innerHTML = info[0];
        cell2.innerHTML = info[1];
        cell3.innerHTML = info[2];
    }
}
//****************************************************

google.charts.load("current", {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

  var groceries = 0;
  var food = 0;
  var transport = 0;
  var shopping = 0;
  var entertainment = 0;
  for (var i = 0; i < trans.length; i++) {
        var info = trans[i].split(",");
        switch(info[2]){
            case "Groceries": groceries += parseInt(info[1]); break;
            case "Food": food += parseInt(info[1]); break;
            case "Transport": transport += parseInt(info[1]); break;
            case "Shopping": shopping += parseInt(info[1]); break;
            case "Entertainment": entertainment += parseInt(info[1]); break;
        }
  }

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Category');
  data.addColumn('number', 'Amount');
  data.addRows([
        ['Groceries', groceries],
        ['Food', food],
        ['Transport', transport],
        ['Shopping', shopping],
        ['Entertainment', entertainment]
        ]);
  
  var options = {'title':'Expenditure in a month',
                   'width':1000,
                   'height':800};

  var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
  chart.draw(data, options);
  }