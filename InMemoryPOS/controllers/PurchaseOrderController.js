import Customers from './CustomerController.js';

    const selectElement = $("#selectCustomerId");

    for (let i = 0; i <Customers.length; i++) {
        const customer = Customers[i];
        const option = $("<option></option>");
        option.val("hello");
        option.text("hello");
        selectElement.append(option);
    }

    $("#oSaveBtn").click(function () {
        console.log(Customers);
    });
