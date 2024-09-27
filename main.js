window.onload = function() {
    // Month Day, Year Hour:Minute:Second, id-of-element-container
    countUpFromTime("Sep 27, 2024 19:00:00", 'countup1'); // ****** Change this line!
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);
      
    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;
      
    days = Math.floor(timeDifference / (secondsInADay) * 1);
    years = Math.floor(days / 365);
    if (years > 1){ days = days - (years * 365) }
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('days')[0].innerHTML = days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }

  function chooseImg() {
    // get total images available
    var totalImages = document.querySelectorAll('.wrapper > div img').length
    log('totalImages', totalImages)
    
    // get a random position
    var rndPosition = 1
    var rndPosition = Math.floor(Math.random() * totalImages)
    log('rndPosition', rndPosition)
    
    // get hold of the image for such position
    var rndImage = document.querySelector('.wrapper > div img[data-pos="' + rndPosition + '"]')
    log('rndImage', rndImage)
  
    // assign the source to the DIV
    document.querySelector('.rndmImage').style = 'background-image: url("' + rndImage.src + '")'
  }
  
  function log(txt, obj) {
    console.log(txt, obj)
  }