
// For Loop

// Loop can execute a block of code number of time

for(let i = 0; i <= 10 ;i++){
   
    if(i === 2){
        console.log(`2 is my fav number`);
        continue;
    }

    if(i === 5){
        console.log(`hit 5 stop the loop`);
        break;
    }
    console.log(i);

}

