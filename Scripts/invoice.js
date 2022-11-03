

let url = `https://api.sheetson.com/v2/sheets/profitbills?`;
let apiKey = `8xkjbrVNda6OB53ZyhDVPjTqhDX8KfFveM_GtbmKwQ9FtDbvPCAL-Gtm8wM`;
let sheetId = `1K3yp6JSNSyaYpzxzioPceVgh0uNlA7KBmI_X_OYvr6s`;









let count = 0;
document.getElementById("maindiv").addEventListener("click", (e) => {
  if (e.target.id == "addrow") {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td style="text-align: center; border: 0.5px solid black">${++count}</td>
  <td ><input type="text" /></td>
  <td><input type="text" id="qty" /></td>
  <td><input type="text" id="rate" oninput="total()" /></td>
  <td>
    <select name="" onchange="total()" id="gstrate">
      <option value="0"><b>None</b></option>
      <option value="0">GST@0%</option>
      <option value="2.5">GST@2.5%</option>
      <option value="5">GST@5%</option>
      <option value="9">GST@9%</option>
      <option value="12">GST@12%</option>
      <option value="18">GST@18%</option>
      <option value="28">GST@28%</option>
      <option value="0">Exempted</option>
    </select>
  </td>
  <td><input type="text" id="total"  /></td>
  <td
  style="
    background-color: red;
    color: rgb(253, 253, 253);
    text-align: center;
    cursor: pointer;
    border-bottom: 1px solid black;
  "
  id="deleterow"
>
  <i class="fa-solid fa-trash"></i>
</td>
  `;
    document.querySelector("tbody").append(tr);
  } else if (e.target.id == "generate") {
    let all = document.querySelectorAll("tbody>tr");
    let compnay = document.querySelectorAll("form>div>span")[0];
    let c1 = document.querySelectorAll("form>div>span")[1];
    function Bill_to(a, b, c, d, e, f) {
      this.Name = a;
      this.Mob = b;
      this.GSTIN = c;
      this.Address = d;
      this.date = e;
      this.No = f;
    }
    let Name = compnay.children[0].value;
    let Mob = compnay.children[1].value;
    let GSTIN = compnay.children[2].value;
    let Address = compnay.children[4].value;
    let date = c1.children[2].value;
    let no = document.querySelector("#invoicecount").value;
    // let temp = new Bill_to(Name, Mob, GSTIN, Address, date, no);

    // console.log(temp);

    function BillDetails(a, b, c, d, e, f) {
      this.no = a;
      this.des = b;
      this.qty = c;
      this.rate = d;
      this.gst = e;
      this.total = f;
    }
    let productsData = [];
    for (let i = 1; i < all.length; i++) {

      let sno = all[i].cells[0].innerHTML;
      let des = all[i].cells[1].children[0].value;
      let qty = all[i].cells[2].children[0].value;
      let rate = all[i].cells[3].children[0].value;
      let gst = all[i].cells[4].children[0].value;
      let total = all[i].cells[5].children[0].value;
      let temp = new BillDetails(sno, des, qty, rate, gst, total);
      productsData.push(temp);

    }

    let billDetail= {
      name:Name,
      mob:Mob,
      gstin:GSTIN,
      address:Address,
      date:date,
      number:no,
      productsData:productsData
    }
    console.log(billDetail)
    postInvoice(billDetail);
    





  } else if (e.target.id == "deleterow") {
    count--;
    e.target.parentNode.remove();
  }
});

function total() {
  let all = event.target.parentNode.parentNode.children;
  let rate = Number(all[3].children[0].value);
  let qty = Number(all[2].children[0].value);
  let total = rate * qty;
  let gst = Number(all[4].children[0].value);
  let percent = (total / 100) * gst;
  all[5].children[0].value = (total + percent).toFixed(2);
}




const postInvoice =async(invoice)=>{
  
  let apiURL = `https://profitbills-b8ea.restdb.io/rest/profitbills`;
  let apiKey =  `6360f3cee9a77f5984220583	`;
  let loggedUser = localStorage.getItem("loggedUser");
  
  
  //fetching data of Logged in user

  try{
        
    let res = await fetch(apiURL+`/${loggedUser}`,{
        "method": "GET",
        "headers":{
            'cache-control': 'no-cache',
            "Content-Type": "application/json",
            "x-apikey":apiKey
        }
    });
    let data = await res.json();
    
    data.invoices.push(invoice);
    delete data["_id"];
    try{
        
      let res = await fetch(apiURL+`/${loggedUser}`,{
          method: "PUT",
          body:JSON.stringify(data),
          headers:{
              "content-type":"application/json",
              'cache-control': 'no-cache',
              "x-apikey":apiKey
          }
      });
      let data1 = await res.json();
      console.log(data1);
  
  
  
      }
      catch(err){
          console.log(err);
      }



}
catch(err){
    console.log(err);
}
}