/*jslint browser: true*/
/*global $, jQuery, alert*/

//ICI ON CODE SALE ET ON OUBLIE PAS LES COMMENTAIRES

jQuery(document).ready(function ($) {

    // ETAPES CACHEES

    $('#premiereQuestion').hide();
    $('#premiereReponse').hide();
    $('#deuxiemeQuestion').hide();
    $('#deuxiemeReponse').hide();
    $('#troisiemeQuestion').hide();
    $('#troisiemeReponse').hide();
    $('#ecranResultat').hide();
    $('#ecranResultat2').hide();
    // DISCIPLINES CACHEES

    $('#biathlon').hide();
    $('#bobsleigh').hide();
    $('#combineNordique').hide();
    $('#hockeySurGlace').hide();
    $('#luge').hide();
    $('#patinageArtistique').hide();
    $('#patinageVitesse').hide();
    $('#sautASki').hide();
    $('#skiAlpin').hide();
    $('#skiDeFond').hide();

    // ACCUEIL
    
    $('.btn-accueil').click(function () {
        $('#accueil').addClass('animated fadeOutLeft');
        $('#premiereQuestion').show().removeClass().addClass('animated fadeInRight etape');
    });


    //PREMIERE QUESTION
    $('.btn-q1-retour').click(function () {
        $('#premiereQuestion').addClass('animated fadeOutRight etape');
        $('#accueil').removeClass().addClass('animated fadeInLeft etape');
    });

    $('.btn-q1-suivant').click(function () {
        $('#premiereQuestion').removeClass().addClass('animated fadeOutLeft etape');
        $('#premiereReponse').removeClass().show().addClass('animated fadeInRight etape');
    });




    //PREMIERE REPONSE
    $('.btn-r1-retour').click(function () {
        $('#premiereReponse').removeClass().addClass('animated fadeOutRight etape');
        $('#premiereQuestion').removeClass().addClass('animated fadeInLeft etape');
    });

    $('.btn-r1-suivant').click(function () {
        if (reponses[0] === 'undefined' || reponses[1] === 'undefined' || reponses[1] == "" || reponses[0] == null) {
        alert("Vous avez oublié de répondre à une question !");
        }
        else { 
            $('#premiereReponse').removeClass().addClass('animated fadeOutLeft etape');
            $('#deuxiemeQuestion').show().removeClass().addClass('animated fadeInRight etape');
        }
    });




    //DEUXIEME QUESTION
    $('.btn-q2-retour').click(function () {
        $('#deuxiemeQuestion').removeClass().addClass('animated fadeOutRight etape');
        $('#premiereReponse').removeClass().addClass('animated fadeInLeft etape');
    });

    $('.btn-q2-suivant').click(function () {
        $('#deuxiemeQuestion').removeClass().addClass('animated fadeOutLeft etape');
        $('#deuxiemeReponse').removeClass().show().addClass('animated fadeInRight etape');
    });




    //DEUXIEME REPONSE
    $('.btn-r2-retour').click(function () {
        $('#deuxiemeReponse').removeClass().addClass('animated fadeOutRight etape');
        $('#deuxiemeQuestion').removeClass().addClass('animated fadeInLeft etape');
    });

    $('.btn-r2-suivant').click(function () {
        if (reponses[2] == null){
            alert("Vous n'avez sélectionné aucun sport !");
    }
    else {
        $('#deuxiemeReponse').removeClass().addClass('animated fadeOutLeft etape');
        $('#troisiemeQuestion').removeClass().show().addClass('animated fadeInRight etape');
    }
    });




    //TROISIEME QUESTION
    $('.btn-q3-retour').click(function () {
        $('#troisiemeQuestion').removeClass().addClass('animated fadeOutRight etape');
        $('#deuxiemeReponse').removeClass().addClass('animated fadeInLeft etape');
    });

    $('.btn-q3-suivant').click(function () {
        $('#troisiemeQuestion').removeClass().addClass('animated fadeOutLeft etape');
        $('#troisiemeReponse').removeClass().show().addClass('animated fadeInRight etape');
    });




    //TROISIEME REPONSE
    $('.btn-r3-retour').click(function () {
        $('#troisiemeReponse').removeClass().addClass('animated fadeOutRight etape');
        $('#troisiemeQuestion').removeClass().addClass('animated fadeInLeft etape');
    });

    $('.btn-r3-suivant').click(function () {
        if (reponses[3] == null){
            alert("Vous n'avez sélectionné aucun pays !");
        }
        else {
        //VARIABLES MOTEUR
        var score = 0;
        var age = parseInt(reponses[1]);
        var genre = reponses[0];
        var discipline = reponses[2];
        var pays = reponses[3];

        //VARIABLES RESULTATS
        var returnedMedaille;
        var returnedPays;
        var returnedDiscipline;
        var returnedChampion;
        var returnedGenre = "valide";

        switch(discipline) {
            case "20kmHommes" :
                switch(genre){
                    case "Homme" :
                        switch(pays) {
                            case "Norvege" :
                                if (age > 27 && age < 35) {
                                returnedChampion = "magnar_solberg";
                                returnedDiscipline = discipline;
                                returnedMedaille = "or";
                                returnedPays = "Norvege";
                                }
                                else {
                                    returnedChampion = "magnar_solberg";
                                    returnedDiscipline = discipline;
                                    returnedMedaille = "aucune";
                                    returnedPays = "Norvege";
                                }
                                    break;
                            case "UnionSovietique" :
                                    if (age > 23 && age < 28) {
                                        returnedChampion = "aleksandr_tikhonov";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "argent";
                                        returnedPays = "UnionSovietique";
                                        }
                                        else if (age <= 23 && age > 18) {
                                            returnedChampion = "vladimir_gundartsev";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "UnionSovietique";
                                        } 
                                        else {
                                            returnedChampion = "magnar_solberg";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                    break;
                            default :
                            returnedChampion = "magnar_solberg";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Norvege";
                            break;   
                        }
                        break;
                    case "Femme" :
                        returnedChampion = "magnar_solberg";
                        returnedDiscipline = discipline;
                        returnedMedaille = "aucune";
                        returnedPays = "Norvege";
                        returnedGenre = "erreurFemme";
                        // cas erreur, afficher le texte et prendre le pays gagnant
                        break;
                }
                break;
            
            case "relais4X7" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                case "UnionSovietique" :
                                    if (age < 31 && age > 22) {
                                        returnedChampion = "equipe_unionsovietique_relai4x7";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "or";
                                        returnedPays = "UnionSovietique";
                                    }
                                    else {
                                        returnedChampion = "equipe_unionsovietique_relai4x7";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                    }
                                    break;
                                case "Norvege" :
                                    if (age < 35 && age > 26) {
                                        returnedChampion = "equipe_norvege_relai4x7";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "argent";
                                        returnedPays = "Norvege";
                                    }
                                    else {
                                        returnedChampion = "equipe_unionsovietique_relai4x7";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                    }
                                    break;
                                case "Suede" :
                                    if (age > 20 && age < 30) {
                                        returnedChampion = "equipe_suede_relai4x7";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "bronze";
                                        returnedPays = "Suede";
                                    }
                                    else {
                                        returnedChampion = "equipe_unionsovietique_relai4x7";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                    }   
                                    break;
                                default :
                                    returnedChampion = "equipe_unionsovietique_relai4x7";
                                    returnedDiscipline = discipline;
                                    returnedMedaille = "aucune";
                                    returnedPays = "UnionSovietique";
                                    break;
                                }
                                
                            break;
                        case "Femme" :
                                returnedChampion = "equipe_unionsovietique_relai4x7";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "UnionSovietique";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;
            
            case "bobQuatreHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Italie" :
                                        if (age < 33 && age > 24) {
                                            returnedChampion = "equipe_italie_bobquatrehommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Italie";
                                        }
                                        else {
                                            returnedChampion = "equipe_italie_bobquatrehommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "Autriche" :
                                        if (age < 34 && age > 25) {
                                            returnedChampion = "equipe_autriche_bobquatrehommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "equipe_italie_bobquatrehommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "Suisse" :
                                        if (age < 35 && age > 26) {
                                            returnedChampion = "equipe_suisse_bobquatrehommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suisse";
                                        }
                                        else {
                                            returnedChampion = "equipe_italie_bobquatrehommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    default :
                                        returnedChampion = "equipe_italie_bobquatrehommes";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Italie";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "equipe_italie_bobquatrehommes";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Italie";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;
            
            case "bobDeuxHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Italie" :
                                        if (age > 27 && age < 37){
                                            returnedChampion = "equipe_italie_bobdeuxhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Italie";
                                        }
                                        else {
                                            returnedChampion = "equipe_italie_bobdeuxhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "AllemagneOuest" :
                                        if (age < 35 && age > 25) {
                                            returnedChampion = "equipe_allemagneouest_bobdeuxhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "equipe_italie_bobdeuxhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "Roumanie" :
                                        if (age < 35 && age > 25) {
                                            returnedChampion = "equipe_roumanie_bobdeuxhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Roumanie";
                                        }
                                        else {
                                            returnedChampion = "equipe_italie_bobdeuxhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    default :
                                        returnedChampion = "equipe_italie_bobdeuxhommes";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Italie";                                       
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "equipe_italie_bobdeuxhommes";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Italie";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "combineIndividuelHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "AllemagneOuest" :
                                        if (age > 18 && age < 27) {
                                            returnedChampion = "franz_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "franz_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        break;
                                    case "Suisse" :
                                        if (age < 34 && age > 25) {
                                            returnedChampion = "alois_kalin";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Suisse";
                                        }
                                        else {
                                            returnedChampion = "franz_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        break;
                                    case "AllemagneEst" :
                                        if (age < 26 && age > 18) {
                                            returnedChampion = "andreas_kunz";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneEst";
                                        }
                                        else {
                                            returnedChampion = "franz_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        break;
                                    default :
                                        returnedChampion = "franz_keller";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "AllemagneOuest";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "franz_keller";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "AllemagneOuest";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "Hommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "UnionSovietique" :
                                        if (age > 20 && age < 31) {
                                            returnedChampion = "equipe_unionsovietique_hockey";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_hockey";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "Tchecoslovaquie" :
                                        if (age > 20 && age < 30) {
                                            returnedChampion = "equipe_tchecoslovaquie_hockey";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Tchecoslovaquie";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_hockey";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "Canada" :
                                        if (age > 19 && age < 29) {
                                            returnedChampion = "equipe_canada_hockey";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Canada";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_hockey";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    default :
                                        returnedChampion = "equipe_unionsovietique_hockey";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "equipe_unionsovietique_hockey";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "UnionSovietique";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;
            
            case "lugeSimpleHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Autriche" :
                                        if (age > 19 && age < 29) {
                                            returnedChampion = "manfred_schmid";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "manfred_schmid";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                    case "AllemagneEst" :
                                        if (age >= 28 && age < 35) {
                                            returnedChampion = "thomas_kohler";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "AllemagneEst";
                                        }
                                        else if (age < 28 && age > 20){
                                            returnedChampion = "klausmichael_bonsack";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneEst";
                                        } else {
                                            returnedChampion = "manfred_schmid";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                    default :
                                        returnedChampion = "manfred_schmid";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Autriche";
                                    break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "manfred_schmid";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Autriche";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "lugeSimpleFemmes" :
                    switch(genre){
                        case "Homme" :
                                returnedChampion = "erika_lechner";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Italie";
                                returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Italie" :
                                        if (age < 26 && age > 17) {
                                            returnedChampion = "erika_lechner";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Italie";
                                        }
                                        else {
                                            returnedChampion = "erika_lechner";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "AllemagneOuest" :
                                        if (age >=24 && age < 29) {
                                            returnedChampion = "christa_schmuck";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else if (age < 24 && age > 17) {
                                            returnedChampion = "angelika_dunhaupt";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "erika_lechner";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    default :
                                    returnedChampion = "erika_lechner";
                                    returnedDiscipline = discipline;
                                    returnedMedaille = "aucune";
                                    returnedPays = "Italie";
                                    break;
                                }
                            break;
                    }
                break;

            case "lugeDoubleMixte" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "AllemagneEst" :
                                        if (age < 33 && age > 22) {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "AllemagneEst";
                                        }
                                        else {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneEst";
                                        }
                                        break;
                                    case "Autriche" :
                                        if (age < 36 && age > 21) {
                                            returnedChampion = "equipe_autriche_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneEst";
                                        }
                                        break;
                                    case "AllemagneOuest" :
                                        if (age < 38 && age > 28) {
                                            returnedChampion = "equipe_allemagneouest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneEst";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "AllemagneEst";
                                        break;
                                }
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "AllemagneEst" :
                                        case "AllemagneEst" :
                                        if (age < 33 && age > 22) {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "AllemagneEst";
                                        }
                                        else {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneEst";
                                        }
                                        break;
                                    case "Autriche" :
                                        if (age < 36 && age > 21) {
                                            returnedChampion = "equipe_autriche_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneEst";
                                        }
                                        break;
                                    case "AllemagneOuest" :
                                        if (age < 38 && age > 28) {
                                            returnedChampion = "equipe_allemagneouest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneEst";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "equipe_allemagneest_lugedoublemixte";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "AllemagneEst";
                                        break;
                                }
                            break;
                    }
                break;

            case "individuelHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Autriche" :
                                        if (age < 26 && age > 17) {
                                            returnedChampion = "wolfgang_schwarz";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Autriche";  
                                        }
                                        else {
                                            returnedChampion = "wolfgang_schwarz";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                    case "EtatsUnis" :
                                        if (age < 25 && age > 17) {
                                            returnedChampion = "tim_wood";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else {
                                            returnedChampion = "wolfgang_schwarz";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                    case "France" :
                                        if (age < 25 && age > 17) {
                                            returnedChampion = "patrick_pera";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "wolfgang_schwarz";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "wolfgang_schwarz";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Autriche";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "wolfgang_schwarz";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Autriche";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "individuelFemmes" :
                    switch(genre){
                        case "Homme" :
                                returnedChampion = "peggy_fleming";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "EtatsUnis";
                                returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "EtatsUnis" :
                                        if (age < 25 && age > 17) {
                                            returnedChampion = "peggy_fleming";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else {
                                            returnedChampion = "peggy_fleming";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "EtatsUnis";
                                        }
                                        break;
                                    case "AllemagneEst" :
                                        if (age < 26 && age > 17) {
                                            returnedChampion = "gabriele_seyfert";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "AllemagneEst";
                                        }
                                        else {
                                            returnedChampion = "peggy_fleming";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "EtatsUnis";
                                        }
                                        break;
                                    case "Tchecoslovaquie" :
                                        if (age > 17 && age < 25) {
                                            returnedChampion = "hana_maskova";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Tchecoslovaquie";
                                        }
                                        else {
                                            returnedChampion = "peggy_fleming";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "EtatsUnis";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "peggy_fleming";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "EtatsUnis";
                                        break;
                                }
                            break;
                    }
                break;

            case "coupleMixte" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "UnionSovietique" :
                                        if (age < 39 && age > 30) {
                                            returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else if (age <= 30 && age > 17){
                                            returnedChampion = "equipe_unionsovietique_couplemixte_argent";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "AllemagneOuest" :
                                        if (age < 28 && age > 18) {
                                            returnedChampion = "equipe_allemagneouest_couplemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                        break;
                                }
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "UnionSovietique" :
                                        if (age < 39 && age > 30) {
                                            returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else if (age <= 30 && age > 17){
                                            returnedChampion = "equipe_unionsovietique_couplemixte_argent";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_couplemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "AllemagneOuest" :
                                        if (age < 28 && age > 18) {
                                            returnedChampion = "equipe_allemagneouest_couplemixte";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "equipe_unionsovietique_couplemixte_or";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                        break;
                                }
                            break;
                    }
                break;

            case "1500mHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "PaysBas" :
                                        if (age > 24 && age < 31) {
                                            returnedChampion = "kees_verkerk";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "PaysBas";                                            
                                        }
                                        else if (age <=24 && age > 19) {
                                            returnedChampion = "ard_schenk";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "PaysBas";
                                        }
                                        else {
                                            returnedChampion = "kees_verkerk";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                    case "Norvege" :
                                        if (age < 31 && age > 21) {
                                            returnedChampion = "ivar_eriksen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "PaysBas";
                                        }
                                        else {
                                            returnedChampion = "kees_verkerk";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "kees_verkerk";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "or";
                                        returnedPays = "PaysBas";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "kees_verkerk";
                                returnedDiscipline = discipline;
                                returnedMedaille = "or";
                                returnedPays = "PaysBas";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "1000mFemmes" :
                    switch(genre){
                        case "Homme" :
                                returnedChampion = "carolina_geijssen";
                                returnedDiscipline = discipline;
                                returnedMedaille = "or";
                                returnedPays = "PaysBas";
                                returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "PaysBas" :
                                        if (age < 26 && age > 17) {
                                            returnedChampion = "carolina_geijssen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "PaysBas";
                                        }
                                        else {
                                            returnedChampion = "carolina_geijssen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                    case "UnionSovietique" :
                                        if (age < 27 && age > 17) {
                                            returnedChampion = "lyudmila_titova";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "carolina_geijssen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                    case "EtatsUnis" :
                                        if (age < 23 && age > 15) {
                                            returnedChampion = "dianne_holum";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else {
                                            returnedChampion = "carolina_geijssen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "carolina_geijssen";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "PaysBas";
                                        break;
                                }
                            break;
                    }
                break;

            case "5000mHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Norvege" :
                                        if (age < 35 && age > 25){
                                            returnedChampion = "fred_anton_maier";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "fred_anton_maier";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "PaysBas" :
                                        if (age < 31 && age > 25) {
                                            returnedChampion = "kees_verkerk";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "PaysBas";
                                        }
                                        else if (age <= 25 && age > 18) {
                                            returnedChampion = "peter_nottet";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "PaysBas";
                                        }
                                        else {
                                            returnedChampion = "fred_anton_maier";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "fred_anton_maier";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Norvege";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "fred_anton_maier";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Norvege";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "3000mFemmes" :
                    switch(genre){
                        case "Homme" :
                                returnedChampion = "johanna_schut";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "PaysBas";
                                returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "PaysBas" :
                                        if (age>=22 && age<30){
                                            returnedChampion = "johanna_schut";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "PaysBas";
                                        }
                                        else if (age<21 && age>18) {
                                            returnedChampion = "stien_baas_kaiser";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "PaysBas";
                                        }
                                        else {
                                            returnedChampion = "johanna_schut";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                    case "Finlande" :
                                        if (age<32 && age>23) {
                                            returnedChampion = "kaija_mustonen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Finlande";
                                        }
                                        else {
                                            returnedChampion = "johanna_schut";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "PaysBas";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "johanna_schut";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "PaysBas";
                                        break;
                                }
                            break;
                    }
                break;
            
            case "10000mHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Suede" :
                                        if (age<26 && age > 20) {
                                            returnedChampion = "johnny_hoglin";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Suede";
                                        }
                                        else if (age <33 && age >=20) {
                                            returnedChampion = "orjan_sandler";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suede";
                                        }
                                        else {
                                            returnedChampion = "johnny_hoglin";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Suede";
                                        }
                                        break;
                                    case "Norvege" :
                                        if (age < 33 && age > 27) {
                                            returnedChampion = "fred_anton_maier";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "johnny_hoglin";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "johnny_hoglin";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Norvege";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "johnny_hoglin";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Suede";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;
            
            case "1500mFemmes" :
                    switch(genre){
                        case "Homme" :
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Finlande" :
                                        if (age>23 && age<33) {
                                            returnedChampion = "kaija_mustonen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Finlande";
                                        }
                                        else {
                                            returnedChampion = "kaija_mustonen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Finlande";
                                        }
                                        break;
                                    case "PaysBas" :
                                        if (age<21 && age>15) {
                                            returnedChampion = "carolina_geijssen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "PaysBas";
                                        }
                                        else if (age >= 21 && age< 26) {
                                            returnedChampion = "stien_baas_kaiser";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "PaysBas";
                                        }
                                        else {
                                            returnedChampion = "kaija_mustonen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Finlande";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "kaija_mustonen";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Finlande";
                                        break;
                                }
                            break;
                    }
                break;

            case "500mHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "AllemagneOuest" :
                                        if (age<27 && age>18) {
                                            returnedChampion = "erhard_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        else {
                                            returnedChampion = "erhard_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        break;
                                    case "EtatsUnis" :
                                        if (age>=28 && age< 34) {
                                            returnedChampion = "richard_mcdermott";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else {
                                            returnedChampion = "erhard_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        break;
                                    case "Norvege" :
                                        if (age <28 && age > 22) {
                                            returnedChampion = "magne_thomassen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "erhard_keller";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "AllemagneOuest";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "erhard_keller";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "AllemagneOuest";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "erhard_keller";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "AllemagneOuest";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "500mFemmes" :
                    switch(genre){
                        case "Homme" :
                                returnedChampion = "lyudmila_titova";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "UnionSovietique";
                                returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "UnionSovietique" :
                                        if (age >18 && age< 25) {
                                            returnedChampion = "lyudmila_titova";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "lyudmila_titova";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "EtatsUnis" :
                                        if (age >15 && age<=17) {
                                            returnedChampion = "dianne_holum";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else if (age >17 && age <=21) {
                                            returnedChampion = "jennifer_fish";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else if (age >21 && age <25) {
                                            returnedChampion = "mary_meyers";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "EtatsUnis";
                                        }
                                        else {
                                            returnedChampion = "lyudmila_titova";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                        default : 
                                        returnedChampion = "lyudmila_titova";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                        break;
                                }
                            break;
                    }
                break;

            case "grandTremplinIndividuelHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "UnionSovietique" :
                                        if (age < 25 && age > 18) {
                                            returnedChampion = "vladimir_belusov";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "vladimir_belusov";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "Tchecoslovaquie" :
                                        if (age < 33 && age > 23) {
                                            returnedChampion = "jiri_raska";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Tchecoslovaquie";
                                        }
                                        else {
                                            returnedChampion = "vladimir_belusov";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                    case "Norvege" :
                                        if (age < 29 && age > 20) {
                                            returnedChampion = "lars_grini";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "vladimir_belusov";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "UnionSovietique";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "vladimir_belusov";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "UnionSovietique";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "vladimir_belusov";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "UnionSovietique";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "tremplinNormalIndividuelHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Tchecoslovaquie" :
                                        if (age < 31 && age >23) {
                                            returnedChampion = "jiri_raska";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Tchecoslovaquie";
                                        }
                                        else {
                                            returnedChampion = "jiri_raska";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Tchecoslovaquie";
                                        }
                                        break;
                                    case "Autriche" :
                                        if (age < 27 && age > 20) {
                                            returnedChampion = "reinhold_bachler";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Autriche";
                                        }
                                        else if (age >=27 && age < 33) {
                                            returnedChampion = "baldur_preiml";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "jiri_raska";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Tchecoslovaquie";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "jiri_raska";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Tchecoslovaquie";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "jiri_raska";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "Tchecoslovaquie";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "descenteHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "France" :
                                        if (age < 27 && age > 20) {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "France";
                                        }
                                        else if (age >=27 && age < 34) {
                                            returnedChampion = "guy_perillat";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                    case "Suisse" :
                                        if (age < 27 && age > 19) {
                                            returnedChampion = "jean_daniel_datwyler";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suisse";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "jean_claude_killy";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "France";
                                        break;
                                }
                            break;
                        case "Femme" :
                                returnedChampion = "jean_claude_killy";
                                returnedDiscipline = discipline;
                                returnedMedaille = "aucune";
                                returnedPays = "France";
                                returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "descenteFemmes" :
                    switch(genre){
                        case "Homme" :
                                returnedChampion = "olga_pall";
                                returnedDiscipline = discipline;
                                returnedMedaille = "or";
                                returnedPays = "Autriche";
                                returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Autriche" :
                                        if (age < 25 && age > 18) {
                                            returnedChampion = "olga_pall";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Autriche";
                                        }
                                        else if (age >=25 && age < 30) {
                                            returnedChampion = "christl_haas";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "olga_pall";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                    case "France" :
                                        if (age < 23 && age > 17) {
                                            returnedChampion = "isabelle_mir";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "olga_pall";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Autriche";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "olga_pall";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Autriche";
                                        break;
                                }
                            break;
                    }
                break;

            case "slalomHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "France" :
                                        if (age > 20 && age < 30) {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                    case "Autriche" :
                                        if (age < 28 && age >=21) {
                                            returnedChampion = "herbert_huber";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Autriche";
                                        }
                                        else if (age < 21 && age > 17) {
                                            returnedChampion = "alfred_matt";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "jean_claude_killy";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "France";
                                        break;
                                }
                            break;
                        case "Femme" :
                            returnedChampion = "jean_claude_killy";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "France";
                            returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "slalomFemmes" :
                    switch(genre){
                        case "Homme" :
                            returnedChampion = "marielle_goitschel";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "France";
                            returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "France" :
                                        if (age < 28 & age >= 23) {
                                            returnedChampion = "marielle_goitschel";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "France";
                                        }
                                        else if (age <23 && age > 19) {
                                            returnedChampion = "annie_famose";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "marielle_goitschel";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                    case "Canada" :
                                        if (age < 30 && age > 25) {
                                            returnedChampion = "nancy_greene";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Canada";
                                        }
                                        else {
                                            returnedChampion = "marielle_goitschel";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "marielle_goitschel";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "France";
                                        break;
                                }
                            break;
                    }
                break;

            case "slalomGeantHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "France" :
                                        if (age < 30 && age > 20) {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                    case "Suisse" :
                                        if (age < 30 && age > 20) {
                                            returnedChampion = "willy_favre";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suisse";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                    case "Autriche" :
                                        if (age < 34 && age > 26) {
                                            returnedChampion = "heinrich_messner";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Autriche";
                                        }
                                        else {
                                            returnedChampion = "jean_claude_killy";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "France";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "jean_claude_killy";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "France";
                                        break;
                                }
                            break;
                        case "Femme" :
                            returnedChampion = "jean_claude_killy";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "France";
                            returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "slalomGeantFemmes" :
                    switch(genre){
                        case "Homme" :
                            returnedChampion = "nancy_greene";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Canada";
                            returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Canada" :
                                        if (age < 30 && age > 20) {
                                            returnedChampion = "nancy_greene";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Canada";
                                        }
                                        else {
                                            returnedChampion = "nancy_greene";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Canada";
                                        }
                                        break;
                                    case "France" :
                                        if (age < 29 && age > 19) {
                                            returnedChampion = "annie_famose";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "France";
                                        }
                                        else {
                                            returnedChampion = "nancy_greene";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Canada";
                                        }
                                        break;
                                    case "Suisse" :
                                        if (age < 27 && age > 18) {
                                            returnedChampion = "fernande_bochatay";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suisse";
                                        }
                                        else {
                                            returnedChampion = "nancy_greene";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Canada";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "nancy_greene";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Canada";
                                        break;
                                }
                            break;
                    }
                break;

            case "50kmHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Norvege" :
                                        if (age < 34 && age > 26) {
                                            returnedChampion = "ole_ellefsaeter";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "ole_ellefsaeter";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "UnionSovietique" :
                                        if (age <31 && age > 24) {
                                            returnedChampion = "vyacheslav_vedenin";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "ole_ellefsaeter";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "Suisse" :
                                        if (age < 35 && age > 26) {
                                            returnedChampion = "joseph_haas";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suisse";
                                        }
                                        else {
                                            returnedChampion = "ole_ellefsaeter";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "ole_ellefsaeter";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Norvege";
                                        break;
                                }
                            break;
                        case "Femme" :
                            returnedChampion = "ole_ellefsaeter";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Norvege";
                            returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "relai3x5kmFemmes" :
                    switch(genre){
                        case "Homme" :
                            returnedChampion = "equipe_norvege_relai3x5kmfemmes";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Norvege";
                            returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Norvege" :
                                        if (age > 23 && age < 32) {
                                            returnedChampion = "equipe_norvege_relai3x5kmfemmes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "equipe_norvege_relai3x5kmfemmes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "Suede" :
                                        if (age > 28 && age < 36) {
                                            returnedChampion = "equipe_suede_relai3x5kmfemmes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Suede";
                                        }
                                        else {
                                            returnedChampion = "equipe_norvege_relai3x5kmfemmes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "UnionSovietique" :
                                        if (age > 27 && age < 35) {
                                            returnedChampion = "equipe_unionsovietique_relai3x5kmfemmes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "equipe_norvege_relai3x5kmfemmes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "equipe_norvege_relai3x5kmfemmes";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Norvege";
                                        break;
                                }
                            break;
                    }
                break;

            case "relai4x10kmHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Norvege" :
                                        if (age <33 && age > 25) {
                                            returnedChampion = "equipe_norvege_relai4x10kmhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "equipe_norvege_relai4x10kmhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "Suede" :
                                        if (age > 24 && age < 31) {
                                            returnedChampion = "equipe_suede_relai4x10kmhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Suede";
                                        }
                                        else {
                                            returnedChampion = "equipe_norvege_relai4x10kmhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "Finlande" :
                                        if (age > 25 && age < 35) {
                                            returnedChampion = "equipe_finlande_relai4x10kmhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Finlande";
                                        }
                                        else {
                                            returnedChampion = "equipe_norvege_relai4x10kmhommes";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "equipe_norvege_relai4x10kmhommes";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Norvege";
                                        break;
                                }
                            break;
                        case "Femme" :
                            returnedChampion = "equipe_norvege_relai4x10kmhommes";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Norvege";
                            returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "5kmFemmes" :
                    switch(genre){
                        case "Homme" :
                            returnedChampion = "toini_gustafsson";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Suede";
                            returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Suede" :
                                        if (age > 25 && age < 35) {
                                            returnedChampion = "toini_gustafsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Suede";
                                        }
                                        else {
                                            returnedChampion = "toini_gustafsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Suede";
                                        }
                                        break;
                                    case "UnionSovietique" :
                                        if (age > 22 && age <=31) {
                                            returnedChampion = "galina_kulakova";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else if (age > 31 && age < 43) {
                                            returnedChampion = "alevtina_kolchina";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "UnionSovietique";
                                        }
                                        else {
                                            returnedChampion = "toini_gustafsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Suede";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "toini_gustafsson";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Suede";
                                        break;
                                }
                            break;
                    }
                break;

            case "15kmHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Norvege" :
                                        if (age < 39 && age > 30) {
                                            returnedChampion = "harald_gronningen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "harald_gronningen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "Finlande" :
                                        if (age < 35 && age > 27) {
                                            returnedChampion = "eero_mantyranta";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Finlande";
                                        }
                                        else {
                                            returnedChampion = "harald_gronningen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                    case "Suede" :
                                        if (age < 28 && age > 19) {
                                            returnedChampion = "gunnar_larsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Suede";
                                        }
                                        else {
                                            returnedChampion = "harald_gronningen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Norvege";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "harald_gronningen";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Norvege";
                                        break;
                                }
                            break;
                        case "Femme" :
                            returnedChampion = "harald_gronningen";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Norvege";
                            returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;

            case "10kmFemmes" :
                    switch(genre){
                        case "Homme" :
                            returnedChampion = "toini_gustafsson";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Suede";
                            returnedGenre = "erreurHomme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                        case "Femme" :
                                switch(pays) {
                                    case "Suede" :
                                        if (age > 25 && age < 35) {
                                            returnedChampion = "toini_gustafsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Suede";
                                        }
                                        else {
                                            returnedChampion = "toini_gustafsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Suede";
                                        }
                                        break;
                                    case "Norvege" :
                                        if (age > 20 && age <=25) {
                                            returnedChampion = "berit_mordre_lammedal";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Norvege";
                                        }
                                        else if (age > 25 && age < 31) {
                                            returnedChampion = "inger_aufles";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "toini_gustafsson";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Suede";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "toini_gustafsson";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Suede";
                                        break;
                                }
                            break;
                    }
                break;

            case "30kmDepartGroupeHommes" :
                    switch(genre){
                        case "Homme" :
                                switch(pays) {
                                    case "Italie" :
                                        if (age < 33 && age > 24) {
                                            returnedChampion = "franco_nones";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "or";
                                            returnedPays = "Italie";
                                        }
                                        else {
                                            returnedChampion = "franco_nones";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "Norvege" :
                                        if (age < 31 && age > 21) {
                                            returnedChampion = "odd_martinsen";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "argent";
                                            returnedPays = "Norvege";
                                        }
                                        else {
                                            returnedChampion = "franco_nones";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                    case "Finlande" :
                                        if (age < 35 && age > 26) {
                                            returnedChampion = "eero_mantyranta";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "bronze";
                                            returnedPays = "Finlande";
                                        }
                                        else {
                                            returnedChampion = "franco_nones";
                                            returnedDiscipline = discipline;
                                            returnedMedaille = "aucune";
                                            returnedPays = "Italie";
                                        }
                                        break;
                                        default :
                                        returnedChampion = "franco_nones";
                                        returnedDiscipline = discipline;
                                        returnedMedaille = "aucune";
                                        returnedPays = "Italie";
                                        break;
                                }
                            break;
                        case "Femme" :
                            returnedChampion = "franco_nones";
                            returnedDiscipline = discipline;
                            returnedMedaille = "aucune";
                            returnedPays = "Italie";
                            returnedGenre = "erreurFemme";
                            // cas erreur, afficher le texte et prendre le pays gagnant
                            break;
                    }
                break;
                

        }

        //AFFICHAGE DES RÉSULTATS SUR LA PAGE DÉDIÉE

        //Résultats joueur
        $(".genre_joueur").append("<a>Vous êtes </a>" + tab_correspondance_genre[genre]);
        $(".age_joueur").append("<a>Vous avez " + age + " ans</a>");
        $(".discipline_joueur").append("<a>Vous concourez en </a>" + tab_correspondance_discipline[returnedDiscipline]);
        $(".pays_joueur").append("<a>Vous avez choisi de concourir pour </a>" + tab_correspondance_pays[pays]);
        
        if (reponses[0] == "Homme"){ //icône joueur, homme ou femme
            $(".img_joueur").append("<img class='img_object' src='images/champion_img/avatar/Homme.png'>");
        }
        else {
            $(".img_joueur").append("<img class='img_object' src='images/champion_img/avatar/Femme.png'>")
        }

        //Résultats milieu
        $(".conteneur_medaille").append("<img class='img_object' src='images/champion_img/" + returnedMedaille + ".png'>");
        if (returnedMedaille == "aucune"){
            $(".dernier_texte_medaille").append("<a>Vous n'êtes malheureusement pas sur le prodium ...<br>Voyez cependant ci-contre la personne médaillée d'or dans la discipline que vous avez choisie !</a>");
        }
        else {
            $(".dernier_texte_medaille").append("<a>Félicitations ! Vous vous trouvez sur le podium ! Votre profil correspond à celui de la personne présentée ci-contre !");
        }
        $(".pays_champion").append("<img class='drapeau_resultat' src='images/champion_img/drapeaux/" + returnedPays + ".png'>");

        //Résultats champion
        $(".img_champion").append("<img class='img_object' src='images/champion_img/avatar/"+ returnedChampion + ".png'>");
        $(".nom_champion").append("<a style='text-transform: uppercase;'>" + tab_correspondance_champion[returnedChampion] + "</a>");
        $(".age_champion").append(tab_correspondance_age[returnedChampion] + "<a> ans</a>");
        $(".discipline_champion").append(tab_correspondance_discipline[returnedDiscipline]);

        //Textes page résultat2
        $(".texte_discipline").load("champion_container.html " + "#" + returnedDiscipline);
        $(".texte_delegation").load("champion_container.html " + "#" + reponses[3]);
        $(".texte_contexte").load("champion_container.html " + "#" + tab_correspondance_sport_discipline[returnedDiscipline] + "_" + reponses[0]);
        
        // ON AFFICHE EN CONSOLE LE TABLEAU DE RESULTATS
        var tabToDisplay = [returnedMedaille, returnedPays, returnedDiscipline, returnedChampion, returnedGenre];
        tabToDisplay.forEach(function (item, index) {
            console.log(item, index);
        });


        console.log(score);
        $('#troisiemeReponse').removeClass().addClass('animated fadeOutLeft etape');
        $('#ecranResultat').removeClass().show().addClass('animated fadeInRight etape');
    }
    });


    $('.btn-resultat-suivant').click(function () {
        $('#ecranResultat').removeClass().addClass('animated fadeOutUp etape');
        $('#ecranResultat2').removeClass().show().addClass('animated fadeInUp etape');
    });

    $('.btn-resultat-retour').click(function () {
        $('#ecranResultat2').removeClass().addClass('animated fadeOutDown etape');
        $('#ecranResultat').removeClass().addClass('animated fadeInDown etape');
    });


    //TABLEAUX DE CORRESPONDANCE (disciplines, genre, pays, athlètes)
    
    var tab_correspondance_pays = {
        "AllemagneEst" : "l'Allemagne de l'Est",
        "AllemagneOuest" : "l'Allemagne de l'Ouest",
        "Argentine" : "l'Argentine",
        "Australie" : "l'Australie",
        "Autriche" : "l'Autriche",
        "Bulgarie" : "la Bulgarie",
        "Canada" : "le Canada",
        "Chili" : "le Chili",
        "CoreeDuSud" : "la Corée du Sud",
        "Danemark" : "le Danemark",
        "Espagne" : "l'Espagne",
        "EtatsUnis" : "les États-Unis",
        "Finlande" : "la Finlande",
        "France" : "la France",
        "GrandeBretagne" : "la Grande Bretagne",
        "Grece" : "la Grèce",
        "Hongrie" : "la Hongrie",
        "Inde" : "l'Inde",
        "Iran" : "l'Iran",
        "Islande" : "l'Islande",
        "Italie" : "l'Italie",
        "Japon" : "le Japon",
        "Liban" : "le Liban",
        "Liechtenstein" : "le Liechtenstein",
        "Maroc" : "le Maroc",
        "Mongolie" : "la Mongolie",
        "Norvege" : "la Norvège",
        "NouvelleZelande" : "la Nouvelle-Zélande",
        "PaysBas" : "les Pays-Bas",
        "Pologne" : "la Pologne",
        "Roumanie" : "la Roumanie",
        "Suede" : "la Suède",
        "Suisse" : "la Suisse",
        "Tchecoslovaquie" : "la Tchécoslovaquie",
        "Turquie" : "la Turquie",
        "UnionSovietique" : "l'Union soviétique",
        "Yougoslavie" : "la Yougoslavie",
    }

    var tab_correspondance_genre = {
        "Homme" : "un homme",
        "Femme" : "une femme"
    }
    var tab_correspondance_discipline = {
        "20kmHommes" : "Biathlon en 20KM hommes",
        "relais4X7" : "Biathlon en relais 4x7,5KM hommes",
        "bobDeuxHommes" : "Bobsleigh : bob à deux hommes ",
        "bobQuatreHommes" : "Bobsleigh : bob à quatre hommes",
        "combineIndividuelHommes" :"Combiné nordique en individuel hommes",
        "Hommes" : "Hockey sur glace hommes",
        "lugeSimpleHommes" : "Luge simple hommes",
        "lugeSimpleFemmes" : "Luge simple femmes",
        "lugeDoubleMixte" : "Luge en double mixte",
        "individuelHommes" : "Patinage artistique en individuel hommes",
        "individuelFemmes" : "Patinage artistique en individuel femmes",
        "coupleMixte" : "Patinage artistique en couple mixte",
        "1500mHommes" : "Patinage de vitesse en 1 500M hommes",
        "1000mFemmes" : "Patinage de vitesse en 1 000M femmes",
        "5000mHommes" : "Patinage de vitesse en 5 000M hommes",
        "3000mFemmes" : "Patinage de vitesse en 3 000M femmes",
        "10000mHommes" : "Patinage de vitesse en 10 000M hommes",
        "1500mFemmes" : "Patinage de vitesee en 1 500M femmes",
        "500mHommes" : "Patinage de vitesse en 500M hommes",
        "500mFemmes" : "Patinage de vitesse en 500M femmes",
        "grandTremplinIndividuelHommes" : "Saut à ski : grand tremplin individuel hommes",
        "tremplinNormalIndividuelHommes" : "Saut à ski : tremplin normal individuel hommes",
        "descenteHommes" : "Ski alpin en descente hommes",
        "descenteFemmes" : "Ski alpin en descente femmes",
        "slalomHommes" : "Ski alpin en slalom hommes",
        "slalomFemmes" : "Ski alpin en slalom femmes",
        "slalomGeantHommes" : "Ski alpin en slalom géant hommes",
        "slalomGeantFemmes" : "Ski alpin en slalom géant femmes",
        "50kmHommes" : "Ski de fond en 50KM hommes",
        "relai3x5kmFemmes" : "Ski de fond : relais 3x5KM femmes",
        "relai4x10kmHommes" : "Ski de fond : relais 4x10KM hommes",
        "5kmFemmes" : "Ski de fond en 5KM femmes",
        "15kmHommes" : "Ski de fond en 15KM hommes",
        "10kmFemmes" : "Ski de fond en 10KM femmes",
        "30kmDepartGroupeHommes" : "Ski de fond en 30KM en départ groupé hommes",
    }

    var tab_correspondance_sport_discipline = {
        "20kmHommes" : "Biathlon",
        "relais4X7" : "Biathlon",
        "bobDeuxHommes" : "Bobsleigh",
        "bobQuatreHommes" : "Bobsleigh",
        "combineIndividuelHommes" :"CombineNordique",
        "Hommes" : "Hockey",
        "lugeSimpleHommes" : "Luge",
        "lugeSimpleFemmes" : "Luge",
        "lugeDoubleMixte" : "Luge",
        "individuelHommes" : "PatinageArtistique",
        "individuelFemmes" : "PatinageArtistique",
        "coupleMixte" : "PatinageArtistique",
        "1500mHommes" : "PatinageVitesse",
        "1000mFemmes" : "PatinageVitesse",
        "5000mHommes" : "PatinageVitesse",
        "3000mFemmes" : "PatinageVitesse",
        "10000mHommes" : "PatinageVitesse",
        "1500mFemmes" : "PatinageVitesse",
        "500mHommes" : "PatinageVitesse",
        "500mFemmes" : "PatinageVitesse",
        "grandTremplinIndividuelHommes" : "SautASki",
        "tremplinNormalIndividuelHommes" : "SautASki",
        "descenteHommes" : "SkiAlpin",
        "descenteFemmes" : "SkiAlpin",
        "slalomHommes" : "SkiAlpin",
        "slalomFemmes" : "SkiAlpin",
        "slalomGeantHommes" : "SkiAlpin",
        "slalomGeantFemmes" : "SkiAlpin",
        "50kmHommes" : "SkiDeFond",
        "relai3x5kmFemmes" : "SkiDeFond",
        "relai4x10kmHommes" : "SkiDeFond",
        "5kmFemmes" : "SkiDeFond",
        "15kmHommes" : "SkiDeFond",
        "10kmFemmes" : "SkiDeFond",
        "30kmDepartGroupeHommes" : "SkiDeFond",
    }

    var tab_correspondance_champion = {
        "magnar_solberg" : "Magnar Solberg",
        "franz_keller" : "Franz Keller",
        "manfred_schmid" : "Manfred Schmid",
        "erika_lechner" : "Erika Lechner",
        "wolfgang_schwarz" : "Wolfgang Schwarz",
        "peggy_fleming" : "Peggy Fleming",
        "kees_verkerk" : "Kees Verkerk",
        "carolina_geijssen" : "Carolina Geijssen",
        "fred_anton_maier" : "Fred Anton Maier",
        "johanna_schut" : "Johanna Schut",
        "johnny_hoglin" : "Johnny Hoglin",
        "kaija_mustonen" : "Kaija Mustonen",
        "erhard_keller" : "Erhard Keller",
        "lyudmila_titova" : "Lyudmila Titova",
        "vladimir_belusov" : "Vladimir Belusov",
        "jiri_raska" : "Jiri Raska",
        "jean_claude_killy" : "Jean-Claude Killy",
        "olga_pall" : "Olga Pall",
        "marielle_goitschel" : "Marielle Goitschel",
        "nancy_greene" : "Nancy Greene",
        "ole_ellefsaeter" : "Ole Ellefsæter",
        "toini_gustafsson" : "Toini Gustafsson",
        "harald_gronningen" : "Harald Grønningen",
        "franco_nones" : "Franco Nones",
        "aleksandr_tikhonov" : "Aleksandr Tikhonov",
        "alois_kalin" : "Alois Kälin",
        "thomas_kohler" : "Thomas Köhler",
        "christa_schmuck" : "Christa Schmuck",
        "tim_wood" : "Tim Wood",
        "gabriele_seyfert" : "Gabriele Seyfert",
        "ard_schenk" : "Ard Schenk",
        "ivar_eriksen" : "Ivar Eriksen",
        "richard_mcdermott" : "Richard McDermott",
        "magne_thomassen" : "Magne Thomassen",
        "dianne_holum" : "Dianne Holum",
        "mary_meyers" : "Mary Meyers",
        "jennifer_fish" : "Jennifer Fish",
        "reinhold_bachler" : "Reinhold Bachler",
        "guy_perillat" : "Guy Perillat",
        "isabelle_mir" : "Isabelle Mir",
        "herbert_huber" : "Herbert Huber",
        "willy_favre" : "Willy Favre",
        "annie_famose" : "Annie Famose",
        "vyacheslav_vedenin" : "Vyacheslav Vedenin",
        "galina_kulakova" : "Galina Kulakova",
        "eero_mantyranta" : "Eero Mantyranta",
        "berit_mordre_lammedal" : "Berit Mordre-Lammedal",
        "odd_martinsen" : "Ode Martinsen",
        "vladimir_gundartsev" : "Vladimir Gundartsev",
        "andreas_kunz" : "Andreas Kunz",
        "klausmichael_bonsack" : "Klaus-Michael Bonsack",
        "angelika_dunhaupt" : "Angelika Dünhaupt",
        "patrick_pera" : "Patrick Pera",
        "hana_maskova" : "Hana Maskova",
        "peter_nottet" : "Peter Nottet",
        "stien_baas_kaiser" : "Stien Baas-Kaiser",
        "orjan_sandler" : "Örjan Sandler",
        "lars_grini" : "Lars Grini",
        "baldur_preiml" : "Baldur Preiml",
        "jean_daniel_datwyler" : "Jean-Daniel Datwyler",
        "christl_haas" : "Christl Haas",
        "alfred_matt" : "Alfred Matt",
        "heinrich_messner" : "Heinrich Messner",
        "fernande_bochatay" : "Fernande Bochatay",
        "joseph_haas" : "Joseph Haas",
        "alevtina_kolchina" : "Alevtina Kolchina",
        "gunnar_larsson" : "Gunnar Larsson",
        "inger_aufles" : "Inger Aufles",
        "equipe_norvege_relai3x5kmfemmes" : "ÉQUIPE",
        "equipe_norvege_relai4x10kmhommes" : "ÉQUIPE",
        "equipe_norvege_relai4x7" : "ÉQUIPE",
        "equipe_allemagneest_lugedoublemixte" : "ÉQUIPE",
        "equipe_allemagneouest_bobdeuxhommes" : "ÉQUIPE",
        "equipe_allemagneouest_couplemixte" : "ÉQUIPE",
        "equipe_allemagneouest_lugedoublemixte" : "ÉQUIPE",
        "equipe_autriche_bobquatrehommes" : "ÉQUIPE",
        "equipe_autriche_lugedoublemixte" : "ÉQUIPE",
        "equipe_canada_hockey" : "ÉQUIPE",
        "equipe_finlande_relai4x10kmhommes" : "ÉQUIPE",
        "equipe_italie_bobdeuxhommes" : "ÉQUIPE",
        "equipe_italie_bobquatrehommes" : "ÉQUIPE",
        "equipe_roumanie_bobdeuxhommes" : "ÉQUIPE",
        "equipe_suede_relai3x5kmfemmes" : "ÉQUIPE",
        "equipe_suede_relai4x10kmhommes" : "ÉQUIPE",
        "equipe_suede_relai4x7" : "ÉQUIPE",
        "equipe_suisse_bobquatrehommes" : "ÉQUIPE",
        "equipe_tchecoslovaquie_hockey" : "ÉQUIPE",
        "equipe_unionsovietique_couplemixte" : "ÉQUIPE",
        "equipe_unionsovietique_couplemixte_argent" : "ÉQUIPE",
        "equipe_unionsovietique_couplemixte_or" : "ÉQUIPE",
        "equipe_unionsovietique_hockey" : "ÉQUIPE",
        "equipe_unionsovietique_relai3x5kmfemmes" : "ÉQUIPE",
        "equipe_unionsovietique_relai4x7" : "ÉQUIPE",
        }

        var tab_correspondance_age = {
            "magnar_solberg" : "31",
            "franz_keller" : "23",
            "manfred_schmid" : "24",
            "erika_lechner" : "21",
            "wolfgang_schwarz" : "21",
            "peggy_fleming" : "20",
            "kees_verkerk" : "26",
            "carolina_geijssen" : "21",
            "fred_anton_maier" : "30",
            "johanna_schut" : "22",
            "johnny_hoglin" : "25",
            "kaija_mustonen" : "27",
            "erhard_keller" : "22",
            "lyudmila_titova" : "22",
            "vladimir_belusov" : "22",
            "jiri_raska" : "27",
            "jean_claude_killy" : "25",
            "olga_pall" : "21",
            "marielle_goitschel" : "23",
            "nancy_greene" : "25",
            "ole_ellefsaeter" : "29",
            "toini_gustafsson" : "30",
            "harald_gronningen" : "34",
            "franco_nones" : "27",
            "aleksandr_tikhonov" : "21",
            "alois_kalin" : "29",
            "thomas_kohler" : "28",
            "christa_schmuck" : "24",
            "tim_wood" : "20",
            "gabriele_seyfert" : "20",
            "ard_schenk" : "24",
            "ivar_eriksen" : "26",
            "richard_mcdermott" : "28",
            "magne_thomassen" : "27",
            "dianne_holum" : "17",
            "mary_meyers" : "22",
            "jennifer_fish" : "19",
            "reinhold_bachler" : "24",
            "guy_perillat" : "28",
            "isabelle_mir" : "19",
            "herbert_huber" : "24",
            "willy_favre" : "25",
            "annie_famose" : "24",
            "vyacheslav_vedenin" : "27",
            "galina_kulakova" : "26",
            "eero_mantyranta" : "31",
            "berit_mordre_lammedal" : "24",
            "odd_martinsen" : "26",
            "vladimir_gundartsev" : "24",
            "andreas_kunz" : "22",
            "klausmichael_bonsack" : "27",
            "angelika_dunhaupt" : "22",
            "patrick_pera" : "19",
            "hana_maskova" : "19",
            "peter_nottet" : "22",
            "stien_baas_kaiser" : "20",
            "orjan_sandler" : "28",
            "lars_grini" : "24",
            "baldur_preiml" : "29",
            "jean_daniel_datwyler" : "23",
            "christl_haas" : "25",
            "alfred_matt" : "20",
            "heinrich_messner" : "29",
            "fernande_bochatay" : "22",
            "joseph_haas" : "31",
            "alevtina_kolchina" : "38",
            "gunnar_larsson" : "24",
            "inger_aufles" : "27",
            "equipe_norvege_relai3x5kmfemmes" : "28",
            "equipe_norvege_relai4x10kmhommes" : "28",
            "equipe_norvege_relai4x7" : "30",
            "equipe_allemagneest_lugedoublemixte" : "27",
            "equipe_allemagneouest_bobdeuxhommes" : "30",
            "equipe_allemagneouest_couplemixte" : "23",
            "equipe_allemagneouest_lugedoublemixte" : "33",
            "equipe_autriche_bobquatrehommes" : "29",
            "equipe_autriche_lugedoublemixte" : "26",
            "equipe_canada_hockey" : "24",
            "equipe_finlande_relai4x10kmhommes" : "30",
            "equipe_italie_bobdeuxhommes" : "33",
            "equipe_italie_bobquatrehommes" : "28",
            "equipe_roumanie_bobdeuxhommes" : "30",
            "equipe_suede_relai3x5kmfemmes" : "32",
            "equipe_suede_relai4x10kmhommes" : "27",
            "equipe_suede_relai4x7" : "25",
            "equipe_suisse_bobquatrehommes" : "31",
            "equipe_tchecoslovaquie_hockey" : "25",
            "equipe_unionsovietique_couplemixte" : "34",
            "equipe_unionsovietique_couplemixte_argent" : "22",
            "equipe_unionsovietique_couplemixte_or" : "34",
            "equipe_unionsovietique_hockey" : "26",
            "equipe_unionsovietique_relai3x5kmfemmes" : "31",
            "equipe_unionsovietique_relai4x7" : "26",
            }


    //ECRAN DE RESULTAT
    $('.btn-resultat-recommencer').click(function () {
        window.location.reload(true);
    });

    $('.btn-resultat-accueil').click(function () {
        window.location.reload(true);

    });

    // BOUTONS DISCIPLINES

    $('.btn-biathlon').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#biathlon').show();
    });

    $('.btn-bobsleigh').click(function () {
        $('#biathlon').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#bobsleigh').show();
    });

    $('.btn-combine').click(function () {
        $('#bobsleigh').hide();
        $('#biathlon').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#combineNordique').show();
    });

    $('.btn-hockey').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#biathlon').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#hockeySurGlace').show();
    });

    $('.btn-luge').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#biathlon').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#luge').show();
    });

    $('.btn-patinageArtistique').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#biathlon').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#patinageArtistique').show();
    });

    $('.btn-patinageVitesse').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#biathlon').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#patinageVitesse').show();
    });

    $('.btn-sautASki').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#biathlon').hide();
        $('#skiAlpin').hide();
        $('#skiDeFond').hide();
        $('#sautASki').show();
    });

    $('.btn-skiAlpin').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#biathlon').hide();
        $('#skiDeFond').hide();
        $('#skiAlpin').show();
    });

    $('.btn-skiDeFond').click(function () {
        $('#bobsleigh').hide();
        $('#combineNordique').hide();
        $('#hockeySurGlace').hide();
        $('#luge').hide();
        $('#patinageArtistique').hide();
        $('#patinageVitesse').hide();
        $('#sautASki').hide();
        $('#skiAlpin').hide();
        $('#biathlon').hide();
        $('#skiDeFond').show();
    });

    // PASSAGE DES CHOIX DANS UN TABLEAU
        var reponses = ["undefined", "undefined", "undefined", "undefined"];
        $("input[type='radio'] , input[type='number']").on('change', function () { // dès que les boutons radio changent on lance ça
            var selectedValueGenre = $("input[name='genre']:checked").val(); //vérification des boutons radios cochés et ajout de leur valeur à une variable
            var selectedValueAge = $("input[name='age']").val();

            var selectedValueDiscipline = $("input[name='discipline']:checked").val();

            var selectedValuePays = $("input[name='pays']:checked").val();

            reponses = [selectedValueGenre, selectedValueAge, selectedValueDiscipline, selectedValuePays]; //on construit le tableau
            reponses.forEach(function (item, index) { //on affiche en console le tableau
                console.log(item, index);
            }
                            );

            console.log(reponses);

        });
});