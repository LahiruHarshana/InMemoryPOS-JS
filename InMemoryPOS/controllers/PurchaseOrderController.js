import Customers from './CustomerController.js';
import Items from "./ItemController.js";

$(document).ready(function () {
    $("#orderNav").click(function () {
        const customerFormVar = document.querySelector("#customerForm");
        const itemFormVar = document.querySelector("#itemForm");
        const orderrFormVar = document.querySelector("#orderForm");

        const selectElement = $("#selectCustomerId");
        selectElement.children().remove();

        for (let i = 0; i < Customers.length; i++) {
            const option = $("<option></option>");
            option.val(Customers[i].id);
            option.text(Customers[i].id);
            selectElement.append(option);
        }

        const selectItem = $("#oSelectItem");
        selectItem.children().remove();

        for (let i = 0; i < Items.length; i++) {
            const option = $("<option></option>");
            option.val(Items[i].id);
            option.text(Items[i].id);
            selectItem.append(option);
        }

        customerFormVar.style.display = "none";
        itemFormVar.style.display = "none";
        orderrFormVar.style.display = "inline";

        $("#selectCustomerId").val("");
        $("#oSelectItem").val("");

    });

    $("#selectCustomerId").change(function () {
        const selectedValue = $(this).val();
        for (let i = 0; i < Customers.length; i++) {
            if (selectedValue === Customers[i].id) {
                $("#oCName").val(Customers[i].name);
                $("#oCAddress").val(Customers[i].address);
                $("#oCSalary").val(Customers[i].salary);
            }
        }
    });

    $("#oSelectItem").change(function () {
        const selectedValue = $(this).val();
        for (let i = 0; i < Items.length; i++) {
            if (selectedValue === Items[i].id) {
                $("#itemID").val(Items[i].id);
                $("#iNameO").val(Items[i].name);
                $("#iOPrice").val(Items[i].price);
                $("#iOQty").val(Items[i].Qty);
            }
        }
    });

    $("#oSaveBtn").click(function () {
        console.log(Customers);
    });
});
