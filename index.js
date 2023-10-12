(function() {
  'use strict';

  // YOUR CODE HERE

  //page load complete, then add event listeners
  document.addEventListener("DOMContentLoaded", function() {
    pageInit()
  });


  //initializes the event listeners
  function pageInit(){
    const controlBtns = document.querySelectorAll('.button')
    const lights = document.querySelectorAll('.bulb')


    //event listeners
    controlBtns.forEach(button => {
      button.addEventListener('click', (e) => {
        handleButtonClick(e)
      })
    });

    controlBtns.forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        console.log(`Entered ${e.target.id} button`)
      })
    });

    controlBtns.forEach(button => {
      button.addEventListener('mouseleave', (e) => {
        console.log(`Left ${e.target.id} button`)
      })
    });
  
  
    //calls changeColor based on button id clicked
    function handleButtonClick(e){
      let btnid = e.target.id
  
      switch(btnid){
        case 'stopButton': 
          changeColor('stopLight')
          break;
  
        case 'slowButton':
          changeColor('slowLight')
          break;
  
        case 'goButton':
          changeColor('goLight')
          break;
      }
    }

    //toggles color class based on button clicked, returns nothing
    function changeColor(bulbId){
      const lightClassNameArr = ['stop', 'slow', 'go'] 
      const lightDiv = document.querySelector(`#${bulbId}`)
      let classStr = ''

      switch(lightDiv.id){
        case 'stopLight':
          classStr = 'stop'
          break;

        case 'slowLight':
          classStr = 'slow'
          break;

        case 'goLight':
          classStr = 'go'
          break;
      }

      lightDiv.classList.toggle(classStr)

      //if at least one classNameArr exists inside the element 
      if(lightClassNameArr.some(className => lightDiv.classList.contains(className))){
        console.log(`${lightDiv.id} bulb on`)
      } else{
        console.log(`${lightDiv.id} bulb off`)
      }
    }


  }// end init function

})(); //end use strict
