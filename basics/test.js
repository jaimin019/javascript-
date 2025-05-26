console.log("Jaimin")

const accountid = 12345
let accountemail = "blackwidows310y@gmail.com"

//dont use var keyword , there was a problem in js in block scope and functional scope

// scope = {}

console.table([accountemail,accountid])

// accountid = 12349 // wrong way

accountemail = "natasharomanoff@gmail.com"

console.table([accountemail,accountid])

// if we dont give value to a variable it will be as follows

let tempvar

console.table([accountemail,accountid, tempvar])

// it will be stored as undefined