// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

let chart;

let annotation1 = {
    id: 'e-p-anno',
    shapes: [{
        point: {
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2020, 3, 1),
            y: 69.67 
        },
        type: 'circle',
        r: 8
    },{
        point: {
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2020, 1, 1),
            y: 80.45 
        },
        type: 'circle',
        r: 8 
    },{
        points: [{
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2020, 3, 1),
            y: 69.67 
        },{
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2000, 1, 1),
            y: 69.67  
        }],
        type: 'path'
    },,{
        points: [{
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2020, 1, 1),
            y: 80.45  
        },{
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(2001, 7, 1),
            y: 80.45  
        }],
        type: 'path'
    }],
};

let annotation2 = {
    id: 'gender-anno',
    labels: [{
        text: 'Men',
        className: 'men-primary',
        point: {
            x: Date.UTC(2019, 1, 1),
            y: 66,
            xAxis: 0,
            yAxis: 0
        }
    },{
        text: 'Women',
        className: 'women-primary',
        point: {
            x: Date.UTC(2019, 1, 1),
            y: 55,
            xAxis: 0,
            yAxis: 0
        } 
    }],
}

let annotation3 = {
    id: 'parent-anno',
    // labels: [{
    //     text: 'Men',
    //     className: 'men-primary',
    //     point: {
    //         x: Date.UTC(2019, 1, 1),
    //         y: 66,
    //         xAxis: 0,
    //         yAxis: 0
    //     }
    // },{
    //     text: 'Women',
    //     className: 'women-primary',
    //     point: {
    //         x: Date.UTC(2019, 1, 1),
    //         y: 55,
    //         xAxis: 0,
    //         yAxis: 0
    //     } 
    // }]
}

let annotation4 = {
    id: 'lfp-anno',
    labels: [{
        text: 'Men',
        className: 'men-primary',
        point: {
            x: Date.UTC(2020, 7, 1),
            y: -2.35,
            xAxis: 0,
            yAxis: 0
        }
    },{
        text: 'Women',
        className: 'women-primary',
        point: {
            x: Date.UTC(2020, 7, 1),
            y:-4.25,
            xAxis: 0,
            yAxis: 0
        } 
    }],
    animation: {
        duration: 2000
    }
}

$( ".chart-area-womens-recession-intro" ).parent().css( "overflow", "visible" )
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("TwoStep",[],t):"object"==typeof exports?exports.TwoStep=t():e.TwoStep=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function i(e){var t=[40,32,39,34],n=[37,38,33];return t.indexOf(e)>-1?1:n.indexOf(e)>-1?-1:0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i,e.exports=t.default},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){i(this,e),this.instances=[]}return o(e,[{key:"register",value:function(e){return this.instances.push(e),this}},{key:"getActiveInstances",value:function(){return this.instances.filter(function(e){return e.enabled})}}]),e}();t.default=r,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),a=i(s),u=n(1),f=i(u),l=new f.default,c=function(){function e(t){function n(e){if("up"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}}function i(e){if("down"==e){var t=a.elements.indexOf(this.element);t!==this.index&&a.goTo(t,!1,e)}}if(o(this,e),0===t.elements.length)throw"Elements array is empty";if(t.narrative){if(t.elements.length!==t.narrative.length)throw"Elements and narrative are different lengths";if(!t.narrative.filter(function(e){return"function"!=typeof e}).length===!1)throw"Narrative contains non-functions";this.narrative=t.narrative}this.onChange=t.onChange,this.elements=Array.prototype.slice.call(t.elements),this.enabled=!0,this.offset=t.hasOwnProperty("offset")?t.offset:{down:"50%",up:"0"};var r=this.setWaypoints(this.elements,i,t.continuous,this.offset.down),s=this.setWaypoints(this.elements,n,t.continuous,this.offset.up);if(this.waypoints=[r,s],t.stick){if(void 0===$().fixTo)throw"fixTo is not present on the page, or may have been loaded in before jQuery.";$(t.stick).wrapInner('<div class="two-step-sticky-wrapper"></div>'),this.sticky=$(t.stick).find(".two-step-sticky-wrapper").fixTo($(t.stick))}this.setKeyboard(),this.index=-1,l.register(this),setInterval(function(){Waypoint.refreshAll()},1e3);var a=this}return r(e,[{key:"goTo",value:function(e,t,n){var i=this;if(this.isValidIndex(e)===!1)throw e+" is not a valid index. Must be between 0 and "+(this.elements.length-1)+" (inclusive).";this.narrative&&this.narrative[e]({element:this.elements[e],index:e,direction:n}),this.onChange&&this.onChange({element:this.elements[e],index:e,direction:n}),this.index=e;var o=$(this.elements).eq(e);return $(this.elements).removeClass("active"),o.addClass("active"),t===!0?(this.disableWaypoints(),$("html, body").animate({scrollTop:o.offset().top-100},500).promise().then(function(){i.enableWaypoints()})):$.Deferred().resolve()}},{key:"setWaypoints",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return e.map(function(e){return new Waypoint({element:e,handler:t,continuous:n,offset:i})})}},{key:"setKeyboard",value:function(){var e=this;$(window).keydown(function(t){if(e.disabled)return!0;var n=(0,a.default)(t.keyCode),i=l.getActiveInstances();if(0!==n&&t.target===document.body&&t.metaKey===!1&&1===i.length){var o=e.index+n;return!e.isValidIndex(o)||(e.goTo(o,!0),t.preventDefault(),!1)}})}},{key:"isValidIndex",value:function(e){return e<this.elements.length&&e>-1}},{key:"disableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.disable()})}},{key:"enableWaypoints",value:function(){[].concat.apply([],this.waypoints).forEach(function(e){return e.enable()})}},{key:"disable",value:function(){this.disabled=!0,this.enabled=!1,this.disableWaypoints(),this.sticky&&this.sticky.fixTo("stop")}},{key:"enable",value:function(){this.disabled=!1,this.enabled=!0,this.enableWaypoints(),this.sticky&&this.sticky.fixTo("start")}}]),e}();t.default=c,e.exports=t.default}])});

var ts = new TwoStep({
  elements: document.querySelectorAll('.parent .narrative-item'),
  onChange: function(event) {
      console.log('Item '+event.index);
  },
  stick: document.querySelector('.parent .sticky-outer'),
  narrative: [
      function(event) {
        $('.chart-title').text('Percent of people 25-54 who are employed');
        chart.removeAnnotation('gender-anno');
        chart.removeAnnotation('parent-anno');
        chart.removeAnnotation('lfp-anno');
        setTimeout(function(){chart.addAnnotation(annotation1)},1000),
        chart.update({
            chart: {
                type: 'area'
            },
            data: {
                csvURL: 'https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/e-p-rate.csv'
            },
            yAxis: {
                min: 60,
                max: 85
            }
        });
      },
      function(event) {
        chart.removeAnnotation('parent-anno');
        chart.removeAnnotation('lfp-anno');
        chart.removeAnnotation('e-p-anno');
        setTimeout(function(){chart.addAnnotation(annotation2)},2000),
        $('.chart-title').text('Percent of people who are employed');
        chart.update({
            chart: {
                type: 'line'
            },
            data: {
                csvURL: 'https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/e-p-gender.csv'
            },
            yAxis: {
                min: 45,
                max: 70
            }
        });
        // chart.updateFromData();
      },
      function(event) {
        chart.removeAnnotation('gender-anno');
        chart.removeAnnotation('e-p-anno');
        chart.removeAnnotation('lfp-anno');
        setTimeout(function(){chart.addAnnotation(annotation3)},2000),
        $('.chart-title').text('Percent of people who are employed');
      },
      function(event) {
        chart.removeAnnotation('gender-anno');
        chart.removeAnnotation('parent-anno');
        chart.removeAnnotation('e-p-anno');
        setTimeout(function(){chart.addAnnotation(annotation4)},2000),
        $('.highcharts-grid-line:nth-child(5)').css('stroke', 'black');
        $('.chart-title').text('Change in labor force participation since February');
        chart.update({
            chart: {
                type: 'line'
            },
            data: {
                csvURL: 'https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/lfl-gender.csv'
            },
            yAxis: {
                min: -8,
                max: 2
            }
        });
      }
  ],
  offset: {
      up: '-10%',
      down: '70%'
  }
});


Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});






function drawHighcharts() {
    chart = Highcharts.chart('chart-container-intro', {
        chart: {
            type: 'area',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 25,
            spacingLeft: 5,
            spacingTop: 20,
            animation: {
                duration: 1000
            }
        }, 
        title: {
            text: null
        },
        data: {
            csvURL: 'https://raw.githubusercontent.com/kschmidt2/grow-womens-recession-intro/master/app/data/e-p-rate.csv',
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
            plotBands: [{ // mark the weekend
                from: Date.UTC(2020, 1, 1),
                to: Date.UTC(2020, 9, 30),
                label: {
                    text: 'Pandemic',
                    textAlign: 'center'
                }
            }],
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
            min: 60,
            max: 85,
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
                chart: {
                spacingRight: 25,
                spacingLeft: 10,
                },
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