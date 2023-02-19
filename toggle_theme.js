body=document.body
toggleButton=document.getElementsByClassName('toggle_theme_btn')[0]

toggleButton.addEventListener('click',(e)=>{
    e.preventDefault()
    body.classList.toggle('dark-mode')
    if(body.classList.contains('dark-mode')){
        e.target.textContent='Light Mode';
    }else{
        e.target.textContent='Dark Mode';
    }
})
