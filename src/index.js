import _ from 'lodash';
import pbjs from 'prebid.js';
import 'prebid.js/modules/allowActivities';
import 'prebid.js/modules/currency';
import 'prebid.js/modules/enrichmentFpdModule';
import 'prebid.js/modules/userId';
import 'prebid.js/modules/sharedIdSystem';
import 'prebid.js/modules/adriverIdSystem';
import 'prebid.js/modules/pairIdSystem';
import 'prebid.js/modules/rtdModule';
import 'prebid.js/modules/intersectionRtdProvider';
import 'prebid.js/modules/customGeolocationRtdProvider';
import 'prebid.js/modules/adriverBidAdapter';
import 'prebid.js/modules/mytargetBidAdapter';
import 'prebid.js/modules/hybridBidAdapter';
import 'prebid.js/modules/betweenBidAdapter';
import 'prebid.js/modules/rtbsapeBidAdapter';
import 'prebid.js/modules/buzzoolaBidAdapter';
import 'prebid.js/modules/otmBidAdapter';



function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
  
document.body.appendChild(component());
  
// console.log(pbjs);

window.adUnits = [
    {
    code: 'div-gpt-ad-300x250_fs', /* фуллскрин */
    mediaTypes: {
        banner: {
            sizes: [[300, 250]]
        }
    },
    bids: [
        {
            bidder: "adriver",
            params: {
            siteid:         '381',                
            placementId: '63:kinorole_prebid_FS_v2',
            }
        },
        {
            bidder: "mytarget",
            params: {
            placementId: '1400508',
            }
        },
        {
            bidder: "hybrid",
            params: {
            placement: "banner",
            placeId: "64f88094b7ea06156069e73a",
            }
        },
        {
            bidder: 'rtbsape',
            params: {
            placeId: 860344,
            }
        },
        {
            bidder: 'buzzoola',
            params: {
            placementId: '1253680',
            }
        },
        {
            bidder: 'between',
            params: {
            s: '4713708',
            }
        },
        {
            bidder: 'otm',
            params: {
            tid: '48886',
            }
        },
    ]
    },
    {
    code: 'div-gpt-ad-300x250_rec', /* флайролл */
    mediaTypes: {
        banner: {
            sizes: [[300, 250]]
        }
    },
    bids: [
        {
            bidder: "adriver",
            params: {
            siteid:         '381',                
            placementId: '63:kinorole_prebid_rec_v2',
            }
        },
        {
            bidder: "mytarget",
            params: {
            placementId: '1400506',
            }
        },
        {
            bidder: "hybrid",
            params: {
            placement: "banner",
            placeId: "64f8807ab7ea06156069e739",
            }
        },
        {
            bidder: 'rtbsape',
            params: {
            placeId: 860345,
            }
        },
        {
            bidder: 'buzzoola',
            params: {
            placementId: '1253682',
            }
        },
        {
            bidder: 'between',
            params: {
            s: '4713712',
            }
        },
        {
            bidder: 'otm',
            params: {
            tid: '48887',
            }
        },
    ]
    },
    {
    code: 'div-gpt-ad-300x250_stat',/*статика*/
    mediaTypes: {
        banner: {
            sizes: [[300, 250]]
        }
    },
    bids: [
        {
            bidder: "adriver",
            params: {
            siteid:         '381',                
            placementId: '63:kinorole_prebid_stat_v2',
            }
        },
        {
            bidder: "mytarget",
            params: {
            placementId: '1400510',
            }
        },
        {
            bidder: "hybrid",
            params: {
            placement: "banner",
            placeId: "64f880bab7ea06156069e73b",
            }
        },
        {
            bidder: 'rtbsape',
            params: {
            placeId: 860346,
            }
        },
        {
            bidder: 'buzzoola',
            params: {
            placementId: '1253679',
            }
        },
        {
            bidder: 'between',
            params: {
            s: '4713710',
            }
        },
        {
            bidder: 'otm',
            params: {
            tid: '48885',
            }
        },
    ]
    },
    {
    code: 'div-gpt-ad-300x250', /* cайдбар */
    mediaTypes: {
        banner: {
            sizes: [[300, 250]]
        }
    },
    bids: [
        {
                bidder: "adriver",
                params: {
                siteid:         '381',                
                placementId: '63:kinorole_prebid_v2',
                }
        },
        {
                bidder: "mytarget",
                params: {
                placementId: '1400512',
                }
        },
        {
                bidder: "hybrid",
                params: {
                placement: "banner",
                placeId: "64f8801bb1ee915f243e34f1",
                }
        },
        {
                bidder: 'rtbsape',
                params: {
                placeId: 860343,
                }
        },
        {
                bidder: 'buzzoola',
                params: {
                placementId: '1253683',
                }
        },
        {
                bidder: 'between',
                params: {
                s: '4713711',
                }
        },
        {
                bidder: 'otm',
                params: {
                tid: '48884',
                }
        },
        ]
    }];


    window.pbConfig = {
        currency: {
            adServerCurrency: "RUB",
            granularityMultiplier: 1,
            defaultRates: { 
            "USD": { "RUB": 98.308839595044 },
            "EUR": { "RUB": 105.29277544434 },
            }
        },
        firstPartyData: {
            uaHints: [
                "architecture",
                "model",
                "platform",
                "platformVersion",
                "fullVersionList"
            ]
        },
        userSync: {
            userIds: [{
                name: "sharedId",
                storage: {
                type: "cookie",
                name: "_sharedid",
                expires: 180
                }
            },
            {
                name: "adriverId"
            },
            {
                name: 'pairId'
            }
            ]
        },
        realTimeData: {
            auctionDelay: 100,
            dataProviders: [
                {
                  "name": "customGeolocation",
                  "waitForIt": true,
                  "params": {
                      geo: {
                        coords: {
                          accuracy: 1438.6037966300735,
                          altitude: null,
                          altitudeAccuracy: null,
                          heading: null,
                          latitude: 47.235072,
                          longitude: 39.796736,
                          speed: null,
                        },
                        timestamp: 1695021033029
                      }
                  }
                },
                {          
                "name": "intersection",
                "waitForIt": true
                }
            ],
        },
        enableTIDs: true,
        deviceAccess: true,
        allowActivities: {
            syncUser: {
            default: true,
            rules: [
                {allow: true} 
            ]
            },
            accessDevice: {
            default: true,
            rules: [
                {allow: true} 
            ]
            }
        }
    };



class PrebidDriver {
    adUnitId = null;
    parentContainer = null;
    bannerContainer = null;
    debug = 1;
    timeout = 2000;
    adUnit = null;
    requestBidsObj = null;
    preferredCurrency = 'RUB';
    unsoldRefreshTimeout = 1000;
    maxFailedRequests = 2;
    failedRequestsCount = 0;
    pbConfig = {
        currency: {
            adServerCurrency: "RUB",
            granularityMultiplier: 1,
            defaultRates: { 
            "USD": { "RUB": 98.308839595044 },
            "EUR": { "RUB": 105.29277544434 },
            }
        },
        firstPartyData: {
            uaHints: [
                "architecture",
                "model",
                "platform",
                "platformVersion",
                "fullVersionList"
            ]
        },
        userSync: {
            userIds: [{
                name: "sharedId",
                storage: {
                type: "cookie",
                name: "_sharedid",
                expires: 180
                }
            },
            {
                name: "adriverId"
            },
            {
                name: 'pairId'
            }
            ]
        },
        realTimeData: {
            auctionDelay: 100,
            dataProviders: [
                {
                "name": "geolocation",
                "waitForIt": true,
                "params": {
                    "requestPermission": true
                }
                },
                {          
                "name": "intersection",
                "waitForIt": true
                }
            ],
        },
        enableTIDs: true,
        deviceAccess: true,
        allowActivities: {
            syncUser: {
            default: true,
            rules: [
                {allow: true} 
            ]
            },
            accessDevice: {
            default: true,
            rules: [
                {allow: true} 
            ]
            }
        }
    };
    
    constructor(settings, events) {
        if(!settings.id)
        {
        this.l("No Ad unit ID set for Prebid driver");
        return false;
        }
        this.adUnitId = settings.id;
        if(!settings.config)
        {
        this.l(this.adUnitId + " No Ad unit Prebid config found");
        return false;
        }
        this.adUnit = settings.config;
        if(settings && settings.pbConfig)
        {
        this.pbConfig = settings.pbConfig;
        }
        if(settings && settings.timeout)
        {
        this.timeout = settings.timeout;
        }
    
        if(new URLSearchParams(window.location.search).get('pbjs_debug') == 'true')
        this.debug = 1;
    
        this.requestBidsObj = {
        timeout: this.timeout,
        bidsBackHandler: this.responseHandler.bind(this)
        };
    
        window.pbjs = window.pbjs || {};
        window.pbjs.que = window.pbjs.que || [];
            
        window.pbjs.que.push(() => {
        window.pbjs.setConfig(this.pbConfig);
        });
        
        this.setEvents(events)
    }
    
    setEvents = (events) => {
        const eventsDefault = {
        onClose: () => {}, 
        onStop: () => { this.clearContainer(); }, 
        onError: () => {}} 
        this.events = {...eventsDefault, ...events}
    }
    
    show(parentContainer) {
        if(parentContainer)
        this.parentContainer = parentContainer;
    
        if(!this.parentContainer) {
        console.log(this.adUnitId + " Container is not available for this banner, can't show");
        return false;
        }
        this.bannerContainer = document.createElement('div');
        this.bannerContainer.id = this.adUnitId;
        this.parentContainer.append(this.bannerContainer);
    
        this.requestBids();
    }
    
    hide() {
        this.clearContainer();
    }
    
    clearContainer() {
        if(this.bannerContainer)
        {
        this.bannerContainer.innerHTML = "";
        }
    }
    
    refresh() {
        this.requestBids();
    }
    
    requestBids() {
        this.l(this.adUnitId + ' Requesting bids');
        pbjs.processQueue();
        window.pbjs.que.push(() => {
            window.pbjs.addAdUnits([this.adUnit]);
            window.pbjs.requestBids(this.requestBidsObj);
            window.pbjs.removeAdUnit(this.adUnit.code);
        });
    }
    
    addCode(bid, position = 'beforeend')
    {
        this.l(this.adUnitId + ' adding code');
        let iframe = document.createElement('iframe');
        iframe.frameBorder = '0';
        iframe.scrolling = "no";
        iframe.style = 'width:' + bid.width + 'px;height:' + bid.height + 'px;overflow:hidden';
        this.clearContainer();
        if(bid.ad)
        {
        this.bannerContainer.appendChild(iframe);
        let iframeDoc = iframe.contentWindow.document;
        iframeDoc.body.style = 'margin: 0;'
        iframeDoc.body.insertAdjacentHTML(position, bid.ad);
        let scripts = iframeDoc.body.querySelectorAll('script');
        if(scripts.length)
        {
            scripts.forEach((script)=>{
            this.createScript(script);
            })
        }
        }
        else if(bid.adUrl)
        {
        iframe.src = bid.adUrl;
        this.bannerContainer.appendChild(iframe);
        }
    }
    copyAttributes(source, target) {
        return Array.from(source.attributes).forEach(attribute => {
        target.setAttribute(
            attribute.nodeName,
            attribute.nodeValue,
        );
        });
    }
    createScript(script)
    {
        let s = document.createElement('script');
        this.copyAttributes(script, s);
        script.before(s);
        s.innerHTML = script.innerHTML;
        script.remove();
    }
    
    responseHandler(bidResponses) 
    { 
        this.l(this.adUnitId +  ' Responses recieved:', bidResponses);
        let adUnitsIds = Object.keys(bidResponses);
        if(adUnitsIds.length)
        {
            this.failedRequestsCount = 0;
            adUnitsIds.forEach((adUnitId)=>{
                //const convertedBids = this.convertBidsToPreferredCurrency(bidResponses[adUnitId].bids);
                //this.l(this.adUnitId + ' Converted bids:', convertedBids)
                //const winningBid = convertedBids.reduce((prev, current) => (prev.cpm > current.cpm ? prev : current));
                const winningBid = bidResponses[adUnitId].bids.reduce((prev, current) => (prev.cpm > current.cpm ? prev : current));
                this.l(this.adUnitId + ' Winning bid:', winningBid);
                
                if(this.bannerContainer)
                    this.addCode(winningBid);
                else
                {
                    this.l(this.adUnitId + " No container with Ad unit ID in DOM");
                    return false;
                }
            });
        }
        else
        {
        this.failedRequestsCount++;
    
        this.l(this.adUnitId +  ' No bids recieved');
        this.l(this.adUnitId +  ' failedRequestsCount ', this.failedRequestsCount);
        this.l(this.adUnitId +  ' this.failedRequestsCount >= this.maxFailedRequests = ', (this.failedRequestsCount >= this.maxFailedRequests));
        if(this.failedRequestsCount >= this.maxFailedRequests)
        {
            this.failedRequestsCount = 0; // for next time
            this.l(this.adUnitId +  ' Already tried refresh. Failed again. Quit');
        }
        else
        {
            this.l(this.adUnitId +  ' Will retry in ' + (this.unsoldRefreshTimeout / 1000 ) + 'sec');
            let _self = this;
            setTimeout(()=>{
            this.l(this.adUnitId +  ' Refreshing now!');
            this.refresh();
            }, this.unsoldRefreshTimeout);
        }
        }
    }
    
    l(...args)
    { 
        if(this.debug) console.log(...args) 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    window.adUnits.forEach((adUnitId, i) => {
        let adUnit = new PrebidDriver({id: adUnitId.code, config: adUnitId, pbConfig: window.pbConfig});
        let parentContainer = document.getElementById('banner-container-' + i);
        console.log('parentContainer: ', parentContainer)
        adUnit.show(parentContainer)
    
        const intervals = [20];
        const random = Math.floor(Math.random() * intervals.length);
        console.log(random, intervals[random]);
        setInterval(() => {
            console.log('Interval fired');
            adUnit.refresh()
        }, intervals[random] * 1000);
    });
});

/*
pbjs.processQueue(); 

pbjs.requestBids({})*/