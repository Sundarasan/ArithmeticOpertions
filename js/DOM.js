(function(root) {

	"use strict";

	/**
	 * Gets a element from the DOM
	 * @param  {String} id
	 * @return {Object}
	 */
	function byId(id) {
		return window.document.getElementById(id);
	}

	/**
	 * Attaches event to DOM element
	 * @param  {Object} element
	 * @param  {String} event
	 * @param  {Function} handler [description]
	 * @return {Object} element
	 */
	function attachEvent(element, event, handler) {
        if (element && event && handler) {
            if (window.$) {
                window.$(element).on(event, handler);
            } else if (element.addEventListener) {
                element.addEventListener(event, handler, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            } else {
                element['on' + event] = handler;
            }
        }
        return element;
    }

    /**
     * Constructing the export object
     */
	var exports = {
		byId: byId,
		attachEvent: attachEvent,
	};

	/**
	 * Exportint the export object
	 */
	root['DOM'] = exports;
	
})(this);