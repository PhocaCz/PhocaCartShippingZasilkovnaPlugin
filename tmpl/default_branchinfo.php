<?php
/* @package Joomla
 * @copyright Copyright (C) Open Source Matters. All rights reserved.
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL, see LICENSE.php
 * @extension Phoca Extension
 * @copyright Copyright (C) Jan Pavelka www.phoca.cz
 * @license http://www.gnu.org/copyleft/gpl.html GNU/GPL
 */

use Joomla\CMS\Language\Text;

echo '<div class="ph-cb"></div>';
echo '<div class="ph-checkout-zasilkovna-info-box">';

$name = '';
if (isset($params['name'])) {
    $name .= $params['name'];
}

if (isset($params['zip'])) {

    if ($name != '') {
        $name .= ', ';
    }

    $name .= $params['zip'];
}

if (isset($params['city'])) {

    if ($name != '') {
        $name .= ' ';
    }

    $name .= $params['city'];
}


if (isset($params['thumbnail']) && $params['thumbnail'] != '') {
    echo '<div class="ph-checkout-zasilkovna-info-photo"><img src="'.$params['thumbnail'].'" alt="'.$name.'" /></div>';

}
if ($name != '') {
    echo '<div class="ph-checkout-zasilkovna-info-name">'.$name.'</div>';
}
echo '</div>';
