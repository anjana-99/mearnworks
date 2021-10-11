class Baank{
accounts = {
    1001: {
        acno: 1001, password: "userone", balance: 5000, transactions:
            [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1002: {
        acno: 1002, password: "usertwo", balance: 7000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1003: {
        acno: 1003, password: "userthree", balance: 8000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1002, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1004: {
        acno: 1001, password: "userone", balance: 9000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },

}

getAccountDetails()
{
    return this.accounts;
}

 authenticate(accno,password)

 {
    if(accno in this.accounts)
    {  // valid accno
        let pwd= this.accounts[accno].password;
        if(pwd==password)
        {
           console.log("login success");// return 1;// login success
        }
        else
        {
            return 0;// invalid pw
        }

    }
    else{
        return -1; //for invalid account
    }
 }

}
var obj=new Baank()
 obj.authenticate(1002,"usertwo")
 


