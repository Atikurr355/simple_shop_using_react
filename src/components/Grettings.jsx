import React from 'react'

const Grettings = () => {
    let currDate = new Date();
    currDate = currDate.getHours();
    let greeting="";
    const cssStyle={ };

    if(currDate>=0 && currDate <12){
        greeting="Good Morning!";
        cssStyle.color = 'green';
    }
    else if(currDate>=12 && currDate<15){
        greeting = "Good Noon";
        cssStyle.color = 'yellow';
    }
    else if(currDate>=15 && currDate<19){
        greeting = "Good Evening";
        cssStyle.color = 'orange';
    }
    else if(currDate>=19 && currDate<=24){
        greeting = "Good Night";
        cssStyle.color = 'black';
    }
  return (
    <div>
        <h4 className='text-light'>Hello Sir, <span style={cssStyle}>{greeting}!</span></h4>
    </div>
  )
}

export default Grettings