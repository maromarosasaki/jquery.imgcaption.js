/**
 jquery.imgcaption.js

 Copyright (c) 2015 Maromaro
 Created by Hidenori Sasaki

 This software is released under the MIT License.

 http://opensource.org/licenses/mit-license.php

 */
(function ($) {
  var defaults = {
    bgcolor:'#000',
    textcolor:'#fff'
  };
  var options = {};
  $.fn.imgcaption = function ( _options  ) {
    options = $.extend(true, {}, defaults, _options);
    this.each(function () {
      imgcaption_set(this);
    });
    return (this);
  };
  var imgcaption_set = function (target) {
    if( $(target).attr('alt').length < 1 ){
      return false;
    }

    var $span = $('<span></span>');
    $span.css({
      'display': 'inline-block',
      'position': 'relative',
      'vertical-align': 'top'
    });
    $(target).css({
      'vertical-align': 'top'
    });
    $(target).wrapAll($span);
    var $span_txt = $('<span>' + $(target).attr('alt') + '</span>');
    $span_txt.css({
      'display': 'inline-block',
      'position': 'absolute',
      'right': 0,
      'bottom': 0,
      'background-color': options.bgcolor,
      'color': options.textcolor,
      'font-size': '11px',
      'padding': '5px'
    });
    $span_txt.hide();
    $(target).after($span_txt);

    $(target).hover(function () {
      $span_txt.slideDown(250);
    }, function () {
      $span_txt.slideUp(250);
    });
  }
})(jQuery);