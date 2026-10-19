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
    let century = Math.ceil(Number(year) / 100);
    let end = "";

    if (century === 11 || century === 12 || century === 13) {
        end = "th";
    } 
	else {
        let last = century % 10;

        if (last === 1) {
            end = "st";
        }
	else if (last === 2) {
            end = "nd";
        }
	else if (last === 3) {
            end = "rd";
        }
	else {
            end = "th";
        }
    }

    return century + end;
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



function toWeirdCase(string) {
    let words = string.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let current = words[i];
        let newWord = "";

        for (let j = 0; j < current.length; j++) {
            if (j % 2 === 0) {
                newWord = newWord + current[j].toUpperCase();
            } else {
                newWord = newWord + current[j].toLowerCase();
            }
        }
        result.push(newWord);
    }

    return result.join(' ');
}





function wave(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        let before = str.slice(0, i);
        let current = str[i].toUpperCase();
        let after = str.slice(i + 1);
        let waveWord = before + current + after;
        result.push(waveWord);
    }
    return result;
}


function expandedForm(num) {
    let strNum = num.toString();
    let parts = [];
  
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== '0') {
            let zeroCount = strNum.length - 1 - i;
            let digBlock = strNum[i] + "0".repeat(zeroCount);
            parts.push(digBlock);
        }
    }
    return parts.join(' + ');
}





function solution(str){
  
   let pairsList = [];
   for (let i = 0; i < str.length; i = i + 2) {
   let substring = str.slice(i, i + 2);
   if (substring.length === 1) {
      substring = substring + '_';
    }
    
    pairsList.push(substring);
  }
  
  return pairsList;
}


function bingo(ticket, win) {

let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        let currentPair = ticket[i];
        let currentString = currentPair[0];
        let targetNumber = currentPair[1];

        for (let j = 0; j < currentString.length; j++) {
            if (currentString.charCodeAt(j) === targetNumber) {
                count = count + 1;
                break;
            }
        }
    }

    if (count >= win) {
        return "Winner!";
    } else {
        return "Loser!";
    }

}





function domainName(url){
  
  let cleanUrl = url.replace("http://", "");
  cleanUrl = cleanUrl.replace("https://", "");
  cleanUrl = cleanUrl.replace("www.", "");
  
  let ind = cleanUrl.indexOf('.');
  let domain = cleanUrl.slice(0, ind);
  
  return domain;
  
}


























