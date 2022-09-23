

class BankAccount {
    constructor(rut, fullName, numberAccount, email) {
        this.rut = rut;
        this.fullName = fullName;
        this.numberAccount = numberAccount;
        this.email = email;
        this.credit = 0;
    }

    getRut() {
        return this.rut;
    }

    getCredit() {
        console.log(`Su crédito actual es de ${this.credit}`);
    }

    creditCharge(credit) {
        this.credit += credit;
    }

    creditWithdraw(credit) {
        this.credit -= credit
    }

    // transferCredit(destination, amount) {

    // }
}

class SavingAccount extends BankAccount {
    constructor(rut, fullName, numberAccount, email, credit) {
        super(rut, fullName, numberAccount, email)
        this.credit = credit;
    }
}

class CreditAccount extends BankAccount {
    constructor(rut, fullName, numberAccount) {
        super(rut, fullName, numberAccount)
        this.creditCardLimit = 1000000;
        this.credit = this.creditCardLimit;
        this.usedCredit = 0;
    }

    payCredit(amount) {
        this.usedCredit -= amount;
        this.creditCardLimit += amount;
        this.credit += amount;
        super.getCredit();
    }

    useCredit(amount) {
        this.usedCredit += amount;
        this.creditCardLimit -= amount;
    }
}


const account1 = new BankAccount('1111111-1', 'Caro Da Silva', 1, 'cdasilva@codingdojo.cl');
// console.log("🚀 ~ file: poo.js ~ line 25 ~ account1", account1)

const account2 = new SavingAccount('22222222-2', 'Dani Lorca', 2, 'hola@gmail.com', 2000);
// console.log("🚀 ~ file: poo.js ~ line 44 ~ account2", account2);

// account1.creditCharge(100);
// account2.creditCharge(200);
// console.log("🚀 ~ file: poo.js ~ line 48 ~ account2", account2)
// console.log("🚀 ~ file: poo.js ~ line 28 ~ account1", account1.getRut())
const account3 = new CreditAccount('22333333-3', 'Carlo Lopez', 3, 'carlo@gmail.com');
console.log("🚀 ~ file: poo.js ~ line 67 ~ account3", account3)
account3.useCredit(10);
account3.payCredit(100);
console.log("🚀 ~ file: poo.js ~ line 74 ~ account3", account3)



