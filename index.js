function myfunct(value,item){
     console.log("dddd",value,item.id)
     let t= $(`#${item.id}`)
     let star=t[0].children
     for( let i=0;i<star.length;i++){
       if(i<value)
       {
        
         star[i].style.backgroundColor="yellow"
       }
       else{
         star[i].style.backgroundColor="transparent"
       }
     }
     let message=document.querySelector('.message')
     message.innerText=`Thanks you rate it ${value} stars`
     message.style.display="block";
     setTimeout(()=>{
message.style.display="none"
     },1000)

        }




function getdata(){
    fetch('https://backterminal.herokuapp.com/getproduct', {
        method: 'GET'
      }).then(response=>response.json()).then(response=>{
          let data=document.querySelector('.product')
         
        response.map(item=>{

            $('.product').append(` <div class="card m-2 " style="width: 18rem;">
            <img src="https://backterminal.herokuapp.com/${item.prImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.prName}</h5>
              <h5 class="card-title">${item.prCategory}</h5>
              <h5 class="card-title">${item.prPrice}
              </h5>
              <p class="card-text">${item.prDetails}</p>
              <a href="#" class="btn btn-primary">Rating</a>
         

         </div >
           <p class="star m-3" id=${item._id}>
           <span class="glyphicon glyphicon-star-empty ml-2" id="${item._id}" onclick="myfunct(1,this)"></span>
            <span class="glyphicon glyphicon-star-empty  ml-2 " id="${item._id}" onclick="myfunct(2,this)"> </span>
            <span class="glyphicon glyphicon-star-empty ml-2 " id="${item._id}" onclick="myfunct(3,this)"></span>
            <span class="glyphicon glyphicon-star-empty ml-2" id="${item._id}" onclick="myfunct(4,this)"></span>
            <span class="glyphicon glyphicon-star-empty ml-2" id="${item._id}" onclick="myfunct(5,this)"> </span></p> 
        </div>
            
           
            `)
            
              
          }
        )  
        
        console.log("valu",response);})
}

getdata()
