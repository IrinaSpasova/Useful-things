//01. How to copy a string to an array using (...) spread operator 
/*
function copyStringToArrary() {
    const barCode = "GH2837-DHDY75-3FJJJ";
    const values = [...barCode]
    function showMessage(){
 let message = `string '${barCode}' converted to array '${values}'`;
 console.log(message);
    }
    console.log(showMessage);
    console.log(showMessage());
    
    console.log(values);
}

copyStringToArrary();
*/



//02. How to copy an array of primitive type using (...) spread operator 
/*
function copyArrary() {
    const arr1 = [1,2,3,4,5];
    const arr2 = [...arr1];

    //Make changes to duplicate arrary. We normally use let arr2 = arr.slice(0); to do this in plain JS
    arr2.push(6);
    arr2[0]=100;

    console.log(arr1);
    console.log(arr2);

    console.log(`arr1 value=> ${arr1} arr2 value=> ${arr2}`);
    
}

copyArrary();
*/



//03. How to copy an array of objects using (...) spread operator 
/*
const categories = [
    {
      "id": 1,
      "name": "Baby Soap",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Toddlers Toys",
      "isActive": true
    },
    {
      "id": 3,
      "name": "Men Shirts",
      "isActive": true
    },
    {
      "id": 5,
      "name": "Energy Drinks",
      "isActive": true
    },
    {
      "id": 6,
      "name": "Test",
      "isActive": true
    },
    {
      "id": 7,
      "name": "Men's Care",
      "isActive": true
    },
    {
      "id": 8,
      "name": "Food",
      "isActive": true
    },
    {
      "id": 9,
      "name": "Breads",
      "isActive": true
    },
    {
      "id": 10,
      "name": "Milk & Dairy",
      "isActive": true
    },
    {
      "id": 11,
      "name": "Jams",
      "isActive": true
    }
  ];


function copyObjectArrarys() {
   
   Note: Careful with object arrarys.
   The array is copied, but the underlying objects are still accessed by reference.
   

   let diff = [...categories];
    diff[0].id = 9999;
    console.log(categories[0].id);
    console.log(categories[0].name);
    console.log(categories[0].isActive);
    console.log(diff[0].id);
    console.log(diff[0].name);
    console.log(diff[0].isActive);

    console.log(`categories[0].id values is => ${categories[0].id}, diff[0].id value is => ${diff[0].id}`)
    
}

copyObjectArrarys();
*/



//04. How to concatenate more than one array using (...) spread operator
/*
const categories1 = [{
    "id": 1,
    "name": "Baby Soap",
    "isActive": true
},
{
    "id": 2,
    "name": "Toddlers Toys",
    "isActive": true
},
{
    "id": 3,
    "name": "Men Shirts",
    "isActive": true
},
{
    "id": 5,
    "name": "Energy Drinks",
    "isActive": true
},
{
    "id": 6,
    "name": "Test",
    "isActive": true
}];
const categories2 = [
    {
        "id": 7,
        "name": "Men's Care",
        "isActive": true
    },
    {
        "id": 8,
        "name": "Food",
        "isActive": true
    },
    {
        "id": 9,
        "name": "Breads",
        "isActive": true
    },
    {
        "id": 10,
        "name": "Milk & Dairy",
        "isActive": true
    },
    {
        "id": 11,
        "name": "Jams",
        "isActive": true
    }
];

function concatenateArrary() {
    let allCategories = categories1.concat(categories2); // original way of doing in plain Ja
    console.log(allCategories.length);
    console.log(allCategories[0]);

    let spreadWayOfDoing = [...categories1, ...categories2];
    console.log(spreadWayOfDoing.length);
    console.log(spreadWayOfDoing[0]);

    console.log(`length of allCategories '${allCategories.length}' length of spreadWayOfDoing '${spreadWayOfDoing.length}'`);
}

concatenateArrary();
*/


//05. How to shallow an object literal using (...) spread operator
/*
const category =  {
    "id": 1,
    "name": "Baby Soap",
    "isActive": true
  };
  
  
  function objectLiterals() {
    //the below performs the shallow-copy
    let category1 = {...category}; // this is similar to Object.assign()
  
    //change newly created categroy
    category1.id = 9999;
      console.log(`category1.id values is => ${category1.id}, category.id value is => ${category.id}`)
      
  }
  
  objectLiterals();
*/


  //06. How to pass parameters to function arguments using (...) spread operator 
/*
  function spreadForFunctionsArguments() {
    let addRes= addition(1,2,3);
     console.log(addRes);
 
     let arr = [1,2,3];
     let addRes1 = addition(...arr);
     console.log(arr);
     console.log(addRes1);
     
 }
 
 let addition = function(x,y,z) {
     return x+y+z;
 }
 
 
 spreadForFunctionsArguments();
 */

 //07. Using spread to pass param 

 function spreadInConstructor() {
    let newDate = new Date(2022,06,07); // 06 Jun 2022
    console.log(newDate);

    let datefields = [2022,06,07];
    newDate = new Date(...datefields);
    console.log(newDate);
    
    
}

spreadInConstructor();