window.alert(`This is an alert! JavaScript is running!`);


var playername = window.prompt(`What is your robot's name?`);
console.log(playername);
var playerhealth = 100;
var playerattack = 10;

//You can also log multiple vallues at once this way
console.log(playername, playerattack, playerhealth);

var enemyname = `Roborto`;
var enemyhealth = 50;
var enemyattack = 12;

function fight() {
    //Alerts players fight is starting
    window.alert(`Welcome to Robot Gladiators!`);

  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyhealth = enemyhealth - playerattack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
      playername + ` attacked ` + enemyname + ` . ` + enemyname + ` now has ` + enemyhealth + ` health remaining`
  )
  // put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} 
else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerhealth = playerhealth - enemyattack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
      enemyname + ` attacked ` + playername + ` . ` + playername + ` now has ` + playerhealth + ` health remaining`
      )
      // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
      } 
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
    }

fight();

// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }