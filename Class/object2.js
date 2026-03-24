//Object Singleton

const user = new Object(); // singleton object
console.log(user);

const user2 = {};
user2.id = 123;
user2.name = "srushti";
user2.city = "patil";
user2.age = 20;
user2.islogin = true;

console.log(user2); //non singlrton object

//nested object
const regularuser = {
    email : "srushti@",
    user :{
        fullname : {
            firstname:"srushti",
            lastname : "patil"
        }
    }
}
console.log(regularuser.fullname.firstname);


