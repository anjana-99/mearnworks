class bank  // class
{
    constructor(accno,acctype,min_bal)
    {
        this.accno=accno,
        this.acctype=acctype,
        this.balance=min_bal
    
    }

    deposit(amount)
    {
        this.balance+=amount;
        console.log(`Your acc is credited with amount of ${amount} available balance: ${this.balance}`);
    }

    withdraw(amount)
    {
        if(this.balance>amount)
        {
            this.balance-=amount;
            console.log(`Your acc is debited with amount of ${amount} available balance:${this.balance}`);

        }
        else
        {
            console.log("Insufficient balance");
        }
    }

    
}

var obj1= new bank(1000,"savings",5000)  // object
obj1.withdraw(1000)
obj1.deposit(5000);
obj1.withdraw(3000)
