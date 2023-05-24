const timeline = document.querySelectorAll('.timeline li .data')

for(const time of timeline){
    time.onclick = () => time.classList.toggle('show')
}