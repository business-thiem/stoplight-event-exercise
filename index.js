(function() {
  'use strict';

  // YOUR CODE HERE

  // let stopBtn = document.querySelector('#stopButton')
  // let stopLt = document.querySelector('#stopLight')
  
  // let slowBtn = document.querySelector('#slowButton')
  // let slowLt = document.querySelector('#slowLight')

  // let goBtn = document.querySelector('#goButton')
  // let goLt = document.querySelector('#goLight')




  const controlBtns = document.querySelectorAll('#controls')[0]

  console.log(controlBtns)
  

  controlBtns.forEach(button => {
    button.addEventListener('click', handleButtonClick(e))
  });



  function handleButtonClick(e){
    btnid = e.target.id
  }

})();
