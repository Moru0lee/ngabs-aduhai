document.getElementById('auraform').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const aura = generateAura(nama);
    document.getElementById('hasil').innerHTML = `<p>${nama} beraura ${aura}</p>`;
    document.getElementById('nama').value = "";
})

function generateAura(nama){
    const auras = [
        'Sigma', 
        'Main Character😱😱😱', 
        'Bocil Roblox', 
        'Skibidi Toilet🤡', 
        'Enigma',  
        'Non Sigma👎👎', 
        'Rizzler😎',
        'Hitam🤗',
        '-100000 Aura',
        '+100000 Aura',
        'Beta',
        'Submissive',
        'Dominat',
        'Mafia😱',
        'Bocil Epep😜',
        'Alpha😰',
        'gda gdi gda gda o😜',
        'Cabul😋',
        

    ];
    const index = nama.length % auras.length;
    return auras[index];
}