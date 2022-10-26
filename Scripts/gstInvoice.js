// mainallitems
window.onload = function () {
  document.getElementById("download").addEventListener("click", () => {
    const invoice = this.document.getElementById("invoice");
    console.log(invoice);
    console.log(window);
    var opt = {
      margin: 0.2,
      filename: "Invoice.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(invoice).set(opt).save();
  });
};

document.getElementById("").innerHTML = `<li>
<h5 class="my-2">Tibco Turang</h5>
</li>
<li>
<span class="font-weight-semibold"
  >Samantha Mutual funds Ltd</span
>
</li>
<li>Gurung Street</li>
<li>23 BB Lane</li>
<li>Hong kong</li>
<li>234 456 5678</li>
<li><a href="#" data-abc="true">tibco@samantha.com</a></li>`;

let tr = document.createElement("tr");
tr.innerHTML = `<td>
<h6 class="mb-0">Arts and design template</h6>
<span class="text-muted"
  >in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur.Duis aute irure dolor in
  reprehenderit</span
>
</td>
<td>$120</td>
<td>180</td>
<td><span class="font-weight-semibold">$300</span></td>`;

document.getElementById("").innerHTML = `<tr>
<th class="text-left">Subtotal:</th>
<td class="text-right">$1,090</td>
</tr>
<tr>
<th class="text-left">
  Tax: <span class="font-weight-normal">(25%)</span>
</th>
<td class="text-right">$27</td>
</tr>
<tr>
<th class="text-left">Total:</th>
<td class="text-right text-primary">
  <h5 class="font-weight-semibold">$1,160</h5>
</td>
</tr>`;
