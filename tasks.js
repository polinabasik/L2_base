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






























