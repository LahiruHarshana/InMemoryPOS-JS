import Customers from './CustomerController.js';


    var customers = Customers;

$("#orderNav").click(function (){


    const selectElement = $("#selectCustomerId");

    selectElement.children().remove();

    for (let i = 0; i <Customers.length; i++) {
        const option = $("<option></option>");
        option.val(Customers[i].id);
        option.text(Customers[i].id);
        selectElement.append(option);
    }
    customerFormVar.style.display="none";
    itemFormVar.style.display="none";
    orderrFormVar.style.display="inline";




});



    $("#oSaveBtn").click(function () {
        console.log(Customers);
    });
