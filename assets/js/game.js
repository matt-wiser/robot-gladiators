// This captures the player's name for their robot and sets initial health, money, and attack values
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var playerName = window.prompt("What is your robot's name?");

// This establishes starting values for enemy name, health, and attack
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    // Alert players they are starting a round
    window.alert("Welcome to Robot Gladiators!");
    // Prompts player to fight or skip
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        ); 
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // Confirm player wants to skip the fight
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        // If yes (true) leave the fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // Subtract money from player for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else{
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
     }
};
fight();