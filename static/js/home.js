// Javascript for BlackJack Project by Shakthi
// Getting random values

// hit function
var playerScore = 0;
var playerScoreText;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;

function  hit() {
    if (playerScore < 20) {
        // Removing previous score
        var userScore = document.getElementById("playerscore-")
        if (userScore != null) {
            document.getElementById("playerscore-").remove();
        }

        // Randomly obtaining card number
        var cardNumber = Math.floor(Math.random() * 13);

        // Showing card on screen
        if (cardNumber == 0) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/A.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 11;
        }
        else if (cardNumber == 1) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/2.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 2;
        }
        else if (cardNumber == 2) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/3.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 3;
        }
        else if (cardNumber == 3) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/4.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 4;
        }
        else if (cardNumber == 4) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/5.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 5;
        }
        else if (cardNumber == 5) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/6.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 6;
        }
        else if (cardNumber == 6) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/7.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 7;
        }
        else if (cardNumber == 7) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/8.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 8;
        }
        else if (cardNumber == 8) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/9.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 9;
        }
        else if (cardNumber == 9) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/10.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 10;
        }
        else if (cardNumber == 10) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/J.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 10;
        }
        else if (cardNumber == 11) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/Q.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 10;
        }
        else if (cardNumber == 12) {
            var image = document.createElement('img');
            var div = document.getElementById('playercards');
            image.src = "http://127.0.0.1:5500/static/images/K.png";
            image.setAttribute("id", "cardnum");
            div.appendChild(image);
            playerScore += 10;
        }

        // Printing score on screen
        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode("Your Score: " + playerScore);
        h2.setAttribute("id", "playerscore-");
        h2.appendChild(h2Text);
        document.getElementById('playerscore').appendChild(h2);
    }
    // else {
    //     // Removing previous score
    //     var userScore = document.getElementById("playerscore-")
    //     if (userScore != null) {
    //         document.getElementById("playerscore-").remove();
    //     }
    //     var h2 = document.createElement("h2");
    //     var h2Text = document.createTextNode("Bust!!..");
    //     h2.setAttribute("id", "playerscore-");
    //     h2.appendChild(h2Text);
    //     document.getElementById('playerscore').appendChild(h2);
    // }

    // Checking if score is less than 21
    if (playerScore > 21) {
        // Removing previous score
        var userScore = document.getElementById("playerscore-")
        if (userScore != null) {
            document.getElementById("playerscore-").remove();
        }
        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode("Bust!!..");
        h2.setAttribute("id", "playerscore-");
        h2.appendChild(h2Text);
        document.getElementById('playerscore').appendChild(h2);
        playerScoreText = "Bust!!..";
    }
}


// stand function
var dealerScore = 0;
var dealerScoreText;
function stand() {
    for (let i=0; i<3; i++) {
        if (dealerScore < 20) {
            if (dealerScore < playerScore) {
                // for (let i=0; i<3; i++) {
                    // Removing previous score
                    var botScore = document.getElementById("dealerscore-")
                    if (botScore != null) {
                        document.getElementById("dealerscore-").remove();
                    }
                    
                    // Randomly obtaining card values
                    var cardNumber = Math.floor(Math.random() * 13);

                    // Showing cards on screen
                    if (cardNumber == 0) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/A.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 11;
                    }
                    else if (cardNumber == 1) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/2.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 2;
                    }
                    else if (cardNumber == 2) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/3.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 3;
                    }
                    else if (cardNumber == 3) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/4.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 4;
                    }
                    else if (cardNumber == 4) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/5.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 5;
                    }
                    else if (cardNumber == 5) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/6.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 6;
                    }
                    else if (cardNumber == 6) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/7.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 7;
                    }
                    else if (cardNumber == 7) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/8.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 8;
                    }
                    else if (cardNumber == 8) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/9.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 9;
                    }
                    else if (cardNumber == 9) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/10.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 10;
                    }
                    else if (cardNumber == 10) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/J.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 10;
                    }
                    else if (cardNumber == 11) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/Q.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 10;
                    }
                    else if (cardNumber == 12) {
                        var image = document.createElement('img');
                        var div = document.getElementById('dealercards');
                        image.src = "http://127.0.0.1:5500/static/images/K.png";
                        image.setAttribute("id", "cardnum");
                        div.appendChild(image);
                        dealerScore += 10;
                    }

                    // Printing score on screen
                    var h2 = document.createElement("h2");
                    var h2Text = document.createTextNode("Dealer Score: " + dealerScore);
                    h2.setAttribute("id", "dealerscore-");
                    h2.appendChild(h2Text);
                    document.getElementById('dealerscore').appendChild(h2);
                }
            // else {
            //     var botScore = document.getElementById("dealerscore-")
            //     if (botScore != null) {
            //         document.getElementById("dealerscore-").remove();
            //     }
            //     var h2 = document.createElement("h2");
            //     var h2Text = document.createTextNode("Bust!!..");
            //     h2.setAttribute("id", "dealerscore-");
            //     h2.appendChild(h2Text);
            //     document.getElementById('dealerscore').appendChild(h2);
            //     dealerScoreText = "Bust!!..";
            // }
        }
    } 
    
    // Checking if score is less than 21
    if (dealerScore > 21) {
        // Removing previous score
        var userScore = document.getElementById("dealerscore-")
        if (userScore != null) {
            document.getElementById("dealerscore-").remove();
        }
        var h2 = document.createElement("h2");
        var h2Text = document.createTextNode("Bust!!..");
        h2.setAttribute("id", "dealerscore-");
        h2.appendChild(h2Text);
        document.getElementById('dealerscore').appendChild(h2);
        dealerScoreText = "Bust!!..";
    }

    // Second part - giving results
    // Removing result text
    var result = document.getElementById("heading2")
    if (result != null) {
        document.getElementById("heading2").remove();
    }

    // Result logic
    if (playerScoreText == "Bust!!.." && dealerScoreText != "Bust!!..") {
        var h1 = document.createElement("h1");
        var h1Text = document.createTextNode("You Lost!!..");
        h1.setAttribute("id", "heading2");
        h1.appendChild(h1Text);
        document.getElementById('heading-container2').appendChild(h1);
        loseCount +=1;
    }
    else if (dealerScoreText == "Bust!!.." && playerScoreText != "Bust!!..") {
        var h1 = document.createElement("h1");
        var h1Text = document.createTextNode("You Won!!..");
        h1.setAttribute("id", "heading2");
        h1.appendChild(h1Text);
        document.getElementById('heading-container2').appendChild(h1);
        winCount +=1;
    }
    else if (dealerScoreText == "Bust!!.." && playerScoreText == "Bust!!..") {
        var h1 = document.createElement("h1");
        var h1Text = document.createTextNode("Its a Draw!!..");
        h1.setAttribute("id", "heading2");
        h1.appendChild(h1Text);
        document.getElementById('heading-container2').appendChild(h1);
        drawCount +=1;
    }
    else if (dealerScore < playerScore) {
        var h1 = document.createElement("h1");
        var h1Text = document.createTextNode("You Won!!..");
        h1.setAttribute("id", "heading2");
        h1.appendChild(h1Text);
        document.getElementById('heading-container2').appendChild(h1);
        winCount +=1;
    }
    else if (dealerScore > playerScore) {
        var h1 = document.createElement("h1");
        var h1Text = document.createTextNode("You Lost!!..");
        h1.setAttribute("id", "heading2");
        h1.appendChild(h1Text);
        document.getElementById('heading-container2').appendChild(h1);
        loseCount +=1;
    }
    else if (dealerScore == playerScore) {
        var h1 = document.createElement("h1");
        var h1Text = document.createTextNode("Its a Draw!!..");
        h1.setAttribute("id", "heading2");
        h1.appendChild(h1Text);
        document.getElementById('heading-container2').appendChild(h1);
        drawCount +=1;
    }

    // Updating result in table
    var winSpan = document.createElement('span');
    var winSpanText = document.createTextNode(winCount);
    winSpan.setAttribute("id", "wincount");
    winSpan.appendChild(winSpanText);
    document.getElementById('wins').appendChild(winSpan);

    var drawSpan = document.createElement('span');
    var drawSpanText = document.createTextNode(drawCount);
    drawSpan.setAttribute("id", "drawcount");
    drawSpan.appendChild(drawSpanText);
    document.getElementById('draws').appendChild(drawSpan);

    var loseSpan = document.createElement('span');
    var loseSpanText = document.createTextNode(loseCount);
    loseSpan.setAttribute("id", "losecount");
    loseSpan.appendChild(loseSpanText);
    document.getElementById('loses').appendChild(loseSpan);
}
    