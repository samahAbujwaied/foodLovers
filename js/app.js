'use strict'
let submition = document.getElementById('myform');
let styl =document.getElementById('table');
let table = document.getElementById('body');
let storedata = [];
let imgname = ['shawarma.jpg','burger.jpg','pizza.jpg'];
function Food(username , foodtype , img , randomunm){
    this.username =username ;
    this.foodtype = foodtype;
    this.img ='img/'+img;
    this.randomunm =randomfun(1,100);

    storedata.push(this);
}
function render(){
    table.textContent='';
    for (let index = 0; index <storedata.length; index++) {
      
        let trbody = document.createElement('tr');
       table.appendChild(trbody);
       
       let tdbody = document.createElement('td');
       trbody.appendChild(tdbody);
       let imag = document.createElement('img');
       tdbody.appendChild(imag);
       imag.setAttribute('src',storedata[index].img);
       
    //    console.log(storedata[index].img);
       tdbody = document.createElement('td');
       trbody.appendChild(tdbody);
       let para =document.createElement('p');
       tdbody.appendChild(para);
       para.textContent="Customer name " + storedata[index].username 
       para =document.createElement('p');
       tdbody.appendChild(para);
       para.textContent="Food Type " + storedata[index].foodtype;
       para =document.createElement('p');
       tdbody.appendChild(para);
       para.textContent="Price " + storedata[index].randomunm;
       
       
       
        
    }
    
    

}
submition.addEventListener('submit' , handleclick);

function  handleclick(event){
    event.preventDefault();

    let userName=document.getElementById('customername').value;
    let foodType=document.getElementById('foodtype').value;
    let foodimg ;
    console.log(foodType);
    if (foodType == 'shawarma')
    foodimg = imgname[0];
     if(foodType == 'burger' )
    foodimg =imgname[1];
   if(foodType === 'pizza' )
    foodimg =imgname[2];
   

    new Food(userName ,foodType,foodimg );
    console.log(storedata);
    render();
    setting();
    document.getElementById('customername').value ='';
    document.getElementById('foodtype').value ='';

}
document.getElementById('customername').value ='';
// document.getElementById('foodtype').value ='';

function randomfun(min,max){
    return parseInt( Math.random() * (max - min) + min);
}
function setting(){
    let alldata = JSON.stringify(storedata);
    localStorage.setItem('mydata',alldata);
}
function getting(){

    let getdata = localStorage.getItem('mydata');
    let obj = JSON.parse(getdata);
    
    // console.log(obj.randomunm);
    if(obj){
        obj.randomunm =randomfun();
        storedata =obj;
    }
    render();
}
getting();
