// string => booleen
function isTHMobile(mobileNo: String): boolean {
  if (
    (mobileNo.startsWith('06') ||
      mobileNo.startsWith('08') ||
      mobileNo.startsWith('09')) &&
    mobileNo.length === 10
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isTHMobile('0185845246'));
console.log(isTHMobile('0885255246'));
