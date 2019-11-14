//Storage Controller
const StorageCtrl=(function(){
  return{
    storeItem:function(item){
      let items;
      //Check if any items in LS
      if(localStorage.getItem('items')===null){
        items=[];
        //Push new item
        items.push(item);
        //Set LS
        localStorage.setItem('items',JSON.stringify(items));
      }else{
        //Get already present data from LS
        items=JSON.parse(localStorage.getItem('items'));
        //Push new item
        items.push(item);
        //Re-set LS
        localStorage.setItem('items',JSON.stringify(items));
      }
    },
    getItemsFromStorage:function(){
      let items;
      if(localStorage.getItem('items')===null){
          items=[];
      }else{
        items=JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage:function(updatedItem){
      let items=JSON.parse(localStorage.getItem('items'));
      items.forEach(function(item,index){
        if(updatedItem.id===item.id){
          items.splice(index,1,updatedItem);
        }
      });
      localStorage.setItem('items',JSON.stringify(items));
    },
    deleteItemFromStorage:function(id){
      let items=JSON.parse(localStorage.getItem('items'));
      items.forEach(function(item,index){
        if(id===item.id){
          items.splice(index,1);
        }
      });
      localStorage.setItem('items',JSON.stringify(items));
    },
    clearItemsFromStorage:function(){
      localStorage.removeItem('items');
    }
  }
})();



//Item Controller
const ItemCtrl=(function(){
  //Except inside return all private
  //Item Constructor
  const Item=function(id,name,calories){
    this.id=id;
    this.name=name;
    this.calories=calories;
  }
  //Data Structure / State
  const data={
    // items:[
    //   {id:0,name:'Steak Dinner',calories:1200},
    //   {id:1,name:'Cookie',calories:400},
    //   {id:2,name:'Eggs',calories:300}
    // ],
    items:StorageCtrl.getItemsFromStorage(),
    currentItem:null,
    totalCalories:0
  }
  //Public methods below
  return{ 
    getItems:function(){
      return data.items;
    },
    addItem:function(name,calories){
      let ID;
        //Create ID
        if(data.items.length>0){
          ID=data.items[data.items.length-1].id+1;
        }else{
          ID=0;
        }
        //Calories to number
        calories=parseInt(calories);
        //Create new item
        newItem=new Item(ID,name,calories);
        //Add to items array
        data.items.push(newItem);
        return newItem;
    },
    getTotalCalories:function(){
      let total=0;

      data.items.forEach(function(item){
        total+=item.calories;
      });
      //Set total calories in data structure
      data.totalCalories=total;
      return data.totalCalories;
    },
    getItemById:function(id){
      let found=null;
      data.items.forEach(function(item){
        if(item.id===id){
          found=item;  
        }
      });
      return found;
    },
    updateItem:function(name,calories){
      calories=parseInt(calories);
      let found=null;
      data.items.forEach(function(item){
        if(item.id===data.currentItem.id){
          item.name=name;
          item.calories=calories;
          found=item;
        }
      });
      return found;
    },
    deleteItem:function(id){
      //Get ids
      const ids=data.items.map(function(item){
        return item.id;
      });

      //Get index
      const index=ids.indexOf(id);
      //Remove item
      data.items.splice(index,1);
    },
    clearAllItems:function(){
      data.items=[];
    },
    setCurrentItem:function(item){
      data.currentItem=item;      
    },
    getCurrentItem:function(){
      return data.currentItem;
    },
    logData:function(){
      return data; //<-- making private 'data' available to public
    }
  }
})();




//UI Controller
const UICntrl=(function(){
  const UISelectors={
    itemList:'#item-list',
    addBtn:'.add-btn',
    updateBtn:'.update-btn',
    deleteBtn:'.delete-btn',
    backBtn:'.back-btn',
    itemNameInput:'#item-name',
    itemCaloriesInput:'#item-calories',
    totalCalories:'.total-calories',
    listItems:'#item-list li',
    clearBtn:'.clear-btn'
  }

  //Public methods
  return{
    populateItemList:function(items){
      let html='';
      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i></a>
      </li>`;
      });
      //Insert list items
      document.querySelector(UISelectors.itemList).innerHTML=html;
    },
    getItemInput:function(){
      return{
        name:document.querySelector(UISelectors.itemNameInput).value,
        calories:document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    addListItem:function(item){
      //Show the list
      document.querySelector(UISelectors.itemList).style.display='block';
      //Create li element
      const li=document.createElement('li');
      //Add class
      li.className='collection-item';
      //Add ID
      li.id=`item-${item.id}`
      //Add HTML
      li.innerHTML=`
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i></a>
      `;
      //Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeEnd',li);
    },
    updateListItem:function(item){
      let listItems=document.querySelectorAll(UISelectors.listItems); //<-- this gives us a node list but we need to loop through these nodes and we cant use a forEach on a nodelist therefore convert to an Array
      //Turn Node list into array
      listItems=Array.from(listItems);
      listItems.forEach(function(listItem){
          const itemID=listItem.getAttribute('id');
          if(itemID===`item-${item.id}`){
              document.querySelector(`#${itemID}`).innerHTML=`
              <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
              <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i></a>
            `;
          }
      });
    },
    deleteListItem:function(id){
      const itemId=`#item-${id}`;
      const item=document.querySelector(itemId);
      item.remove();
    },
    clearInput:function(){
      document.querySelector(UISelectors.itemNameInput).value='';
      document.querySelector(UISelectors.itemCaloriesInput).value='';
    },
    addItemToForm:function(){
      document.querySelector(UISelectors.itemNameInput).value=ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value=ItemCtrl.getCurrentItem().calories;
      UICntrl.showEditState();
    },
    removeItems:function(){
      let listItems=document.querySelectorAll(UISelectors.listItems);
      //Turn Node list into an Array
      listItems=Array.from(listItems);
      listItems.forEach(function(item){
        item.remove();
      });
    },
    hideList:function(){
      document.querySelector(UISelectors.itemList).style.display='none';
    },
    showTotalCalories:function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent=totalCalories;
    },
    clearEditState:function(){
      UICntrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display='none';
      document.querySelector(UISelectors.deleteBtn).style.display='none';
      document.querySelector(UISelectors.backBtn).style.display='none';
      document.querySelector(UISelectors.addBtn).style.display='inline';
    },
    showEditState:function(){
      document.querySelector(UISelectors.updateBtn).style.display='inline';
      document.querySelector(UISelectors.deleteBtn).style.display='inline';
      document.querySelector(UISelectors.backBtn).style.display='inline';
      document.querySelector(UISelectors.addBtn).style.display='none';
    },
    getSelectors:function(){
      return UISelectors;
    }
  }
})();




//App Controller
const App=(function(ItemCtrl,StorageCtrl,UICntrl){
  //Load event Listeners
  const loadEventListeners=function(){
    const UISelectors=UICntrl.getSelectors();
    //Add Item Event
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);
    //Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);
    //Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);
    //Disable submit on enter
    document.addEventListener('keypress',function(e){
      if(e.keyCode===13||e.which===13){ //<-- if 'enter' was hit?
          e.preventDefault();
          return false; //<--disabling the 'enter' key
      }
    });
    //Back button event
    document.querySelector(UISelectors.backBtn).addEventListener('click',UICntrl.clearEditState);
    //Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);
    //Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItemsClick);
  }
  //Add item submit
  const itemAddSubmit=function(e){
    //Get form input from UI Controller
    const input=UICntrl.getItemInput();
    //Check for name and calorie input
    if(input.name!==''&&input.calories!==''){
      //Add item
      const newItem=ItemCtrl.addItem(input.name,input.calories);
      //Add item to UI list
      UICntrl.addListItem(newItem);
      //Get total calories
      const totalCalories=ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICntrl.showTotalCalories(totalCalories);
      //Store in LocalStorage
      StorageCtrl.storeItem(newItem); 
      //Clear fields
      UICntrl.clearInput();
    }else{}
    e.preventDefault();
  }
  //Click edit item
  const itemEditClick=function(e){
    //using event delegation
    if(e.target.classList.contains('edit-item')){
      //Get the list item id(item-0,item-1...)
      const listID=e.target.parentNode.parentNode.id;
      //Break into an array and get the id from the array
      const listIdArray=parseInt(listID.split('-')[1]);
      //Get item
      const itemToEdit=ItemCtrl.getItemById(listIdArray);
      //Set current item
      ItemCtrl.setCurrentItem(itemToEdit);
      //Add item to form
      UICntrl.addItemToForm();
    }
    e.preventDefault();
  }
  //Delete button event
  const itemDeleteSubmit=function(e){
    //Get current item
    const currentItem=ItemCtrl.getCurrentItem();
    //Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);
    //Delete from UI
    UICntrl.deleteListItem(currentItem.id);
    //Get total calories
    const totalCalories=ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICntrl.showTotalCalories(totalCalories);
    //Delete from LS
    StorageCtrl.deleteItemFromStorage(currentItem.id);
    UICntrl.clearEditState();
    e.preventDefault();
  }
  //Clear items event
  const clearAllItemsClick=function(){
    //Delete all items from data structure
    ItemCtrl.clearAllItems();
    //Get total calories
    const totalCalories=ItemCtrl.getTotalCalories();
    //Add total calories to UI
    UICntrl.showTotalCalories(totalCalories);
    //Remove from UI
    UICntrl.removeItems();
    //Clear from LS
    StorageCtrl.clearItemsFromStorage();
    //Hide the UL
    UICntrl.hideList();

  }
  //Updated item submit
  const itemUpdateSubmit =function(e){
    //Get item input
    const input=UICntrl.getItemInput();
    //Update item
    const updatedItem=ItemCtrl.updateItem(input.name,input.calories);
    //Update UI
    UICntrl.updateListItem(updatedItem);
     //Get total calories
     const totalCalories=ItemCtrl.getTotalCalories();
     //Add total calories to UI
     UICntrl.showTotalCalories(totalCalories);
     //Update LS
     StorageCtrl.updateItemStorage(updatedItem);
     UICntrl.clearEditState();
    e.preventDefault();
  }
  //Public methods
  return{
    init:function(){
      //Clear edit state/ set initial state
      UICntrl.clearEditState();
      //Fetch Items from data structure
      const items=ItemCtrl.getItems();
      //Check if any items
      if(items.length===0){
        UICntrl.hideList();
      }else{
        //Populate list with items
        UICntrl.populateItemList(items);
      }
      //Get total calories
      const totalCalories=ItemCtrl.getTotalCalories();
      //Add total calories to UI
      UICntrl.showTotalCalories(totalCalories);
      //Load event listeners
      loadEventListeners();
    }
  }
})(ItemCtrl,StorageCtrl,UICntrl);




//Initialize App
App.init();