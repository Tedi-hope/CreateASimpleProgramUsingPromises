// async delay function

function delay(ms) {
   const promise1= new Promise((resolve,reject)=>{

        let connected=true;

        setInterval(()=>{
            if(connected){
                resolve ("Connected to the server successfully!!!");
              }
              else{
                  reject ("Connection failed to the server");
              }
        },ms);
        
    });

    return promise1;
}


delay(3000).then((connectionState)=> console.log(connectionState))
           .catch((error)=>console.log(error));
           