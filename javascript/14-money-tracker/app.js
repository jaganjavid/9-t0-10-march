
// Item controller, UI controller, Storage Controller


// Item controller

const StorageCtrl = (function(){
  return {

    getItems: function(){

        let items; 

        // Check if any item in LS
        if(localStorage.getItem("items") === null){
            items = [];
        }else{
            // Get the Existing data from ls
            items = JSON.parse(localStorage.getItem("items"));
        }

        return items;

    },
    storeItem: function(item){
       
        let items; 

        // Check if any item in LS
        if(localStorage.getItem("items") === null){
            
            items = [];

            // Push New Item
            items.push(item);

            // Set LS
            localStorage.setItem("items", JSON.stringify(items));

            console.log(1);
        } else {

            // Get the Existing data from ls
            items = JSON.parse(localStorage.getItem("items"));

            // Push the new item
            items.push(item);

             // resett LS
             localStorage.setItem("items", JSON.stringify(items));
             console.log(2);
            
        }
    },
    deleteItemLs: function(id){
        
        let items = JSON.parse(localStorage.getItem("items"));

        items.forEach(function(item, index){
            if(id === item.id){
                items.splice(index, 1);
            }
        });

        localStorage.setItem("items", JSON.stringify(items));

    },
    updateItemLs: function(updatedItem){

        console.log(updatedItem);
      
        let items = JSON.parse(localStorage.getItem("items"));

        items.forEach(function(item, index){
            if(updatedItem.id === item.id){
                items.splice(index, 1, updatedItem);
            }
        });

        localStorage.setItem("items", JSON.stringify(items));
    }
    
  }
}());

// UI controller

const ItemCtrl = (function(){

    // Item Construtor


    // Private
    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    const data = {
        // items:[
        //     {id:0, name:"Clothes", money:1000},
        //     {id:1, name:"Food", money:2000},
        //     {id:2, name:"Recharge", money:500},
        // ],
        items: StorageCtrl.getItems(),
        currentItem:null,
        totalMoney:0
    }

    // public

    
    return {
        getItem: function(){
            return data.items;
        },
        addItem: function(name, money){
           
            let ID;

            // Create a ID

            if(data.items.length > 0){

                ID = data.items[data.items.length - 1].id + 1;

                // console.log(ID);

            }else{
                ID = 0;
            }

            money = parseInt(money);

            // Create a new item
            let newItem = new Item(ID, name, money);

            // Add to Item Array
            data.items.push(newItem);

            return newItem;

        },
        getTotalMoney: function(){

            let total = 0;

            if(data.items.length > 0){
                data.items.forEach(function(item){
                    total += item.money;

                    data.totalMoney = total;
                })
            }else{
                return data.totalMoney = 0;
            }

            return total;
        },
        getItemById: function(id){
            
            let found = null;

            // Loop Through Items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item;
                }
            })

           return found;
        },
        setCurrentItem:function(item){
           data.currentItem = item;  
        }, 
        getCurrentItem: function(){
            return data.currentItem;
        },
        deleteItem: function(id){
            // Get ids
            const ids = data.items.map(function(item){
               return item.id;
            })

            // Get index
            const index = ids.indexOf(id);

            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        },
        updateItem: function(name, money){
             money = parseInt(money);

             let found = null;

             data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.money = money;
                    found = item;
                }
             })

             return found;
        }
    }
    

}());



// UICtrl Controller

const UICtrl = (function(){


    return{
        populateItemList:function(items){
            
            let html = "";

            items.forEach(function(item){

               html += `<li class="collection-item" id=item-${item.id}>
                <strong>${item.name} : <em>${item.money}</em></strong>
                <a href="#" class="secondary-content">
                    <i class="fa-solid fa-pencil edit-item"></i>
                </a>
            </li>`

            });

            document.querySelector("#item-list").innerHTML = html;
        },
        clearEditState: function(){
            document.querySelector("#add-btn").style.display = "inline";
            document.querySelector("#update-btn").style.display = "none";
            document.querySelector("#delete-btn").style.display = "none";
            document.querySelector("#back-btn").style.display = "none";
        },
        showEditState: function(){
            document.querySelector("#add-btn").style.display = "none";
            document.querySelector("#update-btn").style.display = "inline";
            document.querySelector("#delete-btn").style.display = "inline";
            document.querySelector("#back-btn").style.display = "inline";
        },
        getItemInput: function(){
            return {
                name:document.querySelector("#item-name").value,
                money:document.querySelector("#item-money").value,
            }
        },
        addListItem: function(item){
            
            // Create a li element
            const li = document.createElement("li");

            // Add Class to li
            li.className = "collection-item";

            // Add ID
            li.id = `item-${item.id}`;

            // Insert HTML
            li.innerHTML = `<strong>${item.name} : <em>${item.money}</em></strong>
            <a href="#" class="secondary-content">
                <i class="fa-solid fa-pencil edit-item"></i>
            </a>`;

            // Insert Item to UL
            document.querySelector(".collection").appendChild(li);

        },
        showTotalMoney:function(total){
            document.querySelector("#total-money").innerText = total;
        },
        clearInputState:function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        addItemToForm: function(){
            document.querySelector("#item-name").value = ItemCtrl.
            getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.
            getCurrentItem().money;
        },
        deleteListItem:function(id){
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },
        clearItemList: function(){

            // const collection = document.querySelector("#item-list");
            // collection.innerHTML = null;

            let listItems = document.querySelectorAll(".collection-item");

            listItems.forEach(function(item){
                item.remove();
            })

        },
        updateListItem:function(item){
           
            let listItems = document.querySelectorAll(".collection-item");

            listItems.forEach(function(listItem){
                
                const itemID = listItem.getAttribute("id");

                if(itemID === `item-${item.id}`){
                   
                    document.querySelector(`#${itemID}`).innerHTML = `
                        <strong>${item.name} : <em>${item.money}</em></strong>
                        <a href="#" class="secondary-content">
                            <i class="fa-solid fa-pencil edit-item"></i>
                        </a>
                    `

                }

            })
            
        }
        
    }

}());

// App Controller

const App = (function(){


    const loadEventListeners = function(){


        // Add Event
        document.querySelector("#add-btn").addEventListener("click", itemAddsubmit);


        // Edit Icon Click Event
        document.querySelector("#item-list").addEventListener("click", itemEditClick);

        // Item to Update

        document.querySelector("#update-btn").addEventListener("click", itemUpdateSubmit)
        
         // Item to delete
         document.querySelector("#delete-btn").addEventListener("click", itemDeleteSubmit);

        // Clear Event
        document.querySelector("#clear-btn").addEventListener("click", clearAllItemsClick);

        // Back Event
        document.querySelector("#back-btn").addEventListener("click", function(e){
            e.preventDefault();
            UICtrl.clearEditState();
            UICtrl.clearInputState();
        })

  


    }

    // Add Item
    const itemAddsubmit = function(e){
        
        e.preventDefault();

        // Get the form input 
        const input = UICtrl.getItemInput(); // object

       // Validation
       if(input.name === "" || input.money === ""){
        alert("Please fill the fields");
       }else{ 
         
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.money);

        // Add Item to UI List
        UICtrl.addListItem(newItem);

        // Add Total Money
        const totalMoney = ItemCtrl.getTotalMoney();

        // console.log(totalMoney);
        
        // Add total money to ui
        UICtrl.showTotalMoney(totalMoney);

        // Store to ls
        StorageCtrl.storeItem(newItem);

        // Clear a ui input
        UICtrl.clearInputState();

       }

    }

    // Item to Edit

    const itemEditClick = function(e){
        e.preventDefault();

        if(e.target.classList.contains("edit-item")){

            // Show Button 
            UICtrl.showEditState();

            // Get The ListID (item-1)
            const listId = e.target.parentElement.parentElement.id;
            
            // Break into an array
            const listArr = listId.split("-");

            // Get the actual Array
            const id = parseInt(listArr[1]);

            // Get Matching item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set Current Item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Add item to form
            UICtrl.addItemToForm();
           
            
        }
    }

    const itemUpdateSubmit = function(e){

        e.preventDefault();

        // Get the Input value
        const input = UICtrl.getItemInput();

        // Update Item
        const updatedItem = ItemCtrl.updateItem(input.name, input.money);

        // Update UI
        UICtrl.updateListItem(updatedItem);

        const totalMoney = ItemCtrl.getTotalMoney();

        UICtrl.showTotalMoney(totalMoney);

        StorageCtrl.updateItemLs(updatedItem);

        UICtrl.clearEditState();

        UICtrl.clearInputState();

    }


    const itemDeleteSubmit = function(e){
        e.preventDefault();

        // Get the current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from a data struture
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from UI
        UICtrl.deleteListItem(currentItem.id);

        const totalMoney = ItemCtrl.getTotalMoney();

        StorageCtrl.deleteItemLs(currentItem.id);

        UICtrl.showTotalMoney(totalMoney);

        UICtrl.clearEditState();

        UICtrl.clearInputState();

    }


    const clearAllItemsClick = function(e){
        e.preventDefault();

        // Clear All from data stucture
        ItemCtrl.clearAllItems();

        // Clear all from UI
        UICtrl.clearItemList();

        const totalMoney = ItemCtrl.getTotalMoney();

        UICtrl.showTotalMoney(totalMoney);
    }

    
    return {
        start: function(){

            UICtrl.clearEditState();

            // console.log("Hello im app");
            const items = ItemCtrl.getItem(); // Array

            if(items.length > 0){
                
                UICtrl.populateItemList(items);

                const totalMoney = ItemCtrl.getTotalMoney();
                
                UICtrl.showTotalMoney(totalMoney);
            }

            loadEventListeners();
        }
    }

}())

App.start();