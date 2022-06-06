const getNumber = () => {
    return new Promise((resolve, reject) => {
      let num = Math.random()*100;
      num = Math.floor(num);
      
      if(num%5===0){
          console.log(num);
          resolve(num);
      }
      else{
          console.log(num);
          reject(num);
      }
    });
  };
  
  getNumber().then(()=>console.log("Number is Divisible")).catch((err)=>console.log("Number is not Divisible"));
  
  
  
  
  
  