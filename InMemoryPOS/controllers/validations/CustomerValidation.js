const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_SALARY_REGEX = /^[0-9]{2,}([.][0-9]{2})?$/;


$("#cIdTxt").keyup(function (e) {
    let value = $("#cIdTxt").val();
    if (value.length == 0) {
    } else {
        let res = CUS_ID_REGEX.test(value);
        if (res) {
            $("#cIdTxt").css('border', '2px solid green');
        } else {
            $("#cIdTxt").css('border', '2px solid red');
        }
    }});

$("#cNameTxt").keyup(function (e) {
    let value = $("#cNameTxt").val();
    if (value.length == 0) {
    } else {
        let res = CUS_NAME_REGEX.test(value);
        if (res) {
            $("#cNameTxt").css('border', '2px solid green');
        } else {
            $("#cNameTxt").css('border', '2px solid red');
        }
    }});

$("#cAddressTxt").keyup(function (e) {
    let value = $("#cAddressTxt").val();
    if (value.length == 0) {
    } else {
        let res = CUS_ADDRESS_REGEX.test(value);
        if (res) {
            $("#cAddressTxt").css('border', '2px solid green');
        } else {
            $("#cAddressTxt").css('border', '2px solid red');
        }
    }});

$("#cSalaryText").keyup(function (e) {
    let value = $("#cSalaryText").val();
    if (value.length == 0) {
    } else {
        let res = CUS_SALARY_REGEX.test(value);
        if (res) {
            $("#cSalaryText").css('border', '2px solid green');
        } else {
            $("#cSalaryText").css('border', '2px solid red');
        }
    }});