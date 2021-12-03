// TABS

const tabs = ({itemHeaderClass, itemContentClass, parentSelectorClass, activeClass}) => {
// const tabs = (itemHeaderClass, itemContentClass, parentSelectorClass, activeClass) => { альтернативный вариант без деструктуризации
    const tabsHeader = document.querySelectorAll(itemHeaderClass);
    const tabsContent = document.querySelectorAll(itemContentClass);
    const tabsHeaderParent = document.querySelector(parentSelectorClass);
  
    const hideTabContent = () => {
      tabsContent.forEach((item) => {
        item.classList.add("hidden");
        item.classList.remove("show", "fade");
      });
      tabsHeader.forEach((item) => {
        item.classList.remove(activeClass);
      });
    };
  
    const showTabContent = (i = 0) => {       // i в данном случае это первый элемент массива
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hidden");
      tabsHeader[i].classList.add(activeClass);
    };
  
    hideTabContent();
    showTabContent();
  
    tabsHeaderParent.addEventListener("click", (evt) => {
      const target = evt.target;
      if (target && target.classList.contains("tabheader__item")) {
          tabsHeader.forEach((item, i) => {      // i это номер элемента, который совпал
          if (target === item) {
              hideTabContent();
              showTabContent(i);       
          }
        });
      }
     });
}

// module.exports = tabs;

export default tabs;