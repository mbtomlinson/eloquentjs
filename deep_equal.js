function countProperties(thing){
  count = 0
  for (var propertyName in thing){count++}
  return count
}

function deepEqual(thingOne, thingTwo){
  propTests=[]
  for (var propertyName in thingOne){
    if (typeof thingOne[propertyName]=='object'){
      propTests.push(deepEqual(thingOne[propertyName],thingTwo[propertyName]));
    }
    else
    propTests.push(thingOne[propertyName]==thingTwo[propertyName]);}
  if (typeof thingOne !== "object"){return false}
  else if (thingOne ===null){return false}
  else if (countProperties(thingOne) != countProperties(thingTwo)){return false}
  else if (propTests.indexOf(false)>-1){return false}
  else return true
}
  