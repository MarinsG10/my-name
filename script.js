
function generatorcolor(){
    const hexadecimal = '0123456789ABCDEF';
    let color="#"
    for(let i=0;i<6;i++){
    color+=hexadecimal[Math.floor(Math.random()*hexadecimal.length)]
    }
    return color;
}
setInterval(()=>{
    const h1=document.getElementsByTagName("h1")[0]
    h1.style.background=generatorcolor()
    h1.style.color=generatorcolor()
    document.body.style.background = generatorcolor()
},1000)