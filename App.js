const submitBtn = document.querySelector(".submit")
const inputText = document.querySelector(".data")
const image = document.getElementById("img")


submitBtn.addEventListener('click', ()=>{
    const inputValue = inputText.value;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    image.classList.add("show")
    fetch(url)
    .then((res) => {
        image.src = res.url;
    })
})