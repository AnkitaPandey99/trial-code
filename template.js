let products = [
    {   id=1,
        name:"Teddy Sweatshirt",
        size:"M",
        color:"Brown",
        price:1200 ,
        image:"https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/11/20/goods-first-img/1544808387901255150.jpg",
        description:"Fluffy Plain Teddy Sweatshirt"
    },
    {   id=2,
        name:"Crimson Dress",
        size:"L",
        color:"crimson",
        price:3500,
        image:"https://5.imimg.com/data5/QR/GH/GLADMIN-8293044/shein-pearl-beaded-gathered-sleeve-dress-500x500.png",
        description:"Pearl beaded gathered sleeve dress"
    },
    {   id=3,
        name:"Floral Print one-piece",
        size:"M",
        color:"mustard yellow",
        price:1700 ,
        image:"https://i.pinimg.com/originals/94/cb/9a/94cb9ace1dc51ba0186ac9372716176d.jpg",
        description:"Floral print summer wear"
    },
    {   id=4,
        name:"Silk Short Dress",
        size:"S",
        color:"Olive green",
        price:4000 ,
        image:"https://pa.namshicdn.com/product/A8/11256W/v2/1-zoom-desktop.jpg",
        description:"Casual party wear"
    },
    {   id=5,
        name:"Polka dot Dress",
        size:"L",
        color:"Burgundy",
        price:2999 ,
        image:"https://img.ltwebstatic.com/images2_pi/2019/03/11/1552292040803319051_thumbnail_600x799.webp",
        description:"Gorgeous Polka Dot self Belted Hem Dress"
    },
    {   id=6,
        name:"White Top",
        size:"L",
        color:"White",
        price:1000 ,
        image:"https://img.ltwebstatic.com/images2_pi/2019/01/02/15464176282347915090_thumbnail_600x799.webp",
        description:"Puff Sleeve Neck Fitted Top"
    },
    {   id=7,
        name:"Maroon color one-piece",
        size:"M",
        color:"Deep maroon",
        price:2900 ,
        image:"https://img.ltwebstatic.com/images2_pi/2019/07/26/15641292873592532032_thumbnail_600x799.webp",
        description:"Super comfy one-piece"
    },
    {   
        id=8,
        name:"Skirt And Skirt",
        size:"L",
        color:"Silver",
        price:1090 ,
        image:"https://img.ltwebstatic.com/images2_pi/2018/08/30/15355984621199981751_thumbnail_600x799.webp",
        description:"Glitter Crop Top And Skirt"
    },
    {   id=9,
        name:"Maxi Dress",
        size:"L",
        color:"Deep Blue",
        price:1500 ,
        image:"https://img.ltwebstatic.com/images2_pi/2018/08/15/1534314571829954465_thumbnail_600x799.webp",
        description:"Elegant Looking Stripped Maxi Dress"
    },
    {   id=10,
        name:"Denim Jacket",
        size:"L",
        color:"Multicolor",
        price:1200 ,
        image:"https://img.ltwebstatic.com/images2_pi/2019/06/27/15616213171135106980_thumbnail_600x799.webp",
        description:"Crop Denim Jacket"
    },
    {   id=11,
        name:"Pleated Jumpsuit",
        size:"L",
        color:"Yellow",
        price:1800 ,
        image:"https://img.ltwebstatic.com/images2_pi/2018/05/28/15274949081317126789_thumbnail_600x799.webp",
        description:"Stylish Front Knot Pleated Jumpsuit"
    },
    {   id=12,
        name:"Black Jumpsuit",
        size:"L",
        color:"Black",
        price:2500 ,
        image:"https://img.ltwebstatic.com/images3_pi/2019/10/14/1571042800b7ef10430f7ebb0570b6b66e4a212489_thumbnail_600x.webp",
        description:"Lace Yoke Layered Flounce Wide Leg Jumpsuit"
    },
    
];


cart=[]

function displayProducts(productsData,who="productwrapper"){

    let productsString = "";

    if(who=="productwrapper"){

    productsData.forEach(function(product,index){
        
        let {name,image,color,description,price,size} = product;

    
        productsString += `<div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" >
        </div>
       <h3>${name}</h3>
       <p>Price : ${price}</p>
       <P>Size : ${size}</P>
       <P>Color : ${color}</P>
       <P>${description}</P>
       <p>
         <button onclick="addToCart(${index})">Add to Cart</button>
       </p>
     </div>`;
       
    });

   }
        
 else {

    productsData.forEach(function(product,index){
        
        let {name,image,color,description,price,size} = product;
    
        productsString += `<div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" >
        </div>
       <h3>${name}</h3>
       <p>Price : ${price}</p>
       <P>Size : ${size}</P>
       <P>Color : ${color}</P>
       <P>${description}</P>
       <p>
        <button onclick="removeFromCart(${index})">Remove from Cart</button>
       </p>
     </div>`;       
    });

    productsString+=`<br><h3>Total Count : ${productsData.length}</h3></br>`

   }

 
    
    document.getElementById(who).innerHTML = productsString;

}


displayProducts(products);


// search function (NOTE: WE USED this. keyword which refer current context @2:16:00)

function searchProduct(searchValue){
    // console.log(searchValue)

    let searchedProducts=products.filter(function(product, index){
        let searchString = product.name+" "+product.color+" "+product.description;
        return searchString.toUpperCase().indexOf(searchValue.toUpperCase())!=-1;
        
    });

// passing searchedproducts as parameter
    displayProducts(searchedProducts);
}

//  ADD FUNCTION


function addToCart(index){
    // console.log(product)
    cart.push(products[index]);
    // console.log(cart);
    displayProducts(cart,"cart")
    // cart is array and "cart" is id
}


/* previously we tried passing "product" as parameter but it didnt work so we used index instead and then
access the product using [index].SIMPLE :) */

//  REMOVE FUNCTION

function removeFromCart(index){
    // console.log(product)
    cart.splice(index,1);

    displayProducts(cart,"cart")
}

/* price range search */

function priceRangeProducts(){
    
  let minprice = document.getElementById("minprice").value
  let maxprice = document.getElementById("maxprice").value

  let result = products.filter(function(product) {

    return product.price >= minprice && product.price <= maxprice;
    // return minprice <= product <= maxprice

});
  
displayProducts(result)

}

// let minprice = 1200
// let maxprice = 1800

// let result= products.filter(function(product){
//     return product.price >= minprice && product.price <= maxprice;
// });

// console.log(result);


