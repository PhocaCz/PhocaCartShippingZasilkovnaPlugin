var phParamsPlgPcsZasilkovna = Joomla.getOptions('phParamsPlgPcsZasilkovna');
var phLangPlgPcsZasilkovna = Joomla.getOptions('phLangPlgPcsZasilkovna');


function phSetCheckboxActive(id){
    document.getElementById(id).checked = true;
}

function phGetPacketaSelectedShippingMethod() {
    const infoElements = document.getElementsByName('phshippingopt');
    let selectedShippingMethod = null;
    
    for (let i = 0; i < infoElements.length; i++) {
        if (infoElements[i].checked) {
            selectedShippingMethod = infoElements[i].value;
            break;
        }
    }
    return selectedShippingMethod;
}

function showSelectedPickupPoint(point) {

    let selectedShippingMethodSuffix = '';
    let selectedShippingMethod = phGetPacketaSelectedShippingMethod();

    let infoElement = document.getElementById('packeta-point-info');
    if (selectedShippingMethod !== null) {
        selectedShippingMethodSuffix = '-' + selectedShippingMethod;
        infoElement = document.getElementById('packeta-point-info' + selectedShippingMethodSuffix);
    }

    //let packetaApiKey = phParamsPlgPcsZasilkovna[selectedShippingMethod]['apiKey'];

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
        if (phParamsPlgPcsZasilkovna[selectedShippingMethod]['fields'].length !== 0) {
            for (let index = 0; index < phParamsPlgPcsZasilkovna[selectedShippingMethod]['fields'].length; ++index) {
                const element = phParamsPlgPcsZasilkovna[selectedShippingMethod]['fields'][index];
                var elementId = 'packeta-field-' + element + '-' + selectedShippingMethod;
                if (document.getElementById(elementId)){
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
        }

    } else {
        infoElement.innerText = phLangPlgPcsZasilkovna['PLG_PCS_SHIPPING_ZASILKOVNA_NONE'];
        /* Add Branch info to form fields - clear all values */
        if (phParamsPlgPcsZasilkovna[selectedShippingMethod]['fields'].length !== 0) {
            for (let index = 0; index < phParamsPlgPcsZasilkovna[selectedShippingMethod]['fields'].length; ++index) {
                const element = phParamsPlgPcsZasilkovna[selectedShippingMethod]['fields'][index];
                var elementId = 'packeta-field-' + element;
                document.getElementById(elementId).value = '';
            }
        }
    }
};

/* Test if method is selected */
document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('.ph-checkout-shipping-save .ph-btn');
    button.addEventListener('click', function(e) {
        
        let selectedShippingMethodSuffix = '';
        let selectedShippingMethod = phGetPacketaSelectedShippingMethod();
        
        if (selectedShippingMethod !== null) {
            selectedShippingMethodSuffix = '-' + selectedShippingMethod;
        }
        
        let elementId = 'packeta-field-id' + selectedShippingMethodSuffix;
        let elementDocId = document.getElementById(elementId);
        if (elementDocId) {
            let elementDocIdValue = elementDocId.value;

            let packetaCheckbox = document.getElementById('packeta-checkbox-id' + selectedShippingMethodSuffix).value;
            let packetaCheckboxChecked = document.getElementById(packetaCheckbox).checked;

            if (phParamsPlgPcsZasilkovna[selectedShippingMethod]['validate_pickup_point'] == 1 && packetaCheckboxChecked && elementDocIdValue == '') {
                e.preventDefault();
                alert(phLangPlgPcsZasilkovna['PLG_PCS_SHIPPING_ZASILKOVNA_ERROR_PLEASE_SELECT_PICK_UP_POINT']);
                return false;
            }
        }
        return;
        
    });
});


