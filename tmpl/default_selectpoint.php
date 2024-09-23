<?php
/* @package Joomla
 * @copyright Copyright (C) Open Source Matters. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL, see LICENSE.php
 * @extension Phoca Extension
 * @copyright Copyright (C) Jan Pavelka www.phoca.cz
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 */

use Joomla\CMS\Language\Text;
defined('_JEXEC') or die;
// When selecting point, make the checkbox active
$id = (int)$item->id;
$idCheckbox = 'phshippingopt'.$id;
$apiKey = $oParams[$id]['apiKey'];
?>
<div class="ph-checkout-shipping-additional-info ph-checkout-zasilkovna-box">
    <input type="button" class="btn ph-btn-zasilkovna-select-pickup-point" onclick="Packeta.Widget.pick('<?php echo $apiKey ?>', showSelectedPickupPoint); phSetCheckboxActive('<?php echo $idCheckbox ?>')" value="<?php echo Text::_('PLG_PCS_SHIPPING_ZASILKOVNA_SELECT_PICK_UP_POINT'); ?>">
    <input type="hidden" id="packeta-checkbox-id-<?php echo $item->id ?>" value="<?php echo $idCheckbox ?>" >

    <div class="ph-checkout-zasilkovna-info-container"><div class="ph-checkout-zasilkovna-info-label"><?php echo Text::_('PLG_PCS_SHIPPING_ZASILKOVNA_SELECTED_POINT'); ?>:</div> <div class="ph-checkout-shipping-info-box ph-checkout-zasilkovna-info-box" id="packeta-point-info-<?php echo $item->id ?>"><?php echo Text::_('PLG_PCS_SHIPPING_ZASILKOVNA_NONE'); ?></div>

        <?php
        if (!empty($oParams[$id]['fields'])) {
            foreach($oParams[$id]['fields'] as $k => $v) {
                echo '<input type="hidden" id="packeta-field-'.$v.'-'.$item->id.'" name="phshippingmethodfield['.$item->id.']['.$v.']" value="" />';
            }
        }


        ?>
    </div>
</div>

