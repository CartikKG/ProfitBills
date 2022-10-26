let count = 0;
document.getElementById("maindiv").addEventListener("click", (e) => {
  if (e.target.id == "addrow") {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td style="text-align: center; border: 0.5px solid black">${++count}</td>
  <td><input type="text" /></td>
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
    // localStorage
    console.log("OK");
  } else if (e.target.id == "deleterow") {
    // localStorage
    console.log("OKRE");
    console.log(e.target.parentNode.remove());
  }
});
