// CRYSTALS COLLECTOR
// ===================
// Joel Roberts - 2017


// GAME OBJECT
// ------------------------------------------------------------------------------------


var ccGame = {

    winCount: 0,
    lossCount: 0,
    targetNum: 0,
    playerScore: 0,

    // GAME INITIALIZE METHOD
    //----------------------------------------------
    startGame: function () {                                                                          // initialize a new game by doing the following:
        var imageBank = ['assets/images/gem1.png', 'assets/images/gem2.png', 'assets/images/gem3.png',
            'assets/images/gem4.png', 'assets/images/gem5.png', 'assets/images/gem6.png',
            'assets/images/gem7.png', 'assets/images/gem8.png', 'assets/images/gem9.png'];             // reset the crystal image bank
        this.targetNum = [Math.floor(Math.random() * (120 - 19)) + 19];                                // select a random target number for game play
        $('#target-num').text(this.targetNum);                                                         // display target number
        this.playerScore = 0;                                                                          // reset the players number to 0
        $('#player-score').text(this.playerScore);                                                     // display initial player score
        $('#win-count').text(this.winCount);                                                           // display current win Count
        $('#loss-count').text(this.lossCount);                                                         // display current loss Count
        $('#game-board').empty();                                                                      // clear any existing game-board elements


        $.each([1, 2, 3, 4, 5, 6], function (index, value) {                                // setup a loop to run six times (one for each crystal to be displayed)
            var crystalDisplayed = imageBank[Math.floor(Math.random() * imageBank.length)]; // select random crystal from imageBank
            var crystalValue = Math.floor(Math.random() * (12 - 1) + 1);                    // select a random value between 1 & 12 to assign to the crystal
            var crystalContainer = $('<div>')                                               // create a new div element
                .addClass('col-xs-4 text-center')                                           //   assign it to take up 4 columns of its parent div
                .appendTo('#game-board');                                                   //   place it within the game board area
            $('<img>')                                                                      // create an image element
                .addClass('game-crystal img-zoom')                                          //   assign it the game-crystal class (which we will grab later for our click function)
                .attr('src', crystalDisplayed)                                              //   place the randomly selected image in it
                .data('crystalPoints', crystalValue)                                        //   assign the randomly selected value through the data attribute
                .appendTo(crystalContainer);                                                //   place the image within the container div created above
            imageBank.splice(imageBank.indexOf(crystalDisplayed), 1);                       // remove the last image placed from the imageBank so that each crystal image will be unique in the current game
            console.log(crystalValue);
        });
        this.playGame();
    },

    playGame: function () {
        $('.game-crystal').on('click', function () {            // when a game crystal image is clicked do the following:
            var val = parseInt($(this).data('crystalPoints'));  // grab the crystals value; setting it to an integer
            ccGame.playerScore += val;                          // add the clicked crystal's value to the players number
            $('#player-score').text(ccGame.playerScore);        // update the players number display
            if (ccGame.targetNum == ccGame.playerScore) {       // check to see if the game has been won by comparing the players score against the target number
                ccGame.winCount++;                              // if so, iterate the win counter
                $('#winModal').modal('show');                   // and show the win modal window
            }
            else if (ccGame.playerScore > ccGame.targetNum) {   // check to see if the game has been lost - if player score is greater than the target number
                ccGame.lossCount++;                             // if so, then iterate the loss counter
                $('#lostModal').modal('show');                  // and show the loss modal window
            }
        })

        $('.play-again').on('click', function () {              // if the play-again button is pressed then
            ccGame.startGame();                                 // run the start game function
        })

        $('.exit').on('click', function () {                    // if an exit button is pressed then
            window.close();                                     // exit the current window
        })

        $('.img-zoom').hover(function() {
            $(this).addClass('transition');

        }, function() {
            $(this).removeClass('transition');
        });



    }
};

ccGame.startGame();




