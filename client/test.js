const timeline_wrapper = document.querySelector('.timeline-wrapper'),
timelines = document.querySelectorAll('.timeline li .data');

for(const time of timelines){
    time.onclick = () => time.classList.toggle('show')
}

timeline_wrapper.addEventListener('mousemove', (event) =>{
    const timeline = document.querySelector('.timeline');
    let scroll_width = event.pageX / timeline_wrapper.clientWidth 
             * (timeline.clientWidth - timeline_wrapper.clientWidth)
    console.log({
        'timeline_width' : timeline.clientWidth,
        'timeline_wrapper_width' : timeline_wrapper.clientWidth,
        'Mouse X-codinate' : event.pageX
    })
})