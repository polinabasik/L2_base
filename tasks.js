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




function ipv4Parser(ip, mask) {
    let ipParts = ip.split('.');
    let Parts = mask.split('.');
  
    let networkResult = [];
    let hostResult = [];

    for (let i = 0; i < 4; i++) {
        let IpNum = Number(ipParts[i]);
        let Num = Number(Parts[i]);
        
        let networkPart = (IpNum & Num) >>> 0;
        networkResult.push(networkPart);

        let hostPart = (IpNum & (255 - Num)) >>> 0;
        hostResult.push(hostPart);
    }

    let finalN = networkResult.join('.');
    let final = hostResult.join('.');

    return [finalN, final];

}



function whatCentury(year) {
    let centuryNumber = Math.ceil(Number(year) / 100);
    let suffix = "";

    if (centuryNumber === 11 || centuryNumber === 12 || centuryNumber === 13) {
        suffix = "th";
    } else {
        let last = centuryNumber % 10;

        if (last === 1) {
            suffix = "st";
        }
	else if (last === 2) {
            suffix = "nd";
        }
	else if (last === 3) {
            suffix = "rd";
        }
	else {
            suffix = "th";
        }
    }

    return centuryNumber + suffix;
}


function findMissing(list) {
    let first = list[0];
    let last = list[list.length - 1];
    
    let step = (last - first) / list.length;

    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] !== list[i] + step) {
            return list[i] + step;
        }
    }
    
    return first;
}




function primeFactors(n){
    let result="";
    let d =2;
  
  while (n > 1){
    let pow=0;
    while (n % d == 0){
      pow += 1;
      n = n / d;
    }
    
    if (pow > 0){
      if (pow === 1){
        result = result + "(" + d + ")";
      }
      else{
        result = result + "(" + d + "**" + pow + ")";
      }
    }
    d+=1;
  }
  return result;
}


























