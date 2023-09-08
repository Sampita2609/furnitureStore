var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let port = process.env.PORT || 2410;

let products = [
  {
    prodCode: "DS2S245",
    category: "Dining",
    desc: [
      "Two seater Dining Set",
      "Built from High quality wood",
      "1 year warranty",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZ_wpfvZ6izsi_aASFszdOIxUzVIwVDDPqQ&usqp=CAU",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 2 },
    ],
    title: "Two seater Dining Set",
  },
  {
    prodCode: "DS6S761",
    category: "Dining",
    desc: [
      "Six Seater Dining Set in Antique Cherry Colour",
      "Assembly by Skilled Carpenters",
      "Made from Teak wood",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2bzyrHuE60bU28WiJicGIos2e5Y253M0BPw&usqp=CAU",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
      { ingName: "Bench", qty: 1 },
    ],
    title: "Six Seater Dining Set",
  },
  {
    prodCode: "DS4S177",
    category: "Dining",
    desc: [
      "Mild Steel Four Seater Dining Set in Black Colour",
      "Knock-down construction for easy transportation",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5O1dpYknp7Dmhkd8rFQOsEX-LruZ4vh-rQ&usqp=CAU",
    ingredients: [
      { ingName: "Dining Table", qty: 1 },
      { ingName: "Chair", qty: 4 },
    ],
    title: "Mild Steel Dining Set",
  },
  {
    prodCode: "DC2S705",
    category: "Dining",
    desc: [
      "Solid Wood Dining Chair Set of Two in Dark Walnut Colour",
      "Beautiful design carved on dining chair",
      "Dining chair seat upholstered in dark brown Fabric",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzCdqrQW5yk1puaqXBeYorRUv4s2Da4gVGA&usqp=CAU",
    ingredients: [{ ingName: "Chair", qty: 2 }],
    title: "Dining Chair Set",
  },
  {
    prodCode: "BN1S388",
    category: "Dining",
    desc: [
      "Solid Wood Dining Bench in Dark Walnut Colour",
      "Comfortable bench for a relaxed dinner",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ajj7bVULP9CQA9DO49LgRJ1iOFEXh5D6sw&usqp=CAU",
    ingredients: [{ ingName: "Bench", qty: 1 }],
    title: "Dining Bench",
  },
  {
    prodCode: "SF2S532",
    category: "Drawing",
    desc: [
      "Characteristic Rising Track Arm Rest Design",
      "Premium High Gloss Leatherette Upholstery",
      "Independent Headrest And Lumber Support",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCqIqDYkTZUaeMekcznFwt-grbO0fa68hTw&usqp=CAU",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa",
  },
  {
    prodCode: "SF2S206",
    category: "Drawing",
    desc: ["Two Seater Sofa in Blue Colour", "Assembly by Skilled Carpenters"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvScnWO943PJUkyFZVWqSbvYuF8cCmsNIXqQ&usqp=CAU",
    ingredients: [{ ingName: "Sofa", qty: 1 }],
    title: "Two Seater Sofa",
  },
  {
    prodCode: "SFBD311",
    category: "Drawing",
    desc: [
      "Sofa Cum bed in Brown Colour",
      "Ply-wood construction with hand polished finish",
      "Removable fabric cover on best quality foam mattress",
      "Throw cushions and bolsters come with the product",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCODdlrzlh6Yj68KpSf7aTTttH9JrqRqaZ-A&usqp=CAU",
    ingredients: [
      { ingName: "Sofa", qty: 1 },
      { ingName: "Cushions", qty: 2 },
    ],
    title: "Sofa cum Bed",
  },
  {
    prodCode: "BDQS381",
    category: "Bedroom",
    desc: [
      "Wood Box Storage King Size Bed in Wenge Colour ",
      "Box Storage included for Maximum space utilization",
      "Mattress is included",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-VGPHf3XvZj5UVRxcTGt3Lhs6LzqtNf2LGMpgxR7jIi3wY4TaNs5vjT-I-IxW9DhgB0&usqp=CAU",
    ingredients: [
      { ingName: "Bed", qty: 1 },
      { ingName: "Mattress", qty: 2 },
    ],
    title: "King size Bed",
  },
  {
    prodCode: "BDQS229",
    category: "Bedroom",
    desc: [
      "Wood Hydraulic Storage Queen Size Bed",
      "Half hydraulic storage",
      "Superior E2 grade MDF used with melamine finish",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGyd6gVVIdDdAKEA3XWIAFHVtTGJSF13zIw&usqp=CAU",
    ingredients: [{ ingName: "Bed", qty: 1 }],
    title: "Queen size Bed",
  },
  {
    prodCode: "ST1T425",
    category: "Study",
    desc: [
      "Wood Study Table in Walnut Colour",
      "Assembly by Skilled Carpenters",
      "Built from High Quality Wood",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEoDpoZufy8Ng5n-QWSJLTRfdocxkGP7zs8w&usqp=CAU",
    ingredients: [{ ingName: "Study Table", qty: 1 }],
    title: "Study Table",
  },
  {
    prodCode: "ST1T588",
    category: "Study",
    desc: [
      " Wood Study Table in Highgloss White & Blue Colour",
      "Study table comes with bookshelf on top, 5 drawers & 1 open shelf",
      "Superior quality MDF with stain resistant melamine finish",
    ],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VFc6HN4GYNDulF_LFDRvRtqIbb-lpCauNg&usqp=CAU",
    ingredients: [{ ingName: "Study Table", qty: 1 }],
    title: "Study Table",
  },
];
let users = [
  { email: "user@user.com", password: "user123", role: "user" },
  { email: "admin@admin.com", password: "admin123", role: "admin" },
];
let cartArr = [];

app.get("/products", function (req, res) {
  res.send(products);
});
app.get("/products/:category", function (req, res) {
  let category = req.params.category;
  let filterArr = products.filter((p) => p.category === category);
  res.send(filterArr);
});

app.get("/products/:catgory/:prodCode", function (req, res) {
  let prodCode = req.params.prodCode;
  let category = req.params.catgory;
  let product = products.find(
    (p) => p.prodCode === prodCode && p.category === category
  );
  if (product) res.send(product);
  else res.status(404).send("Not Found");
});
app.put("/products/:prodCode",function(req,res){
  let prodCode=req.params.prodCode;
  let body=req.body;
  let index=products.findIndex((P)=>P.prodCode===prodCode);
  products[index]=body;
  res.send(body);
})
app.post("/products",function(req,res){
  let body=req.body;
  products.push({...body});
  res.send(body);
})
app.delete("/products/:prodCode",function(req,res){
  let prodCode=req.params.prodCode;
  let index=products.findIndex((p)=>p.prodCode===prodCode);
  let deletedProd=products.splice(index,1);
  res.send(deletedProd);
})
app.post("/signIn", function (req, res) {
  let body = req.body;
  let user = users.find(
    (u) => u.email === body.email && u.password === body.password
  );
  if (user) res.send(user);
  else res.status(404).send("Not Found");
});
app.post("/cart", function (req, res) {
  let ingredients=[];
  for(let i=0;i<req.body.ingredients.length;i++){
    ingredients.push(req.body.ingredients[i]);
  }
  let body = {
    prodCode: req.body.prodCode,
    category: req.body.category,
    desc: req.body.desc,
    img: req.body.img,
    ingredients:ingredients,
    title: req.body.title,
    quantity:1
  };
  cartArr.push(body);
  res.send(cartArr);
});
app.get("/cart",function(req,res){
  res.send(cartArr);
})
app.put("/cart/:prodCode",function(req,res){
  let prodCode=req.params.prodCode;
  let body={...req.body};
  let index=cartArr.findIndex((c)=>c.prodCode===prodCode);
  cartArr[index]=body;
  res.send(req.body);

})
app.delete("/cart/:prodCode",function(req,res){
  let prodCode=req.params.prodCode;
  let index=cartArr.findIndex((c)=>c.prodCode===prodCode);
  cartArr.splice(index,1);
})
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
