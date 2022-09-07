<?php
/* @package Joomla
 * @copyright Copyright (C) Open Source Matters. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL, see LICENSE.php
 * @extension Phoca Extension
 * @copyright Copyright (C) Jan Pavelka www.phoca.cz
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 */

use Joomla\CMS\Language\Text;

// When selecting point, make the checkbox active
$idCheckbox = 'phshippingopt'.$item->id;

?>
<div class="ph-checkout-zasilkovna-box">
    <input type="button" class="btn ph-btn-zasilkovna-select-pickup-point" onclick="Packeta.Widget.pick('<?php echo $oParams['apiKey'] ?>', showSelectedPickupPoint); phSetCheckboxActive('<?php echo $idCheckbox ?>')" value="<?php echo Text::_('PLG_PCS_SHIPPING_ZASILKOVNA_SELECT_PICK_UP_POINT'); ?>">
    <div><?php echo Text::_('PLG_PCS_SHIPPING_ZASILKOVNA_SELECTED_POINT'); ?>: <div class="ph-checkout-zasilkovna-info-box" id="packeta-point-info"><?php echo Text::_('PLG_PCS_SHIPPING_ZASILKOVNA_NONE'); ?></div>

        <?php
        if (!empty($oParams['fields'])) {
            foreach($oParams['fields'] as $k => $v) {
                echo '<input type="hidden" id="packeta-field-'.$v.'" name="phshippingmethodfield['.$v.']" value="" />';
            }
        }

        ?>
    </div>
</div>

