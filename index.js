(function() {
  'use strict';

  // YOUR CODE HERE

  //page load complete, then add event listeners
  document.addEventListener("DOMContentLoaded", function() {
    pageInit()
  });


  function pageInit(){
    const controlBtns = document.querySelectorAll('.button')
    const lights = document.querySelectorAll('.bulb')


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

    function changeColor(bulbId){
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

      lightDiv.classList.add(classStr)
    }


  }// end init function

})(); //end use strict
