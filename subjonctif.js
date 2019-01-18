function entier_aleatoire(max) {
     return Math.floor(Math.random() * Math.floor(max));
}

SUJET_JE = "Que je";
SUJET_TU = "Que tu";
SUJET_IL = "Qu'il";
SUJET_ELLE = "Qu'elle";
SUJET_ON = "Qu'on";
SUJET_NOUS = "Que nous";
SUJET_VOUS = "Que vous";
SUJET_ILS = "Qu'ils";
SUJET_ELLES = "Qu'elles";

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

function terminaison_subj(sujet) {
    switch (sujet) {
        case SUJET_JE: return "e";
        case SUJET_TU: return "es";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "e";
        case SUJET_NOUS: return "ions";
        case SUJET_VOUS: return "iez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "ent";
    }
}

function racine_subj(verbe) {
    switch (verbe) {
        case "être": location.reload();
        case "venir": return "vienn";
        case "avoir": return "ai";
        case "souvenir": return "souvienn";
        case "pleurer": return "pleur";
        case "voir": return "voi";
        case "devoir": return "doiv";
        case "aller": return "aill";
        case "détruire": return "détruis";
        case "vouloir": return "veuill";
        case "battre": return "batt";
        case "croire": return "croi";
        case "rire": return "ri";
        case "moquer": return "moqu";
        case "vivre": return "viv";
        case "pouvoir": return "puiss";
        case "suivre": return "suiv";
        case "offrir": return "offr";
        case "apprendre": return "apprenn";
        case "accueillir": return "accueill";
        case "recevoir": return "reçoiv";
        case "craindre": return "craign";
        case "faire": return "fass";
        case "partir": return "part";
        case "accepter": return "accept";
        case "sortir": return "sort";
        case "finir": return "finiss";
        case "réussir": return "réussiss";
        case "prendre": return "prenn";
        case "achever": return "achèv";
    }
}
function racine_imparfait_pour_subj(verbe) {
    switch (verbe) {
        case "être": location.reload();
        case "venir": return "ven";
        case "avoir": return location.reload();
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
        case "pouvoir": return "puiss";
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

function subj_avoir(sujet) {
    switch (sujet) {
		case SUJET_JE: return "aie";
		case SUJET_TU: return "aies";
		case SUJET_IL: return "ait";
		case SUJET_ELLE: return "ait";
		case SUJET_ON: return "ait";
		case SUJET_NOUS: return "ayons";
		case SUJET_VOUS: return "ayez";
		case SUJET_ILS: return "aient";
		case SUJET_ELLES: return "aient";
    }
}
function subj_etre(sujet) {
    switch (sujet) {
		case SUJET_JE: return "sois";
		case SUJET_TU: return "sois";
		case SUJET_IL: return "soit";
		case SUJET_ELLE: return "soit";
		case SUJET_ON: return "soit";
		case SUJET_NOUS: return "soyons";
		case SUJET_VOUS: return "soyez";
		case SUJET_ILS: return "soient";
		case SUJET_ELLES: return "soient";
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
    
    if (verbe == "avoir") {
        reponse_correcte = subj_avoir(sujet);
    } else if (verbe == "être") {
        reponse_correcte = subj_etre(sujet);
    } else {
        var racine;
        if (sujet == SUJET_NOUS || sujet == SUJET_VOUS) {
            racine = racine_imparfait_pour_subj(verbe);
        } else {
            racine = racine_subj(verbe);
        }
        var terminaison = terminaison_subj(sujet);
        
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
