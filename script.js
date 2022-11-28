document.getElementById('hangokForm').onsubmit = (event) => {
    event.preventDefault();
    if(document.getElementById('vezelo').innerHTML === 'Lejátszás') {
        document.getElementById('hang').muted = false;
        document.getElementById('hang').src =
            `hangok/${document.getElementById('hangokListaja').value}.mp3`;
        document.getElementById('hang').autoplay = true;
        document.getElementById('vezelo').innerHTML = 'Némitás';
        return;
    }
    document.getElementById('hang').muted = true;
    document.getElementById('hang').autoplay = true;
    document.getElementById('vezelo').innerHTML = 'Lejátszás';
}

/*
function lejatszas() {
    document.getElementById('hang').src =
        `hangok/${document.getElementById('hangokListaja').value}.mp3`;
    document.getElementById('hang').autoplay = true;
    console.log(document.getElementById('hang'));
}*/
