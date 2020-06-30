        /*1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept two parameters: the current line of people, along with the new person's name. The function should return a welcome message including the new person's position in line, such as `"Welcome, Ada. You are number 1 in line."`. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.*/

function takeANumber(katzDeliLine, guestName) {
katzDeliLine.push(guestName);
return `Welcome, ${guestName}. You are number ${katzDeliLine.length} in line.`;
}

        /*Parameters of function takeANumber: "current line of people"= [katzDeliLine]; "new person's name" = [guestName].
        katzDeliLine.push(guestName) = since katzDeliLine starts off as an emopty array, elements should be added to it. Logically, when someone walks into a store and takes a place in 
        line they start in the back. To show this, I used the .push() function to send whatever argument is given for the parameter [guestName] to the back of the array signified by 
        katzDeliLine.  */
      
        /*2. Build a function `nowServing`. This function should accept the current line of people (`katzDeliLine`) and return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"
        
          nowServing
        ✓ returns "There is nobody waiting to be served!" when no one is on line
        ✓ returns an announcement about the person it is serving, and shifts the line*/
      
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ` + katzDeliLine.shift() + '.'; 
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var output = [];
    for (var i = 0; i <katzDeliLine.length; i++) {
      output = output + (i + 1) + `. ` + katzDeliLine[i] + `, `;
    }
    output = output.slice(0, -2);
    return `The line is currently: ${output}`;
  } else {
    return `The line is currently empty.`;
  }
}