function register(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Successful registration");
            resolve(username);
        }, 2000);
    })
}

function email(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Sent email to ${username}`);
            resolve(username);
        }, 2000);
    })
}

function registerAndMail(username){
    return register(username)
    .then(email(username))
    .catch(err =>{
        console.log("Erorr");
    })
}

function registerMultiple(users){
    const promises = users.map(user =>{
        return registerAndMail(user)
        .then(console.log(`process completed for ${user}`))
        .catch(err =>{
            console.log(err);
        })
    })
}

Users = ["user1", "user2", "user3"];
registerMultiple(Users)