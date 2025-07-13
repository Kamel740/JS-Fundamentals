let count = parseInt(process.argv[2]);

if (Number.isNaN(count)){
    console.log('Missing size');
}
else{
       let i = 0;
       while (i < count)
       {
        console.log('X'.repeat(count));
        i++;
       }
    }