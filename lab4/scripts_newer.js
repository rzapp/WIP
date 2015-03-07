/* LAB4
   scripts.js 
   Raymond Zapp 
   00146825 
   1 April 2015 */

window.onload = function ()                                        // wait till html page loaded
{
	var pieces = document.getElementsByClassName("piece-empty");   // capture the collection of elements with matching class

	for (piece = 0; piece < (pieces.length + 1); piece++)          // keep looping till counter exceeds total count of elements
	{
		pieces[piece].onmouseover = function ()                    // bind the one same Event to each different element
		{
		this.style.borderColor = "green";						   // assign the attribute to the targeted piece
		}
		
		pieces[piece].onmouseout = function ()
		{
		this.style.borderColor = "";                                // clear the assigned style; un-"mask"-ing original style
		}
		
		pieces[piece].onclick = function ()                         // bind this same Event to each element
		{
			var pieceClass = this.className;                        // capture the in-place class of the targeted piece
			
			if (pieceClass == "piece-empty")						// compare the class
			{
				this.className = "piece-x";                         // swap the class
			}
			
			else if (pieceClass == "piece-x")                       // continue to toggle through the classes
			{
				this.className = "piece-o";
			}
			
			else                                                    // because otherwise className is piece-o
			{                                                       // or, at the very least, options exhausted; return default
				this.className = "piece-empty";
			}
		}
	}
};
/* -end- */




