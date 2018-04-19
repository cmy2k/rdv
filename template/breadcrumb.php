<?php
$current = isset($current) ? $purifier->purify($current) : '';

if (strpos(current_URL(), 'location.php') !== false) {
    $city = isset($_GET['city']) ? $purifier->purify($_GET['city']) : '';
    $breadcrumb = '<a href="#nav-search" class="parent launch-nav" data-nav-slide="0"><span class="icon icon-district"></span>Location</a><span class="current">' . $city . '</span>';
} elseif (strpos(current_URL(), 'about.php') !== false) {
    $breadcrumb = '<span class="current">About</span>';
} elseif (strpos(current_URL(), 'definitions.php') !== false) {
    $breadcrumb = '<span class="current">Definitions</span>';
} elseif (strpos(current_URL(), 'credits.php') !== false) {
    $breadcrumb = '<span class="current">Credits</span>';
} elseif (strpos(current_URL(), 'stations.php') !== false) {
    $param = isset($_GET['param']) ? $purifier->purify($_GET['param']) : '';
    $current = $param;
    $current = str_replace("_", " ", $current);
    $current = ucwords($current);

    $breadcrumb = '<a href="#nav-stations" class="parent launch-nav" data-nav-slide="2"><span class="icon icon-bubble"></span>Stations</a><span class="current">' . $current . '</span>';
} elseif (strpos(current_URL(), 'variables.php') !== false) {
    echo $current;

    $case = isset($_GET['id']) ? $purifier->purify($_GET['id']) : '';
    switch ($case) {
        case 'tmax' :
            $current = 'Avg Daily Max Temp (°F)';
            break;
        case 'tmin' :
            $current = 'Avg Daily Min Temp (°F)';
            break;
        case 'days_tmax_gt_90f' :
            $current = 'Days w/ max > 90°F';
            break;
        case 'days_tmax_gt_95f' :
            $current = 'Days w/ max > 95°F';
            break;
        case 'days_tmax_gt_100f' :
            $current = 'Days w/ max > 100°F';
            break;
        case 'days_tmax_gt_105f' :
            $current = 'Days w/ max > 105°F';
            break;
        case 'days_tmax_lt_32f' :
            $current = 'Days w/ max < 32°F';
            break;
        case 'days_tmin_lt_32f' :
            $current = 'Days w/ min < 32°F';
            break;
        case 'days_tmin_gt_80f' :
            $current = 'Days w/ min > 80°F';
            break;
        case 'days_tmin_gt_90f' :
            $current = 'Days w/ min > 90°F';
            break;
        case 'pcpn' :
            $current = 'Total precip';
            break;
        case 'days_pcpn_gt_1in' :
            $current = 'Days w/ > 1in';
            break;
        case 'days_pcpn_gt_2in' :
            $current = 'Days w/ > 2in';
            break;
        case 'days_pcpn_gt_3in' :
            $current = 'Days w/ > 3in';
            break;
        case 'days_dry_days' :
            $current = 'Dry Days';
            break;
        case 'hdd_65f' :
            $current = 'Heating Degree Days';
            break;
        case 'cdd_65f' :
            $current = 'Cooling Degree Days';
            break;
        case 'gdd' :
            $current = 'Growing Degree Days';
            break;
        case 'gddmod' :
            $current = 'Mod. Growing Degree Days';
            break;
    }

    $breadcrumb = '<a href="#nav-variables" class="parent launch-nav" data-nav-slide="1"><span class="icon icon-bubble"></span>Variable</a><span class="current">' . $current . '</span>';
}
