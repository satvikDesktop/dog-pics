let generate_btn=document.querySelector(".generate_btn");
generate_btn.addEventListener("click",fetchPics);

function fetchPics(){
    let dogsImgDiv = document.querySelector(".dogsImgDiv")
    dogsImgDiv.innerHTML='';
    fetch("https://api.thedogapi.com/v1/images/search") .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        let dogsImgUrl=data[0].url;
        let dogImgEl = document.createElement("img")
        dogImgEl.setAttribute('src',`${dogsImgUrl}`)
        dogImgEl.classList.add("showcase")
        let dogsImgDiv = document.querySelector(".dogsImgDiv")
        dogsImgDiv.appendChild(dogImgEl);
    })
    .catch (err=>console.log(err))
}