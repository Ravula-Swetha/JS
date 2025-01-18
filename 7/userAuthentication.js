class userAuth{
    constructor(){
        this.users = new Map();
    };


register(username, password){
    if(this.users.has(username)){
        console.log("User already exists");
        return false;
    }
    this.users.set(username, password);
    console.log("Resgistered user successfully");
    return true;
}

deleteUser(username){
    if(!this.users.has(username)){
        console.log("User does not exist");
        return false;
    }
    this.users.delete(username);
    console.log("Deleted user successfully");
}

updateuser(username, newPassword){
    if(!this.users.has(username)){
        console.log("User does not exist");
        return false;
    }
    this.users.set(username, newPassword);
    console.log("Updated user successfully");
}

listAll(){
   console.log("Registered Users:");
   for(let items of this.users.keys()){
    console.log(items, this.users.get(items))
   }
}
};

let userss = new userAuth();

userss.register("user1", "password1");
userss.register("user2", "password2");

userss.deleteUser("user1");

userss.updateuser("user2", "newpassword");

userss.listAll();