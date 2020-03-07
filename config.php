<?php
$url = $_SERVER['SERVER_NAME'];
$url2 = $_SERVER['REQUEST_URI'];

$main_forms = array(
    array(
        'group' =>  '1191',
        'form_id' => '329',
        'form_vs' => '556780783'
    ),
    array(
        'group' => '1233',
        'form_id' => '331',
        'form_vs' => '2471503236'
    )
);
$phone_forms= array(
    array(
        'form_id' => '330',
        'form_vs' => '1102655541'
    ),
    array(
        'form_id' => '332',
        'form_vs' => '1037992797'
    )
);
if (($url == 'rojkova.biology-of-consciousness')||($url == 'rojkova.mastervision.su/')) {
    $group_id =$main_forms[0]['group'];
    $form_id =$main_forms[0]['form_id'];
    $form_vs =$main_forms[0]['form_vs'];
    $phone_form_id =$phone_forms[0]['form_id'];
    $phone_form_vs =$phone_forms[0]['form_vs'];
}
else if ($url == 'rojkova.mymv.ru') {
    $group_id =$main_forms[1]['group'];
    $form_id =$main_forms[1]['form_id'];
    $form_vs =$main_forms[1]['form_vs'];
    $phone_form_id =$phone_forms[1]['form_id'];
    $phone_form_vs =$phone_forms[1]['form_vs'];
}
if (($url.$url2 == 'mastervision.su/biology-of-consciousness/h/')||($url.$url2 == 'mastervision.su/biology-of-consciousness/1/')){
    header('location: https://rojkova.mymv.ru/biology-of-consciousness/1/');
    // echo $url2;
}
?>