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

fetchData().then((successStatus)=>console.log(successStatus))
           .catch((error)=>console.log(error));

