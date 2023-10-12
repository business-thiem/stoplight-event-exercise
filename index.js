(function() {
  'use strict';

  // YOUR CODE HERE

  //page load complete, then add event listeners
  document.addEventListener("DOMContentLoaded", function() {
    pageInit()
  });

  function pageInit(){

  // let stopBtn = document.querySelector('#stopButton')
  // let stopLt = document.querySelector('#stopLight')
  
  // let slowBtn = document.querySelector('#slowButton')
  // let slowLt = document.querySelector('#slowLight')

  // let goBtn = document.querySelector('#goButton')
  // let goLt = document.querySelector('#goLight')


    const controlBtns = document.querySelectorAll('.button')
    const lights = document.querySelectorAll('.bulb')


    controlBtns.forEach(button => {
      button.addEventListener('click', (e) => {
        handleButtonClick(e)
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
  }



})();
