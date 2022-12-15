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
    arr[i] = 1 + Math.random() * (5 + 1 - 1);
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
    prices[i] = 1000 + Math.random() * (10000 + 1 - 1000);
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

let variants = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];

let setFeatures = () => {
  for (i = 0; i < 8; i++) {
    randomNumber = Math.floor(1 + Math.random() * 5);
    arrVariant[i] = variants[randomNumber];
    for (a = 1; a < randomNumber + 1; a++) {
      let rands = Math.floor(Math.random() * variants.length);
      arrVariant[i] = arrVariant[i] + "," + variants[rands];
    }
  }
  return arrVariant;
};
setFeatures();

let varic = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];

const to = [];
const tmp = [...varic];
while (tmp.length) {
  to.push(tmp.splice(Math.floor(Math.random() * tmp.length), 1)[0]);
}
randomNumber = Math.floor(1 + Math.random() * 5);
const arrTest = [];
for (i = 0; i < randomNumber; i++) {
  arrTest[i] = to[i];
}

let locations = {};

let setLocation = () => {
  for (i = 0; i < 8; i++) {
    let x;
    let y;

    y = Math.floor(130 + Math.random() * (600 + 1 - 130));
    x = Math.floor(250 + Math.random() * (1100 + 1 - 150));
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
        features: arrTest,
        photos: randomArrFoto,
        location: locations[i],
        address: address[i],
      },
    };
  }

  return objeckti;
};
setObject();

//let block = document.querySelector(".map").classList.remove("map--faded");
let visiblPins = () => {
  let similarPinsElement = document.querySelector(".map__pins");
  let similarPinTemplate = document
    .querySelector("#mapp")
    .content.querySelector("#butPin");
  for (let i = 0; i < objeckti.length; i++) {
    let pinsElement = similarPinTemplate.cloneNode(true);
    pinsElement.querySelector("#pinImg").alt = objeckti[i].offer.title;
    pinsElement.querySelector("#pinImg").src = objeckti[i].author.avatar;
    pinsElement.querySelector("#pinImg").classList.add("n" + i);
    pinsElement.querySelector(".abc").style =
      "left:" +
      objeckti[i].offer.location.x +
      "px;" +
      "top:" +
      objeckti[i].offer.location.y +
      "px;";
    similarPinsElement.appendChild(pinsElement);
  }
};

let visiblCarts = () => {
  let similarCartsElement = document.querySelector(".map__pins");
  let similarCartTemplate = document
    .querySelector("#mapp")
    .content.querySelector(".map__card");

  for (let i = 0; i < 1; i++) {
    let cartElement = similarCartTemplate.cloneNode(true);

    cartElement.querySelector(".obekt_label").textContent =
      objeckti[i].offer.title;
    cartElement.querySelector(".popup__text--address").textContent =
      objeckti[i].offer.address;
    cartElement.querySelector(".popup__price").innerHTML =
      objeckti[i].offer.price + "&#x20bd;/ночь";

    if (objeckti[i].offer.type === "flat") {
      cartElement.querySelector(".tipus").innerHTML = "Квартира";
    }
    if (objeckti[i].offer.type === "bungalo") {
      cartElement.querySelector(".tipus").innerHTML = "Бунгало";
    }
    if (objeckti[i].offer.type === "house") {
      cartElement.querySelector(".tipus").innerHTML = "Дом";
    }
    if (objeckti[i].offer.type === "palace") {
      cartElement.querySelector(".tipus").innerHTML = "Дворец";
    }

    cartElement.querySelector("#rooms").innerHTML =
      objeckti[i].offer.rooms +
      " комнаты для " +
      objeckti[i].offer.guests +
      " гостей";

    cartElement.querySelector("#checkInOut").innerHTML =
      "Заезд после " +
      objeckti[i].offer.checkIn +
      " , выезд до " +
      objeckti[i].offer.checkOut;

    cartElement.querySelector("#test").textContent =
      objeckti[i].offer.description;

    cartElement.querySelector("#i1").src = objeckti[i].offer.photos[0];
    cartElement.querySelector("#i2").src = objeckti[i].offer.photos[1];
    cartElement.querySelector("#i3").src = objeckti[i].offer.photos[2];

    cartElement.querySelector("#cardAva").src = objeckti[i].author.avatar;
    //  cartElement.querySelector(".popup__close").addEventListener("click", () => {
    //    document.querySelector(".map__card").classList.add("hidden");
    //  });

    // let boms = document
    //   .querySelector(".popup__close")
    //   .addEventListener("click", () => {
    //     document.querySelector(".map__card").classList.add("hidden");
    //  });

    for (i = 0; i < objeckti[i].offer.features.length; i++) {
      let x = 1;
      let y = 1;

      if (objeckti[i].offer.features[i] === "wifi") {
        cartElement.querySelector("#li1").classList.add("feature");
      }
      if (objeckti[i].offer.features[i] === "dishwasher") {
        cartElement.querySelector("#li2").classList.add("feature");
      }
      if (objeckti[i].offer.features[i] === "parking") {
        cartElement.querySelector("#li3").classList.add("feature");
      }
      if (objeckti[i].offer.features[i] === "washer") {
        cartElement.querySelector("#li4").classList.add("feature");
      }
      if (objeckti[i].offer.features[i] === "elevator") {
        cartElement.querySelector("#li5").classList.add("feature");
      }
      if (objeckti[i].offer.features[i] === "conditioner") {
        cartElement.querySelector("#li6").classList.add("feature");
      }
    }

    similarCartsElement.appendChild(cartElement);
    document.querySelector(".popup__close").addEventListener("click", () => {
      document.querySelector(".map__card").remove();
    });
  }
};

let test1 = () => {
  for (i = 0; i < objeckti.length; i++) {
    document.querySelector(".n" + i).addEventListener("click", () => {
      if (document.querySelector(".map__card") === null) {
        visiblCarts();
      } else {
        document.querySelector(".map__card").remove();
        visiblCarts();
      }
    });
  }
};
// Устанавливаем начальный адресс
element = document.querySelector(".map__pin--main");
topC = window.getComputedStyle(element).top.slice(0, -2);
leftC = window.getComputedStyle(element).left.slice(0, -2);
console.log(topC, leftC);
document.querySelector(".addr").value = topC + "," + leftC;

let vAdres = () => {
  element = document.querySelector(".map__pin");
  tops = Number(window.getComputedStyle(element).top.slice(0, -2)) + 70;
  leftC = Number(window.getComputedStyle(element).left.slice(0, -2));
  document.querySelector(".addr").value = tops + "," + leftC;
};

let openMap = document
  .querySelector(".map__pin--main")
  .addEventListener("mouseup", () => {
    document.querySelector(".map").classList.remove("map--faded");
    document
      .querySelector(".notice__form")
      .classList.remove("notice__form--disabled");
    let yOs = document.querySelector(".map__pin--main");
    document.querySelector(".addr").value = "ok";
    vAdres();
    visiblPins();
    test1();

    //visiblCarts();
  });
