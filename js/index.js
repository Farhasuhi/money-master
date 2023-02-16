document.getElementById('calculate').addEventListener('click',function(){
    const incomeValue=getInput('income');
    const foodValue=getInput('food');
    const rentValue=getInput('rent');
    const clothsValue=getInput('cloths');
    valueNull('income');
    valueNull('food');
    valueNull('rent');
    valueNull('cloths');
    if((isNaN(incomeValue))||(isNaN(foodValue))||(isNaN(rentValue))||(isNaN(clothsValue))){
        alert("Please provide only number");
        return;
    }
    if((incomeValue<0)||(foodValue<0)||(rentValue<0)||(clothsValue<0)){
        alert("You cannot put negative number.Please provide only positive number");
        return;
    }

    const totalExpense=clothsValue+foodValue+rentValue;
    const balance=incomeValue-totalExpense;

    if(totalExpense>incomeValue){
        alert("your expense more than balance");
        return;
    }

   innerText('total-expense',totalExpense);
   innerText('balance',balance);

   

});
document.getElementById('save').addEventListener('click',function(){
    const balanceInput=document.getElementById('balance');
    const balanceString=balanceInput.innerText;
    const balance=parseInt(balanceString);

    const save=(balance*.2);
    const saveFloat=save.toFixed(2);
    const total=parseFloat(save);

    const saveInputField=document.getElementById('save-input');
    saveInputField.value=saveFloat;
    
    const remainingBalance=balance-saveFloat;

    innerText('save-amount',total);
    innerText('remaining-balance',remainingBalance);
    

})

function getInput(id){
    const inputField=document.getElementById(id);
    const inputString=inputField.value;
    const input=parseInt(inputString);
    return input;
}

function innerText(id,value){
    const text=document.getElementById(id);
    text.innerText=value;
}

function valueNull(id){
    document.getElementById(id).value="";
}
