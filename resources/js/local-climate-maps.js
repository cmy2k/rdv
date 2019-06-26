'use strict';

$(function () {
  var activeVariableTemperature = 'tmax';
  var activeVariablePrecipitation = 'pcpn';
  var activeVariableDerived = 'hdd';

  // get city, state from state url
  $('#default-city-state').text(window.ce.ce('getLocationPageState')['city']);
  $('#default-city-county').text(window.ce.ce('getLocationPageState')['county']);
  $('#cards-search-input').val(window.ce.ce('getLocationPageState')['city']);

  const mapExtent = window.ce.ce('getLocationPageState')['extent'];
  const mapZoom = window.ce.ce('getLocationPageState')['zoom'] || 9;
  const mapcenter = window.ce.ce('getLocationPageState')['center'];

  // enable custom selction boxes
  enableCustomSelect('download-select');
  enableCustomSelect('stations-select');
  enableCustomSelect('varriable-select');
  enableCustomSelect('chartmap-select');
  enableCustomSelect('time-select');

  // // $('#chartmap-btn-chart-link').click(handleChartLink)
  //  $('#chartmap-wrapper').parent.click(handleChartLink);
  //
  // $('#chartmap-select-chart-link').click(handleChartLink);
  //
  // $('#chartmap-btn-map-link').click( handleMapLink);
  // $('#chartmap-select-map-link').click( handleMapLink);


  // toggle filters click
  $('#filters-toggle').click( function(e) {
      const target = $(e.target);
      if (target.hasClass('closed-filters')) {
        target.removeClass('closed-filters');
      } else {
        target.addClass('closed-filters');
      }

      const infoRowElem = $('#info-row');
      if ($(infoRowElem).hasClass('closed-filters')) {
        $(infoRowElem).removeClass('closed-filters');
      } else {
        $(infoRowElem).addClass('closed-filters');
      }

      const chartRowElem = $('#chart-row');
      if ($(chartRowElem).hasClass('closed-filters')) {
        $(chartRowElem).removeClass('closed-filters');
      } else {
        $(chartRowElem).addClass('closed-filters');
      }

      setTimeout(function () {
        $('#temperature-map').height($('#temperature-map').parent().height());
      }, 600);

  })

  // eanbles time chart, map click events
  $('#chartmap-wrapper').click( function(e) {
    const target = $(e.target);

    // toggle button visual state
    toggleButton($(target));

    // change select pulldowns for resposnive mode
    setSelectFromButton(target);


    handleChartMapClick(target);
  })

  // eanbles time annual, monlthly click events
  $('#time-wrapper').click( function(e) {
    const target = $(e.target);
    const notDisabled = !target.hasClass('btn-default-disabled');

    // not all varriables can display monthly chart
    // when the varriable cannot display monthly chart do
    // do execute the click event
    if ( notDisabled ) {
      const val = target.attr('val')

      // toggle button visual state
      toggleButton(target);

      // change select pulldowns for resposnive mode
      setSelectFromButton(target);
    }
  })

  // in repsonsive mode the time is a pulldown this eanbles the change of the chart map
  $('#chartmap-select-vis').bind('cs-changed', function(e) {
    const target = $(e.target);
    const notDisabled = !target.hasClass('btn-default-disabled');
    if ( notDisabled ) {
      const val = $('#time-select-vis').attr('rel')

      // toggle button visual state
      toggleButton($(`.btn-${$('#chartmap-select-vis').attr('rel')}`));

      handleChartMapClick(target);
    }
  })

  // $('#precipitation-map-container header').on('click', function () {
    $('#temperature-map').height($('#temperature-map').parent().height());
    // $('#location-precipitation .location-resolution li').addClass('disabled');
    if (typeof window.precipitationScenariosMap === 'undefined') {
      $('#temperature-map').spinner();
      window.precipitationScenariosMap = $('#temperature-map').scenarioComparisonMap({
        variable: 'tmax',
        extent: mapExtent,
        center: mapcenter,
        zoom: mapZoom,
        showCounties: false,
        layersloaded: function layersloaded() {
          $('#temperature-map').spinner('destroy');
        },
        change: function change() {
          window.precipitationScenariosMap.scenarioComparisonMap("getShowSeasonControls") ? $("#precipitation-map-season").show(200) : $("#precipitation-map-season").hide();
        }
      });
      window.precipitationScenariosMap.scenarioComparisonMap("getShowSeasonControls") ? $("#precipitation-map-season").show(200) : $("#precipitation-map-season").hide();
    }
  // });

  function setMapSize() {
    $('#temperature-map').height($('#temperature-map').parent().height())

    const rect = document.getElementById('temperature-map').getBoundingClientRect();
    document.querySelector('.scenario-map-overlay-container').style.top = `${rect.top}px`;
    document.querySelector('.scenario-map-overlay-container').style.left = `${rect.left}px`;
    document.querySelector('.scenario-map-overlay-container').style.width = `${rect.width}px`;
    document.querySelector('.scenario-map-overlay-container').style.height = `${rect.height}px`;
  }

  setMapSize();
  
  $(window).resize(function () {
    setMapSize();
  })
});
