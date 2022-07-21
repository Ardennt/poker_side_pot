
// takes in an array with sorted players (winners to losers)
// -> make sure in the sorted array, people who have folded are last
// folded players should be ordered last
// void function, but distributes the earnings
export function distribute(players) {
    new_balances = [];

    for (let i = 0; i < players.length; i++){
        new_balances.push(players[i].balance);
    }

    for (let j = 0; j < players.length; j++){
        // skip the winner if he doesn't bet anything
        if (players[j].bet == 0){
            continue;
        }

        winner_bet = players[j].bet;
        winner_gains = 0;

        // collect money from everyone with lower score than yourself
        for (let z = j; z < players.length; z++){
            // takes care of hidden case where a player may
            // fold before or their all-in amount is not
            // the same as the current game bet
            if (players[z].bet < winner_bet){
                winner_gains += players[z].bet;
                players[z].bet = 0;
                continue;
            }
            winner_gains += winner_bet;
            players[z].bet -= winner_bet;
        }

        // add the winner gains to the new balance
        new_balance[j] += winner_gains;
    }
    
    // take back your own bet that no one else could match
    for (let i = 0; i < players.length; i++){
        players[i].balance = new_balances[i] + players[i].bet;
        players[i].bet = 0;
    }

    // return the array of player objects
    return players;
    
}