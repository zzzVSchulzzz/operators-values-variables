//объявляю переменные
const NDS = 0.20
    NDFL = 0.13
    EXCISE = 0.1
    RENT = 40000
    FOOD = 15000
    OTHER = 15000
    MY_SALARY = 120000

//рассчеты
const ndflTax = MY_SALARY * NDFL;
    mySalaryNet = MY_SALARY - ndflTax;
    otherTaxes = mySalaryNet * (NDS + EXCISE);

let totalAvailable = mySalaryNet - otherTaxes;

totalAvailable -= FOOD + OTHER + RENT;

//делаю вызов результата
alert('Зарплата ' + MY_SALARY + ' рублей')
alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
alert('Осталось ' + totalAvailable + ' рублей')