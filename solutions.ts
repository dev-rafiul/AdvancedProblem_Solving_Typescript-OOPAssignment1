//Filter Even Numbers
const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((num) => num % 2 === 0)
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))




// Reverse String
const reverseString = (str: string): string => {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result = result + str[i]
    }
    return result
}
console.log(reverseString("typescript"))



// strong or number
type strORnum = string | number

const checkType = (value: strORnum) => {
    if(typeof value === "string"){
        return "String"
    }
    else if(typeof value === 'number'){
        return "Number"
    }
    else{
        return "Nothing"
    }
}

checkType(42)




