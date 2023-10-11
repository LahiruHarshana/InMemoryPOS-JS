const ORDER_ID_REGEX = /^(O00-)[0-9]{3}$/;
const ORDER_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const numbersOnlyRegex = /^[0-9]+$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const ITEM_ID_REGEX = /^(I00-)[0-9]{3}$/;


$("#addToItemBtn").attr('disabled',true);
$("#oSaveBtn").attr('disabled',true);


$("#oId").keyup(function (e) {
    let value = $("#oId").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#oId").css('border', '1px solid #ced4da');
    } else {
        let res = ORDER_ID_REGEX.test(value);
        if (res) {
            setBtn();
            $("#oId").css('border', '2px solid green');
        } else {
            $("#oId").css('border', '2px solid red');
        }
    }});

$("#date").keyup(function (e) {
    let value = $("#date").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#date").css('border', '1px solid #ced4da');
    } else {
        let res = ORDER_DATE_REGEX.test(value);
        if (res) {
            setBtn();
            $("#date").css('border', '2px solid green');
        } else {
            $("#date").css('border', '2px solid red');
        }
    }});

$("#oCName").keyup(function (e) {
    let value = $("#oCName").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#oCName").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_NAME_REGEX.test(value);
        if (res) {
            setBtn();
            $("#oCName").css('border', '2px solid green');
        } else {
            $("#oCName").css('border', '2px solid red');
        }
    }});

$("#oCAddress").keyup(function (e) {
    let value = $("#oCAddress").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#oCAddress").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_NAME_REGEX.test(value);
        if (res) {
            setBtn();
            $("#oCAddress").css('border', '2px solid green');
        } else {
            $("#oCAddress").css('border', '2px solid red');
        }
    }});

$("#oCSalary").keyup(function (e) {
    let value = $("#oCSalary").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#oCSalary").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_SALARY_REGEX.test(value);
        if (res) {
            setBtn();
            $("#oCSalary").css('border', '2px solid green');
        } else {
            $("#oCSalary").css('border', '2px solid red');
        }
    }});

$("#CustomerIDORderForm").keyup(function (e) {
    let value = $("#CustomerIDORderForm").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#CustomerIDORderForm").css('border', '1px solid #ced4da');
    } else {
        let res = CUS_ID_REGEX.test(value);
        if (res) {
            setBtn();
            $("#CustomerIDORderForm").css('border', '2px solid green');
        } else {
            $("#CustomerIDORderForm").css('border', '2px solid red');
        }
    }});

$("#itemID").keyup(function (e) {
    let value = $("#itemID").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#itemID").css('border', '1px solid #ced4da');
    } else {
        let res = ITEM_ID_REGEX.test(value);
        if (res) {
            setBtn();
            $("#itemID").css('border', '2px solid green');
        } else {
            $("#itemID").css('border', '2px solid red');
        }
    }});


$("#itemID").keyup(function (e) {
    let value = $("#itemID").val();
    if (value.length == 0) {
        $("#addToItemBtn").attr('disabled',true);
        $("#oSaveBtn").attr('disabled',true);
        $("#itemID").css('border', '1px solid #ced4da');
    } else {
        let res = ITEM_ID_REGEX.test(value);
        if (res) {
            setBtn();
            $("#itemID").css('border', '2px solid green');
        } else {
            $("#itemID").css('border', '2px solid red');
        }
    }});
