// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-devicemotion_deviceorientation-setclasses !*/
 !function(e,n,o){function s(e,n){return typeof e===n}function a(){var e,n,o,a,i,l,r;for(var c in f)if(f.hasOwnProperty(c)){if(e=[],n=f[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(a=s(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)l=e[i],r=l.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),t.push((a?"":"no-")+r.join("-"))}}function i(e){var n=r.className,o=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var s=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(s,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),c?r.className.baseVal=n:r.className=n)}var t=[],f=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){f.push({name:e,fn:n,options:o})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr,Modernizr.addTest("devicemotion","DeviceMotionEvent"in e),Modernizr.addTest("deviceorientation","DeviceOrientationEvent"in e);var r=n.documentElement,c="svg"===r.nodeName.toLowerCase();a(),i(t),delete l.addTest,delete l.addAsyncTest;for(var d=0;d<Modernizr._q.length;d++)Modernizr._q[d]();e.Modernizr=Modernizr}(window,document);

  if (Modernizr.devicemotion) {
    // supported
        console.log("supported")
  } else {
    // not-supported
    console.log("not supported")
  }

  let chart;


$( ".chart-area" ).parent().css( "overflow", "visible" )
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("TwoStep",[],t):"object"==typeof exports?exports.TwoStep=t():e.TwoStep=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function i(e){var t=[40,32,39,34],n=[37,38,33];return t.indexOf(e)>-1?1:n.indexOf(e)>-1?-1:0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){i(this,e),this.instances=[]}return o(e,[{key:"register",value:function(e){return this.instances.push(e),this}},{key:"getActiveInstances",value:function(){return this.instances.filter(function(e){return e.enabled})}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),a=i(s),u=n(1),f=i(u),l=new f.default,c=function(){function e(t){function n(e){if("up"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}}function i(e){if("down"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}}if(o(this,e),0===t.elements.length)throw"Elements array is empty";if(t.narrative){if(t.elements.length!==t.narrative.length)throw"Elements and narrative are different lengths";if(!t.narrative.filter(function(e){return"function"!=typeof e}).length===!1)throw"Narrative contains non-functions";this.narrative=t.narrative}this.onChange=t.onChange,this.elements=Array.prototype.slice.call(t.elements),this.enabled=!0,this.offset=t.hasOwnProperty("offset")?t.offset:{down:"50%",up:"0"};var r=this.setWaypoints(this.elements,i,t.continuous,this.offset.down),s=this.setWaypoints(this.elements,n,t.continuous,this.offset.up);if(this.waypoints=[r,s],t.stick){if(void 0===$().fixTo)throw"fixTo is not present on the page, or may have been loaded in before jQuery.";$(t.stick).wrapInner('<div class="two-step-sticky-wrapper"></div>'),this.sticky=$(t.stick).find(".two-step-sticky-wrapper").fixTo($(t.stick))}this.setKeyboard(),this.index=-1,l.register(this),setInterval(function(){Waypoint.refreshAll()},1e3);var a=this}return r(e,[{key:"goTo",value:function(e,t,n){var i=this;if(this.isValidIndex(e)===!1)throw e+" is not a valid index. Must be between 0 and "+(this.elements.length-1)+" (inclusive).";this.narrative&&this.narrative[e]({element:this.elements[e],index:e,direction:n}),this.onChange&&this.onChange({element:this.elements[e],index:e,direction:n}),this.index=e;var o=$(this.elements).eq(e);return $(this.elements).removeClass("active"),o.addClass("active"),t===!0?(this.disableWaypoints(),$("html, body").animate({scrollTop:o.offset().top-100},500).promise().then(function(){i.enableWaypoints()})):$.Deferred().resolve()}},{key:"setWaypoints",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return e.map(function(e){return new Waypoint({element:e,handler:t,continuous:n,offset:i})})}},{key:"setKeyboard",value:function(){var e=this;$(window).keydown(function(t){if(e.disabled)return!0;var n=(0,a.default)(t.keyCode),i=l.getActiveInstances();if(0!==n&&t.target===document.body&&t.metaKey===!1&&1===i.length){var o=e.index+n;return!e.isValidIndex(o)||(e.goTo(o,!0),t.preventDefault(),!1)}})}},{key:"isValidIndex",value:function(e){return e<this.elements.length&&e>-1}},{key:"disableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.disable()})}},{key:"enableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.enable()})}},{key:"disable",value:function(){this.disabled=!0,this.enabled=!1,this.disableWaypoints(),this.sticky&&this.sticky.fixTo("stop")}},{key:"enable",value:function(){this.disabled=!1,this.enabled=!0,this.enableWaypoints(),this.sticky&&this.sticky.fixTo("start")}}]),e}();t.default=c,e.exports=t.default}])});

var ts = new TwoStep({
  elements: document.querySelectorAll('.parent .narrative-item'),
  onChange: function(event) {
      console.log('Item '+event.index);
  },
  stick: document.querySelector('.parent .sticky-outer'),
  narrative: [
      function(event) {
        // chart.removeAnnotation('gender-anno');
        // chart.removeAnnotation('parent-anno');
        // chart.removeAnnotation('lfp-anno');
        // chart.removeAnnotation('e-p-anno');
      },
      function(event) {
        $('.chart-title').text('Median home price 1981-present, in 2021 dollars');
        $('.chart-source').text('Census Bureau and Department of Housing and Urban Development via FRED');
        // chart.removeAnnotation('gender-anno');
        // chart.removeAnnotation('parent-anno');
        // chart.removeAnnotation('lfp-anno');
        // setTimeout(function(){chart.addAnnotation(annotation1)},500),
        // chart.update({
        //     chart: {
        //         type: 'area',
        //     },
        //     data: {
        //         table: 'datatable1'
        //     },
        //     yAxis: {
        //         min: 60,
        //         max: 85
        //     },
        //     xAxis: {
        //         min: Date.UTC(2000, 0, 1)
        //     }
        // });
      },
      function(event) {
        // chart.removeAnnotation('parent-anno');
        // chart.removeAnnotation('lfp-anno');
        // chart.removeAnnotation('e-p-anno');
        // setTimeout(function(){chart.addAnnotation(annotation2)},500),
        $('.chart-title').text('30-year, fixed-rate mortgage average, 1981-present');
        $('.chart-source').text('Freddie Mac via FRED');
        // chart.update({
        //     chart: {
        //         type: 'line',
        //         spacingLeft: 10
        //     },
        //     data: {
        //         table: 'datatable2'
        //     },
        //     yAxis: {
        //         min: 45,
        //         max: 70
        //     },
        //     xAxis: {
        //         min: Date.UTC(2019, 0, 1)
        //     }
        // });
        // chart.updateFromData();
      },
      function(event) {
        // chart.removeAnnotation('gender-anno');
        // chart.removeAnnotation('e-p-anno');
        // chart.removeAnnotation('lfp-anno');
        // setTimeout(function(){chart.addAnnotation(annotation3);$('.highcharts-annotation-label-box').css('fill', 'white')},500),
        $('.chart-title').text('Monthly payment on a $205,000 home');
        $('.chart-source').text('Freddie Mac via FRED (mortgage rate)');
        // chart.update({
        //     chart: {
        //         type: 'line',
        //         spacingLeft: -9
        //     },
        //     data: {
        //         table: 'datatable3'
        //     },
        //     yAxis: {
        //         min: 50,
        //         max: 100
        //     },
        //     xAxis: {
        //         min: Date.UTC(2019, 0, 1)
        //     },
        // });
      },
      function(event) {
        // chart.removeAnnotation('gender-anno');
        // chart.removeAnnotation('parent-anno');
        // chart.removeAnnotation('e-p-anno');
        // setTimeout(function(){chart.addAnnotation(annotation4);$('.highcharts-annotation-label-box').css('fill', 'none');$('.highcharts-yaxis-grid path:eq(4)').css('stroke', 'black');},500);
        $('.chart-title').text('Monthly payment on the median home');
        $('.chart-source').text('Census Bureau and Department of Housing and Urban Development via FRED (home price); Freddie Mac via FRED (mortgage rate)');
    //     chart.update({
    //         chart: {
    //             type: 'line',
    //             spacingLeft: 10
    //         },
    //         data: {
    //             table: 'datatable4'
    //         },
    //         yAxis: {
    //             min: -8,
    //             max: 2
    //         },
    //         xAxis: {
    //             min: Date.UTC(2020, 1, 1)
    //         }
    //     });
    //     // setTimeout(function(){chart.update({data:{csvURL: 'https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/lfl-gender.csv'}})},5);
      },
      function(event) {
        $('.chart-title').text('Total interest paid on a median home at the average rate');
        $('.chart-source').text('Census Bureau and Department of Housing and Urban Development via FRED (home price); Freddie Mac via FRED (mortgage rate)');
      }
  ],
  offset: {
      up: '-10%',
      down: '100%'
  }
});


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});




function drawHighcharts() {
    chart = Highcharts.chart('chart-container', {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 25,
            spacingLeft: 10,
            spacingTop: 20,
            animation: {
                duration: 1000,
            }
        }, 
        title: {
            text: null
        },
        data: {
            csvURL: 'https://raw.githubusercontent.com/kschmidt2/grow-historical-mortgages/master/data/median-home-price.csv'
        },
        annotations: [{
        }],
        // for bar charts only
        // plotOptions: {
        //     series: {
        //         groupPadding: 0.1
        //     } 
        // },
        // for line charts only
        plotOptions: {
            series: {
                animation: {
                    duration: 1000,
                    defer: 1000
                },
                lineWidth: 1,
                states: {
                    hover: {
                        enabled: false
                    }
                },
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            // align: 'right',
            // symbolRadius: 0,
            // verticalAlign: 'top',
            // x: 10,
            // itemMarginTop: -10
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            // plotBands: [{ // mark the weekend
            //     from: Date.UTC(2020, 1, 1),
            //     to: Date.UTC(2020, 9, 30),
            //     label: {
            //         text: 'Pandemic',
            //         textAlign: 'center'
            //     }
            // }],
            // min: Date.UTC(2000, 0, 1)
            // edits xAxis ticks
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            // min: 60,
            // max: 85,
            tickAmount: 6,
            // width: 0,
            tickLength: 25,
            tickPosition: 'inside'
            // adds commas to thousands
            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        defs: {
            gradient0: {
                tagName: 'linearGradient',
                id: 'gradient-0',
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
                children: [{
                    tagName: 'stop',
                    offset: 0
                }, {
                    tagName: 'stop',
                    offset: 1
                }]
            }
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}