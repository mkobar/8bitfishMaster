import firebase from "./firebase";
const db = firebase.firestore();
const ref = db.collection("fish");
const refData = db.collection("fishData");
export async function addFish(id, title, rarity, colorUpper, image) {
  const color = colorUpper.toLowerCase();
  const newFish = {
    id,
    title,
    rarity,
    color,
    image,
  };
  console.log(id, title, rarity, color, image);
  // console.log(`%c${color}``color:${color}`);
  refData.doc("color").update({
    [color]: firebase.firestore.FieldValue.increment(1),
  });

  refData.doc("title").update({
    [title]: firebase.firestore.FieldValue.increment(1),
  });

  refData.doc("rarity").update({
    [rarity]: firebase.firestore.FieldValue.increment(1),
  });

  ref
    .doc(id)
    .set(newFish)
    .catch((err) => console.log(err));
}

export function getFishData(setFishData) {
  refData.onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    console.log(items);
    setFishData(items);

    //   setFish(items);
  });
}

export function getFish() {
  ref.onSnapshot((querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push(doc.data());
    });
    console.log(items);
    //   setFish(items);
  });
}
