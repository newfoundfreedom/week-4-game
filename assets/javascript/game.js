// CRYSTALS COLLECTOR
// ===================
// Joel Roberts - 2017


// GAME OBJECT
// ------------------------------------------------------------------------------------

var ccGame = {

    winCount: 0,
    lossCount: 0,
    randNum: 0,
    playerNum: 0,

    // GAME INITIALIZE METHOD
    initialize: function () {                                          // at each new game do the following:
        this.playerNum = 0;                                            // reset users number to 0
        var imageBank = ['assets/images/gem1.png', 'assets/images/gem2.png', 'assets/images/gem3.png', 'assets/images/gem4.png', 'assets/images/gem5.png', 'assets/images/gem6.png', 'assets/images/gem7.png', 'assets/images/gem8.png', 'assets/images/gem9.png'];
        this.randNum = [Math.floor(Math.random() * (120 - 19)) + 19];  // select a random number for game play
        $('#game-num').text(this.randNum);                             // display Game Number
        $('#player-num').text(this.playerNum);                         // display initial UserNum

        $.each([1, 2, 3, 4], function (index, value) {                                    // setup a loop to run four times (one for each crystal to be displayed)
            var displayCrystal = imageBank[Math.floor(Math.random() * imageBank.length)]; // select random crystal from imageBank
            $('#crystal' + value).attr('src', displayCrystal)                             // display it in its slot to the DOM
                         .data('numVal', [Math.floor(Math.random() * (12 - 1)) + 1]);     // assign a random number value between 1 & 12 to image
            imageBank.splice(imageBank.indexOf(displayCrystal), 1);                       // remove the selected crystal from imageBank so that each crystal displayed is unique
        })
    },

    // play: function() {
    //   #('#crystal-img').on('click',function(){
    //       console.log('you clicked a crystal');
    //     }),
    // },



    // EVALUATE FOR WIN OR LOSS
    eval: function () {
        if (this.playerNum === this.randNum ){
            var playAgain = confirm('You Won!!! Would you like to play again?');
        }
        else if (this.playerNum > this.randNum){
            var playAgain = confirm('You Lost. Would you like to play again?');
        }
    },








};

ccGame.initialize();



// $('#crystal2').on('click', function(){
//     this.playerNum = this.playerNum + ($(this).attr("data-numVal"));
//     this.eval();
// });
//
// $('#crystal3').on('click', function(){
//     this.playerNum = this.playerNum + ($(this).attr("data-numVal"));
//     this.eval();
// });
//
// $('#crystal4').on('click', function(){
//     this.playerNum = this.playerNum + ($(this).attr("data-numVal"));
//     this.eval();
// });