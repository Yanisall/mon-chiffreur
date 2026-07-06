
const code= {'a': '285', 'b': '797', 'c': '850', 'd': '877', 'e': '549', 'f': '0', 'g': '687', 'h': '613', 'i': '737', 'j': '692', 'k': '604', 'l': '486', 'm': '592', 'n': '246', 'o': '116', 'p': '90', 'q': '295', 'r': '746', 's': '36', 't': '274', 'u': '911', 'v': '327', 'w': '27', 'x': '559', 'y': '722', 'z': '38', 'A': '776', 'B': '900', 'C': '888', 'D': '495', 'E': '250', 'F': '561', 'G': '176', 'H': '395', 'I': '418', 'J': '304', 'K': '369', 'L': '323', 'M': '766', 'N': '546', 'O': '190', 'P': '533', 'Q': '223', 'R': '464', 'S': '822', 'T': '257', 'U': '329', 'V': '410', 'W': '569', 'X': '611', 'Y': '435', 'Z': '616', ' ': '71', '.': '203', ',': '42', ';': '619', ':': '430', '!': '390', '?': '910', "'": '994', '"': '494', '(': '226', ')': '902', '-': '964', '_': '463', '/': '319', '\\': '531', '@': '697', '#': '331', '&': '247', '%': '844', '+': '598', '=': '69', '*': '725', '<': '873', '>': '708', '[': '135', ']': '45', '{': '709', '}': '104', '\n': '743', 'è': '489', 'é': '734', 'ê': '479', 'û': '524', 'ù': '31', 'ô': '538', '…': '744', 'à': '197', 'â': '965', 'ç': '726', 'ï': '560', 'î': '406'}; 
//on définit le code comme étant un dictionnaire dans lequel pour chaque caractère on associe un nombre
const decode={}; 
for(let lettre in code){
    decode[code[lettre]]=lettre;    //on définit decode comme étant l'inverse de code
}

//fonction pour chiffrer
function chiffrer(){

    let texte = document.getElementById("message").value; //on définit texte comme étant le message à chiffrer

    let resultat = []; //on initialise résultat 

    for (let lettre of texte){ //pour chaque lettre dans le texte

        if (lettre in code){ //si la lettre est bien dans code

            resultat.push(code[lettre]); //on ajoute dans resultat le nombre associé à ce caractère

        }

        else{ //sinon
            alert(`Erreur dans le message. Caractère : ${lettre} incorrecte.`); //on affiche ce message d'erreur
            break;
        }

    }

    document.getElementById("resultat").value = resultat.join("|"); //on retourne résultat sous forme de string

}

function dechiffrer(){

    let texte = document.getElementById("message").value; //on définit texte comme étant le message à déchiffrer
    let resultat = []; //on initialise résultat 

    let texte_final = texte.split("|"); // on enlève les | au texte pour que ce soit plus simple à analyser et renvoyer

    for (let caractere of texte_final){ //pour chaque caractère dans le texte 

        if (caractere === ""){
            continue; //si le caractère est rien on continue (du à la suppression des |)
        }

        if (!(caractere in decode)){ //si le caractère n'est pas dans decode 
            alert(`Erreur dans le message. Caractère : ${caractere} incorrecte.`); //on affiche ce message
            break; 
        }

        resultat.push(decode[caractere]); ////on ajoute dans resultat le caractère associé à ce nombre
    }

    document.getElementById("resultat").value = resultat.join(""); //on retourne résultat sous forme de string
}
function copier() {
    let resultat = document.getElementById("resultat").value; //on définit le message à copier (qui est dans résultat)

    navigator.clipboard.writeText(resultat); //puis on copie

    alert("Résultat copié !"); //on affiche que le résultat est bien copié
}

function effacer() {
    document.getElementById("message").value = "";
    document.getElementById("resultat").value = "";
}
