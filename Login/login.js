
const logInFunction =async()=>{

    event.preventDefault();
    let email = document.getElementById("form-email").value.toLowerCase();
    let password = document.getElementById("form-password").value;
 

    let apiURL = `https://api.sheetson.com/v2/sheets/profitbills?`;
    let apiKey =  `8xkjbrVNda6OB53ZyhDVPjTqhDX8KfFveM_GtbmKwQ9FtDbvPCAL-Gtm8wM`;
    let spreadsheetId =`1K3yp6JSNSyaYpzxzioPceVgh0uNlA7KBmI_X_OYvr6s`;
    
    // Checking User is Available or not in Data.
    try{
        
        let res = await fetch(apiURL+`apiKey=${apiKey}&spreadsheetId=${spreadsheetId}&where={"email": "${email}"}`);
        let data = await res.json();
        // console.log(data);
        if(data.results.length>0){
           if(data.results[0].password==password){
            alert(`SucessFully Login ${data.results[0].firstName}`);
           }
           else{
            alert("Wrong Password");
           }
        }
        else{
            alert("User Not Registered");
        }



    }
    catch(err){
        console.log(err);
    }


    

 
    document.getElementById("form-email").value="";
    document.getElementById("form-password").value="";






    




    



}
document.getElementById("profitBills-signUp-form").addEventListener("submit",logInFunction);