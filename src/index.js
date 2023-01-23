let list = document.querySelector("#dog-bar")


function display(data){
   
   
    let mapper = data.map(item =>  
        `<span>${item.name}</span>`
        
    ).join("")
    
    list.innerHTML = mapper
    
        //eventlistener on the span which is a HTML collection
       let span = document.getElementsByTagName("span")
       
       for (let child of span){
      
       child.addEventListener("click", function(e){
        for (let newItem of data){
            console.log(newItem.name)
            if(newItem.name === e.target.innerText){
           details(newItem)
       }
    
        }
        
      

       })}
   
}

function details(newItem){
    
    
    let info = document.querySelector("#dog-info")
   
     info.innerHTML= 
    `<img src="${newItem.image}"/>
     <h2>${newItem.name}</h2>
     <button id="good">Good Dog</button>`
     
}

fetch("http://localhost:3000/pups")
.then(response => response.json())
.then(data => display(data))