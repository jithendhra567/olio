import { type } from "jquery";

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
  public static data = "data";
  public static cartItems = "cart";
  public static blue = "##296fca";
  public static orange = "#f44336";
}

export class Items{
  public static allItems = {};
  public static cartItems: Item[] = [];
  public static prevCartItems: Item[] = [];

  public static isAddedToCart(item: Item) {
    for (let i = 0; i < Items.cartItems.length; i++){
      if (Items.cartItems[i].itemId === item.itemId) return true;
    }
    return false;
  }

  public static removeFromCart(item: Item) {
    Items.cartItems.forEach((val,index) => {
      if (val.itemId === item.itemId) {
        Items.cartItems.splice(index, 1);
        return;
      }
    });
  }
}


export type HotelDetails = {
  categoriesData: {name: string, image: string}[];
  title: string;
  tables: Table[];
}

export type Table = {
  bill: number;
  capacity: number;
  order: Item[];
  reserved_people: number;
  status: number;
  tableNumber: number;
}

export type Item = {
  itemId: string,
  itemName: string,
  categoryName: string,
  rate: number,
  stock: number,
  tags: string[],
  image: string,
  count?: number
}