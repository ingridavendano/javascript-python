var KittyCat = function(name, tiredness, hunger, loneliness, happiness) {
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.loneliness = loneliness;
    this.happiness = happiness;


    this.feed = function() {
        this.hunger = this.hunger + 5;
        console.log("Kitty Cat's hunger level is " + this.hunger);
    };
    this.sleep = function(numMins) {
        this.tiredness = this.tiredness - numMins;
        console.log("Kitty Cat has slept " + numMins + " minutes, and will probably take another nap soon.");
    };
    this.pet = function(numMins) {
        if (numMins%2 === 0) {
            this.loniliness = this.loniliness - numMins;
            this.happiness = this.happiness * numMins;
            console.log("Kitty Cat likes feeling \"special.\"");
        } else {
            console.log("Oh hell no. Stay the hell away. >_> Do not pet the kitty.");
        }
    };
};