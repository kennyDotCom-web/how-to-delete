const deletebutton = document.querySelectorAll('.delete-bnt');
deletebutton.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        const listItem = e.target.parentElement;

        listItem.remove();
    })
})