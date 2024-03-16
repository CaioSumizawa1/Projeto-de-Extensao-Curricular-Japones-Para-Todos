function adicionarNovaVogal(embaralhado, acertos) {
    var vogaisDisponiveis = Object.keys(acertos).filter(function(vogal) {
        return acertos[vogal] < 3;
    });
    if (vogaisDisponiveis.length > 0) {
        var novaVogal = vogaisDisponiveis[Math.floor(Math.random() * vogaisDisponiveis.length)];
        embaralhado.push(novaVogal);
        embaralhado.sort(() => Math.random() - 0.5); // Embaralha o array
    } else {
        console.log("Todas as vogais foram acertadas três vezes!");
    }
}

var vogaisPortugues = ['a', 'i', 'u', 'e', 'o',
'ka', 'ki', 'ku', 'ke', 'ko',
'sa', 'shi', 'su', 'se', 'so',
'ta', 'chi', 'tsu', 'te', 'to',
'na', 'ni', 'nu', 'ne', 'no',
'ha', 'hi', 'fu', 'he', 'ho',
'ma', 'mi', 'mu', 'me', 'mo',
'ya', 'yu', 'yo',
'ra', 'ri', 'ru', 're', 'ro',
'wa', 'wo', 'n',
'ga', 'gi', 'gu', 'ge', 'go',
'za', 'ji', 'zu', 'ze', 'zo',
'da', 'ji', 'zu', 'de', 'do',
'ba', 'bi', 'bu', 'be', 'bo',
'pa', 'pi', 'pu', 'pe', 'po',
'kya', 'kyu', 'kyo',
'sha', 'shu', 'sho',
'cha', 'chu', 'cho',
'nya', 'nyu', 'nyo',
'hya', 'hyu', 'hyo',
'mya', 'myu', 'myo',
'rya', 'ryu', 'ryo',
'gya', 'gyu', 'gyo',
'ja', 'ju', 'jo',
'ja', 'ju', 'jo',
'bya', 'byu', 'byo',
'pya', 'pyu', 'pyo'];

var vogaisJaponesas = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や','ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ','を', 'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
    'だ', 'ぢ', 'づ', 'で', 'ど',
    'ば', 'び', 'ぶ', 'べ', 'ぼ',
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    'きゃ', 'きゅ', 'きょ',
    'しゃ', 'しゅ', 'しょ',
    'ちゃ', 'ちゅ', 'ちょ',
    'にゃ', 'にゅ', 'にょ',
    'ひゃ', 'ひゅ', 'ひょ',
    'みゃ', 'みゅ', 'みょ',
    'りゃ', 'りゅ', 'りょ',
    'ぎゃ', 'ぎゅ', 'ぎょ',
    'じゃ', 'じゅ', 'じょ',
    'ぢゃ', 'ぢゅ', 'ぢょ',
    'びゃ', 'びゅ', 'びょ',
    'ぴゃ', 'ぴゅ', 'ぴょ'
];

var embaralhado = vogaisJaponesas.slice(0, 5).sort(() => Math.random() - 0.5); // Seleciona 5 vogais japonesas e embaralha
var acertos = {};
vogaisJaponesas.forEach(function(vogal) {
    acertos[vogal] = 0;
});

while (true) {
    embaralhado.forEach(function(vogalJaponesa) {
        console.log(vogalJaponesa);
        var resposta = prompt("Digite a vogal correspondente em português: ");
        if (resposta !== null) {
            resposta = resposta.trim().toLowerCase();
            if (vogaisPortugues.includes(resposta)) {
                if (resposta === vogaisPortugues[vogaisJaponesas.indexOf(vogalJaponesa)]) {
                    console.log("Certo!");
                    if (acertos[vogalJaponesa] !== undefined) {
                        acertos[vogalJaponesa]++;
                        if (acertos[vogalJaponesa] === 3) {
                            delete acertos[vogalJaponesa];
                            embaralhado.splice(embaralhado.indexOf(vogalJaponesa), 1);
                            adicionarNovaVogal(embaralhado, acertos);
                        }
                    }
                } else {
                    console.log("Errado! Tente novamente.");
                }
            } else {
                console.log("Entrada inválida! Por favor, insira uma vogal em português.");
            }
        }
    });

    if (Object.keys(acertos).length === 0) {
        console.log("Parabéns! Você acertou todas as vogais japonesas três vezes!");
        break;
    }
}

