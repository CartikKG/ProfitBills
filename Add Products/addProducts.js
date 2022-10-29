

class Product{

    constructor(name,category,qty){
        this.name=name;
        this.category=category;
        this.qty=qty;
    }



}



const addProducts =()=>{

    event.preventDefault();
    let productName = document.getElementById("productName").value;
    let category = document.getElementById("categoryName").value;
    let qty = document.getElementById("openingStock").value;



    if(qty==""){
        qty=0;
    }
    let newProduct = new Product(productName,category,qty);
    
    





}









document.getElementById("addProductsForm").addEventListener("submit",addProducts);

