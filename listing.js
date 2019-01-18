var conjs_listed = false, conj_listing_showing = false;

function list_conjs() {
    console.log("Listing conjugations.")
    var listing = document.getElementById("conj-listing"),
        old_q = current_question;
    for (var verbe of verbes) {
        var style = "text-transform: capitalize; text-decoration: underline;",
            span = "<span style=\"" + style + "\">" + verbe + '</span>';
        listing.insertAdjacentHTML("beforeend", span + "<br>")
        for (var sujet of sujets) {
            if (sujet === SUJET_ON) continue; // Redundant
            set_question(sujet, verbe);
            listing.insertAdjacentHTML("beforeend", sujet + " " + reponse_correcte + "<br>");
        }
        listing.insertAdjacentHTML("beforeend", "<br>");
    }
    conjs_listed = true;
    set_question(old_q.sujet, old_q.verbe);
}

function show_conj_listing() {
    var listing = document.getElementById("conj-listing");
    listing.style.display = "block";
    conj_listing_showing = true;
    
    listing_button.innerHTML = "(Hide listing)";
}
function hide_conj_listing() {
    var listing = document.getElementById("conj-listing");
    listing.style.display = "none";
    conj_listing_showing = false;
    
    listing_button.innerHTML = "(List all)";
}

function toggle_conj_listing() {
    if (!conjs_listed) list_conjs();
    
    if (conj_listing_showing) hide_conj_listing();
    else show_conj_listing();
}

listing_button = document.getElementById("listing-button");
listing_button.onclick = toggle_conj_listing;
hide_conj_listing();
