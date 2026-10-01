function hasTwoCubeSums(n) {
    let count = 0;
    for (let i = 1; i * i * i < n; i++)
   {
         for (let j = i; i * i * i + j * j * j <= n; j++) {
            if (i * i * i + j * j * j === n) {
                count = count + 1;
            }
            
        }
    }

    return count >= 2;
}