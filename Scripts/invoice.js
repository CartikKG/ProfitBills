let count = 0;
document.getElementById("maindiv").addEventListener("click", (e) => {
  if (e.target.id == "addrow") {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td style="text-align: center; border: 0.5px solid black">${++count}</td>
  <td ><input type="text" /></td>
  <td><input type="text" /></td>
  <td><input type="text" /></td>
  <td>
    <select name="" id="">
      <option value="None"><b>None</b></option>
      <option value="0">GST@0%</option>
      <option value="2.5">GST@2.5%</option>
      <option value="5">GST@5%</option>
      <option value="9">GST@9%</option>
      <option value="12">GST@12%</option>
      <option value="18">GST@18%</option>
      <option value="28">GST@28%</option>
      <option value="Exempted">Exempted</option>
    </select>
  </td>
  <td><input type="text" /></td>
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
    let no = document.querySelector("#invoicecount").innerHTML;
    let temp = new Bill_to(Name, Mob, GSTIN, Address, date, no);

    console.log(temp);

    function BillDetails(a, b, c, d, e, f) {
      this.no = a;
      this.des = b;
      this.qty = c;
      this.rate = d;
      this.gst = e;
      this.total = f;
    }
    for (let i = 1; i < all.length; i++) {
      let sno = all[i].cells[0].innerHTML;
      let des = all[i].cells[1].children[0].value;
      let qty = all[i].cells[2].children[0].value;
      let rate = all[i].cells[3].children[0].value;
      let gst = all[i].cells[4].children[0].value;
      let total = all[i].cells[5].children[0].value;
      let temp = new BillDetails(sno, des, qty, rate, gst, total);
      console.log(temp);
    }
  } else if (e.target.id == "deleterow") {
    count--;
    e.target.parentNode.remove();
  }
});
