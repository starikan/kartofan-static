"use strict"

var Options = (function(){

    var instance;

    return function Construct_singletone () {
        if (instance) {
            return instance;
        }
        if (this && this.constructor === Construct_singletone) {
            instance = this;
        } else {
            return new Construct_singletone();
        }

    var parent = this;

    // ********* ALL SETTINGS ************

    this.global = {
        "mapDefaultCenterLatLng": [54.31081536133442, 48.362503051757805],
        "mapDefaultZoom": 12,
        "mapDefaultURL": "http://{s}.tiles.mapbox.com/v3/examples.map-y7l23tes/{z}/{x}/{y}.png",
        "mapCachedService": "http://kartofan.info/server.php",
        // "mapCachedService": "http://127.0.0.1:3000/cache",

        "mainFeed": "https://api.github.com/repos/starikan/kartofan-public-feed/contents/mainFeed_en_US.json?callback",

        "hashChange": true, // TODO: delete in major version
        "resetToDefaultIfHashClear": true,

        "dbExtServerIn": "", // Ended with /
        "dbExtServerOut": [""], // Ended with /
        // "dbExtServerIn": "http://localhost:5984/", // Ended with /
        // "dbExtServerOut": ["http://localhost:5984/"], // Ended with /

        "stageViewConstructorElasticSizeErrorPersent": 2,

        "lang": "en_US",
        "langs": ["en_US", "ru_RU"],

        "hotkeys": {
            "hk_mapFullScreen": "Space",
            "hk_mapSet": "Shift+Tab",
            "hk_stageSet": "Shift+S",
            "hk_coordsCorrAddRight": "Ctrl+F1",
            "hk_coordsCorrAddWrong": "Ctrl+F2",
            "hk_coordsCorrOnCorrect": "Ctrl+F3",
            "hk_fastNotesEditor": "Alt+Q",
            "hk_markersTable": "Alt+T",
        },

        "markersFilterList": {},
        "markersFilterRegExp": true,
        "markersIdPrefix": "",
        "markersIcons": [
            "/images/marker_akr.png",
            "/images/marker_army.png",
            "/images/marker_bee.png",
            "/images/marker_blank.png",
            "/images/marker_blank1.png",
            "/images/marker_bridge.png",
            "/images/marker_campfire.png",
            "/images/marker_canyon.png",
            "/images/marker_cave.png",
            "/images/marker_compost.png",
            "/images/marker_cow.png",
            "/images/marker_cross.png",
            "/images/marker_factory.png",
            "/images/marker_grave.png",
            "/images/marker_hutor.png",
            "/images/marker_information.png",
            "/images/marker_lake.png",
            "/images/marker_mill.png",
            "/images/marker_mountains.png",
            "/images/marker_mushroom.png",
            "/images/marker_other.png",
            "/images/marker_poi.png",
            "/images/marker_river.png",
            "/images/marker_ruins.png",
            "/images/marker_statue.png",
            "/images/marker_tower.png",
            "/images/marker_train.png",
            "/images/marker_tree.png",
            "/images/marker_uroch.png",
            "/images/marker_val.png",
            "/images/marker_vilage_dead.png",
            "/images/marker_vilage_live.png",
            "/images/marker_well.png",
            "/images/marker_what.png",
         ],

         "coordsCorrectionSaveInMaps": false,

         "fastNotesText": "",

     };

    this.current = {
        "mapCenterLatLng": [],
        "mapZoom": undefined,

        "mapSyncMoving": true,
        "mapSyncZooming": false, // TODO: delete on major version
        "mapVizirVisible": true, // TODO: delete on major version
        "mapCursorAllMapsVisible": true,

        "mapCache": true,
        "mapCacheLoad": "internet", // internet, cache, internet+cache, cache+internet

        "hashChange": true,

        "markersShow": true,
        "markersFilter": {},
        "markersTableColumns": {},

        "stage": {
            "title": "current",
            "id": "current",
            "group": "",
            "tags": "",
            "stageMapsGrid": [
                // left, top, width, height
                [0, 0, 50, 50],
                [0, 50, 50, 50],
                [50, 0, 50, 50],
                [50, 50, 50, 50],
            ],
            "stageMapsNames": ["", "", "", ""],
            "stageMapsZooms": [12,12,12,12],
            "stageMapsZoomsBlock": [false, false, false, false],
            "stageMapsControlls": [
                {
                    // "zoom": {"pos": "topleft"},
                    // "scale": {"pos": "bottomleft", "miles": false},
                    // "infoCopyright": {"pos": "bottomright", "text": "Copyleft by Starik"},
                    "mapTitle": {"pos": "bottomright"},
                    "zoomLevel": {"pos": "bottomright"},
                },
                {
                    // "zoom": {"pos": "topleft"},
                    // "scale": {"pos": "bottomleft", "miles": false},
                    // "infoCopyright": {"pos": "bottomright", "text": "Copyleft by Starik"},
                    "mapTitle": {"pos": "bottomright"},
                    "zoomLevel": {"pos": "bottomright"},
                },
                {
                    // "zoom": {"pos": "topleft"},
                    // "scale": {"pos": "bottomleft", "miles": false},
                    // "infoCopyright": {"pos": "bottomright", "text": "Copyleft by Starik"},
                    "mapTitle": {"pos": "bottomright"},
                    "zoomLevel": {"pos": "bottomright"},
                },
                {
                    // "zoom": {"pos": "topleft"},
                    // "scale": {"pos": "bottomleft", "miles": false},
                    // "infoCopyright": {"pos": "bottomright", "text": "Copyleft by Starik"},
                    "mapTitle": {"pos": "bottomright"},
                    "zoomLevel": {"pos": "bottomright"},
                },                
            ]
         },

        "layout": {
            "topMenu": {
                "id": "#kf_topMenu",
                "visible": true,
                "showNow": true,
            },
            "bottomMenu": {
                "id": "#kf_bottomMenu",
                "visible": true,
                "showNow": true,
            },
            "leftMenu": {
                "id": "#kf_leftMenu",
                "visible": true,
                "showNow": false,
            },
            "rightMenu": {
                "id": "#kf_rightMenu",
                "visible": true,
                "showNow": false,
            },
            "leftPanel": {
                "id": "#kf_leftPanel",
                "visible": true,
                "showNow": false,
            },
            "rightPanel": {
                "id": "#kf_rightPanel",
                "visible": true,
                "showNow": false,
            },
            "mapsContainer": {
                "id": "#kf_mapsContainer_correct",
                "visible": true,
                "showNow": true,
            },
        },

        "viewTopMenuShowAlways": true,
        "viewInfoPanelShowAlways": true,   

        "dbPointsStorySave": 1000,
        "dbSyncIn": false,
        "dbSyncOut": false,

        "setLang": false, 
        "showTourFirst": false, 
       
        "version": "3.2.0",  
     };

    this.gps = {
        "gpsData": {
            "latlng": [],
            "accuracy": "",
            "altitude": "",
            "altitudeAccuracy": "",
            "heading": "",
            "speed": "",
            "timestamp": "",
         },
        "gpsAutoStart": false,
        "gpsMarker": true,
        "gpsAccuracy": true,
        "gpsFollowing": true,
     }

    this.stages = {};

    this.points = {};

    this.maps = {};

    this.markers = {};

    this.appVars = {
        "baseNamesNotLoaded": ["markersDescriptions"],
        "baseNames": ["global", "gps", "stages", "points", "maps", "current", "markers", "markersDescriptions"],
        "baseNamesSync": ["global", "gps", "stages", "points", "maps", "markers", "markersDescriptions"],
        "activeMap": "map0",
        "activeMapNum": 0,   
        "measuringOn": false, 
        "version": "3.2.0",  
        "cursorLatLng": undefined,
        "markerAddModeOn": false,
        "markerIconsObjects": {},
        "markersServiceLayer": "__service_markers__",
     }

    this._init = function(){
        window.bases = new Bases();
        bases._initBase();
     }

    this._afterInitProcessing = function () {

        window.stage = new StageMaps();
        window.topmenu = new TopMenu("kf_topMenu", "kf_mapsContainer");
        window.gps = new GPS();
        window.mapseditor = new MapsEditor();
        window.stageeditor = new StageEditor();
        window.locations = new Locations();
        window.infomenu = new InfoMenu();
        window.fastmoving = new FastMoving();
        window.hotkeys = new HotKeys();
        window.coordscorrection = new CoordsCorrection();
        window.markerstable = new MarkersTable();

        opt.getHash();

        opt.updateInterfacePanelsPosition();

        opt.closeLoader();

        // opt.updateIconsObjects();

        stage.initContainer("kf_mapsContainer");

        if (opt.getOption("gps", "gpsAutoStart")){
            gps.startGPS();
        }

        if (!opt.getOption("current", "setLang")){
            opt.setLang();
        }

        $("#"+opt.getOption("appVars", "activeMap")).addClass("activemap");

        opt.versionCheck();

        // Tour button show
        if (!opt.getOption("current", "showTourFirst")) {
            $("a.topMenuHelpTourMain").removeClass("hide-for-small-only hide-for-medium-up hide-for-large-up hide-for-xlarge");
        }
      
        CKEDITOR.replace("fastNotes_textarea", {});

     } 

    this._afterInit = function(){

        if (!bases.checkBasesLoaded()){ return }

        // If no localization create it and then repeat again
        if ($.isEmptyObject(parent.localization)){
            parent.initLocalization(parent._afterInit);
            return;
        }

        parent._afterInitProcessing();
     }

    this.setOption = function(collection, option, value, callback){

        // console.log(collection, option, value);

        // JS object if not in baseNamesNotLoaded
        if (opt.getOption("appVars", "baseNamesNotLoaded").indexOf(collection) == -1){
            this[collection][option] = value;
        }

        // PouchDB
        if (!bases.db[collection]) {
            callback ? callback() : "";
            return
        }

        bases.db[collection].get(option, function(err, doc){
            if (doc) {
                if (doc.val !== value){
                    doc.val = value;
                    bases.db[collection].put(doc, callback);                    
                }
                else {
                    callback ? callback() : "";
                }
            }
            else {
                bases.db[collection].put({
                    "_id": option,
                    "val": value,
                }, callback); 
            }
        })
     }

    this.getOption = function(collection, option){
        if (!option) return this[collection];
        return this[collection][option];
     }

    this.getOptionAsync = function(collection, option, callback){
        bases.db[collection].get(option, function(err, doc){
            var data = doc ? doc.val : undefined;
            callback(data);
            // console.log(err, doc);
        })
     }     

    this.deleteOption = function(collection, option, callback){
        
        if (this[collection] && this[collection][option]) delete this[collection][option];

        if (!bases.db[collection]) {return}
        bases.db[collection].get(option, function(err, doc) {
            bases.db[collection].remove(doc, function(errRemove, responseRemove) { 
                if (!errRemove){
                    callback ? callback() : undefined;
                }
            });
        });  
     }

    this._createMenuArrFromBase = function(base, data) {

        var arr = {};
        data = data ? data : this.getOption(base);

        $.each(data, function(i, v){
            v.group = v.group ? v.group : "Unknown";
            if (!arr[v.group]){
                arr[v.group] = {};
            }
            arr[v.group][v.id ? v.id : i] = {};
        })

        console.log(arr)

        return arr;
     }  

    // *************** HASH ****************

    this.setHash = function(){
        
        if (!this.getOption("current", "hashChange") || !this.getOption("current", "mapSyncMoving")) { 
            window.location.hash = "";
            return 
        }

        var latlng = this.getOption("current", "mapCenterLatLng");

        window.location.hash = $.isArray(latlng) ? latlng.join(",") : latlng;
     }

    this.getHash = function(){
        
        if (!this.getOption("current", "hashChange")) { return }

        var hash = window.location.hash;

        // If clear hash and resetToDefaultIfHashClear == true set to default latlng
        if (!hash && parent.getOption("global", "resetToDefaultIfHashClear")){
            this.setOption("current", "mapCenterLatLng", parent.getOption("global", "mapDefaultCenterLatLng"));
            this.setHash();
            return;
        }

        try {
            var latlng = L.latLng(hash.split("#").pop().split(","))
            this.setOption("current", "mapCenterLatLng", [latlng.lat, latlng.lng]);
        }
        catch (e) {
            window.location.hash = "badCoords";
            this.setOption("current", "mapCenterLatLng", parent.getOption("global", "mapDefaultCenterLatLng"));
        }

     }    

    // *************** LOCALIZATION ****************

    this.localization = {};

    // Callback neded because localization must loaded before all code but after all bases sync, look this._afterInit
    this.initLocalization = function(callback){
        var lang = this.getOption("global", "lang");
        $.getJSON("data/localization_en_US.json", function(data){
            if(data){ parent.setOption("localization", "en_US", data) }
            else {console.log("Localization Error")}
            $.getJSON("data/localization_"+lang+".json", function(data){
                if(data){ parent.setOption("localization", lang, data, callback) }
                else {console.log("Localization Error")}
            })             
        });
       
     }

    this.setLang = function(callback) {

        var menuLangChoise = {
            "Choose Your Language": {
                "English": {
                    title: "English", 
                    callback: function(){ 
                        if (confirm("Do you want to set the main language - English?")){
                            opt.setOption("global", "lang", "en_US");
                            opt.setOption("current", "setLang", true, function(){
                                parent.initLocalization(function(){
                                    topmenu._setLocalization();
                                    opt.versionCheck();
                                    hotkeys.updateInfo();
                                    typeof callback == "function" ? callback() : undefined;
                                })
                            });
                            $.arcticmodal("close");
                        }
                    }
                },
                "Russian":{
                    title: "Русский", 
                    callback: function(){ 
                        if (confirm("Вы действительно хотите установить основным языком Русский?")){
                            opt.setOption("global", "lang", "ru_RU");
                            opt.setOption("current", "setLang", true, function(){
                                parent.initLocalization(function(){
                                    topmenu._setLocalization();
                                    opt.versionCheck();
                                    hotkeys.updateInfo();
                                    typeof callback == "function" ? callback() : undefined;
                                })
                            });
                            $.arcticmodal("close");
                        }
                    }
                }
            }
         };

        var menu = new AccordionMenu(menuLangChoise, "", true);
     }     

    // *************** JSON ****************

    this.exportMarkersFilteredJSON = function(fileName) {

        fileName = fileName ? fileName : "markers.json";
        var markers = mapsInstance[0].markers.filteredData;
        var markersDescriptions = {};
        var markersPrepared = 0;

        $.each(markers, function(i, v){
            bases.db.markersDescriptions.get(i, function(err, doc){
                if (err) {
                    console.log(err);
                    markersPrepared++;
                }
                else {
                    markersDescriptions[i] = doc.val;
                    markersPrepared++;

                    if (markersPrepared == Object.keys(markers).length){
                        opt.saveFileJSON(fileName, {markers: markers, markersDescriptions: markersDescriptions});
                    }
                }
            });
        });
     };

    this.exportAllInJSON = function(basesList, fileName, options){

        var data = {};
        // Need to export with async loaded bases
        var basesPrepared = 0;
        var filter = {};

        var basesLength = basesList.length ? basesList.length : opt.getOption("appVars", "baseNames").length;

        if (options && typeof options === "object" && options.filter) filter = options.filter;

        $.each(opt.getOption("appVars", "baseNames"), function(i, v){
            // Filter by bases names
            if (basesList && basesList.indexOf(v) == -1) return;

            if (opt.getOption("appVars", "baseNamesNotLoaded").indexOf(v) == -1) {
                data[v] = parent[v];
                basesPrepared++;
                if (basesPrepared == basesLength){
                    opt.saveFileJSON(fileName, data);
                }

            }
            else {
                bases.db[v].allDocs({include_docs: true}, function(err, doc){
                    if (err) {
                        console.log(err);
                    }
                    else {
                        data[v] = {};
                    }

                    $.each(doc.rows, function(di, dv){
                        data[v][dv.id] = dv.doc.val;
                    });

                    basesPrepared++;
                    if (basesPrepared == basesLength){
                        opt.saveFileJSON(fileName, data);
                    }
                });
            }
        })

     };

    this.saveFileJSON = function(fileName, data) {
        
        console.log(fileName, data)

        fileName = fileName ? fileName : "exportData.json";
        
        var dataJSON = JSON.stringify(data, null, 4);
    
        var blob = new Blob( 
            [dataJSON], 
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, fileName);
     };

    this.getAllDataFromJSON = function(baseJson, url){

        url = url ? url : prompt(loc("jsonImport:jsonAdd"), loc("feedsExternal:allJSON")!="ERROR" ? loc("feedsExternal:allJSON") : this.getOption("global", "mainFeed"))
        baseJson = baseJson ? [baseJson] : opt.getOption("appVars", "baseNames");

        $.getJSON(url, function(data){

            try { data = JSON.parse(Base64.decode(data.content)) }
            catch(e){}

            $.each(baseJson, function(b, base){
                if (!data[base] || $.isEmptyObject(data[base])){ return }
                $.each(data[base], function(i, v){
            
                    if (opt.getOption("appVars", "baseNamesNotLoaded").indexOf(base) == -1){
                        if (opt.getOption(base, i)){
                            if (!confirm(loc("jsonImport:rewriteConfirm", [i, base]))) {
                                return;
                            }
                        }                                
                        opt.setOption(base, i, v);
                    }
                    else {
                        opt.getOptionAsync(base, i, function(data){
                            if (data && !confirm(loc("jsonImport:rewriteConfirm", [i, base]))) return;
                            opt.setOption(base, i, v);
                        })
                    }
            
                })                
            })
        }); 
     }

    this.getRawDataFromJSON = function(){
        var arr = [
            { "type": "formRawJSON_rawJSON",  "name": "rawJSON", "loc": "jsonImport:formRawJSON_rawJSON"},
            { "type": "formRawJSON_submit", "loc": "jsonImport:formRawJSON_submit", callback: function(form){
                console.log(form.data.rawJSON);

                try {
                    var data = JSON.parse(form.data.rawJSON);
                    var baseJson = baseJson ? [baseJson] : opt.getOption("appVars", "baseNames");

                    $.each(baseJson, function(b, base){
                        if (!data[base] || $.isEmptyObject(data[base])){ return }
                        $.each(data[base], function(i, v){

                            if (opt.getOption("appVars", "baseNamesNotLoaded").indexOf(base) == -1){
                                if (opt.getOption(base, i)){
                                    if (!confirm(loc("jsonImport:rewriteConfirm", [i, base]))) {
                                        return;
                                    }
                                }                                
                                opt.setOption(base, i, v);
                            }
                            else {
                                opt.getOptionAsync(base, i, function(data){
                                    if (data && !confirm(loc("jsonImport:rewriteConfirm", [i, base]))) return;
                                    opt.setOption(base, i, v);
                                })
                            }
                        })                
                    })

                    form.hideForm();
                }
                catch (e){
                    console.log(e);
                    alert(loc("jsonImport:formRawJSON_errorParce"));
                }

            }},
            { "type": "formRawJSON_cancel", "loc": "jsonImport:formRawJSON_cancel", callback: function(form){
                form.hideForm();
            }},
        ];

        var eform = new FoundationForm(arr, "formRawJSON");
     }

    // *************** TOUR ****************

    this.startTour = function(id) {

        if (!opt.getOption("current", "showTourFirst")) {
            opt.setOption("current", "showTourFirst", true);
            $("a.topMenuHelpTourMain").addClass("hide-for-small-only hide-for-medium-up hide-for-large-up hide-for-xlarge");
        }

        var tour = new Tour();

        $.getJSON("data/tourMain.json", function(steps){
            tour.setSteps(steps);
            tour.generateTour();
            tour.startTour(id);            
        })
     }

    // *************** LOADER ****************

    this.closeLoader = function() {
        $("#kf_loader").addClass("hide");
        $("#kf_mainLayout").removeClass("hide");
     }

    // *************** VERSIONS ****************

    this.versionCheck = function() {

        var setVersionEvent = function(data){

            if (opt.getOption("current", "version") != opt.getOption("appVars", "version")) {
                $(".topMenuHelpUpdates.button").removeClass("hide-for-small-only hide-for-medium-up hide-for-large-up hide-for-xlarge");
            }

            var keys = Object.keys(data).sort().reverse();

            var text = "";
            $.each(keys, function(v, ver){
                text += "<h2>{0}</h2><ul>".format(ver);
                if (!data[ver].lines || !data[ver].lines.length) {
                    text += "</ul>";
                    return;
                }
                $.each(data[ver].lines, function(l, line){
                    text += "<li>{0}</li>".format(line);
                })
                text += "</ul>";
            })
            $("#updatesInfo").html(text);


            $(".topMenuHelpUpdates").on("click", function(){
                $("#updatesInfo").arcticmodal();
                opt.setOption("current", "version", opt.getOption("appVars", "version"));
                $(".topMenuHelpUpdates.button").addClass("hide-for-small-only hide-for-medium-up hide-for-large-up hide-for-xlarge");
            });                
        }

        var lang = this.getOption("global", "lang");
        $.getJSON("data/updates_"+lang+".json", function(data){
            if(data){ setVersionEvent(data) } 
            else {
                $.getJSON("data/updates_en_US.json", function(data){
                    if(data){ setVersionEvent(data) } 
                })                      
            }
        });
     }

    // *************** CAHCE ****************

    this.setCacheMenu = function(){
        var arr = {}
        arr[loc("menuCache:menuCacheAccordGroup")] = {
            "i":  {title: loc("menuCache:menuCacheInternet"), callback: function(){
                opt.setCache("internet");
            }},
            "ic": {title: loc("menuCache:menuCacheInternetCache"), callback: function(){
                opt.setCache("internet+cache");
            }},
            "ci": {title: loc("menuCache:menuCacheCacheInternet"), callback: function(){
                opt.setCache("cache+internet");
            }},
            "c":  {title: loc("menuCache:menuCacheCache"), callback: function(){
                opt.setCache("cache");
            }},
        };
        var cacheMenu = new AccordionMenu(arr);
     };

    this.setCache = function(type) {
        if (["internet", "cache", "internet+cache", "cache+internet"].indexOf(type) == -1) return;
        opt.setOption("current", "mapCacheLoad", type);
        infomenu.setRight();
     };

    // *************** MARKERS ****************

    this.setAddMarkerOn = function() {
        opt.setOption("appVars", "markerAddModeOn", true);
        $(".topMenuMarkersAddMarker").parent().addClass("active");
     };

    this.setAddMarkerOff = function() {
        opt.setOption("appVars", "markerAddModeOn", false);
        $(".topMenuMarkersAddMarker").parent().removeClass("active");
     };

    this.refreshAllMarkers = function() {
        for (var i = mapsInstance.length - 1; i >= 0; i--) {
            mapsInstance[i].markers.refreshView();
        };
     };

    this.makeAllImagesBase64 = function() {
        var markers = opt.getOption("markers");
        $.each(markers, function(i, v){
            bases.db.markersDescriptions.get(i, function(err, doc){
                if (err) {
                    console.log(err);
                }
                else {
                    var html = doc.val;
                    var $links = $(html).find("img");
                    var links = [];
                    $.each($links, function(i, v){
                        var src = $(v).attr("src");
                        $.getJSON(opt.getOption("global", "mapCachedService")+"?url="+ escape(src) + "&callback=?", function(data){
                            if(data){
                                console.log(data);
                            }
                        })                         
                    });

                    // console.log(i, links);
                                   
                }
            });
        });        
     }

    // *************** FART NOTES ****************

    this.fastNotesEditor = function(){

        var $fastNotes = $("#fastNotes");

        if ($fastNotes.hasClass("hide")){
            $fastNotes.removeClass("hide");
            var text = opt.getOption("global", "fastNotesText");
            CKEDITOR.instances.fastNotes_textarea.setData(text);
        } else {
            $fastNotes.addClass("hide");
            var text = CKEDITOR.instances.fastNotes_textarea.document.getBody().getHtml();
            opt.setOption("global", "fastNotesText", text);
        }

        // TODO: этот ресайз сделать чтобы действовал на фрейм когда встроено в окно
        // TODO: заебенить все в модальном окне
        window.onresize();

     }

    // *************** INTERFACE ****************

    this.updateInterfacePanelsPosition = function() {
        var WIDTH = $("#kf_mainLayout").width(),
            HEIGHT = $("#kf_mainLayout").height(),
            e = opt.getOption("current", "layout"),
            $e = {};

        if (!e) return;

        // Create panels objects
        $.each(e, function(i,v) {
            $e[i] = v.id && v.showNow && v.visible ? $(v.id) : $("<div></div>");
        })

        // leftMenu
        if (e.leftMenu.showNow && e.leftMenu.visible){
            $e.leftMenu.width( e.leftMenu.width ? e.leftMenu.width : 100 );
            $e.leftMenu.height( HEIGHT );
            $e.leftMenu.css("top", 0);
            $e.leftMenu.css("left", 0);
        }

        // rightMenu
        if (e.rightMenu.showNow && e.rightMenu.visible){
            $e.rightMenu.width( e.rightMenu.width ? e.rightMenu.width : 100 );
            $e.rightMenu.height( HEIGHT );
            $e.rightMenu.css("top", 0);
            $e.rightMenu.css("left", WIDTH - $e.rightMenu.width());
        }

        // topMenu
        if (e.topMenu.showNow && e.topMenu.visible){
            $e.topMenu.width( WIDTH - $e.leftMenu.width() - $e.rightMenu.width() );
            $e.topMenu.height( e.topMenu.height ? e.topMenu.height : 45 );
            $e.topMenu.css("top", 0);
            $e.topMenu.css("left", $e.leftMenu.width());
        }

        // bottomMenu
        if (e.bottomMenu.showNow && e.bottomMenu.visible){
            $e.bottomMenu.width( WIDTH - $e.leftMenu.width() - $e.rightMenu.width() );
            $e.bottomMenu.height( e.bottomMenu.height ? e.bottomMenu.height : 15 );
            $e.bottomMenu.css("top", HEIGHT - $e.bottomMenu.height());
            $e.bottomMenu.css("left", $e.leftMenu.width());
        }

        // leftPanel
        if (e.leftPanel.showNow && e.leftPanel.visible){
            $e.leftPanel.width( e.leftPanel.width ? e.leftPanel.width : 100 );
            $e.leftPanel.height( HEIGHT - $e.topMenu.height() - $e.bottomMenu.height() );
            $e.leftPanel.css("top", $e.topMenu.height());
            $e.leftPanel.css("left", $e.leftMenu.width());
        }

        // rightPanel
        if (e.rightPanel.showNow && e.rightPanel.visible){
            $e.rightPanel.width( e.rightPanel.width ? e.rightPanel.width : 100 );
            $e.rightPanel.height( HEIGHT - $e.topMenu.height() - $e.bottomMenu.height() );
            $e.rightPanel.css("top", $e.topMenu.height());
            $e.rightPanel.css("left", WIDTH - $e.rightMenu.width() - $e.rightPanel.width());
        }

        // mapsContainer
        if (e.mapsContainer.showNow && e.mapsContainer.visible){
            $e.mapsContainer.width( WIDTH - $e.rightMenu.width() - $e.rightPanel.width() -$e.leftMenu.width() - $e.leftPanel.width() );
            $e.mapsContainer.height( HEIGHT - $e.topMenu.height() - $e.bottomMenu.height() );
            $e.mapsContainer.css("top", $e.topMenu.height());
            $e.mapsContainer.css("left", $e.leftMenu.width() + $e.leftPanel.width());
        }
     }

    this._init();

 }}());


var Bases = (function(){

    var instance;

    return function Construct_singletone () {
        if (instance) {
            return instance;
        }
        if (this && this.constructor === Construct_singletone) {
            instance = this;
        } else {
            return new Construct_singletone();
        }

    var parent = this;

    window.opt = new Options();

    this.basesLoaded = 0;

    this.db = {};
    this.mapCache = {};

    this.checkBasesLoaded = function(){

        var allBases = opt.getOption("appVars", "baseNames").length ? opt.getOption("appVars", "baseNames").length : 0;

        if (this.basesLoaded >= allBases){ 
            return true;
        }
        return false;
     }

    this.initBaseMapCache = function(mapName){
        if (!mapName){ return }
        parent.mapCache["map_"+mapName] = new Pouch("map_"+mapName, {}, function(){})
     }

    this._initBase = function(){
        var baseNotLoaded = opt.getOption("appVars", "baseNamesNotLoaded");
        var baseNames = opt.getOption("appVars", "baseNames");
        $.each(baseNames, function(c, collection){
            parent.db[collection] =  new Pouch(collection, {}, function(){
                // Large Bases not Loaded in memory
                if (baseNotLoaded.indexOf(collection) == -1) {
                    parent.db[collection].allDocs({include_docs: true}, function(err, doc){

                        if (err) {console.log(err)}

                        $.each(doc.rows, function(i, v){
                            opt[collection][v.id] = v.doc.val;
                        });

                        // When first start, set all values from default into DB
                        $.each(opt[collection], function(i, v){
                            parent.db[collection].get(i, {}, function(errG, docG){
                                if (errG){
                                    opt.setOption(collection, i, v);
                                }
                            });
                        })

                        if (baseNames.indexOf(collection) != -1) parent.basesLoaded++;
                        parent._initSync();
                        opt._afterInit();
                    })                    
                }
                else {
                    if (baseNames.indexOf(collection) != -1) parent.basesLoaded++;
                    parent._initSync();
                    opt._afterInit();
                }

            })
        })        

     };

    this._initSync = function(){
        if (!this.checkBasesLoaded()){return};

        if (opt.getOption("current", "dbSyncOut")){
            parent.syncOut();
        }

        if (opt.getOption("current", "dbSyncIn")){
            parent.syncIn();
        }

     }

    this.syncOut = function(){
        $.each(opt.getOption("global","dbExtServerOut"), function(iOut, vOut){
            $.each(opt.getOption("appVars", "baseNamesSync"), function(i, v){
                parent.db[v].replicate.to(vOut + v, { continuous: true }, function(err, data){
                    console.log(err, data)
                    if (err){
                        noty({text: loc("syncBases:errorExtSync", v), type: "error"});
                    }
                });
            })
        })
     }

    this.syncIn = function(){
        var baseMain = opt.getOption("global","dbExtServerIn");
        $.each(opt.getOption("appVars", "baseNamesSync"), function(i, v){
            parent.db[v].replicate.from(baseMain + v, {}, function(err, data){
                if (err){ 
                    noty({text: loc("syncBases:errorExtSync", v), type: "error"});
                }
                if (data && data.docs_written){ 
                    noty({text: loc("syncBases:syncFromExtComplire", v)});
                }
            });
        })
     }

    this._clearAllBases = function(){
        $.each(opt.getOption("appVars", "baseNames"), function(i, v){
            parent.db[v].allDocs({include_docs: true}, function(errBase, docBase){
                console.log(errBase, docBase)
                $.each(docBase.rows, function(iRow, vRow){
                    console.log(iRow, vRow)
                    parent.db[v].get(vRow.doc._id, function(errRow, docRow) {
                        console.log(errRow, docRow)
                        parent.db[v].remove(docRow, function(errRemove, responseRemove) {  });
                    });                    
                });
            });
        });
     }

 }}());


var HotKeys = (function(){

    var instance;

    return function Construct_singletone () {
        if (instance) {
            return instance;
        }
        if (this && this.constructor === Construct_singletone) {
            instance = this;
        } else {
            return new Construct_singletone();
        }

    var _this = this;

    window.opt = new Options();
    window.coordscorrection = new CoordsCorrection();
    window.markerstable = new MarkersTable();

    this.$container = $("#hotkeysInfo");

    this.functions = {
        "hk_mapFullScreen": { func: mapseditor.toggleFullScreen, disable_in_input: true },
        "hk_mapSet": { func: mapseditor.setMapMenu },
        "hk_stageSet": { func: stageeditor.setStageMenu },
        "hk_coordsCorrAddRight": { func: coordscorrection.addRightMarker },
        "hk_coordsCorrAddWrong": { func: coordscorrection.addWrongMarker },
        "hk_coordsCorrOnCorrect": { func: coordscorrection.addCorrectionOnMaps },
        "hk_fastNotesEditor": { func: opt.fastNotesEditor },
        "hk_markersTable": { func: markerstable.showTable },
    }

    this.init = function() {
        var keys = opt.getOption("global", "hotkeys");
        $.each(keys, function(i, v){
            
            if (!_this.functions[i]) return;
            else var func = _this.functions[i];
            
            shortcut.add(v, function() { func.func() },
            {
                "disable_in_input": func.disable_in_input ? func.disable_in_input : false,
                'type': 'keydown',
                'propagate': false,
                'target': document
            }); 
        });

        this.updateInfo();
     };

    this.updateInfo = function() {
        var keys = opt.getOption("global", "hotkeys");

        var html = "\
            <table>\
              <thead>\
                <tr>\
                  <th width='150'>{0}</th>\
                  <th width='450'>{1}</th>\
                  <th width='50'>{2}</th>\
                </tr>\
              </thead>\
              <tbody>\
                {rows}\
              </tbody>\
            </table>\
        ".format([loc("hotkeysDesc:infoTableHeaderHotkey"), loc("hotkeysDesc:infoTableHeaderDescription"), loc("hotkeysDesc:infoTableHeaderReset")]);

        var rows = [];

        $.each(this.functions, function(i, v){
            
            var keysHtml = keys[i] ? "<kbd>"+keys[i].split("+").join("</kbd> + <kbd>")+"</kbd>" : "";

            rows.push("\
                <tr>\
                  <td>{0}</td>\
                  <td>{1}</td>\
                  <td><a class='button tiny hk_update' id='{2}'>{3}</a></td>\
                </tr>\
            ".format([keysHtml, loc("hotkeysDesc:"+i), i, loc("hotkeysDesc:infoTableHeaderReset")]));
        });

        html = html.replace("{rows}", rows.join(""));

        this.$container.empty();
        this.$container.html(html);

        this.setChangeKeys();

     };

    this.showInfo = function() {
        this.$container.removeClass("hide");
        $("#hotkeysInfo").arcticmodal({
            afterClose: function(){_this.hideInfo()}
        })
     }

    this.hideInfo = function() {
        // TODO
        // This need because when English lang set the buttons in this form show always on top of view
        // If set lang to Russian it`s hide. Magic        
        this.$container.addClass("hide");
     }

    this.unbindHotkeys = function() {
        var keys = opt.getOption("global", "hotkeys");
        $.each(keys, function(i, v){
            shortcut.remove(v);
        })
     }

    this.setChangeKeys = function() {
        $(".hk_update").click(function(){
            var id = $(this).attr("id");
            var keys = opt.getOption("global", "hotkeys");
            
            var newKey = prompt(loc("hotkeysDesc:infoTableHeaderReset"), keys[id]);

            if (newKey !== null){
                _this.unbindHotkeys();
                keys[id] = newKey;
                opt.setOption("global", "hotkeys", keys, function(){ _this.init() });
                _this.updateInfo();
            }
        });
     };

    this.init();
    this.hideInfo();

 }}());