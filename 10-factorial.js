function countdown(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * countdown(n - 1); // ← هنا بنرجع المضروب الكامل
}

let factorial = parseInt(process.argv[2]);

if (Number.isNaN(factorial)){
    console.log('1');
}
else{
    console.log(countdown(factorial))
    }