
import bcrypt from "bcrypt";


const users = [
    {
        name:"Admin user",
        email:"admin@email.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true
    },
    {
        name:"Jagan",
        email:"jagan@email.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:false
    },
    {
        name:"Javid",
        email:"javid@email.com",
        password:bcrypt.hashSync("123456", 10),
        isAdmin:true
    }
];

export default users;