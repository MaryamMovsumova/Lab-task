//TASK-1

function getReverse(word){
       let result = ""
       for (let i = [word.length -1]; i<=0; i--){
          result = result+word[i]
       }
       return result;
    }
    
    console.log(getReverse("Hello"))


//TASK-2
    
    function getTimesLetter(str){
       let repet =0
       for(let i =0; i<str.length; i++){
        if(str[i]=="e")
        repet++
       }
    }

    console.log(getReverse("Never give up"))
    
       
    //TASK-3 
 
    const cars =[
       {
          color:"red"
          type:"mercedes"
          capacity: 5,
          price:120
       },
    
       {
          color:"blue"
          type:"bmw"
          capacity: 2,
          price:70,
       },
    
       {
          color:"blue"
          type:"ford"
          capacity: 6,
          price:220,
       },
    
       {
          color:"blue"
          type:"bmw"
          capacity: 6,
          price:400,
       },
    ]
    
   //TASK-3 first part

    const sizeCars = cars.map((car)=>{
       if(car.capacity<=3){
          return`small ${car.type}`
       }
    
       if(car.capacity<=5){
          return`medium ${car.type}`
       }
    
       else{
          return`large ${car.type}`
       }
    })
    
     console.log(sizeCars)

        //TASK-3 second part

const saleCars = cars.filter((car)=>car.color="blue").map((car)=>{
    let blueCar = car.price - (car.price*30)/100;
    return `new price ${blueCar} $ car model ${car.type}`
})

console.log(saleCars)






     
    
  
    
    
    
    
    
    
    
   