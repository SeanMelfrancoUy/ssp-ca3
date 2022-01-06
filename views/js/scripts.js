/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
//The following 7 lines of code (or lines 10 to 16) has been sourced from https://github.com/mikhail-cct/ssp-practical 

window.addEventListener("load", function() {
    // document.forms[1].txtBillAmt.value = calculateBill('menuTable');
    document.querySelector("#calcBill").addEventListener
    ("click", function() {
        document.forms[1].txtBillAmt.value = calculateBill
        ('menuTable');
    });
    
});
