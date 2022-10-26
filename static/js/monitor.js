//init.js

// document.addEventListener('DOMContentLoaded', () => {
//     let elems = document.querySelectorAll('.parallax');
//     let instances = M.Parallax.init(elems, {});
  
//     let navElems = document.querySelectorAll('.sidenav');
//     let navInstances = M.Sidenav.init(navElems);
  
//     let elems_tooltip = document.querySelectorAll('.tooltipped');
//     let tooltipInstances = M.Tooltip.init(elems_tooltip);
  
//     let elems_datepicker = document.querySelectorAll('.datepicker');
//     let instancesDatepicker = M.Datepicker.init(elems_datepicker, {
//       format: 'dd.mm.yyyy',
//       defaultDate: new Date(),
//       setDefaultDate: true,
//       firstDay: 1
//     });
  
//     let tabsElems = document.querySelectorAll('.tabs');
//     let tabsinstance = M.Tabs.init(tabsElems, {});
//   });



//
// Table 1
//
const u1_text = document.getElementById('u1');
const i1_text = document.getElementById('i1');
const w1_text = document.getElementById('w1');
const u2_text = document.getElementById('u2');
const i2_text = document.getElementById('i2');
const w2_text = document.getElementById('w2');
const u3_text = document.getElementById('u3');
const i3_text = document.getElementById('i3');
const w3_text = document.getElementById('w3');
const w_amount_text = document.getElementById('w_amount');
//
let u1 = 241;
let i1 = 65.4;
let w1 = 15.761;
let u2 = 241;
let i2 = 65.4;
let w2 = 15.761;
let u3 = 241;
let i3 = 65.4;
let w3 = 15.761;
let w_amount = w1 + w2 + w3;
//
//
// Table 2
//
const u1_text_in = document.getElementById('u1_in');
const i1_text_in = document.getElementById('i1_in');
const w1_text_in = document.getElementById('w1_in');
const u2_text_in = document.getElementById('u2_in');
const i2_text_in = document.getElementById('i2_in');
const w2_text_in = document.getElementById('w2_in');
const u3_text_in = document.getElementById('u3_in');
const i3_text_in = document.getElementById('i3_in');
const w3_text_in = document.getElementById('w3_in');
const w_amount_text_in = document.getElementById('w_amount_in');
//
let u1_in = 248;
let i1_in = 65.4;
let w1_in = 15.761;
let u2_in = 247;
let i2_in = 65.4;
let w2_in = 15.761;
let u3_in = 246;
let i3_in = 65.4;
let w3_in = 15.761;
let w_amount_in = w1_in + w2_in + w3_in;
//
const subPower_text = document.getElementById('subPower');
let subPower = 0;

const displayData = () => {
    //table1
    u1_text.innerText = u1 + ' B';
    i1_text.innerText = i1.toFixed(1) + ' A';
    w1 = (u1*i1);
    w1_text.innerText = w1.toFixed(2) + ' Вт';
    //
    u2_text.innerText = u2 + ' B';
    i2_text.innerText = i2.toFixed(1) + ' A';
    w2 = (u2*i2);
    w2_text.innerText = w2.toFixed(2) + ' Вт';
    //
    u3_text.innerText = u3 + ' B';
    i3_text.innerText = i3.toFixed(1) + ' A';
    w3 = (u3*i3);
    w3_text.innerText = w3.toFixed(2) + ' Вт';
    //
    w_amount = (w1 + w2 + w3);
    w_amount_text.innerText =  w_amount.toFixed(2) + ' Вт';

    //table2
    u1_text_in.innerText = u1_in + ' B';
    i1_text_in.innerText = i1_in.toFixed(1) + ' A';
    w1_in = (u1_in*i1_in);
    w1_text_in.innerText = w1_in.toFixed(2) + ' Вт';
    //
    u2_text_in.innerText = u2_in + ' B';
    i2_text_in.innerText = i2_in.toFixed(1) + ' A';
    w2_in = (u2_in*i2_in);
    w2_text_in.innerText = w2_in.toFixed(2) + ' Вт';
    //
    u3_text_in.innerText = u3_in + ' B';
    i3_text_in.innerText = i3_in.toFixed(1) + ' A';
    w3_in = (u3_in*i3_in);
    w3_text_in.innerText = w3_in.toFixed(2) + ' Вт';
    //
    w_amount_in = (w1_in + w2_in + w3_in);
    w_amount_text_in.innerText =  w_amount_in.toFixed(2) + ' Вт';

    //
    subPower = w_amount_in - w_amount;

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! change
    subPower = Math.abs(subPower);
    subPower_text.innerText = subPower.toFixed(2) + ' Вт';
};


//CheckBox online
let timerId = null;
const onlineCheckbox = document.querySelector('#online');
onlineCheckbox.addEventListener('change', () =>{
    if(onlineCheckbox.checked){
        let flagSing = true;
        timerId = setInterval( () => {
            if(flagSing){
                u1 += Math.floor(Math.random() * 2);
                i1 += Math.floor(Math.random() * 2);
                u2 += Math.floor(Math.random() * 2);
                i2 += Math.floor(Math.random() * 2);
                u3 += Math.floor(Math.random() * 2);
                i3 += Math.floor(Math.random() * 2);
                //
                u1_in += Math.floor(Math.random() * 2);
                i1_in += Math.floor(Math.random() * 2);
                u2_in += Math.floor(Math.random() * 2);
                i2_in += Math.floor(Math.random() * 2);
                u3_in += Math.floor(Math.random() * 2);
                i3_in += Math.floor(Math.random() * 2);
                flagSing = false;
            }else{
                u1 -= Math.floor(Math.random() * 2);
                i1 -= Math.floor(Math.random() * 2);
                u2 -= Math.floor(Math.random() * 2);
                i2 -= Math.floor(Math.random() * 2);
                u3 -= Math.floor(Math.random() * 2);
                i3 -= Math.floor(Math.random() * 2);
                //
                u1_in -= Math.floor(Math.random() * 2);
                i1_in -= Math.floor(Math.random() * 2);
                u2_in -= Math.floor(Math.random() * 2);
                i2_in -= Math.floor(Math.random() * 2);
                u3_in -= Math.floor(Math.random() * 2);
                i3_in -= Math.floor(Math.random() * 2);
                flagSing = true;
            }
            displayData();
        }, 500);
    }else{
        clearInterval(timerId);
    }
});

//switch on
let event_ch = new Event('change');
online.dispatchEvent(event_ch);


//Button расчитать
const calcText = document.getElementById('calculated');
const rateInputText = document.getElementById('rateInput');
const rate = document.getElementById('rate');
//
const timeInterval = document.getElementById('timeInterval');
const energyText = document.getElementById('energy');
const effectText = document.getElementById('effect');
const amountCo2Text = document.getElementById('amountCo2');
//
let rateInput = '';
//
let firstDay = null;
let secondDay = null;
let subDate = 0;
let hours = 0;
//
let energy = 0;
let effect = 0;


calcText.addEventListener('click', () => {
    rateInput = rateInputText.value;
    if(!rateInput){
        rateInput = rateInputText.placeholder;
    }
    rate.textContent = rateInput + ' лей';
    //
    firstDay = instancesDatepicker[0].date;
    secondDay = instancesDatepicker[1].date;
    subDate = secondDay.getTime() - firstDay.getTime() + 86400000;
    hours = subDate/3600000;
    timeInterval.textContent = hours + ' ч';
    //
    //energy, subPower
    energy = subPower/1000 * hours;     //kW
    energy = energy.toFixed(2);
    energyText.innerText = energy + ' кВтч';
    //
    //effect
    effect = energy * parseFloat(rateInput);
    effectText.innerText = effect.toFixed(2) + ' лей';
    //
    //CO2
    amountCo2Text.innerText = (energy * 0.502 / 1000).toFixed(2) + ' т';


});