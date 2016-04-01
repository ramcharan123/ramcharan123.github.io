describe("Temperature monitor Suite", function() {

  var one="2.8 Kohms, +/-5%";
  var two="5.1 ohms, +/-10%";  
  
  describe("Described set [Brown, Red, Brown, Gold] ",function(){
    it("Expect resistance of [Brown, Red, Brown, Gold] = 2.8 Kohms, +/-5%",function(){
      var t=new ResistorCalculator();
      expect(one).toEqual(t.calculateResistance("Brown", "Red", "Brown", "Gold"))
    }); 
    });
    describe("Described set[Green, Blue, Violet, Silver] ",function(){
    
       it("Expect resistance of [Green, Blue, Violet, Silver]  = 5.1 ohms, +/-10%",function(){
      var t=new ResistorCalculator();
      expect(two).toEqual(t.calculateResistance("Green", "Blue", "Violet", "Silver"))
    }); 
    });
    });
  
    
