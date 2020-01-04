'use strict';
let money,
    time = new Date();

function start() {
    console.log(time);
    money = +prompt("Ваш бюджет на месяц?", 200000);
    console.log(money);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020.01.01");
    console.log(time);
    console.log(Date(time));

    while (isNaN(money) || money == undefined || money == null || money == "") {
        money = +prompt("Ваш бюджет на месяц?", 200000);
        console.log(money);
    }
}
start();


let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpense: {},
    income: [],
    savings: true
};

function chooseExpemses (){
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if (typeof (a) === "string" && a != null && b != null && a != '' && b != '') {
        console.log('OK');
        appData.expenses[a] = +b;
    } else {
        i--;
        console.log('non');
    }

}
}
chooseExpemses();
function detectLevel(){
appData.monyPerDay = (appData.budjet / 30).toFixed(1);
(appData.monyPerDay<100)? console.log("минимальный уровень"):
(appData.monyPerDay>=100 && appData.monyPerDay <1000)? console.log("средний уровень"):
(appData.monyPerDay>=1000)? console.log("высокий уровень"):false;

}

detectLevel();
console.log("Ежедневно имеется: " + appData.monyPerDay);
console.log(appData);

function chackSavings(){
    if (appData.savings == true){

        let save = +prompt("Какой суммой на депозите имеете?", 1),
        procent = +prompt("Под какой процент?",1);
        appData.monthIncom = ((save/12)/100)*procent.toFixed(2);
        console.log('Ежемесячный проценнт: '+appData.monthIncom );
        alert('Ежемесячный проценнт: '+appData.monthIncom );
    } 
}
chackSavings();