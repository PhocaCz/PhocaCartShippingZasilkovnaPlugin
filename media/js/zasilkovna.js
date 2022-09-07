var phParamsPlgPcsZasilkovna = Joomla.getOptions('phParamsPlgPcsZasilkovna');
var phLangPlgPcsZasilkovna = Joomla.getOptions('phLangPlgPcsZasilkovna');
var packetaApiKey = phParamsPlgPcsZasilkovna['apiKey'];


function phSetCheckboxActive(id){
    document.getElementById(id).checked = true;
}

function showSelectedPickupPoint(point) {

    


    var infoElement = document.getElementById('packeta-point-info');
    if (point) {
        
        /* Display Branch info immediately */
        if (point.photo[0].thumbnail)

        var info = '';
        var photo = '';
        if (typeof point.photo[0].thumbnail !== 'undefined') {
            photo = point.photo[0].thumbnail;
            
            info += '<div class="ph-checkout-zasilkovna-info-photo"><img src="'+photo+'" alt="'+point.name+'" /></div>';
        } 
       

        info += '<div class="ph-checkout-zasilkovna-info-name">' + point.name + ", " + point.zip + " " + point.city + '</div>';

        infoElement.innerHTML = info;

        /* Add Branch info to form fields - to store them */
        if (phParamsPlgPcsZasilkovna['fields'].length !== 0) {
            for (let index = 0; index < phParamsPlgPcsZasilkovna['fields'].length; ++index) {
                const element = phParamsPlgPcsZasilkovna['fields'][index];
                var elementId = 'packeta-field-' + element;

                if (element == 'thumbnail') {
                    if (typeof point.photo[0].thumbnail !== 'undefined') {
                        document.getElementById(elementId).value = point.photo[0].thumbnail;
                    } else {
                        document.getElementById(elementId).value = '';
                    }
                } else {
                    document.getElementById(elementId).value = point[element];
                }
                
            }
        }

    } else {
        infoElement.innerText = phLangPlgPcsZasilkovna['PLG_PCS_SHIPPING_ZASILKOVNA_NONE'];
        /* Add Branch info to form fields - clear all values */
        if (phParamsPlgPcsZasilkovna['fields'].length !== 0) {
            for (let index = 0; index < phParamsPlgPcsZasilkovna['fields'].length; ++index) {
                const element = phParamsPlgPcsZasilkovna['fields'][index];
                var elementId = 'packeta-field-' + element;
                document.getElementById(elementId).value = '';
            }
        }
    }
};
