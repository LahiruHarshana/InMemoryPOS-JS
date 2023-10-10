import Customers from './CustomerController.js';

$(document).ready(function () {
    const selectElement = $("#selectCustomerId");

    // Populate the dropdown with customer IDs
    for (let i = 0; i < Customers.length; i++) {
        const option = $("<option></option>");
        option.val(Customers[i].id);
        option.text(Customers[i].id);
        selectElement.append(option);
    }
    $("#oSaveBtn").click(function () {
        console.log(Customers);
    });
});
