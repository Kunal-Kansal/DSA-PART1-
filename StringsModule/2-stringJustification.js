let words = ["A", "quick", "brown","fox","jumps","over","the","lazy","dog"]

let i  = 0 , crrLine = [] , width = 0 ,result = [] , maxWidth = 15

while(i < words.length){ // 
    if (words[i].length <= maxWidth - width){  // 
        crrLine.push(words[i]) // 
        width += words[i].length +1 //
        i++ //
        if (i<words.length){continue}
    }
    let remain = maxWidth -width + crrLine.length // 
    let j = 0 // 

    while (remain){   // 
        if (j === crrLine.length-1) {j = 0 } // 
        else {
            crrLine[j] += ' ' // 
            remain-- /// 
            j++ //
        }
    }
    console.log(crrLine )
    result.push(crrLine.join(""))
    crrLine = []
    width = 0
}

console.log(result.map(a => [a, a.length]))

