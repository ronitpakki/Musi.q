let main=document.querySelector("main");
let submit=document.getElementById("button");
window.addEventListener("load",()=>{
    fetch(`https://itunes.apple.com/search?term=top+global&media=music&limit=75`)
          .then((response) => response.json())
          .then((data) => {
            let results = data.results;
            return results.map((result) => {
              console.log(result);
              let article = document.createElement("article");
              let img = document.createElement("img");
              let p = document.createElement("p");
              let p2 = document.createElement("p");
              let audio = document.createElement("audio");
              img.src = result.artworkUrl100;
              p.innerHTML = result.trackName;
              p2.innerHTML = result.artistName;
              audio.src = result.previewUrl;
              audio.setAttribute("controls", "");
              article.append(img);
              if (result.trackName.length >= 43) {
                p.style.fontSize = "0.7em";
              }
              article.append(p);
              article.append(p2);
              article.append(audio);
              p.setAttribute("class", "top");
              main.appendChild(article);
            });
          })
          .catch((error) => console.log(error));
        });
submit.addEventListener("click",()=>{
    let searchText=document.getElementById("search").value;
    if (searchText!=""){
        while(main.firstChild){
            main.removeChild(main.firstChild);
        }
        // fetch(`https://desolate-brook-85230.herokuapp.com/https://itunes.apple.com/search?term=${searchText}&media=music&limit=75`)
        fetch(`https://itunes.apple.com/search?term=${searchText}&media=music&limit=75`)
          .then((response) => response.json())
          .then((data) => {
            let results = data.results;
            return results.map((result) => {
              console.log(result);
              let article = document.createElement("article");
              let img = document.createElement("img");
              let p = document.createElement("p");
              let p2 = document.createElement("p");
              let audio = document.createElement("audio");
              img.src = result.artworkUrl100;
              p.innerHTML = result.trackName;
              p2.innerHTML = result.artistName;
              audio.src = result.previewUrl;
              audio.setAttribute("controls", "");
              article.append(img);
              if (result.trackName.length >= 43) {
                p.style.fontSize = "0.7em";
              }
              article.append(p);
              article.append(p2);
              article.append(audio);
              p.setAttribute("class", "top");
              main.appendChild(article);
            });
          })
          .catch((error) => console.log(error));
        
    } 
    
})