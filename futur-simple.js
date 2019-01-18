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

function terminaison_futur(sujet) {
    switch (sujet) {
        case SUJET_JE: return "ai";
        case SUJET_TU: return "as";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "a";
        case SUJET_NOUS: return "ons";
        case SUJET_VOUS: return "ez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "ont";
    }
}

function racine_futur(verbe) {
    switch (verbe) {
        case "être": return "ser";
        case "venir": return "viendr";
        case "avoir": return "aur";
        case "souvenir": return "souviendr";
        case "voir": return "verr";
        case "devoir": return "devr";
        case "aller": return "ir";
        case "vouloir": return "voudr";
        case "pouvoir": return "pourr";
        case "recevoir": return "recevr";
        case "faire": return "fer";
        case "achever": return "achèver";
    }
    if (verbe.endsWith("re")) return verbe.slice(0, verbe.length - 1);
    return verbe;
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
    
    var racine = racine_futur(verbe),
        terminaison = terminaison_futur(sujet);
    
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
