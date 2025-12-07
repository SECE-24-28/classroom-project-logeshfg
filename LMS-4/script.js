const colors=["red","blue","orangered","aqua","purple","yellow"];
function b(){
    const i= Math.floor(Math.random()*colors.length);
    const box=document.getElementById('b');
    box.style.backgroundColor=colors[i];
}