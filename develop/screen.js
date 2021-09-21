
let img = document.createElement('img');
img.src = import.meta.url + '/../screen.jpg';
img.tabIndex = '0';
img.style.cssText = "position:absolute; top:0; left:0; right:0; margin:auto; visibility:hidden; margin-top:0; outline:10px solid red"

img.addEventListener('mousedown',e=>{
    e.preventDefault();
    img.focus();
    img.addEventListener('mousemove', onmove);
})
img.addEventListener('mouseup',e=>{
    e.preventDefault();
    img.removeEventListener('mousemove', onmove);
})
let onmove = e=>{
    e.preventDefault();
    img.style.marginTop = parseInt(img.style.marginTop) + e.movementY +'px';
}

img.addEventListener('keydown', e=>{
    let steps = {
        'ArrowUp': +1,
        'ArrowDown': -1,
    };
    let step = steps[e.key];
    if (step !== undefined) {
        e.preventDefault();
        img.style.marginTop = parseInt(img.style.marginTop) + step + 'px';
    }
})

document.body.append(img)


let toggler = document.createElement('button')
toggler.innerHTML = 'toggle design screen (key:F1)'
toggler.style.cssText = 'position:fixed; bottom:1rem; right:1rem; font-size:12px';
function toggle(){
    img.style.visibility = img.style.visibility ? '' : 'hidden';
}
toggler.onclick = toggle
addEventListener('keydown',e=>{
    if (e.code === 'F1') {
        toggle();
        e.preventDefault();
    }
})
document.body.append(toggler);
