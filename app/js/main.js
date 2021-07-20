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

let chartJ,
    chartL,
    jacobMax = 3420,
    lisaMax = 3040;

let annotationJ = {
    id: 'j-anno',
    labels: [{
        text: '84% spent',
        point: {
            x: 0,
            y: 1979,
            xAxis: 0,
            yAxis: 0
        },
        y: 15,
        overflow: 'allow',
    }],
    animation: {
        defer: 10
    }
}

let annotationL = {
    id: 'l-anno',
    labels: [{
        text: '75% spent',
        point: {
            x: 0,
            y: 1903,
            xAxis: 0,
            yAxis: 0
        },
        y: 15,
        overflow: 'allow',
    }],
    animation: {
        defer: 10
    }
}


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("TwoStep",[],t):"object"==typeof exports?exports.TwoStep=t():e.TwoStep=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function i(e){var t=[40,32,39,34],n=[37,38,33];return t.indexOf(e)>-1?1:n.indexOf(e)>-1?-1:0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){i(this,e),this.instances=[]}return o(e,[{key:"register",value:function(e){return this.instances.push(e),this}},{key:"getActiveInstances",value:function(){return this.instances.filter(function(e){return e.enabled})}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),a=i(s),u=n(1),f=i(u),l=new f.default,c=function(){function e(t){function n(e){if("up"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}}function i(e){if("down"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}}if(o(this,e),0===t.elements.length)throw"Elements array is empty";if(t.narrative){if(t.elements.length!==t.narrative.length)throw"Elements and narrative are different lengths";if(!t.narrative.filter(function(e){return"function"!=typeof e}).length===!1)throw"Narrative contains non-functions";this.narrative=t.narrative}this.onChange=t.onChange,this.elements=Array.prototype.slice.call(t.elements),this.enabled=!0,this.offset=t.hasOwnProperty("offset")?t.offset:{down:"50%",up:"0"};var r=this.setWaypoints(this.elements,i,t.continuous,this.offset.down),s=this.setWaypoints(this.elements,n,t.continuous,this.offset.up);if(this.waypoints=[r,s],t.stick){if(void 0===$().fixTo)throw"fixTo is not present on the page, or may have been loaded in before jQuery.";$(t.stick).wrapInner('<div class="two-step-sticky-wrapper"></div>'),this.sticky=$(t.stick).find(".two-step-sticky-wrapper").fixTo($(t.stick))}this.setKeyboard(),this.index=-1,l.register(this),setInterval(function(){Waypoint.refreshAll()},1e3);var a=this}return r(e,[{key:"goTo",value:function(e,t,n){var i=this;if(this.isValidIndex(e)===!1)throw e+" is not a valid index. Must be between 0 and "+(this.elements.length-1)+" (inclusive).";this.narrative&&this.narrative[e]({element:this.elements[e],index:e,direction:n}),this.onChange&&this.onChange({element:this.elements[e],index:e,direction:n}),this.index=e;var o=$(this.elements).eq(e);return $(this.elements).removeClass("active"),o.addClass("active"),t===!0?(this.disableWaypoints(),$("html, body").animate({scrollTop:o.offset().top-100},500).promise().then(function(){i.enableWaypoints()})):$.Deferred().resolve()}},{key:"setWaypoints",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return e.map(function(e){return new Waypoint({element:e,handler:t,continuous:n,offset:i})})}},{key:"setKeyboard",value:function(){var e=this;$(window).keydown(function(t){if(e.disabled)return!0;var n=(0,a.default)(t.keyCode),i=l.getActiveInstances();if(0!==n&&t.target===document.body&&t.metaKey===!1&&1===i.length){var o=e.index+n;return!e.isValidIndex(o)||(e.goTo(o,!0),t.preventDefault(),!1)}})}},{key:"isValidIndex",value:function(e){return e<this.elements.length&&e>-1}},{key:"disableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.disable()})}},{key:"enableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.enable()})}},{key:"disable",value:function(){this.disabled=!0,this.enabled=!1,this.disableWaypoints(),this.sticky&&this.sticky.fixTo("stop")}},{key:"enable",value:function(){this.disabled=!1,this.enabled=!0,this.enableWaypoints(),this.sticky&&this.sticky.fixTo("start")}}]),e}();t.default=c,e.exports=t.default}])});

var ts = new TwoStep({
  elements: document.querySelectorAll('.parent .narrative-item'),
  onChange: function(event) {
      console.log('Item '+event.index);
  },
  stick: document.querySelector('.parent .sticky-outer'),
  narrative: [
    //   function(event) {
    //     $('.jacob-illo').fadeOut(500);
    //   },
      function(event) {
          $('.lisa-illo').fadeOut(500);
      },
      function(event) {
        $('.lisa-illo').fadeIn(500);
      },
      function(event) {
        // remove cap and gown?
        $('.chart-title').text('');
        $('.money-info').fadeOut(500);
        

        chartJ.update({
            series: {
                data: [0]
            }
        });

        chartL.update({
            series: {
                data: [0]
            }
        });
      },
      function(event) {
        $('.money-info').fadeIn(500);
        $('.chart-title').text('Monthly income');
        $('#jacobs-money').text('$3,420');
        $('#lisas-money').text('$3,040');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [jacobMax]
            },
            yAxis: {
                plotBands: [{ // mark the weekend
                    from: 0,
                    to: jacobMax,
                }],
            }
        });

        chartL.update({
            series: {
                data: [lisaMax]
            },
            yAxis: {
                plotBands: [{ // mark the weekend
                    from: 0,
                    to: lisaMax,
                }],
            }
        });
      },
      function(event) {

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');
        
      },
      function(event) {
        $('.chart-title').text('Monthly take-home pay');
        $('#jacobs-money').text('$3,070');
        $('#lisas-money').text('$2,700');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [3070]
            }
        });

        chartL.update({
            series: {
                data: [2700]
            }
        });
      },
      function(event) {
        $('.chart-title').text('After student-loan payments');
        $('#jacobs-money').text('$2,764');
        $('#lisas-money').text('$2,510');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [2764]
            }
        });

        chartL.update({
            series: {
                data: [2510]
            }
        });
      },
      function(event) {
        $('.chart-title').text('After rent and utilities');
        $('#jacobs-money').text('$2,019');
        $('#lisas-money').text('$1,964');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [2019]
            }
        });

        chartL.update({
            series: {
                data: [1964]
            }
        });
      },
      function(event) {
        $('.chart-title').text('After transportation costs');
        $('#jacobs-money').text('$1,639');
        $('#lisas-money').text('$1,656');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [1639]
            }
        });

        chartL.update({
            series: {
                data: [1656]
            }
        });
      },
      function(event) {
        $('.chart-title').text('After groceries and personal care');
        $('#jacobs-money').text('$931');
        $('#lisas-money').text('$977');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [931]
            }
        });

        chartL.update({
            series: {
                data: [977]
            }
        });
      },
      function(event) {
        $('.chart-title').text('After retirement contributions');
        $('#jacobs-money').text('$662');
        $('#lisas-money').text('$823');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [662]
            }
        });

        chartL.update({
            series: {
                data: [823]
            }
        });
      },
      function(event) {
        $('.chart-title').text('After health-care expenses');
        $('#jacobs-money').text('$539');
        $('#lisas-money').text('$766');

        chartJ.removeAnnotation('j-anno');
        chartL.removeAnnotation('l-anno');

        chartJ.update({
            series: {
                data: [539]
            },
        });

        chartL.update({
            series: {
                data: [766]
            },
        });
      },
      function(event) {
        $('.chart-title').text('Remainder');

        chartJ.addAnnotation(annotationJ);
        chartL.addAnnotation(annotationL);

    }
  ],
  offset: {
      up: '5%',
      down: '70%'
  }
});


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});






function drawHighcharts() {
    chartJ = Highcharts.chart('chart-container-jacob', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 0,
            spacingRight: 50,
            spacingLeft: 0,
            spacingTop: 0,
            animation: {
                duration: 1000,
            }
        }, 
        title: {
            text: null
        },
        series: [{
            data: [0]
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: -2
            } 
        },
        // for line charts only
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false,
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            type: 'category',
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                format:'${text}',
                step: 4,
                align: 'right',
                x: 0,
                y: 18
            },
            tickAmount: 5,
            // width: 0,
            tickLength: 25,
            tickPosition: 'inside',
            max: 4000,
            gridZIndex: 5
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
        responsive: {
            rules: [{
            condition: {
                maxWidth: 250
            },
            chartOptions: {
                chart: {
                    spacingRight: 20
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    chartL = Highcharts.chart('chart-container-lisa', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 0,
            spacingRight: 0,
            spacingLeft: 50,
            spacingTop: 0,
            animation: {
                duration: 1000,
            }
        }, 
        title: {
            text: null
        },
        series: [{
            data: [0]
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: -2
            } 
        },
        // for line charts only
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                enabled: false,
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
            type: 'category',
        },
        yAxis: {
            title: false,
            reversed: true,
            labels: {
                useHTML: true,
                overflow: 'allow',
                format:'${text}',
                step: 4,
                align: 'right',
                x: 0,
                y: 18
            },
            tickAmount: 5,
            // width: 0,
            tickLength: 25,
            tickPosition: 'inside',
            max: 4000,
            gridZIndex: 5
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
        responsive: {
            rules: [{
            condition: {
                maxWidth: 250
            },
            chartOptions: {
                chart: {
                    spacingLeft: 20
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