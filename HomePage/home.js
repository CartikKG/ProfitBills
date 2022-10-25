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
