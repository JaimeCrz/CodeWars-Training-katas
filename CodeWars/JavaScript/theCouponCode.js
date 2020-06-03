//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

  let date = new Date(currentDate);
  let expDate = new Date(expirationDate);
  if (date.getTime() - expDate.getTime() > 0) return false;
  if (enteredCode !== correctCode) return false;
  return true;
}

//only liner

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}

//Comments: nice kata to train on the functions of Date/ Get time