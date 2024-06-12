// script.js
document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.checkbox-container input[type="radio"]');
  const pages = document.querySelectorAll('.page');
  const container = document.querySelector('.container');
  let currentPageIndex = 0;
  let isScrolling = false;//check scrolling
  let lastCheckedRadio = null;

  // Sayfa yüklendiğinde ilk radyo butonunu işaretle
  if (checkboxes.length > 0) {
    checkboxes[0].checked = true;
    document.querySelector('.page').classList.add('active');
    lastCheckedRadio = checkboxes[0];
  }
  container.addEventListener("wheel" , (e)=>{
    if(isScrolling) return; //eğer halen kaydırılıyorsa geçiş yapma
    isScrolling = true;
    
    if(e.deltaY>10&&currentPageIndex<pages.length-1){//Aşağı kaydırma
      switchPage(currentPageIndex+1);
    }
    else if(e.deltaY<0&&currentPageIndex>0){//Yukarı kaydırma
      switchPage(currentPageIndex-1);
    }
    setTimeout(()=>{
      isScrolling = false;
    } , 800);//animasyon süresi boyunca geçişi engelle
  })

  function switchPage(newPageIndex){
    pages[currentPageIndex].classList.remove('active');
    pages[currentPageIndex].classList.add('inactive');
    pages[newPageIndex].classList.remove('inactive');
    pages[newPageIndex].classList.add('active');
    checkboxes[newPageIndex].checked = true;
    checkboxes[currentPageIndex].checked = false;
    currentPageIndex = newPageIndex;
  }
});
