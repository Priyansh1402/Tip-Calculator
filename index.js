let calculate = document.querySelector("#calculate");
  
        calculate.addEventListener("click",() => {
        
        let totalbill = document.querySelector("#Bill_Amount").value;
        let tippercentage = document.querySelector("#tip_percentage").value;
        let split = document.querySelector("#split").value;
    
          if(totalbill === "" || tippercentage === 0 || split == 0){
            alert("Please Provide Value")
            return;
          }
          
          let total = (totalbill * tippercentage)/split;
          total = total.toFixed(2)
          
         
      document.getElementById("tip").innerHTML = total;

    }); 

    function refresh(){
        location.reload();
    };
    function colorchange(){
        document.getElementById("tip").style.color = "#ff0000";   
    };