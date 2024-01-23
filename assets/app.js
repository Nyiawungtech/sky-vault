function darkModeSwitcher() {
    document.getElementById('light-theme').style.display = "block";
    document.getElementById('dark-theme').style.display = "none"
}
function lightModeSwitcher() {
    document.getElementById('light-theme').style.display = "none";
    document.getElementById('dark-theme').style.display = "block"
}

document.addEventListener("alpine:init", ()=>{
    Alpine.data("dropdown",()=>({
        open: false,
        toggle(){
            this.open = !this.open;
        }
    }))
})