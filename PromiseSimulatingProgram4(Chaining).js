//Producing code

function fetchData(){
    const promise2= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const rdmnum=Math.floor(Math.random()*100)+1;
            if(rdmnum>=60){
                resolve ("You win!!.Generated number is" +" "+rdmnum);
            }
            else{
                reject ("I am sorry...You lost.Generated number is" +" "+rdmnum);
            }
        },2000);
    });

    return promise2;
}

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

fetchData().then((successStatus)=>{console.log(successStatus)
             return processData("javascript Programming");
           })
           .then((processInfo)=>{
               console.log(processInfo);
           })
           .catch((error)=>{
            console.log(error);
 })





