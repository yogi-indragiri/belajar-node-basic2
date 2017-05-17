/**
 * Created by muhammadyogiindragiri on 5/17/17.
 */

function Greetr() {
    this.greeting = 'Hello World!!!';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greetr;