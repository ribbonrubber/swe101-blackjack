var NAME_INPUT = 'Name input';
var SET_WAGER_POINTS = 'Set wager points';
var BLACKJACK = 'Blackjack game';
var gameMode = NAME_INPUT;
// var playerBalance =

// make/shuffle a deck
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  // Loop over the suits array
  var suitIndex = 0;
  while (suitIndex < suits.length) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    var rankCounter = 1;
    while (rankCounter <= 13) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;
      var cardValue = '';

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = 'Ace';
        // must reflect Ace ability to be counted as 1 or 11
        // cardValue = 1 or 11;
      } else if (cardName == 11) {
        cardName = 'Jack';
        cardValue = 10;
      } else if (cardName == 12) {
        cardName = 'Queen';
        cardValue = 10;
      } else if (cardName == 13) {
        cardName = 'King';
        cardValue = 10;
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        value: cardValue,
      };

      // Add the new card to the deck
      cardDeck.push(card);

      // Increment rankCounter to iterate over the next rank
      rankCounter += 1;
    }

    // Increment the suit index to iterate over the next suit
    suitIndex += 1;
  }

  // Return the completed card deck
  return cardDeck;
};

var main = function (input) {
  var myOutputValue = '';
  var playerCards = [];
  var playerCardTotal = [];
  var dealerCards = [];
  var dealerCardTotal = [];
  var playerName = '';

  if (gameMode == NAME_INPUT) {
    playerName = String(input);
    myOutputValue = 'Hello ' + playerName + ", let's enter how many points you'd like to wager.";
    gameMode = SET_WAGER_POINTS;
  }

  if (gameMode == SET_WAGER_POINTS) {
    currentWager = Number(input);
    myOutputValue = playerName + ', you have put a bet of ' + currentWager + ' points.<br>Please click Submit to allow the dealer to deal cards.';
    gameMode = BLACKJACK;
  }

  if (gameMode == BLACKJACK) {
    // var playerHand = 0;
    makeDeck;
    var bustTotal = 21;
    while (playerCardTotal < bustTotal) {
      var playerCard = deck.pop();
      playerCards.push(playerCard);
      playerCardTotal.push(playerCard.valueBJ);
      // playerHand +=1;

      var dealerCard = deck.pop();
      dealerCards.push(dealerCard);
      dealerCardTotal.push(dealerCard.valueBJ);
      // dealerHand +=1;
    }

    myOutputValue = 'The card drawn for ' + playerName + ' is ' + playerCards.slice(-1).name + ' of ' + playerCards.slice(-1).suit + '. The total value of ' + playerName + "'s card is " + playerCardTotal + '.<br>';
    myOutputValue = 'The dealer drew ' + dealerCards.slice(-1).name + ' of ' + dealerCards.slice(-1).suit + ". The total value of the dealer's card is" + dealerCardTotal + '.<br><br>';
    // fix how to recall card total value
  }

  return myOutputValue;
};
