'use strict';

$(function () {

  $('#default-city-state').text(window.ce.ce('getLocationPageState')['city']);
  $('#default-city-county').text(window.ce.ce('getLocationPageState')['county']);
  $('#cards-search-input').val(window.ce.ce('getLocationPageState')['city']);

  // setup some constants
  const navConstants = setNavItemsCostants();

  // add click events to footer
  // uses invisiable a link
  addNavlick('home', 'home', navConstants.selectorAddOn);
  addNavlick('local-climate-charts', 'local-climate-charts', navConstants.selectorAddOn);
  // addNavlick('more', 'more', navConstants.selectorAddOn);
  addNavlick('hightide-flooding', 'hightide-flooding', navConstants.selectorAddOn);

  updateNavBar();
  addMoreClickEvent();

  // this function adds click event to the more nav item
  // which expands the nav footer to show the entire station based
  // otpions.  Trying to limit the space the navbar takes up on moblie divices
  function addMoreClickEvent() {
    // setup some constants
    const navConstants = setNavItemsCostants();

    const moreElem = document.getElementById(navConstants.moreElemID);
    if (moreElem) {
      moreElem.addEventListener('click', addMoreClickEventHandle);
    }
  }

  function nullString(checkString) {
    if (checkString === undefined || checkString === null) {
      return '';
    }
    return checkString;
  }

  function addStyle(elem, style) {
    if (elem) {
      let tempStyle = elem.getAttribute('style');
      tempStyle = nullString(tempStyle);
      elem.setAttribute('style', `${tempStyle}; ${style}`);
    }
  }

  function addStyleAll(elems, style) {
    if (elems) {
      elems.forEach((elem) => {
        if (elem) {
          let tempStyle = elem.getAttribute('style');
          tempStyle = nullString(tempStyle);
          elem.setAttribute('style', `${tempStyle}; ${style}`);
        }
      });
    }
  }

  // this function adds click event handler
  function addMoreClickEventHandle(e) {
    // setup some constants
    const navConstants = setNavItemsCostants();
    const hasid = ParentContains(e.target, navConstants.moreElemID);

    const expandedFooterElem = document.getElementById(navConstants.expandedFooterElem);
    const moreFooterElem = document.getElementById(navConstants.moreFooterElem);
    const navFooterRow2Elem = document.querySelector(`.${navConstants.navFooterRow2Elem}`);
    const navFooterAreaLine = document.querySelectorAll(`.${navConstants.navFooterAreaLine}`);
    const navFooter = document.getElementById(navConstants.navFooter);
    const locationViewport = document.getElementById(navConstants.locationViewport);
    const cardsViewport = document.getElementById(navConstants.cardsViewport);

    // addStyle(expandedFooterElem, 'display: flex !important');
    // addStyle(moreFooterElem, 'display: none !important');
    // addStyle(navFooterRow2Elem, 'flex-flow: row wrap !important');
    //
    //
    // addStyle(locationViewport, 'height: calc(100% - 48px - 12px - 210px) !important');
    // addStyle(locationViewport, 'min-height: calc(100% - 48px - 12px - 210px) !important');
    // addStyle(cardsViewport, 'height: calc(100% - 48px - 12px - 210px) !important');
    // addStyle(cardsViewport, 'min-height: calc(100% - 48px - 12px - 210px) !important');
    // addStyle(navFooter, 'flex: 0 1 210px !important');
    // addStyle(navFooter, 'height: 210px !important');
    //
    //
    // addStyleAll(navFooterAreaLine, 'display: flex !important');
  }

  // this function checks if the nav item would be hidden behind the more item
  function isMoreNav(navLocation) {
    const navConstants = setNavItemsCostants();

    // check if nav item is a more nav
    return jQuery.inArray( navLocation, navConstants.moreNavs);
  }

  // remove all selected css class nav items from the footer
  function removeSelectedNavItemClass(selector) {
    // remove all selected css class nav items from the footer
    const elems = document.querySelectorAll(`.${selector}`);
    if (elems) return null;
    elems.forEach((elem) => {
      if (elem) {
        elem.classList.remove(selector);
      }
    });
  }

  function setNavItemsCostants() {
    return {
      navFooterItemSelected: 'nav-footer-item-selected',
      navFooterItemNOTSelected: 'nav-footer-item',
      selectorAddOn: '-nav-footer',
      moreNavs: ['historical-weather', 'historical-thresholds', 'hightide-flooding'],
      moreElemID: 'more-nav-footer',
      expandedFooterElem: 'expanded-wrapper-nav-footer',
      moreFooterElem: 'more-wrapper-nav-footer',
      navFooterRow1Elem: 'nav-footer-row-1',
      navFooterRow2Elem: 'nav-footer-row-2',
      navFooterAreaLine: 'nav-footer-area-line',
      navFooter: 'nav-footer',
      cardsViewport: 'cards-viewport',
      locationViewport: 'location-viewport',
    }
  }

  // make the location home if not defined in the state
  function ensureNavLocIsValid(navLocation) {
    // make the location home if not defined in the state
    if (navLocation === undefined || navLocation === null) {
      return 'home';
    }
    return navLocation;
  }

  // this function updates the nav bar so the current page is appears "selected"
  // in the footer nav bar
  function updateNavBar() {
      // setup some constants
      const navConstants = setNavItemsCostants();

      // get the url location from the state
      let navLocation = window.ce.ce('getNavFooterState')['nav'];

      // make the location home if not defined in the state
      navLocation = ensureNavLocIsValid(navLocation)

      // check if nav item is a more nav
      const isMoreNavItem = isMoreNav(navLocation);

      // remove all selected css class nav items from the footer
      removeSelectedNavItemClass(navConstants.navFooterItemSelected);

      // get new active nav item and chance display class
      let navLocationElem = document.querySelector(`#${navLocation}${navConstants.selectorAddOn}`)

      // make nav location home if element is null
      if (navLocationElem === undefined || navLocationElem === null) {
          navLocation = 'home';
          navLocationElem = document.querySelector(`#${navLocation}${navConstants.selectorAddOn}`)
      }

      // turnoff unselected and add selected class
      navLocationElem.classList.remove(navConstants.navFooterItemNOTSelected);
      navLocationElem.classList.add(navConstants.navFooterItemSelected);

      // if the nav item is stations based it maybe hidden in more
      // in repsonsive mode so we should highlight also
      if (isMoreNavItem > 0) {
        const moreElem = document.querySelector(`#more${navConstants.selectorAddOn}`)
        moreElem.classList.remove(navConstants.navFooterItemNOTSelected);
        moreElem.classList.add(navConstants.navFooterItemSelected);
      } else {
        const moreElem = document.querySelector(`#more${navConstants.selectorAddOn}`)
        moreElem.classList.remove(navConstants.navFooterItemSelected);
      }
  }


  // adds a click event to got to card location
  function addNavlick(selector, nav, selectorAddOn) {
    // setup some constants
    const navConstants = setNavItemsCostants();

    // find the the nav-item and add click event
    $(`#${selector}${selectorAddOn}`).click( function(e) {
      e.stopPropagation();
      // remove existing nav search url parameters
      // otherwise we use the first one which is most likely the wrong page
      const seachParams =  removeUrlParam('nav')

      // get the invisiable link just outside the element node tree
      // if inside we have issues will bubbling propogation
      const link = document.querySelector(`#${selector}-secretlink${navConstants.selectorAddOn}`);

      // set the url and search params
      const url = `${$(link).attr('href')}/${seachParams}&nav=${nav}`
      $(link).attr('href', url);

      // force click on invisiable link
      link.click();
    });
  }

  //  TODO move this global functions so its not in two places
  // this function removes existing paramaters of the key undefined
  // and returns a new search param string.  We need to do this to avoid
  // mulitple nav paramaters, which would causes issues with only using the first
  // occurance of the nav parameter - aka we end up on the wrong page
  function removeUrlParam(key) {
    var params = decodeURIComponent(window.location.search.substring(1)).split('&');
    var param = void 0;
    var newParams = [],
        href = window.location.href.split('?')[0];
    var i = void 0;

    if (window.hasOwnProperty('history') === false || window.history.replaceState === false) return;

    for (i = 0; i < params.length; i++) {
      param = params[i].split('=');

      if (param[0] === key) {
        continue;
      }

      newParams.push(`${encodeURIComponent(param[0])}=${encodeURIComponent(param[1])}`);
    }

    if (params.length !== newParams.length) {
      return  `?${newParams.join('&')}`;
    }

    return `?${newParams.join('&')}`;
  }

  // check if a parentelemet contains a dom id
  // deals with event bubbling so we can check
  // if the child is in a specifc parent
  function ParentContains(target, id) {
    for (let p = target && target.parentElement; p; p = p.parentElement) {
      if (p.id === id) { return true; }
    }
    return false;
  }
});
