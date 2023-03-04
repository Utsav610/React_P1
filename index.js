import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let curDate=new Date(2020,5,5,1); // change date here. 
curDate=curDate.getHours();
let greeting='';

const cssStyle={};

if(curDate>=1 && curDate<12){
  greeting='Good Morning';
  cssStyle.color="green";
}
else if(curDate>=12 && curDate<16){
  greeting='Good Afternoon';
  cssStyle.color="Yellow";
}
else if(curDate>=16 && curDate<19){
  greeting='Good Evening';
  cssStyle.color="blue";
}
else{
  greeting='Good Night';
  cssStyle.color="black";
}

root.render(
  <>
    <div className='bg'>
    <h2 className="Heading">Hello Sir, <span style={cssStyle}>{greeting}</span></h2>
    </div>
  </>
);

reportWebVitals();
