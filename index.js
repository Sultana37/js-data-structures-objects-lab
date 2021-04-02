let driver = {address:'11 11th St'};
function updateDriverWithKeyAndValue(driver, key, value){
    const copyDriver = {...driver};
    copyDriver[key] =value; 
 return copyDriver;
}


console.log("");
console.log(driver);
console.log("updateDriverWithKeyAndValue :");
console.log(updateDriverWithKeyAndValue(driver, "name", "Sam"));
console.log(driver);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
driver[key]= value;
return driver;
}

console.log("");
console.log(driver);
console.log("destructivelyUpdateDriverWithKeyAndValue");
console.log(destructivelyUpdateDriverWithKeyAndValue(driver, "nickname", "Lil"));
console.log(driver);
console.log(destructivelyUpdateDriverWithKeyAndValue(driver, "zodiac", "libra"));

function deleteFromDriverByKey(driver, key) {
  const copyDriver ={...driver};
  delete copyDriver[key]; 
return copyDriver;
}

console.log("");
console.log(driver);
console.log("deleteFromDriverByKey");
console.log( deleteFromDriverByKey("nickname"));

function destructivelyDeleteFromDriverByKey(driver, key) {
 delete driver[key];
 return driver;
}

console.log("");
console.log(driver);
console.log("destructivelyDeleteFromDriverByKey");
console.log( destructivelyDeleteFromDriverByKey(driver, "address"));
console.log(driver);