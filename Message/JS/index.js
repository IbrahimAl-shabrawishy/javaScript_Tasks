const input=document.querySelector(`input`);
const btn=document.querySelector(`button`);
const content=document.querySelector(`#content`);
const savedItems = JSON.parse(localStorage.getItem("items")) || [];
savedItems.forEach(item => {
    content.innerHTML += `<li>${item}</li>`;
});
btn.addEventListener('click',function(){
    const text=input.value.trim();
    
    if(text.length>0){
        content.innerHTML+=`<li>${text}</li>`;
        const savedItems = JSON.parse(localStorage.getItem("items")) || [];
        savedItems.push(text);
        localStorage.setItem("items", JSON.stringify(savedItems));
        input.value="";
    }  
})

