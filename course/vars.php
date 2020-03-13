<?php

$full1 = '15 400р.';
$full2 = '31 900р.';
$full3 = '53 900р.';

$sales1 = array('1 500р.','1 000р.','500р.');
$sales2 = array('3 000р.','2 000р.','1 000р.');
$sales3 = array('6 000р.','4 000р.','2 000р.');

$todays1 = array('13 900р.','14 400р.','14 900р.');
$todays2 = array('28 900р.','29 900р.','30 900р.');
$todays3 = array('47 900р.','49 900р.','51 900р.');

$links1 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4606&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4607&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4608&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4609&clean=true&lg=ru');
$links2 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4610&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4611&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4612&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4613&clean=true&lg=ru');
$links3 = array('https://shop.mastervision.su/?r=ordering/cart/as1&id=4614&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4615&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4616&clean=true&lg=ru','https://shop.mastervision.su/?r=ordering/cart/as1&id=4617&clean=true&lg=ru');

$prep_link = 'https://shop.mastervision.su/?r=ordering/cart/as1&id=4618&clean=true&lg=ru ';

$dates = array(strtotime('2020-03-27'),strtotime('2020-03-28'),strtotime('2020-03-29'));
$now = strtotime('now');

if ($now < $dates[0]) {
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];
    $sale3 = $sales3[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];
    $today3 = $todays3[0];

    $link1 = $links1[0];
    $link2 = $links2[0];
    $link3 = $links3[0];
}
elseif (($now >= $dates[0])&&($now < $dates[1])) {
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];
    $sale3 = $sales3[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];
    $today3 = $todays3[1];

    $link1 = $links1[1];
    $link2 = $links2[1];
    $link3 = $links3[1];
}
elseif (($now >= $dates[1])&&($now < $dates[2])) {
    $sale1 = $sales1[2];
    $sale2 = $sales2[2];
    $sale3 = $sales3[2];

    $today1 = $todays1[2];
    $today2 = $todays2[2];
    $today3 = $todays3[2];

    $link1 = $links1[2];
    $link2 = $links2[2];
    $link3 = $links3[2];
}
else {
    $link1 = $links1[3];
    $link2 = $links2[3];
    $link3 = $links3[3];
}
?>