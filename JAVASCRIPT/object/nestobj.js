var accounts={
    1001:{acno:1001,password:"userone",balance:5000},
    1002:{acno:1002,password:"usertwo",balance:7000},
    1003:{acno:1003,password:"userthree",balance:8000},
    1004:{acno:1001,password:"userone",balance:9000},
    
}

// chech the authentication is true or not

function login(acno,password) 
{

    if(acno in accounts)
    {
        let pwd=accounts[acno].password;
            if(pwd==password)
            {
                console.log("loggin success");
            }
            else
            {
                console.log("invalid loggin");
            }
    }
    else
    {
        console.log("invalid loggin");
    }
    
}

login(1001,"userone")