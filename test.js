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
    savings: true,
    chooseExpemses: function () {
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
    },
    detectLevel: function () {
        appData.monyPerDay = (appData.budjet / 30).toFixed(1);
        (appData.monyPerDay < 100) ? console.log("минимальный уровень"):
            (appData.monyPerDay >= 100 && appData.monyPerDay < 1000) ? console.log("средний уровень") :
            (appData.monyPerDay >= 1000) ? console.log("высокий уровень") : false;

    },
    detectLevel: function () {
        appData.monyPerDay = (appData.budjet / 30).toFixed(1);
        (appData.monyPerDay < 100) ? console.log("минимальный уровень"):
            (appData.monyPerDay >= 100 && appData.monyPerDay < 1000) ? console.log("средний уровень") :
            (appData.monyPerDay >= 1000) ? console.log("высокий уровень") : false;

    },
    chackSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какой суммой на депозите имеете?", 1),
                procent = +prompt("Под какой процент?", 1);
            appData.monthIncom = ((save / 12) / 100) * procent.toFixed(2);
            console.log('Ежемесячный проценнт: ' + appData.monthIncom);
            alert('Ежемесячный проценнт: ' + appData.monthIncom);
        }

    },
    chooseIncome: function(){
     let tr = false;
     let say;
     let s='';
      do {
 say = prompt("перечислете что-то через запятую","");
 (typeof(say) === "string" && say != null && say != '' && say != NaN)? tr=true: tr = false;
      } while (tr==false);
        appData.income = say.split(', ');
        //appData.income.forEach(element => {
   // s=s+element; 
       // });
       s = this.income.toString(', ');
        alert('Способы доп. заработка: '+s);
        appData.income.push(prompt("дополните",""));
        appData.income.sort();
    }
};
//----------------//
appData.chooseExpemses();
appData.detectLevel();
console.log("Ежедневно имеется: " + appData.monyPerDay);
appData.chooseIncome();
appData.chackSavings();
console.log(appData);
for (let key in appData) {console.log(key);}

