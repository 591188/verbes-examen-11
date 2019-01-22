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

function terminaison_pres_er(sujet) {
    switch (sujet) {
        case SUJET_JE: return "e";
        case SUJET_TU: return "es";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "e";
        case SUJET_NOUS: return "ons";
        case SUJET_VOUS: return "ez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "ent";
    }
}
function terminaison_pres_ir(sujet) {
    switch (sujet) {
        case SUJET_JE:
        case SUJET_TU:
            return "is";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "it";
        case SUJET_NOUS: return "issons";
        case SUJET_VOUS: return "issez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "issent";
    }
}
function terminaison_pres_re(sujet) {
    switch (sujet) {
        case SUJET_JE:
        case SUJET_TU:
            return "e";
        case SUJET_IL:
        case SUJET_ELLE:
        case SUJET_ON:
            return "";
        case SUJET_NOUS: return "ons";
        case SUJET_VOUS: return "ez";
        case SUJET_ILS:
        case SUJET_ELLES:
            return "ent";
    }
}

function conj_present(sujet, verbe) {
    switch (verbe) {
    case "être":
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
    case "venir":
        switch (sujet) {
            case SUJET_JE: return "viens";
            case SUJET_TU: return "viens";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "vient";
            case SUJET_NOUS: return "venons";
            case SUJET_VOUS: return "venez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "viennent";
        }
    case "avoir":
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
    case "souvenir":
        switch (sujet) {
            case SUJET_JE: return "souviens";
            case SUJET_TU: return "souviens";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "souvient";
            case SUJET_NOUS: return "souvenons";
            case SUJET_VOUS: return "souvenez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "souviennent";
        }
    case "voir":
        switch (sujet) {
            case SUJET_JE: return "vois";
            case SUJET_TU: return "vois";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "voit";
            case SUJET_NOUS: return "voyons";
            case SUJET_VOUS: return "voyez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "voient";
        }
    case "devoir":
        switch (sujet) {
            case SUJET_JE: return "dois";
            case SUJET_TU: return "dois";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "doit";
            case SUJET_NOUS: return "devons";
            case SUJET_VOUS: return "devez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "doivent";
        }
    case "aller":
        switch (sujet) {
            case SUJET_JE: return "vais";
            case SUJET_TU: return "vas";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "va";
            case SUJET_NOUS: return "allons";
            case SUJET_VOUS: return "allez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "vont";
        }
    case "détruire":
        switch (sujet) {
            case SUJET_JE: return "détruis";
            case SUJET_TU: return "détruis";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "détruit";
            case SUJET_NOUS: return "détruisons";
            case SUJET_VOUS: return "détruisez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "détruisent";
        }
    case "vouloir":
        switch (sujet) {
            case SUJET_JE: return "veux";
            case SUJET_TU: return "veux";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "veut";
            case SUJET_NOUS: return "voulons";
            case SUJET_VOUS: return "voulez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "veulent";
        }
    case "battre":
        switch (sujet) {
            case SUJET_JE: return "bats";
            case SUJET_TU: return "bats";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "bat";
            case SUJET_NOUS: return "battons";
            case SUJET_VOUS: return "battez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "battent";
        }
    case "croire":
        switch (sujet) {
            case SUJET_JE: return "crois";
            case SUJET_TU: return "crois";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "croit";
            case SUJET_NOUS: return "croyons";
            case SUJET_VOUS: return "croyez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "croient";
        }
    case "rire":
        switch (sujet) {
            case SUJET_JE: return "ris";
            case SUJET_TU: return "ris";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "rit";
            case SUJET_NOUS: return "rions";
            case SUJET_VOUS: return "riez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "rient";
        }
    case "vivre":
        switch (sujet) {
            case SUJET_JE: return "vis";
            case SUJET_TU: return "vis";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "vit";
            case SUJET_NOUS: return "vivons";
            case SUJET_VOUS: return "vivez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "vivent";
        }
    case "pouvoir":
        switch (sujet) {
            case SUJET_JE: return "peux";
            case SUJET_TU: return "peux";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "peut";
            case SUJET_NOUS: return "pouvons";
            case SUJET_VOUS: return "pouvez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "peuvent";
        }
    case "suivre":
        switch (sujet) {
            case SUJET_JE: return "suis";
            case SUJET_TU: return "suis";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "suit";
            case SUJET_NOUS: return "suivons";
            case SUJET_VOUS: return "suivez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "suivent";
        }
    case "offrir":
        switch (sujet) {
            case SUJET_JE: return "offre";
            case SUJET_TU: return "offres";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "offre";
            case SUJET_NOUS: return "offrons";
            case SUJET_VOUS: return "offrez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "offrent";
        }
    case "apprendre":
        switch (sujet) {
            case SUJET_JE: return "apprends";
            case SUJET_TU: return "apprends";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "apprend";
            case SUJET_NOUS: return "apprenons";
            case SUJET_VOUS: return "apprenez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "apprennent";
        }
    case "accueillir":
        switch (sujet) {
            case SUJET_JE: return "accueille";
            case SUJET_TU: return "accueilles";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "accueille";
            case SUJET_NOUS: return "accueillons";
            case SUJET_VOUS: return "accueillez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "accueillent";
        }
    case "recevoir":
        switch (sujet) {
            case SUJET_JE: return "reçois";
            case SUJET_TU: return "reçois";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "reçoit";
            case SUJET_NOUS: return "recevons";
            case SUJET_VOUS: return "recevez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "reçoivent";
        }
    case "craindre":
        switch (sujet) {
            case SUJET_JE: return "crains";
            case SUJET_TU: return "crains";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "craint";
            case SUJET_NOUS: return "craignons";
            case SUJET_VOUS: return "craignez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "craignent";
        }
    case "faire":
        switch (sujet) {
            case SUJET_JE: return "fais";
            case SUJET_TU: return "fais";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "fait";
            case SUJET_NOUS: return "faisons";
            case SUJET_VOUS: return "faites";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "font";
        }
    case "partir":
        switch (sujet) {
            case SUJET_JE: return "pars";
            case SUJET_TU: return "pars";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "part";
            case SUJET_NOUS: return "partons";
            case SUJET_VOUS: return "partez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "partent";
        }
    case "sortir":
        switch (sujet) {
            case SUJET_JE: return "sors";
            case SUJET_TU: return "sors";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "sort";
            case SUJET_NOUS: return "sortons";
            case SUJET_VOUS: return "sortez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "sortent";
        }
    case "prendre":
        switch (sujet) {
            case SUJET_JE: return "prends";
            case SUJET_TU: return "prends";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "prend";
            case SUJET_NOUS: return "prenons";
            case SUJET_VOUS: return "prenez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "prennent";
        }
    case "achever":
        switch (sujet) {
            case SUJET_JE: return "achève";
            case SUJET_TU: return "achèves";
            case SUJET_IL:
            case SUJET_ELLE:
            case SUJET_ON:
                return "achève";
            case SUJET_NOUS: return "achevons";
            case SUJET_VOUS: return "achevez";
            case SUJET_ILS:
            case SUJET_ELLES:
                return "achèvent";
        }
    }
    
    var without_ending = verbe.slice(0, verbe.length - 2);
    if (verbe.endsWith("er")) return without_ending + terminaison_pres_er(sujet);
    if (verbe.endsWith("ir")) return without_ending + terminaison_pres_ir(sujet);
    if (verbe.endsWith("re")) return without_ending + terminaison_pres_re(sujet);
    location.reload();
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
    
    reponse_correcte = conj_present(sujet, verbe).normalize("NFC");
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
