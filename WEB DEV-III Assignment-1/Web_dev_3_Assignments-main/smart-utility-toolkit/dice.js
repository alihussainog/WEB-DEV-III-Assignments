const crypto=require("crypto");

for(let i=1;i<=6;i++){
    const dice=crypto.randomInt(1,7)
    console.log("Dice Rolled:",dice)
}