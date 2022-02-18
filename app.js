function updateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product+'-number');
    let caseNumber = caseInput.value;
   
    if(isIncreasing == true){
        caseNumber = parseInt(caseNumber) +1;
    } else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;

    const caseTotal = document.getElementById(product+'-total');
    caseTotal.innerText = caseNumber * price;

    calculateSubTotal();
    
}


document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case', 59, true);
});


document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case',59, false);
})


document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone',1219,true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone',1219,false);
})


function getTotalProduct(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber
}

function calculateSubTotal(){
    const phoneTotal = getTotalProduct('phone') * 1219;
    const caseTotal = getTotalProduct('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = parseInt(subTotal / 100 * 15);
    const total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}