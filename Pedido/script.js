function Sim(){
    alert("Eu te amo XXXXX, eu te amo muito e quero ficar com você até o fim da eternidade...");//Coloque aqui a mensagem que você 
    location.href = "https://youtu.be/V141wUSkTfk"; //Aqui você deve linkar algúm audio, ou video que queira
}
function Desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraposição(10,90);
    btn.style.left =  geraposição(10,90);
    console.log("Desvio");
}

function geraposição(min, max) {
     return (Math.random() * (max - min) + min) + '%';
}