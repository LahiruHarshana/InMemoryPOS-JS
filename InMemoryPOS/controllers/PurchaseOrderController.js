import Customers from './CustomerController.js';
import Items from "./ItemController.js";


$("#orderNav").click(function (){


    const selectElement = $("#selectCustomerId");

    selectElement.children().remove();

    for (let i = 0; i <Customers.length; i++) {
        const option = $("<option></option>");
        option.val(Customers[i].id);
        option.text(Customers[i].id);
        selectElement.append(option);
    }


    const selectItem = $("#oSelectItem");

    selectItem.children().remove();

    for (let i = 0; i <Items.length; i++) {
        const option = $("<option></option>");
        option.val(Items[i].id);
        option.text(Items[i].id);
        selectItem.append(option);
    }
    customerFormVar.style.display="none";
    itemFormVar.style.display="none";
    orderrFormVar.style.display="inline";
});


$("#selectCustomerId").change(function () {
    const selectedValue = $(this).val();

    if (selectedValue.trim() === "") {
        alert("Please enter a valid Customer ID to search.");
        return;
    }

    const customer = Customers.find((c) => c.id === selectedValue);

    if (customer) {
        $("").val(customer.name);
        $cIdTxt.val(customer.id);
        $cAddressTxt.val(customer.address);
        $cSalaryText.val(customer.salary);
    } else {
        alert("Customer not found.");
    }
});

$("#oSelectItem").change(function () {
    const selectedValue = $(this).val();
});


    $("#oSaveBtn").click(function () {
        console.log(Customers);
    });
