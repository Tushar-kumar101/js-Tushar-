const mySym = symbol("key1");


const jsuser = {
    name : "Tushar kumar",
    [mySym] : "mykey1",
    age : 22,
    location : "ghaziabad",
    email : "tushar@gmail.com",
    isloggedIn : true,
    LastLogindays : ["Monday","tuesday","wednesday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(typeof jsuser[mySym]);

