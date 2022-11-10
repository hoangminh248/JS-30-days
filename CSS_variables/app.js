const inputs = document.querySelectorAll(".control input");

console.log(inputs)

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    console.log(suffix);
}

inputs.forEach(input  =>{
    input.addEventListener("change",handleUpdate,false)
    input.addEventListener('mousemove',handleUpdate,false)
})