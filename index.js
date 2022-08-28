class Formatter {
	//add static methods here
	static capitalize(string) {
		// capitalizes the first letter of the string
		return string.charAt(0).toUpperCase() + string.slice(1)
	}
	
	static sanitize(string) {
		// removes any non alpha-numeric characters except dash and single quotes
		return string.replace( /[^A-Za-z0-9 '-]+/g, "" );
	}
	
	static titleize( sentence ) {
		let exceptionsWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
		let resultNewArray = [];
		let arrayOfWords = sentence.split( " " )
		for ( let x = 0; x < arrayOfWords.length; x++ ) {
			if ( x == 0 ) {
				resultNewArray.push( this.capitalize( arrayOfWords[ x] ) )
			} else {
				if ( exceptionsWords.includes( arrayOfWords[ x ] ) ) { 
					resultNewArray.push( arrayOfWords[ x ] )
				} else {
					resultNewArray.push( this.capitalize( arrayOfWords[ x ] ) )
				}
			}
			
		}
		return resultNewArray.join( " " );
	}
}


