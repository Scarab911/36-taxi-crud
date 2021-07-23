class Taxi {
    constructor(driverName) {
        this.driver = driverName;
        this.kilometerPrice = 100;
        this.distance = 0;
        this.wallet = 0;
    }

    intro() {

        console.log(`Sveiki, as ${this.driver} ir kilometro kaina su manimi yra ${(this.kilometerPrice / 100).toFixed(2)} Eur.`);
    }

    updatePrice(newPrice) {

        this.kilometerPrice = newPrice * 100;
        console.log(`${this.driver} nustate nauja kilometro kaina - ${(this.kilometerPrice / 100).toFixed(2)} Eur.`);
    }

    ride(distance) {
        this.distance += distance;
        this.wallet += distance * this.kilometerPrice;
    }

    stats() {
        console.log(`${this.driver} nuvaziavo ${this.distance} Km ir uzdirbo ${(this.wallet / 100).toFixed(2)}`);
    }

}
module.exports = Taxi;