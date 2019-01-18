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

function conj_avoir(sujet) {
    switch (sujet) {
        case SUJET_JE: return "ai";
        case SUJET_TU: return "as";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "a";
        case SUJET_NOUS: return "avons";
        case SUJET_VOUS: return "avez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "ont";
    }
}
function conj_etre(sujet) {
    switch (sujet) {
        case SUJET_JE: return "suis";
        case SUJET_TU: return "es";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "est";
        case SUJET_NOUS: return "sommes";
        case SUJET_VOUS: return "êtes";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "sont";
    }
}

function contient(array, obj) {
    for (var element of array) {
        if (element === obj) return true;
    }
    return false;
}
function faux_reflechi(verbe) {
    return contient([
        "souvenir",
        "battre",
        "moquer",
        "accepter"
    ], verbe);
}
function prend_etre(verbe) {
    return contient([
        "venir",
        "aller",
        "sortir",
        "partir"
    ], verbe) || faux_reflechi(verbe);
}

function pp_racine(verbe) {
    switch (verbe) {
        case "être": return "été";
        case "venir": return "venu";
        case "avoir": return "eu";
        case "souvenir": return "souvenu";
        case "voir": return "vu";
        case "devoir": return "dû";
        case "détruire": return "détruit";
        case "vouloir": return "voulu";
        case "croire": return "cru";
        case "rire": return "ri";
        case "vivre": return "vécu";
        case "pouvoir": return "pu";
        case "suivre": return "suivi";
        case "offrir": return "offert";
        case "apprendre": return "appris";
        case "accueillir": return "accueilli";
        case "recevoir": return "reçu";
        case "craindre": return "craint";
        case "faire": return "fait";
        case "prendre": return "pris";
    }
    var racine = verbe.substring(0, verbe.length - 2);
    if (verbe.endsWith("er")) return racine + "é";
    else if (verbe.endsWith("ir")) return racine + "i";
    else if (verbe.endsWith("re")) return racine + "u";
    else location.reload();
}
function participe_passe(verbe, sujet) {
    var racine = pp_racine(verbe);
    if (prend_etre(verbe)) {
        switch (sujet) {
            case SUJET_ELLE: return racine + "e";
            case SUJET_NOUS:
            case SUJET_ILS:
                return racine + "s";
            case SUJET_ELLES:
                return racine + "es";
        }
    }
    return racine;
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
    
    var aux;
    if (prend_etre(verbe)) {
        aux = conj_etre(sujet);
    } else {
        aux = conj_avoir(sujet);
    }
    var pp = participe_passe(verbe, sujet);
    
    reponse_correcte = (aux + " " + pp).normalize("NFC");
}

function generate_question() {
    response_in.value = "";
    
    var sujet = sujet_aleatoire(),
        verbe = verbe_aleatoire();
    set_question(sujet, verbe);
    
    var note = (faux_reflechi(verbe)) ? "(utilise être) " : "";
    question_out.innerHTML = sujet + " (" + verbe + ") " + note;
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
