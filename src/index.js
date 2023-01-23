let list = document.querySelector("#dog-bar")


function display(data){
   
   console.log(data)
    let mapper = data.map(item =>  
        `<span>${item.name}</span>`
        
    ).join("")
    
    list.innerHTML = mapper
    

   
}

fetch("http://localhost:3000/pups")
.then(response => response.json())
.then(data => display(data))