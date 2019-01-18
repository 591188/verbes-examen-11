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

function terminaison_imp(sujet) {
    switch (sujet) {
        case SUJET_JE:
        case SUJET_TU:
            return "ais";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "ait";
        case SUJET_NOUS: return "ions";
        case SUJET_VOUS: return "iez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "aient";
    }
}

function racine_imp(verbe) {
    switch (verbe) {
        case "être": return "ét";
        case "venir": return "ven";
        case "avoir": return "av";
        case "souvenir": return "souven";
        case "pleurer": return "pleur";
        case "voir": return "voy";
        case "devoir": return "dev";
        case "aller": return "all";
        case "détruire": return "détruis";
        case "vouloir": return "voul";
        case "battre": return "batt";
        case "croire": return "croy";
        case "rire": return "ri";
        case "moquer": return "moqu";
        case "vivre": return "viv";
        case "pouvoir": return "pouv";
        case "suivre": return "suiv";
        case "offrir": return "offr";
        case "apprendre": return "appren";
        case "accueillir": return "accueill";
        case "recevoir": return "recev";
        case "craindre": return "craign";
        case "faire": return "fass";
        case "partir": return "part";
        case "accepter": return "accept";
        case "sortir": return "sort";
        case "finir": return "finiss";
        case "réussir": return "réussiss";
        case "prendre": return "pren";
        case "achever": return "achev";
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
    
    var racine = racine_imp(verbe),
        terminaison = terminaison_imp(sujet);
    
    reponse_correcte = (racine + terminaison).normalize("NFC");
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
