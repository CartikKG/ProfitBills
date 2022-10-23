const saveCompanyDetails = () => {
  //   event.preventDefault();
  function Company(a, b, c, d) {
    (this.companyName = a),
      (this.companyAddress = b),
      (this.companyGSTIN = c),
      (this.companyPAN = d);
  }
  let companyName = document.getElementById("CompanyName").value;
  let companyAddress = document.getElementById("CompanyAddress").value;
  let companyGSTIN = document.getElementById("CompanyGSTIN").value;
  let companyPAN = document.getElementById("CompanyPAN").value;
  let newCompany = new Company(
    companyName,
    companyAddress,
    companyGSTIN,
    companyPAN
  );
  console.log(newCompany);
  //   document.querySelector("input").value = "";
};
document
  .querySelector("#CompanyD")
  .addEventListener("submit", saveCompanyDetails);
