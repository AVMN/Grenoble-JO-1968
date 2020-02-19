

/* 
 * Workaround for 1px lines appearing in some browsers due to fractional transforms
 * and resulting anti-aliasing.
 * https://github.com/Leaflet/Leaflet/issues/3575
 */
(function(){
    var originalInitTile = L.GridLayer.prototype._initTile
    L.GridLayer.include({
        _initTile: function (tile) {
            originalInitTile.call(this, tile);

            var tileSize = this.getTileSize();

            tile.style.width = tileSize.x + 1 + 'px';
            tile.style.height = tileSize.y + 1 + 'px';
        }
    });
})()



// Initialisation de la MAP avec un zoom au centre de Grenoble
var mymap = L.map('map', { 
    center: [45.174757, 5.701225],
    zoom: 13
    }
);

// Ajout du layer de carte pour les tuiles
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGl4ZWxpeiIsImEiOiJjazNhM2NlaGYwOGVsM2JxaGI5ODNvNGV2In0.JxehnRArItKq_2OFbVyb-A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoicGl4ZWxpeiIsImEiOiJjazNhM2NlaGYwOGVsM2JxaGI5ODNvNGV2In0.JxehnRArItKq_2OFbVyb-A'
}).addTo(mymap);

// Custom Marker
var palais = L.icon({
    iconUrl: 'images/icone-palais.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [80, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});

var palais = L.icon({
    iconUrl: 'images/icone-palais.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [80, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});


var anneau = L.icon({
    iconUrl: 'images/icone-anneau.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [80, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});

var tremplin = L.icon({
    iconUrl: 'images/icone-tremplin.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [80, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});



var alpexpo = L.icon({
    iconUrl: 'images/icone-alpexpo.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [80, 80], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, -50] // point from which the popup should open relative to the iconAnchor
});



// Marqueur 1 :
L.marker([45.18488, 5.741258] , {icon: palais} ).addTo(mymap)
    .bindPopup('<a href="#" data-toggle="modal" data-target="#modale1"> <h5>Palais des sports</h5><img src="images/slider-palais.png"></a>');
	

// Marqueur 2 :
L.marker([45.184094, 5.737224] , {icon: anneau} ).addTo(mymap)
    .bindPopup('<a href="#" data-toggle="modal" data-target="#modale2"><h5>Anneau de vitesse</h5><img src="images/slider-anneau.png"></a>');

// Marqueur 3 :
L.marker([45.164889, 5.634176] , {icon: tremplin} ).addTo(mymap)
    .bindPopup('<a href="#" data-toggle="modal" data-target="#modale3"><h5>Tremplin de St-Nizier</h5><img src="images/slider-tremplin.png"></a>');


// Marqueur 4 :
L.marker([45.155275, 5.733587] , {icon: alpexpo} ).addTo(mymap)
    .bindPopup('<a href="#" data-toggle="modal" data-target="#modale4"><h5>Alpexpo gare routière</h5><img src="images/slider-alpexpo.png"></a>');
	
// Divers avec jQuery

jQuery(document).ready(function(){

    // console.log('JS de la carte chargé !');

    // Voici un code simple qui te permet de gérer au cas par cas pour tes actions
    // sur les boutons

    // 1: quand je clique sur un lien (n'importe lequel dans la div modal-footer)
    $('.modal-footer a').click(function(e){

        // J'empeche le comportement par défaut
        e.preventDefault();

        // Je regarde sur lequel je clique et je sauvegarde son ID
        var id = $(this).attr('id');

        // Dans tous les cas j'ajoute une classe sur la balise figure pour la cacher
        $(this).parents().find('figure').addClass('d-none');

        // Dans tous les cas je fais afficher le bouton Retour
        $(this).siblings('#back').removeClass('d-none');

        // Ici je fais plein de conditions pour chaque cas
        if(id === 'past') {
            $(this).parents().find('.modal-body').find('.' + id + '').removeClass('d-none').addClass('fadeIn');
            $(this).parents().find('.modal-body').find('.future').removeClass('fadeIn').addClass('d-none');
        } else if(id === 'future') {
            $(this).parents().find('.modal-body').find('.' + id + '').removeClass('d-none').addClass('fadeIn');
            $(this).parents().find('.modal-body').find('.past').removeClass('fadeIn').addClass('d-none');
        } else if(id === 'back') {
            $(this).addClass('d-none');
            $(this).parents().find('figure').removeClass('d-none');
            $(this).parents().find('.modal-body').find('.future , .past').removeClass('fadeIn').addClass('d-none');
        }
    });
    
    // Stop Video quand on ferme la modale & je ré-initialise les
    // contenus qui sont affichés
    var past = $('.past');
    var futur = $(".future");
    var present = $('.cd-image-container');
    var back = $(".modal-footer #back");

    console.log(back);

    $('[id^=modale]').on('hidden.bs.modal', function (e) {

        // Pause : les internautes peuvent revenir sur la vidéo
        // pendant la découverte. Tout est séparé pour que vous
        // puissiez faire facilement du code dédié à chaque 
        // espace des modales

        // Mettre en pause la vidéo quand on quitte
        $('[id^=modale] .past video').trigger('pause');

        // Faire des actions sur chaque boite modale pour 
        // chaque espace (passé / futur / bouton retour etc)
        past.each(function(){
            $(this).addClass('d-none');
        });

        futur.each(function(){
            $(this).addClass('d-none');
        });

        present.each(function(){
            $(this).removeClass('d-none');
        });

        back.each(function(){
            $(this).addClass('d-none');
        });

    });

    // Modale actions à l'ouverture
    $('[id^=modale]').on('show.bs.modal', function (e) {
        var past = $(this).find('.past');
        var futur = $(this).find(".future");
        var present = $(this).find('.cd-image-container');
        $(present[0]).removeClass('d-none');
        $(past[0] , futur[0]).addClass('d-none');
    });

    // Mettre en pause la vidéo quand on clique sur Back
    $('#back , #future').click(function(){
        $('[id^=modale] .past video').trigger('pause');
    });

});