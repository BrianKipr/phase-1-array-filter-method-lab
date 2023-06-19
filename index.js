// returns all drivers that match the passed in name;
function findMatching(driver, name) {
    return driver.filter(driver => driver.toLowerCase() === name.toLowerCase())
  }
//eturns matching drivers if case does not match but letters do
  function fuzzyMatch(driver, letters) {
    return driver.filter(driver => driver.startsWith(letters))
  }
  
  function matchName(driver, name) {
    return driver.filter(driver => driver.name === name)
  }
  
