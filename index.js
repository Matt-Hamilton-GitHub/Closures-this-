function outer (){
  let name = 'Matt'
  return function inner(){
    return name +  ' Hamilton'
  }
}

const result = outer()

//--------------------------------
console.log(outer()())

function counter(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

var counter1 = counter()
var counter2 = counter()
counter1()//+1
counter1()//+1
counter1()//+1
counter1()//+1

counter2()//+1


console.log('counter1: ' +counter1(),'counter2: ' + counter2())

//--------------------------

// function myClasses(){
//   var classes = ['COMPSCI 161','EECS 16A','COMPSCI 61']

//   return{
//     getClasses: function(){
//       return classes;
//     },
//     addClasses: function(newClass){
//       classes.push(newClass)
//       return classes
//   }
//   }
// }

function myClasses(){
  var classes = ['COMPSCI 161','EECS 16A','COMPSCI 61']

  return{
    getClasses: function(){
      return classes.slice();//makes a shallow copy
    },
    addClasses: function(newClass){
      classes.push(newClass)
      return classes.slice()
  }
  }
}

var newStudent = myClasses()
var newStudent2 = myClasses()
console.log(newStudent.getClasses())
console.log(newStudent.addClasses('ASTR 33'))


console.log(newStudent2.getClasses())

console.log(newStudent.getClasses().shift())
console.log(newStudent.getClasses())