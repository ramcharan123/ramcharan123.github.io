function ResistorCalculator() {
  this.calculateResistance = function(a,b,c,d) {
    console.log("reached");
  	var multiplier = new Array()
    multiplier[0] = 0
    multiplier[1] = 1
    multiplier[2] = 2
    multiplier[3] = 3
    multiplier[4] = 4
    multiplier[5] = 5
    multiplier[6] = 6
    multiplier[7] = 7
    multiplier[8] = 8
    multiplier[9] = 9
    multiplier[10] = -1
    multiplier[11] = -2

    var tolerance = new Array()
    tolerance[0] = "+/-5%"
    tolerance[1] = "+/-10%"
    tolerance[2] = "+/-20%"

function format(ohmage) {
	if (ohmage >= 1e6) {
		ohmage /= 1e6
		return "" + ohmage + " Mohms"
	} else {
		if (ohmage >= 1e3) {
			ohmage /= 1e3
			return "" + ohmage + " Kohms"
		} else {
			return "" + ohmage + " ohms"
		}
	}
}
    var colorArray = new Array("Black","Blue","Brown","Gold","Gray","Green","None","Orange",
    	"Red","Silver","Violet","White","Yellow")

    var aValue =0;
    for (i = 0; i < colorArray.length; i++) {
    	var n = colorArray[i].localeCompare(a);
    	if(n==0)
    		aValue=i;
    }
    for (i = 0; i < colorArray.length; i++) {
    	var n = colorArray[i].localeCompare(b);
    	if(n==0)
    		bValue=i;
    }
    for (i = 0; i < colorArray.length; i++) {
    	var n = colorArray[i].localeCompare(c);
    	if(n==0)
    		cValue=i;
    }
    var dValues = 0;
    console.log("dValues = "+dValues);
     var dValues = 0;
     console.log("d = "+d);
    if(d.localeCompare("Gold")==0){
       
        dValues = 0;
    }
    if(d.localeCompare("Silver")==0){
        dValues = 1;
    }
   if(d.localeCompare("None")==0){
        dValues = 2;
    }
   
   console.log(dValues);
    var ohmage = (aValue * 10) + bValue;
    ohmage = eval("" + ohmage + "e" + multiplier[cValue])
    ohmage = format(ohmage)
	var tol = tolerance[dValues]
	return(ohmage + ", " + tol);
  }
}