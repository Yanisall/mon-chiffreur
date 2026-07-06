
const code= {'a': '285', 'b': '797', 'c': '850', 'd': '877', 'e': '549', 'f': '0', 'g': '687', 'h': '613', 'i': '737', 'j': '692', 'k': '604', 'l': '486', 'm': '592', 'n': '246', 'o': '116', 'p': '90', 'q': '295', 'r': '746', 's': '36', 't': '274', 'u': '911', 'v': '327', 'w': '27', 'x': '559', 'y': '722', 'z': '38', 'A': '776', 'B': '900', 'C': '888', 'D': '495', 'E': '250', 'F': '561', 'G': '176', 'H': '395', 'I': '418', 'J': '304', 'K': '369', 'L': '323', 'M': '766', 'N': '546', 'O': '190', 'P': '533', 'Q': '223', 'R': '464', 'S': '822', 'T': '257', 'U': '329', 'V': '410', 'W': '569', 'X': '611', 'Y': '435', 'Z': '616', ' ': '71', '.': '203', ',': '42', ';': '619', ':': '430', '!': '390', '?': '910', "'": '994', '"': '494', '(': '226', ')': '902', '-': '964', '_': '463', '/': '319', '\\': '531', '@': '697', '#': '331', '&': '247', '%': '844', '+': '598', '=': '69', '*': '725', '<': '873', '>': '708', '[': '135', ']': '45', '{': '709', '}': '104', '\n': '743', 'è': '489', 'é': '734', 'ê': '479', 'û': '524', 'ù': '31', 'ô': '538', '…': '744', 'à': '197', 'â': '965', 'ç': '726', 'ï': '560', 'î': '406'}; 
const decode={}; 
for(let lettre in code){
    decode[code[lettre]]=lettre;
}


function chiffrer(){

    let texte = document.getElementById("message").value;

    let resultat = [];

    for (let lettre of texte){

        if (lettre in code){

            resultat.push(code[lettre]);

        }

        else{

            resultat.push(lettre);

        }

    }

    document.getElementById("resultat").value = resultat.join("|");

}

function dechiffrer(){

    let texte = document.getElementById("message").value;
    let resultat = [];

    let texte_final = texte.split("|");

    for (let caractere of texte_final){

        if (caractere === ""){
            continue;
        }

        if (!(caractere in decode)){
            document.getElementById("resultat").value = `Erreur pour le code : ${caractere}`;
            return;
        }

        resultat.push(decode[caractere]);
    }

    document.getElementById("resultat").value = resultat.join("");
}
function copier() {
    let resultat = document.getElementById("resultat").value;

    navigator.clipboard.writeText(resultat);

    alert("Résultat copié !");
}

function effacer() {
    document.getElementById("message").value = "";
    document.getElementById("resultat").value = "";
}
