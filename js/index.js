(function() {

	"use strict";

	/**
	 * Finding Elements from DOM
	 */
	var dom = {};
	dom.addA = DOM.byId('add-a');
	dom.addB = DOM.byId('add-b');
	dom.addOut = DOM.byId('add-out');

	/**
	 * Arithmetic Operations
	 */
	function add() {
		dom.addOut.value = parseFloat(dom.addA.value) - parseFloat(dom.addB.value);
	}

	/**
	 * Attaching Events
	 */
	DOM.attachEvent(dom.addA, 'input', add);
	DOM.attachEvent(dom.addB, 'input', add);

})();