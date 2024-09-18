
let obj=[
    {id:1,pname:"Smart Mobile",category:"mobile",subcat:"nokia",pimage:"image/m1.jpg",price:12000},
    {id:2,pname:"Smart Mobile",category:"mobile",subcat:"lg",pimage:"image/m2.jpg",price:15000},
    {id:3,pname:"Smart Mobile",category:"mobile",subcat:"vivo",pimage:"image/m3.png",price:21000},
    {id:4,pname:"Smart Mobile",category:"mobile",subcat:"samsung",pimage:"image/m2.jpg",price:26000},
    {id:5,pname:"Smart Mobile",category:"mobile",subcat:"nokia",pimage:"image/m1.jpg",price:12000},
    {id:6,pname:"Smart Mobile",category:"mobile",subcat:"lg",pimage:"image/m2.jpg",price:15000},
    {id:7,pname:"Smart Mobile",category:"mobile",subcat:"vivo",pimage:"image/m3.png",price:21000},
    {id:8,pname:"Smart Mobile",category:"mobile",subcat:"samsung",pimage:"image/m2.jpg",price:26000},

    {id:5,pname:"Shirt",category:"shirt",subcat:"man",pimage:"image/s1.jpg",price:2500},
    {id:6,pname:"Shirt",category:"shirt",subcat:"kids",pimage:"image/s2.jpg",price:1500},
    {id:7,pname:"Shirt",category:"shirt",subcat:"woman",pimage:"image/s3.jpg",price:3500},
    {id:8,pname:"Shirt",category:"shirt",subcat:"man",pimage:"image/s1.jpg",price:4500},
    {id:5,pname:"Shirt",category:"shirt",subcat:"man",pimage:"image/s1.jpg",price:2500},
    {id:6,pname:"Shirt",category:"shirt",subcat:"kids",pimage:"image/s2.jpg",price:1500},
    {id:7,pname:"Shirt",category:"shirt",subcat:"woman",pimage:"image/s3.jpg",price:3500},
    {id:8,pname:"Shirt",category:"shirt",subcat:"man",pimage:"image/s1.jpg",price:4500},

    {id:9,pname:"smartwatch",category:"smartwatch",subcat:"noise",pimage:"image/swatch.jpg",price:3500},
    {id:10,pname:"smartwatch",category:"smartwatch",subcat:"noise",pimage:"image/swatch3.jpg",price:5500},
    {id:11,pname:"smartwatch",category:"smartwatch",subcat:"boat",pimage:"image/swatch.jpg",price:6500},
    {id:12,pname:"smartwatch",category:"smartwatch",subcat:"boat",pimage:"image/swatch4.jpeg",price:2500},
    {id:9,pname:"smartwatch",category:"smartwatch",subcat:"titan",pimage:"image/swatch.jpg",price:3500},
    {id:10,pname:"smartwatch",category:"smartwatch",subcat:"titan",pimage:"image/swatch3.jpg",price:5500},
    {id:11,pname:"smartwatch",category:"smartwatch",subcat:"rado",pimage:"image/swatch.jpg",price:90500},
    {id:12,pname:"smartwatch",category:"smartwatch",subcat:"rado",pimage:"image/swatch4.jpeg",price:92500},

    {id:12,pname:"laptop",category:"laptop",subcat:"hp",pimage:"image/l1.jpg",price:25000},
    {id:12,pname:"laptop",category:"laptop",subcat:"hp",pimage:"image/l3.webp",price:45000},
    {id:12,pname:"laptop",category:"laptop",subcat:"dell",pimage:"image/l1.jpg",price:35000},
    {id:12,pname:"laptop",category:"laptop",subcat:"dell",pimage:"image/l3.webp",price:45000},
    {id:12,pname:"laptop",category:"laptop",subcat:"asus",pimage:"image/l4.jpg",price:25000},
    {id:12,pname:"laptop",category:"laptop",subcat:"asus",pimage:"image/l4.jpg",price:45000},
    {id:12,pname:"laptop",category:"laptop",subcat:"macbook",pimage:"image/l2.jpeg",price:95000},
    {id:12,pname:"laptop",category:"laptop",subcat:"macbook",pimage:"image/l2.jpeg",price:85000},

    ]
    
    function getdata(cat,scat){
    if(cat,scat){
     fdata=obj.filter((pro)=>{
      return cat===pro.category && scat===pro.subcat
     })
        
    }
    else if(cat){
        fdata=obj.filter((pro)=>{
       return cat===pro.category
        })
        
    }
    else{
        fdata=obj;
    }
    let totaldata=fdata.map((item)=>{
        return(
          `
          <div class="product">
          <img src=${item.pimage}>
          <div class="content">
          <h2> ${item.pname} </h2>
          <p>Price=Rs.${item.price}  </p>
      <p>category=${item.category}  </p>
      <p>sub category=${item.subcat} </p>
          </div>
          </div>
          `
        )
      })
      document.getElementById("mydiv").innerHTML=totaldata.join('');
    
    
    }
    getdata()