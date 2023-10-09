var Customers =[];

var customerFormVar =document.querySelector("#customerForm");
var itemFormVar =document.querySelector("#itemForm");
var orderrFormVar =document.querySelector("#orderForm");

customerFormVar.style.display='inline';
itemFormVar.style.display='none';
orderrFormVar.style.display='none';



$("#customerNav").click(function (){
    customerFormVar.style.display='inline';
    itemFormVar.style.display='none';
    orderrFormVar.style.display='none';
});


$("#itemNav").click(function (){
    customerFormVar.style.display='none';
    itemFormVar.style.display='inline';
    orderrFormVar.style.display='none';
});


$("#orderNav").click(function (){
    customerFormVar.style.display="none";
    itemFormVar.style.display="none";
    orderrFormVar.style.display="inline";
});


$("#cSavebtn").click(function () {
    $("#tblCustomer").empty();

    var customer={

        id:$("#cIdTxt").val(),
        name:$("#cNameTxt").val(),
        address:$("#cAddressTxt").val(),
        salary:$("#cSalaryText").val()
    }

    Customers.push(customer);

    for (let i = 0; i < Customers.length; i++) {
        $("#tblCustomer").append("<tr><td>"+Customers[i].name+"</td><td>"+Customers[i].id+"</td><td>"+Customers[i].address+"</td><td>"+Customers[i].salary+"</td></tr>");
    }

    $("#tblCustomer tr").click(function() {
        var row = $(this);
        var name = row.find("td:eq(0)").text();
        var id = row.find("td:eq(1)").text();
        var address = row.find("td:eq(2)").text();
        var salary = row.find("td:eq(3)").text();

        $("#cNameTxt").val(name);
        $("#cIdTxt").val(id);
        $("#cAddressTxt").val(address);
        $("#cSalaryText").val(salary);
    });



});

$("#tblCustomer").on("dblclick", "tr", function() {
    var row = $(this);
    row.remove();
    for (let i = 0; i < Customers.length; i++) {
        Customers.pop();
    }
});


$("#clearBtn").click(function (){
    $("#cNameTxt").val("");
    $("#cIdTxt").val("");
    $("#cAddressTxt").val("");
    $("#cSalaryText").val("");
});


$("#cUpdateBtn").click(function () {
    const cIdValue = $("#cIdTxt").val();
    const cNameValue = $("#cNameTxt").val();
    const cAddressValue = $("#cAddressTxt").val();
    const cSalaryValue = $("#cSalaryText").val();
    for (let i = 0; i < Customers.length; i++) {
        if (Customers[i].id === cIdValue) {
            Customers[i].id = cIdValue;
            Customers[i].name = cNameValue;
            Customers[i].address = cAddressValue;
            Customers[i].salary = cSalaryValue;
            break;
        }
    }

});
