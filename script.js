
const code= {'0':'0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', 'a': '63', 'b': '90', 'c': '55', 'd': '50', 'e': '100', 'f': '12', 'g': '10', 'h': '96', 'i': '46', 'j': '78', 'k': '28', 'l': '73', 'm': '37', 'n': '43', 'o': '30', 'p': '18', 'q': '36', 'r': '59', 's': '13', 't': '52', 'u': '24', 'v': '106', 'w': '107', 'x': '42', 'y': '70', 'z': '76', 'A': '48', 'B': '95', 'C': '62', 'D': '23', 'E': '97', 'F': '33', 'G': '19', 'H': '27', 'I': '38', 'J': '84', 'K': '105', 'L': '29', 'M': '25', 'N': '51', 'O': '57', 'P': '39', 'Q': '102', 'R': '101', 'S': '67', 'T': '61', 'U': '91', 'V': '88', 'W': '58', 'X': '44', 'Y': '72', 'Z': '15', ' ': '17', '.': '92', ',': '34', ';': '99', ':': '31', '!': '40', '?': '94', "'": '71', '"': '49', '(': '98', ')': '22', '-': '74', '_': '14', '/': '53', '\\': '87', '@': '75', '#': '21', '&': '79', '%': '86', '+': '83', '=': '66', '*': '45', '<': '103', '>': '41', '[': '81', ']': '108', '{': '35', '}': '93', '\n': '82', 'è': '56', 'é': '32', 'ê': '64', 'û': '47', 'ù': '68', 'ô': '85', '…': '26', 'à': '65', 'â': '69', 'ç': '89', 'ï': '77', 'î': '11', '¨': '80', '^': '54', '$': '60', '£': '16', '€': '104', 'µ': '20'}

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

