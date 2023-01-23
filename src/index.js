let list = document.querySelector("#dog-bar")


function display(data){
   
   console.log(data)
    let mapper = data.map(item =>  
        `<span>${item.name}</span>`
        
    ).join("")
    
    list.innerHTML = mapper
    
       let span = document.getElementsByTagName("span")
       
       for (let child of span){
       console.log(child)
       child.addEventListener("click", function(){
          data.map(dog => )
       })}
   
}

fetch("http://localhost:3000/pups")
.then(response => response.json())
.then(data => display(data))