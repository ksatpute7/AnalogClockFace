//
// Copyright (C) 2014, 1st Playable Productions, LLC. All rights reserved.
//
// UNPUBLISHED -- Rights reserved under the copyright laws of the United
// States. Use of a copyright notice is precautionary only and does not
// imply publication or disclosure.
//
// THIS DOCUMENTATION CONTAINS CONFIDENTIAL AND PROPRIETARY INFORMATION
// OF 1ST PLAYABLE PRODUCTIONS, LLC. ANY DUPLICATION, MODIFICATION,
// DISTRIBUTION, OR DISCLOSURE IS STRICTLY PROHIBITED WITHOUT THE PRIOR
// EXPRESS WRITTEN PERMISSION OF 1ST PLAYABLE PRODUCTIONS, LLC.
///////////////////////////////////////////////////////////////////////////

var mediator = require("chaplin/mediator");
var eventBroker = _({}).extend(require("chaplin/lib/event_broker"));

Broker = {};

Broker.mediator = mediator;

Broker.addSave = function( savef ) {
    eventBroker.subscribeEvent("#doSave", savef );
};

Broker.addFinish = function( finishf ) {
    eventBroker.subscribeEvent("#doFinish", finishf );
};

Broker.doSave = function( state ) {
    var message = {
        type : "state",
        data : state //JSON handled in hx code
    };
    
    eventBroker.publishEvent("#save", message);
};

Broker.doFinish = function( complete, finished, scored ) {
    var message = {
        completion : complete,
        success : finished,
        score : scored
    };
    
    eventBroker.publishEvent("#finish", message);
};

Broker.getSave = function( fetchs ) {
    eventBroker.publishEvent("#fetch", { type:"state" }, fetchs );
};

Broker.getContext = function( fetchc ) {
    eventBroker.publishEvent("#fetch", { type:"context" }, fetchc );
};