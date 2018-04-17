var katzDeliLine = [];

function takeANumber(katzDeliLine, nextPerson){
   katzDeliLine.push(nextPerson);
  return `Welcome, ${nextPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'There is nobody waiting to be served!';
  } else {
    return 'Currently serving ' + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
    return 'The line is currently empty.';
  } else {
  var customerPosition = [];
   katzDeliLine.forEach(function(customer){
     var position = 1;
     customerPositon.push(position + ". " + customer)
     position++;
   });
   return 'The line is currently: ' + customerPosition.join(', ')
 }
}
