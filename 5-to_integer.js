let check = parseInt(process.argv[2]);

if (Number.isNaN(check)){
    console.log("Not a number");
}else{
    console.log(`My number: ${check}`)
}