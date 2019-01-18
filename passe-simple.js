function entier_aleatoire(max) {
     return Math.floor(Math.random() * Math.floor(max));
}

SUJET_JE = "Je";
SUJET_TU = "Tu";
SUJET_IL = "Il";
SUJET_ELLE = "Elle";
SUJET_ON = "On";
SUJET_NOUS = "Nous";
SUJET_VOUS = "Vous";
SUJET_ILS = "Ils";
SUJET_ELLES = "Elles";

sujets = [
    SUJET_JE,
    SUJET_TU,
    SUJET_IL,
    SUJET_ELLE,
    SUJET_ON,
    SUJET_NOUS,
    SUJET_VOUS,
    SUJET_ILS,
    SUJET_ELLES
];
verbes = [
    "être",
    "venir",
    "avoir",
    "souvenir",
    "pleurer",
    "voir",
    "devoir",
    "aller",
    "détruire",
    "vouloir",
    "battre",
    "croire",
    "rire",
    "moquer",
    "vivre",
    "pouvoir",
    "suivre",
    "offrir",
    "apprendre",
    "accueillir",
    "recevoir",
    "craindre",
    "faire",
    "partir",
    "accepter",
    "sortir",
    "finir",
    "réussir",
    "prendre",
    "achever"
];

function sujet_aleatoire() {
    return sujets[entier_aleatoire(sujets.length)];
}
function verbe_aleatoire() {
    return verbes[entier_aleatoire(verbes.length)];
}

var verbes_irregulier_1 = [
    "asseoir",
    "conduire",
    "dire",
    "écrire",
    "faire",
    "joindre",
    "mettre",
    "naître",
    "peindre",
    "prendre",
    "rire",
    "voir"
];
var verbes_irregulier_2 = [
    "avoir",
    "devoir",
    "recevoir",
    "être",
    "boire",
    "savoir",
    "mourir",
    "connaître",
    "lire",
    "valoir",
    "venir",
    "courir",
    "vivre",
    "croire",
    "pouvoir",
    "vouloir",
    "disparaître"
]

function contient(array, obj) {
    for (var element of array) {
        if (element === obj) return true;
    }
    return false;
}
function dans_irr2(verbe) {
    return contient(verbes_irregulier_2, verbe);
}

function terminaison_ps_er(sujet) {
    switch (sujet) {
        case SUJET_JE: return "ai";
        case SUJET_TU: return "as";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "a";
        case SUJET_NOUS: return "âmes";
        case SUJET_VOUS: return "âtes";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "èrent";
    }
}
function terminaison_ps_ir_re_irr1(sujet) {
    switch (sujet) {
        case SUJET_JE:
        case SUJET_TU:
            return "is";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "it";
        case SUJET_NOUS: return "îmes";
        case SUJET_VOUS: return "îtes";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "irent";    
    }
}
function terminaison_ps_irr2(sujet) {
    switch (sujet) {
        case SUJET_JE:
        case SUJET_TU:
            return "s";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "t";
        case SUJET_NOUS: return "\u{0302}mes"; // U+0302 COMBINING CIRCUMFLEX ACCENT
        case SUJET_VOUS: return "\u{0302}tes";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "rent";
    }
}

function racine_ps(verbe, terminaison) {
    var racine = function() {
        switch (verbe) {
            case "asseoir": return "ass";
            case "conduire": return "conduis";
            case "dire": return "d";
            case "écrire": return "écriv";
            case "faire": return "f";
            case "joindre": return "joign";
            case "mettre": return "m";
            case "naître": return "naqu";
            case "peindre": return "peign";
            case "prendre": return "pr";
            case "rire": return "r";
            case "voir": return "v";
            
            case "avoir": return "eu";
            case "devoir": return "du";
            case "recevoir": return "reçu";
            case "être": return "fu";
            case "boire": return "bu";
            case "savoir": return "su";
            case "mourir": return "mouru";
            case "connaître": return "connu";
            case "lire": return "lu";
            case "valoir": return "valu";
            case "venir": return "vin";
            case "courir": return "couru";
            case "vivre": return "vécu";
            case "croire": return "cru";
            case "pouvoir": return "pu";
            case "vouloir": return "voulu";
            case "disparaître": return "disparu";
            
            case "détruire": return "détruis";
            case "craindre": return "craign";
        }
        return verbe.slice(0, -2); // "er", "ir", "re"
    }();
    
    // https://stackoverflow.com/a/37511463
    if (!/^[ei]/.test(terminaison.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
        if (racine.endsWith("g")) {
            racine += "e";
        } else if (racine.endsWith("c")) {
            racine = racine.slice(0, -1) + "ç";
        }
    }
    
    return racine;
}

function ps_venir(sujet) {
    switch (sujet) {
        case SUJET_JE:
		case SUJET_TU:
            return "vins";
		case SUJET_IL:
		case SUJET_ELLE:
		case SUJET_ON:
            return "vint";
        case SUJET_NOUS: return "vînmes";
		case SUJET_VOUS: return "vîntes";
        case SUJET_ILS:
		case SUJET_ELLES:
            return "vinrent";
    }
}

console.log("Starting.")

var question_out = document.getElementById("question-out"),
    response_in = document.getElementById("response-in"),
    feedback_out = document.getElementById("feedback-out");

response_in.onkeyup = function(event) {
    if (event.key === "Enter") {
        check_answer();
    }
};

function set_question(sujet, verbe) {
    current_question = {
        sujet: sujet,
        verbe: verbe
    };
    
    if (verbe.endsWith("venir")) {
        reponse_correcte = verbe.slice(0, verbe.length - "venir".length) +
                           ps_venir(sujet);
    } else {
        var terminaison;
        if (dans_irr2(verbe)) {
            terminaison = terminaison_ps_irr2(sujet);
        } else if (verbe.endsWith("er")) {
            terminaison = terminaison_ps_er(sujet);
        } else {
            terminaison = terminaison_ps_ir_re_irr1(sujet);
        }
        var racine = racine_ps(verbe, terminaison);
        
        reponse_correcte = (racine + terminaison).normalize("NFC");
    }
}

function generate_question() {
    response_in.value = "";
    
    var sujet = sujet_aleatoire(),
        verbe = verbe_aleatoire();
    set_question(sujet, verbe);
    
    question_out.innerHTML = sujet + " (" + verbe + ") ";
}

function check_answer() {
    if (response_in.value.trim().toLowerCase().normalize("NFC") == reponse_correcte) {
        feedback_out.innerHTML = "C'est correct!";
        generate_question();
    } else {
        feedback_out.innerHTML = "Erroné…";
    }
}

generate_question();
