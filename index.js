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


//-------------------------------

function specialMultiply(a,b){
    
     if((a && b) || (a === 0 && b) || (a && b===0) || (a === 0 && b===0)){
        return a*b
    }

    return function sumUp(b2){
        return a*b2
    }
}


//----------------------------

function guessingGame(amount){
    var answer = Math.ceil(Math.random() * 10)
    var guesses = 0
    var comlpeted = false
    console.log(answer);
    
    return function inner(guess){

      if(!comlpeted){
        guesses++
        
        if(guesses === amount){
            comlpeted = true
        }
        if(guess === answer){
            return "You got it!"
        }   
       else if(guess > answer){
            
            return  "Your guess is too high!"
        } else if(guess < answer){
             return "Your guess is too low!"
        }

        
       
    }

    
    return  "You are all done playing!"
    }

    
}

const myGame = guessingGame(5)

console.log(myGame(4));
console.log(myGame(9));


//--------------------------
function test(){

  return function testInner(a){
    return a;
  }
}
console.log(test()(5));

//calculator #1
console.log('------CALC#1-----')

function calc1(a,b){
  return{
    add: function(){
      return a+b
    },
    sub: function(){
      return a-b
    },
    mul: function(){
      return a*b
    },
    div: function(){
      if(b !==0){
        return a/b
      }else{
        return a + ' is not divisible by '+ b
      }
    }
  }
}

console.log(calc1(1,3).add())
console.log(calc1(1,3).mul())
console.log(calc1(1,3).div())
console.log(calc1(1,0).div())

console.log('------END-----')

//calculator #2
console.log('------CALC#2-----')

function calc2(oper){
  if(oper === '+'){
    return function(a,b){
      return a+b;
    }
  }else if(oper === '-'){
    return function(a,b){
      return a-b
    }
  }else if(oper === '*'){
    return function(a,b){
      return a*b
    }
  }else if(oper === '/'){
    return function(a,b){
       if(b !==0){
        return a/b
      }else{
        return a + ' is not divisible by '+ b
      }
      
    }
  }
}

console.log(calc2('+')(5,5))
console.log(calc2('-')(4,1))
console.log(calc2('*')(5,5))
console.log(calc2('/')(5,0))

console.log('------END-----')
