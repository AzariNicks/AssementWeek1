const { FORMERR } = require('dns')
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
reader.question(`Welcome User     
Please Enter Your Password ` , function(answer){ 

    

    
    
if(answer.length > 20){console.log("Error, To Many Characters")}    
else if(answer.length <= 10){console.log("Error, Not Enough Characters")
for(i = 0; i < answer.length;i++){
    if(answer[i] === ""){console.log('error')}
}
}

else{console.log('PassWord Entered Successfully')}


reader.close()
})

