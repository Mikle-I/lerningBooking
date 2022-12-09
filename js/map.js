let avatar = [];
let avatars = function () {
  for (i = 0; i < 8; i++) {
    avatar[i] = "img/avatars/user0" + (i + 1) + ".png";
  }
  return avatar[i];
};
avatars();

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

let arrFoto = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
];
let itogArrFoto = [];
let randomArrFoto = [];

let randomsArrFoto = (array) => {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  randomArrFoto = array;

  return randomArrFoto;
};

randomsArrFoto(arrFoto);

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
    randomNumber = Math.floor(1 + Math.random() * 5);
    arrVariant[i] = variants[randomNumber];
    for (a = 1; a < randomNumber + 1; a++) {
      let rands = Math.floor(Math.random() * variants.length);

      arrVariant[i] = arrVariant[i] + " " + variants[rands];
    }
  }
  return arrVariant;
};
setFeatures();

let locations = {};

let setLocation = () => {
  for (i = 0; i < 8; i++) {
    let x;
    let y;

    y = Math.floor(130 + Math.random() * (600 + 1 - 130));
    x = Math.floor(150 + Math.random() * (1100 + 1 - 150));
    locations[i] = { x: x, y: y };
  }
  return locations;
};
setLocation();

let address = [];
let setAdress = () => {
  for (i = 0; i < 8; i++) {
    address[i] = locations[i].x + ", " + locations[i].y;
  }
  return address;
};

setAdress();

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
        photos: randomArrFoto,
        location: locations[i],
        address: address[i],
      },
    };
  }

  return objeckti;
};
setObject();
console.log(objeckti);
console.log(locations);

let block = document.querySelector(".map").classList.remove("map--faded");

let similarPinsElement = document.querySelector(".map__pins");
let similarPinTemplate = document
  .querySelector("#mapp")
  .content.querySelector("#butPin");
for (let i = 0; i < objeckti.length; i++) {
  let pinsElement = similarPinTemplate.cloneNode(true);
  pinsElement.querySelector("#pinImg").alt = objeckti[i].offer.title;
  pinsElement.querySelector("#pinImg").src = objeckti[i].author.avatar;
  pinsElement.querySelector(".abc").style =
    "left:" +
    objeckti[i].offer.location.x +
    "px;" +
    "top:" +
    objeckti[i].offer.location.y +
    "px;";
  similarPinsElement.appendChild(pinsElement);
}
