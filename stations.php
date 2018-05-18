<!doctype html>
<html>
<head>
  <?php include_once('template/head.php'); ?>
  <meta property="fb:app_id" content="187816851587993">
  <meta property="og:url" content="/stations.php"/>
  <meta property="og:type" content="article">
  <meta property="og:title" content="Variables">
  <meta property="og:description"
        content="The Climate Explorer allows you to view historical and projected climate variables and assess the impacts of climate change on the things you care about">
  <meta property="og:image" content="/resources/img/og.jpg">
</head>

<body id="page-stations" class="page-type-stations">
<div class="cd-cover-layer"></div>
<?php include_once('template/header.php'); ?>

<header id="left-header">
  <span class="trigger icon icon-close" id="left-header-trigger"></span>

  <ul id="vars-menu" class="menu blue-menu">
    <li class="search-field border" id="stations-search-by-location"><span class="icon icon-search"></span>
      <input type="text" id="formmapper" autocomplete="off" placeholder="Zoom to location">
    </li>

    <li class="select border" id="stations-options-container">
      <select title="" class="dropdown" id="stations-options">
        <option value="daily_vs_climate">Daily vs. Climate</option>
        <option value="thresholds">Thresholds</option>
        <option value="high_tide_flooding">High-tide Flooding</option>

      </select>
    </li>

    <li class="about-link"><a href="#detail-daily_vs_climate" class="nav-detail-link" id="about-stations-link">About Daily vs.
        Climate</a></li>
  </ul>

  <div id="vars-legend" class="legend-wrap left-filler"></div>
</header>

<div id="viewport">
  <div id="main-content-wrap">

    <div id="stations-map"></div>

    <?php include_once('template/share.php'); ?>

    <!-- begin weather stations map -->

    <div id="stations-spinner"></div>

    <div id="station-overlay-container"></div>

  </div>
</div>

<div id="desktop-warning">
  <p>The Climate Explorer is optimized for desktop use. Please visit the site on a desktop computer.</p>
</div>

<?php include_once('template/footer.php') ?>

<script type="text/javascript" src="/resources/js/stationsMap.js"></script>
<script type="text/javascript" src="/resources/vendor/tidal/tidalstationswidget.js"></script>
<script type="text/javascript" src="/resources/vendor/item/jquery.fl-item.min.js"></script>
<script type="text/javascript" src="/resources/vendor/climate-widget-graph/climate-widget-graph.js"></script>
<script type="text/javascript" src="/resources/js/station-charts.js"></script>


<script type="text/javascript" src="/resources/js/stations.js"></script>

<!-- END:JS_LOADER -->


</body>
</html>
