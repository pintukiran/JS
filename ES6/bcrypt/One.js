const bcrypt=require("bcryptjs");
let user={
    name:"kiran",
    email:"kiran@123",
    password:"kira01",
    cridet_card:"123456543"

}
let salt=bcrypt.genSaltSync(10);
let newPassword=bcrypt.hashSync(user.password,salt);
let newCC=bcrypt.hashSync(user.cridet_card,salt);
let new_user={...user,password:newPassword,cridet_card:newCC}
console.log(new_user);