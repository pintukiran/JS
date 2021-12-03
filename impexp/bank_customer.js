const Address=require("./Address");
class bank_customer{
    constructor(id,name,email,Address){
        this.id=id;
        this.name=name;
        this.email=email;
        this.Address=Address;

    }
}
let S=new bank_customer(101 ,"kiran", "pintukiran633@gmail.com",new Address(96,"Tc palya","blr"));
console.log(S);