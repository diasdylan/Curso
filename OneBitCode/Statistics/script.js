const average = (...avg) => {
    let reduced = avg.reduce((total, current) => {
        return total + current
    }, 0)
    return reduced / avg.length
}
console.log(`The average is of the sum of the array is: ${average(50, 150, 75)}`)

//My implementation
//Start
const avgWeighted = (...params) => {
    let gradeResult = [];
    let weightResult = [];
    for (let i = 0; i < params.length; i++) {
        let grade = params[i].n;
        let weight = params[i].p
        gradeResult[i] = grade * weight;
        weightResult[i] = params[i].p;
    }
    const gradeResultSum = gradeResult.reduce((total, current) => { return total + current }, 0)
    const weightResultSum = weightResult.reduce((total, current) => { return total + current }, 0)

    const weightedAverage = gradeResultSum / weightResultSum;
    // console.log(gradeResultSum)
    // console.log(weigthResultSum)
    return console.log(`My implementation of weighted average is: ${weightedAverage}`)
}

//End

//Isac implementation
//Start
const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { n, p }) => accum + (n * p ?? 1), 0);
    const weightSum = entries.reduce((accum, entry) => accum + (entry.p ?? 1), 0);
    return console.log(`Isac way to implement the weighted avg: ${sum / weightSum}`)
}
//End

avgWeighted({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 })
weightedAverage({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 })
weightedAverage({ n: 7, p: 2 }, { n: 9, p: 5 }, { n: 3, p: 1 }, { n: 10 })


const median = (...median) => {
    let medianEven = median.length % 2 === 0;
    if (medianEven === true) {
        //ascending sorting
        median.sort((a, b) => { return a - b })
        // console.log(median)
        // console.log(median.length)
        let center1 = median[median.length / 2 - 1];
        let center2 = median[median.length / 2]
        // console.log(center1, center2)
        let medianResult = (center1 + center2) / 2;
        console.log(medianResult)
    }
    if (medianEven === false) {
        median.sort((a, b) => { return a - b })
        console.log(median)
        console.log(`median is not even: ${median.length}`)
        let meio = Math.floor(median.length / 2);
        // console.log(meio)
        let oddCenter = median[meio]
        console.log(oddCenter)
    }
}

median(2, 4, 5, 7, 42, 99)
median(6, 2, 4, 13, 14, 18, 69, 16)
median(4, 8, 10)
median(4, 8, 10, 12, 42)

// Isac implementation
//Start
const mode = (...mode) => {
    const quantities = mode.map(num => [
        num,
        mode.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    console.log(quantities)
    return console.log(quantities[0][0])
}
//End

//My attempt
//Start 
const molder = (...maider) => {
    const quantities = maider.map((num) => {
        return [num, maider.filter((n) => {return num === n}).length]
    }
    )
    quantities.sort((a, b) => b[1] - a[1])
    console.log(quantities)
    return console.log('My quantities: ' + quantities[0][0])
}
//End

mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)
molder(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)