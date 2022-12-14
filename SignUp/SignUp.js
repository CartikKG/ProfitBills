import { nanoid } from './node_modules/nanoid/nanoid.js';
// import Cryptr from "./node_modules/cryptr/index.js";


class profitBillsUser {

    constructor(firstName,LastName,email,password){
        
        this.firstName=firstName;
        this.lastName=LastName;
        this.email=email;
        this.password=password;
        this.invoices=[];
       
    }




}









const signUpFunction =async()=>{

    // let text = "Ankit";
    // let encrypted = Cryptr.encrypt(text);
    // console.log(encrypted);
    // let decrypted =Cryptr.decrypt(encrypted);
    // console.log(decrypted);

    event.preventDefault();

    let fname = document.getElementById("form-first-name").value;
    let lname = document.getElementById("form-last-name").value;
    let email = document.getElementById("form-email").value.toLowerCase();
    let password = document.getElementById("form-password").value;
    let confirmPassword = document.getElementById("form-confirm-password").value
    let specialChar = false;
    let lowerChar = false;
    let upperChar = false;
    let numberChar = false;
    

    for(let i=0;i<password.length;i++){

        if(password.charCodeAt(i)>=97&&password.charCodeAt(i)<=122){
            lowerChar=true;
        }
        if(password.charCodeAt(i)>=65&&password.charCodeAt(i)<=90){
            upperChar=true;
        }
        if(password.charCodeAt(i)>=48&&password.charCodeAt(i)<=57){
            numberChar=true;
        }
        if(password.charCodeAt(i)==64||password.charCodeAt(i)==95||password.charCodeAt(i)==36){
            specialChar=true;
        }
    }

    if(!specialChar||!lowerChar||!upperChar||!numberChar||password!=confirmPassword){
        alert("Doesn't Meet Password Requirement");
        return;
    }

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
        for(let i=0;i<data.length;i++){
            if(data[i].email==email){
                alert("Already Registered");
                return;
            }
        }



    }
    catch(err){
        console.log(err);
    }


    //Posting User Data to Server
    
    let newUser = new profitBillsUser(fname,lname,email,password)

    try{
        
        let res = await fetch(apiURL,{
            method: "POST",
            body:JSON.stringify(newUser),
            
            headers:{
                "content-type":"application/json",
                'cache-control': 'no-cache',
                "x-apikey":apiKey
            }
        });
        let data = await res.json();
        console.log(data);
        for(let i=0;i<data.length;i++){
            if(data[i].email==email){
                alert("Already Registered");
                return;
            }
        }



    }
    catch(err){
        console.log(err);
    }
   

    document.getElementById("form-first-name").value="";
    document.getElementById("form-last-name").value="";
    document.getElementById("form-email").value="";
    document.getElementById("form-password").value="";
    document.getElementById("form-confirm-password").value="";


    alert("Registered Sucessfully");





    



}



// Password Validation 

const debouceFormValidate =()=>{

    let timerId;
    
    return ()=>{
        
        if(timerId)clearTimeout(timerId);
        // console.log("hello")
        timerId=setTimeout(() => {
            let password = document.getElementById("form-password").value;
            let confirmPassword = document.getElementById("form-confirm-password").value
            let specialChar = false;
            let lowerChar = false;
            let upperChar = false;
            let numberChar = false;
            

            for(let i=0;i<password.length;i++){

                if(password.charCodeAt(i)>=97&&password.charCodeAt(i)<=122){
                    lowerChar=true;
                }
                if(password.charCodeAt(i)>=65&&password.charCodeAt(i)<=90){
                    upperChar=true;
                }
                if(password.charCodeAt(i)>=48&&password.charCodeAt(i)<=57){
                    numberChar=true;
                }
                if(password.charCodeAt(i)==64||password.charCodeAt(i)==95||password.charCodeAt(i)==36){
                    specialChar=true;
                }




            }

            if(specialChar){
                document.getElementById("specialCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("specialCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("specialCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("specialCharValidateIcon").style.backgroundColor="red"
                
            }

            if(lowerChar){
                document.getElementById("lowerCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("lowerCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("lowerCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("lowerCharValidateIcon").style.backgroundColor="red"
                
            }

            if(upperChar){
                document.getElementById("upperCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("upperCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("upperCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("upperCharValidateIcon").style.backgroundColor="red"
                
            }

            if(numberChar){
                document.getElementById("numberCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("numberCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("numberCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("numberCharValidateIcon").style.backgroundColor="red"
                
            }

            if(password.length>=8){
                document.getElementById("eightCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("eightCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("eightCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("eightCharValidateIcon").style.backgroundColor="red"
                
            }

            if(password==confirmPassword&&password!=""){
                document.getElementById("matchedCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("matchedCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("matchedCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("matchedCharValidateIcon").style.backgroundColor="red"
                
            }






        }, 1000);


    }




}


const debouceConfirmFormValidate=()=>{

    let timerId;

    return ()=>{
        if(timerId)clearTimeout(timerId);
        timerId=setTimeout(() => {
            let password = document.getElementById("form-password").value
            let confirmPassword = document.getElementById("form-confirm-password").value

            if(password==confirmPassword){
                document.getElementById("matchedCharValidateIcon").setAttribute("class","fa-solid fa-check validationIcon");
                document.getElementById("matchedCharValidateIcon").style.backgroundColor="green"
            }
            else{
                document.getElementById("matchedCharValidateIcon").setAttribute("class","fa-solid fa-xmark validationIcon");
                document.getElementById("matchedCharValidateIcon").style.backgroundColor="red"
                
            }


        }, 1000);
    }






}




document.getElementById("form-password").addEventListener("input",()=>{
    let ans=debouceFormValidate();
    ans();
});
document.getElementById("form-confirm-password").addEventListener("input",()=>{
    let ans=debouceConfirmFormValidate();
    ans();
});
document.getElementById("profitBills-signUp-form").addEventListener("submit",signUpFunction)