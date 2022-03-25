const { FORMERR } = require('dns')
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
reader.question(`Welcome User     
Please Enter Your Password ` , function(answer){ /*Checks For Any Special Charcters */
    for(i = 0; i < answer.length;i++){
        if(answer[i] === " "){space = true}
        else if(
           answer[i] === "("   
        || answer[i] === "*"
        || answer[i] === "&"
        || answer[i] === "^"
        || answer[i] === "%"
        || answer[i] === "$"
        || answer[i] === "#"
        || answer[i] === "@"
        || answer[i] === "!"
        || answer[i] === ")"
        || answer[i] === "+"
        || answer[i] === "_"
        || answer[i] === "="
        || answer[i] === "{"
        || answer[i] === "}"
        || answer[i] === "'"
        || answer[i] === ";"
        || answer[i] === "."
        || answer[i] === ","
        || answer[i] === "<"
        || answer[i] === ">"
        || answer[i] === "/"
        || answer[i] === "?"
        || answer[i] === "~"
        || answer[i] === "`"
        || answer[i] === "|"
){hasSpec = true} 
        else{space = false, hasSpec = false}
    }
    
    
if(answer.length > 20){
    console.log("Error, To Many Characters")
}    
else if(answer.length <= 10){
    console.log("Error, Not Enough Characters")
}
else if(space === true){console.log('Error, No Spaces allowed')}
else if(hasSpec === true){console.log(`Error, No Special Charater such as @#! allowed`)}


else{
    console.log('PassWord Entered Successfully')
}
reader.close()
})

