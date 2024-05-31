const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
const tabImages = document.querySelectorAll(".js-tabimages section");
const backLine = document.querySelector(".back-line");

if (tabMenu.length && tabContent.length && tabImages.length) {
  tabContent[0].classList.add("ativo");
  tabImages[0].classList.add("ativo");
  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  function activeImages(index) {
    tabImages.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabImages[index].classList.add("ativo");
  }

  function changeBacklineColor(index) {
    const colors = ['#faff00', '#ff7c03', '#0066ff', '#8fff00'];
    backLine.style.backgroundColor = colors[index];
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
      activeImages(index);
      changeBacklineColor(index);
    });
  });
}
