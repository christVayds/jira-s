const cursor = document.querySelector('.cursor');
const atag = document.querySelectorAll('a');

document.addEventListener("mousemove", (e)=>{
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

atag.forEach(tag => {
    tag.addEventListener("mouseenter", (e)=>{
        cursor.style.backgroundColor = '#d3d3d3';
        cursor.style.cursor = 'none';
    });
})

atag.forEach(tag => {
    tag.addEventListener("mouseleave", (e)=>{
        cursor.style.backgroundColor = '#20202017';
    });
})

document.addEventListener("mousedown", (e)=>{
    cursor.style.backgroundColor = '#d3d3d3';
});

document.addEventListener("mouseup", (e)=>{
    cursor.style.backgroundColor = '#20202017';
});