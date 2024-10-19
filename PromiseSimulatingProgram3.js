async function processData(data){
    const promise3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data){
                datafromServer=data.repeat(2);
                resolve(`Your data has been doubled ${datafromServer}`);
            }
            else{
              reject(`You have sent an empty data`);
            }
        },1000);

    });
    
    return promise3;
}

//Test the code with an empty string

processData("").then((processInfo)=>console.log(processInfo))
             .catch((error)=>console.log(error));


// Test the code with some string

processData("Javascript Language").then((processInfo)=>console.log(processInfo))
             .catch((error)=>console.log(error));