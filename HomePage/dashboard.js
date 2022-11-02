let show = true;
let sidebarFun = () => {
  if (show) {
    document.getElementById("home-sideBar").style.width = "80px";
    let nodeList = document.querySelectorAll("#home-sideBar a");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "none";
    }
    let nodeList2 = document.querySelectorAll("#home-sideBar h2");
    for (let i = 0; i < nodeList2.length; i++) {
      nodeList2[i].style.display = "none";
    }
    document.getElementById("sidebar-settings").style.display = "none";
    show = false;
  } else {
    document.getElementById("home-sideBar").style.width = "300px";
    let nodeList = document.querySelectorAll("#home-sideBar a");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.display = "contents";
    }
    let nodeList2 = document.querySelectorAll("#home-sideBar h2");
    for (let i = 0; i < nodeList2.length; i++) {
      nodeList2[i].style.display = "contents";
    }
    document.getElementById("sidebar-settings").style.display = "contents";
    show = true;
  }
};

let firstShow = true;
let firstContentsFun = () => {
  if (firstShow) {
    document.getElementById("home-topSideBarContents").style.display = "none";
    document.getElementById("home-topSideBar").style.paddingBottom = "0px";
    firstShow = false;
  } else {
    document.getElementById("home-topSideBarContents").style.display =
      "contents";
    document.getElementById("home-topSideBar").style.paddingBottom = "40px";
    firstShow = true;
  }
};

let voucherShow = true;
let voucherContentsFun = () => {
  if (voucherShow) {
    document.getElementById("home-middleSideBarContents").style.display =
      "none";
    document.getElementById("home-middleSideBar").style.paddingBottom = "0px";
    voucherShow = false;
  } else {
    document.getElementById("home-middleSideBarContents").style.display =
      "contents";
    document.getElementById("home-middleSideBar").style.paddingBottom = "40px";
    voucherShow = true;
  }
};

document.getElementById("navbar-menuBar").addEventListener("click", sidebarFun);
document
  .getElementById("sidebar-firstBox")
  .addEventListener("click", firstContentsFun);
document
  .getElementById("sidebar-voucherBox")
  .addEventListener("click", voucherContentsFun);

// Display Recent Bills
let displayRecentBills = (data) => {
  console.log("length:", data.length);
  document.getElementById("home-historyContents").innerHTML = "";
  data.map((invoiceElem) => {
    let totalBill = 0;
    // console.log(data.invoices);
    invoiceElem.productsData.forEach((elem) => {
      totalBill = totalBill + Number(elem.total);
    });

    document.getElementById("home-historyContents").innerHTML += `<div>
    <p>${invoiceElem.invoiceId}</p>
    <p>${invoiceElem.date}</p>
    <p>${invoiceElem.name}</p>
    <p>₹ ${totalBill}</p>
    <p>Cash</p>
  </div>`;
  });
};

// Show Billing Price
const postInvoice = async () => {
  let apiURL = `https://profitbills-b8ea.restdb.io/rest/profitbills`;
  let apiKey = `6360f3cee9a77f5984220583`;
  // let apiKey = `f3b55b3ab3bc98ce0889f1c1e970d7c6eb831`;
  let loggedUser = localStorage.getItem("loggedUser");

  //fetching data of Logged in user
  try {
    let res = await fetch(apiURL + `/${loggedUser}`, {
      method: "GET",
      headers: {
        "cache-control": "no-cache",
        "Content-Type": "application/json",
        "x-apikey": apiKey,
      },
    });
    let data = await res.json();
    displayRecentBills(data.invoices);
    let totalBill = 0;
    // console.log(data.invoices);

    data.invoices.forEach((invoiceElem) => {
      invoiceElem.productsData.forEach((elem) => {
        totalBill = totalBill + Number(elem.total);
      });
    });

    document.getElementById("home-totalBillPrice").innerText = `₹ ${totalBill}`;
    console.log("totalBill:", totalBill);

    delete data["_id"];
  } catch (error) {
    console.log(error);
  }
};

postInvoice();
