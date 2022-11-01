
const logInFunction =async()=>{

    event.preventDefault();
    let email = document.getElementById("form-email").value.toLowerCase();
    let password = document.getElementById("form-password").value;
 

    let apiURL = `https://profitbills-b8ea.restdb.io/rest/profitbills`;
    let apiKey =  `6360f3cee9a77f5984220583	`;
    
    // Checking User is Available or not in Data.
    try{
        
        let res = await fetch(apiURL,{
            "method": "GET",
            "headers":{
                'cache-control': 'no-cache',
                "x-apikey":apiKey
            }
        });
        let data = await res.json();
        console.log(data);
        let bool = false;
        for(let i=0;i<data.length;i++){
            if(data[i].email==email){
                bool = true;
                if(data[i].password==password){
                    alert(`Sucessfully Login ${data[i].firstName}`);
                    localStorage.setItem("loggedUser",data[i]["_id"]);
                    
                    

                }
                else{
                    alert("Invalid Credentials");
                }
                break;
            }
           
        }

        if(!bool){
            alert("User doesn't Exist");
        }



    }
    catch(err){
        console.log(err);
    }


    

 
    document.getElementById("form-email").value="";
    document.getElementById("form-password").value="";






    




    



}
document.getElementById("profitBills-signUp-form").addEventListener("submit",logInFunction);