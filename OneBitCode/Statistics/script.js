const average = (...avg) => {
    let reduced = avg.reduce((total, current) => {
        return total + current
    }, 0)
    return reduced / avg.length
}
console.log(`The average is of the sum of the array is: ${average(50, 150, 75)}`)

const avgWeighted = (...params) => {
    let gradeResult = [];
    let weightResult = [];
    for(let i = 0; i < params.length; i++){
        let grade = params[i].n;
        let weight = params[i].p
        gradeResult[i] = grade * weight;
        weightResult[i] = params[i].p; 
    }
    const gradeResultSum = gradeResult.reduce((total, current) =>{return total + current} , 0)
    const weightResultSum = weightResult.reduce((total, current) => {return total + current}, 0)
    
    const weightedAverage = gradeResultSum / weightResultSum;
    // console.log(gradeResultSum)
    // console.log(weigthResultSum)
    return console.log(`The weighted average is: ${weightedAverage}`)
}
avgWeighted({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 })

const median = (...median) => {
    let medianEven = median.length % 2 === 0;
    if(medianEven === true){
        //ascending sorting
        median.sort((a,b) => {return a-b})
        // console.log(median)
        // console.log(median.length)
        let center1 = median[median.length / 2 - 1];
        let center2 = median[median.length / 2]
        // console.log(center1, center2)
        
    }
    if(medianEven === false){
        console.log(`median is not even: ${median.length}`)
    }
}

median(2, 4, 5, 7, 42, 99)
// median(6, 2, 4, 13, 14, 18, 69, 16)
// median(4,8,10)