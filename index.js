function scuberGreetingForFeet(rideLength) {
  if(rideLength <= 400){
    return 'This one is on me!'
  } else if(rideLength >2000 && rideLength < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if(rideLength > 2500){
    return 'No can do.'
  }
  return scuberGreetingForFeet;
}




function ternaryCheckCity(city){
let response = city === "NYC" ? 'Ok, sounds good.' : 'No go.';

return response;
}




function switchOnCharmFromTip(tipSize){
 let response;
  switch(tipSize) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }
  return response;
}