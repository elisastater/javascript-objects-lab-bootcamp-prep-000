var recipes =  {


	Obj1: "Recipe1",
  Obj2: "Recipe2",
};

 var obj = { prop: 1, prop2: 2};
 
function updateObjectWithKeyAndValue() {
  
  
  var newObj1=Object.assign({},obj);
  var newObj2=Object.assign({},obj);
return obj;
}
console.log(recipes, obj);




function destructivelyUpdateObjectWithKeyAndValue() {
      
      var newobj= {prop: 1, prop2: 2};
      var obj=Object.assign({},newobj);


return obj;
}
 

