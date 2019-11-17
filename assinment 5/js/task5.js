// Q5. A cashier has currency notes of denominations 10, 50 and 100. If the
// amount to be withdrawn is input through the keyboard in hundreds,
// find the total number of currency notes of each denomination the
// cashier will have to give to the withdrawer

var amount = prompt("enter amount in  withdrwal");
var fifttyamount = (amount[1] + amount[2]+ amount[3]);

function withdraw(){
    if(amount < 100){
        return "enter amount in hundreds"
    }
    else if(fifttyamount < 50){
        return `you have ${+amount[0]} hundred notes ${amount[1]} ten notes`
    }
    else if(fifttyamount < 50){
        return `you have ${+amount[0]} hundred notes ${amount[1]} ten notes`
    }else{
        return `you have ${+amount[0]} hundred notes 1 fifty notes ${+amount[1] - 5} ten notes`
    }
}
document.write(withdraw())