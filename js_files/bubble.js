async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    //write your code here
    console.log(ele[0].style.height);
    for(var i = 0; i < ele.length; i++){
    
        // Last i elements are already in place 
        for(var j = 0; j < ( ele.length - i -1 ); j++){
           
          // Checking if the item at present iteration
          // is greater than the next iteration
          ele[j].style.background="red";
          ele[j+1].style.background="red";
        //   await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
          if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
             
         swap(ele[j],ele[j+1]);
          }
          ele[j].style.background="green";
          ele[j+1].style.background="green";
        }
    }
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
function swap(el1,el2)
    {

      const style1 = window.getComputedStyle(el1);
      const style2 = window.getComputedStyle(el2);


      const transform1 = style1.getPropertyValue("height");
      const transform2 = style2.getPropertyValue("height");

      el1.style.height = transform2;
      el2.style.height = transform1;

    }