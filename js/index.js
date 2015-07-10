(function() {

	"use strict";

	/**
	 * Finding Elements from DOM
	 */
	var dom = {};
	dom.addA = DOM.byId('add-a');
	dom.addB = DOM.byId('add-b');
	dom.addOut = DOM.byId('add-out');
    dom.subA = DOM.byId('sub-a');
	dom.subB = DOM.byId('sub-b');
	dom.subOut = DOM.byId('sub-out');

	/**
	 * Arithmetic Operations
	 */
	function add() 
    {
		dom.addOut.value = parseFloat(dom.addA.value) + parseFloat(dom.addB.value);
	}
    
    function sub() 
    {
         dom.subOut.value = parseFloat(dom.subA.value) - parseFloat(dom.subB.value);
    }
    
	/**
	 * Attaching Events
	 */
	DOM.attachEvent(dom.addA, 'input', add);
	DOM.attachEvent(dom.addB, 'input', add);
    DOM.attachEvent(dom.subA, 'input', sub);
	DOM.attachEvent(dom.subB, 'input', sub);

})();