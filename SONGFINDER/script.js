fetch('https://api.nasa.gov/planetary/apod?api_key=NLlNAfA0f8uf4q8BCnPMcQ47q9qKL9SDrR7Fg2QL&date=2001-08-17')
.then(response=>response.json())
.then(data=>{
    let div=document.getElementById("img");
    let img=document.createElement("img");
    img.src=data.url;
    div.appendChild(img);
})
.catch(error=>console.log(error));