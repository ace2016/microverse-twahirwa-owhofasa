function catAndMouse(x, y, z) {
  let catAposition = Math.abs(x - z);
  let catBposition = Math.abs(y - z);
  if (catAposition < catBposition) {
    return "Cat A";
  } else if (catBposition < catAposition) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}
