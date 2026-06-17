let api = "https://fakestoreapi.com/products/"


fetch(api)
.then((data)=>{

    console.log(data);
    return data.json()
    

})

.then((js)=>{

    js.forEach((c,i,t)=>{

        console.log(c);
        let api = document.querySelector(".api")

        let card1 = document.createElement("div")

        card1.innerHTML = `<h1>${c.title.slice(0,50)}...</h1> <img src="${c.image}"/> <p>${c.description.slice(0,70)} ...</p>`

        api.append(card1)
        

    })


    
    

})