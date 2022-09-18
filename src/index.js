let itemname
let price
let bio
let json1 = []
let json2 = []
let json3 = []
let json4 = []
let json5 = []
let json6 = []

function add() {
    itemname = document.getElementById("name").value;
    price = document.getElementById("price").value;
    bio = document.getElementById("bio").value;
    importance = document.getElementById("importance").value;
    storename = document.getElementById("storename").value;
    if (!itemname.match(/\S/g)) {
        alert("商品名は必須項目です!");
    } else {
        let data = { "name": itemname, "price": price, "bio": bio, "importance": importance, "storename": storename }
        eval("json" + importance).push(data);
        console.log(eval("json" + importance));
    }
}

function create() {

    let things1 = json1;
    let things2 = json2;
    let things3 = json3;
    let things4 = json4;
    let things5 = json5;
    let things6 = json6;
    document.getElementById("flyer").classList.add("flyermade");
    /*var p = document.getElementById('flyer');
    p.style.borderColor = 'Gray';*/
    for (var i = 0; i < things1.length; i++) {
        flyer.insertAdjacentHTML('afterbegin', `<div class="imp1 item">
        <div class="up"><img src="fd400070-removebg-preview.png" alt="ブロッコリー"></div>
        <div class="down">

        <p>${things1[i].bio}</p>
        <h1 class="position">${things1[i].name}<div class="price">${things1[i].price}円</div></h1>
        </div>
        </div>`);
    }
    for (var i = 0; i < things2.length; i++) {
        flyer.insertAdjacentHTML('afterbegin', `<div class="imp2 item">
        <div class="up2"><img src="fd400070-removebg-preview.png" alt="ブロッコリー"></div>
        <div class="down">
        <p>${things2[i].bio}</p>
        <h1 class="position" style="font-size:2.5rem;">${things2[i].name}<div class="price">${things2[i].price}円</div></h1>
        </div>
        </div>`)
    } for (var i = 0; i < things3.length; i++) {
        flyer.insertAdjacentHTML('afterbegin', `<div class="imp3  item">
        <div class="left"><img src="fd400070-removebg-preview.png" alt="ブロッコリー" width="100%"></div>
        <div class="right">
        <p>${things3[i].bio}</p>
        <h1 class="position" style="font-size: 20px; color:white;">${things3[i].name}<div class="price">${things3[i].price}円</div></h1>
        </div>
        </div>`)
    } for (var i = 0; i < things4.length; i++) {
        flyer.insertAdjacentHTML('afterbegin', `<div class="imp4">
        <div class="left"></div>
        <div class="right item">
        <h1>${things4[i].name}</h1>
        <p>${things4[i].bio}</p>
        <h1 class="price position">${things4[i].price}円</h1>
        </div>
        </div>`)
    } for (var i = 0; i < things5.length; i++) {
        flyer.insertAdjacentHTML('afterbegin', `<div class="imp5">
        <div class="left"></div>
        <div class="right item">
        <h1>${things5[i].name}</h1>
        <p>${things5[i].bio}</p>
        <h1 class="price position">${things5[i].price}円</h1>
        </div>
        </div>`)
    } for (var i = 0; i < things6.length; i++) {
        flyer.insertAdjacentHTML('afterbegin', `<div class="imp6">
        <div class="left"></div>
        <div class="right item">
        <h1>${things6[i].name}</h1>
        <p>${things6[i].bio}</p>
        <h1 class="price position">${things6[i].price}円</h1>
        </div>
        </div>`)
    }
}

