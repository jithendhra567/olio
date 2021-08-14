export class Name{
    public static special = "special";
    public static veg="veg";
    public static nonVeg="Non-veg";
    public static count = "count";
    public static tags="tags";
    public static menu="menu";
    public static title="title";
    public static img="img";
    public static half="half";
    public static isFull="isfull";
    public static prize="prize";
    public static name_="name";
    public static id = "id";
    public static isAdded = "isadded";
    public static data = "data";
    public static cartItems="cart";
}

export class Items{
  public static data = [];
  public static allItems = {};
  public static cartItems = [];
  public static specialItems = [];

  public static setData = (data) => {
    Items.data = data; Items.update();
    sessionStorage.setItem(Name.data,JSON.stringify(data));
  }

  public static update=()=>{
    Items.updateItems(Items.data);
    Items.updateSpecialItems();
    Items.updateCart();
  }

  public static updateItems = (items) => {
    var it = JSON.parse(sessionStorage.getItem(Name.cartItems));
    if(it==undefined || it.length<=0){
      for (let item in items) {
        var x = [];
        for (let i in items[item][Name.menu]) {
          items[item][Name.menu][i][Name.isAdded] = false;
          x.push(items[item][Name.menu][i]);
        }
        Items.allItems[items[item][Name.id]] = x;
      };
    }
    else Items.allItems = it;

  }

  public static updateSpecialItems = () => {
    Items.specialItems = [];
    for(var i in Items.allItems){
      for(var j in Items.allItems[i]){
        for(var k in Items.allItems[i][j][Name.tags]){
          if(Items.allItems[i][j][Name.tags][k][Name.name_]==Name.special){
            Items.specialItems.push(Items.allItems[i][j]);
          }
        }
      }
    }
  }

  public static getItemsFromMenu = (menu) => {
    return Items.allItems[menu];
  }
  public static updateCart = () => {
    let items = Items.allItems;
    let cart = [];
    for(let i in items) {
      for(let j in items[i]){
        if(items[i][j][Name.isAdded]) {
          var x = items[i][j];
          x[Name.count] = 0;
          cart.push(x);
        }
      }
    }
    Items.cartItems = cart;
    if(cart.length>0)
    sessionStorage.setItem(Name.cartItems,JSON.stringify(Items.allItems));
  }
  public static getCart = () => {
    return Items.cartItems;
  }
}
