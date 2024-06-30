// Object Factory Function

function objectFactory(fname , age){
    const getNumber = Number(age)

    // return {[fname]: getNumber};
         return` {${fname}: ${getNumber}}`;
}
console.log(objectFactory("John"  , 25));
console.log(objectFactory("John"  , "25"));





// Grade Classifier Function

function gradeClassifier(grade){

   if(typeof grade !== 'number' || grade < 0 || grade > 100 ){
    return "Invailid grade"
   }
   if(grade >= 90){
    return `"A"`
    }
    else if(grade >= 80 || grade <90){
        return `"B"`
    }
    else if(grade >= 75 || grade < 80){
        return `"c"`
    }
    }
console.log(gradeClassifier(85))
console.log(gradeClassifier("85"))
console.log(gradeClassifier(-85))
console.log(gradeClassifier(185))




// String Manipulator Function

function stringManipulator(str1 , str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string'  ){
        return "Not Match Both String"
    }

    if(str1.length === str2.length){
         return `${str1}${str2}`
    }
   

}

console.log(stringManipulator("hello" , "world"))
console.log(stringManipulator("hello" , 34))
console.log(stringManipulator("hello" , '34'))