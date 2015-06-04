function isPrimeNumber(a){
  var i, rest;
  for(i=2; i<a; i++){
   rest = a % i;
   if(rest == 0) return false;
  }
  return true;
}
