class Account{
    min_bal=500;
    get_Accontdetails(){
        console.log("Display the Account details");
    }
    get_Accountbalance(){
        console.log("your Account Balance:", this.min_bal);
    }
}
class Savings_Account extends Account{}
class Current_Account extends Account{
    min_bal=5000;
}
let sa=new Savings_Account();
let ca=new Current_Account();
/*console.log(sa);
console.log(ca);*/
sa.get_Accontdetails();
sa. get_Accountbalance();
ca.get_Accontdetails();
ca. get_Accountbalance();