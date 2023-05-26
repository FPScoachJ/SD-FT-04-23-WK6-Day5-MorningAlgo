const redShirtHeights = [5, 6, 7, 2, 3, 1, 2, 3];
const blueShirtHeights = [1, 1, 1, 1, 1, 1, 1, 1];

redShirtHeights.sort((a, b) => a - b);
blueShirtHeights.sort((a, b) => a - b);
console.log(redShirtHeights, blueShirtHeights);

function heightCompare() {
  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] > blueShirtHeights[i]) {
        console.log("True. Reds in the back!");
        return true;
    } else if (blueShirtHeights[i] > redShirtHeights[i]) {
      console.log("True.  Blues in the back!");
        return true;
    } else if (blueShirtHeights[i] === redShirtHeights[i]) {
      console.log("False.  Can't take a photo!");
        return false; 
    } else  console.log("False. Can't take a photo!");
    return false;
  }
}

heightCompare();