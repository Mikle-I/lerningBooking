let avatar = [];
let avatars = function () {
  for (i = 0; i < 8; i++) {
    avatar[i] = "img/avatars/user0" + (i + 1);
  }
  return avatar[i];
};
avatars();
console.log(avatar);

let arrTitle = [
  "Большая уютная квартира",
  "Маленькая неуютная квартира",
  "Огромный прекрасный дворец",
  "Маленький ужасный дворец",
  "Красивый гостевой домик",
  "Некрасивый негостеприимный домик",
  "Уютное бунгало далеко от моря",
  "Неуютное бунгало по колено в воде",
];
let arrType = ["palace", "flat", "house", "bungalo"];

let itogType = [];
let setType = function (arr) {
  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * arr.length);
    itogType[i] = arr[rand];
  }
  return itogType;
};
setType(arrType);

let checkIn = ["12-00", "13-00", "14-00"];
let checkOut = ["12-00", "13-00", "14-00"];
let checkInArr = [];
let checkOutArr = [];
let setTimes = function (arr, itogArr) {
  for (let i = 0; i < 8; i++) {
    let rand = Math.floor(Math.random() * arr.length);
    itogArr[i] = arr[rand];
  }
  return itogArr;
};
setTimes(checkIn, checkInArr);
setTimes(checkIn, checkOutArr);

let address = [{}];

let guests = [];
let setGuests = () => {
  for (i = 0; i < 8; i++) {
    let arr = [];
    arr[i] = 3 + Math.random() * (12 + 1 - 3);
    guests[i] = Math.floor(arr[i]);
  }

  return guests[i];
};
setGuests();

let rooms = [];
let setRooms = () => {
  for (i = 0; i < 8; i++) {
    let roooms = [];
    roooms[i] = 1 + Math.random() * (5 + 1 - 1);
    rooms[i] = Math.floor(roooms[i]);
  }

  return rooms[i];
};
setRooms();

// рандом цены + создание массива цен

let price = [];
let setPrice = () => {
  for (i = 0; i < 8; i++) {
    let prices = [];
    prices[i] = 10000 + Math.random() * (1000000 + 1 - 10000);
    price[i] = Math.floor(prices[i]);
  }

  return price[i];
};
setPrice();
console.log(price);

let features = [];
let randomNumber;
let arrVariant = [];
let setFeatures = () => {
  let variants = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner",
  ];

  for (i = 0; i < 8; i++) {
    randomNumber = Math.floor(1 + Math.random() * 6);
    let rand = Math.floor(Math.random() * variants.length);
    arrVariant[i] = variants[rand];
  }
  return arrVariant;
};
console.log(arrVariant);
setFeatures();

let objeckti = [];

let setObject = () => {
  for (i = 0; i < 8; i++) {
    objeckti[i] = {
      author: {
        avatar: avatar[i],
      },
      offer: {
        title: arrTitle[i],
        price: price[i],
        type: itogType[i],
        rooms: rooms[i],
        guests: guests[i],
        checkIn: checkInArr[i],
        checkOut: checkOutArr[i],
        description: "",
        features: arrVariant[i],
      },
    };
  }

  return objeckti;
};
setObject();
console.log(objeckti);
