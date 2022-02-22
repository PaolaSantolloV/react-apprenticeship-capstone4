const storageCart = {
  get(product) {
    try {
      const rawValue = window.localStorage.getItem(product);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${product}".`);
      return null;
    }
  },

  set(value) {
    const rawValue = JSON.parse(window.localStorage.getItem("products"));
    const newVal = JSON.parse(JSON.stringify(value));
    console.log(value);
    if (rawValue === null) {
      var jsons = [];
      jsons.push(newVal);
      window.localStorage.setItem("products", JSON.stringify(jsons));
    } else {
      if (rawValue.some((item) => item.id === newVal.id)) {
        rawValue.map((item) => {
          if (item.id === newVal.id) {
            const newStock = newVal.stockOnCart + item.stockOnCart;
            console.log(item.data.stock);
            if (item.data.stock > newStock) {
              item.stockOnCart = newStock;
              var jsonsVal = rawValue;
              window.localStorage.setItem("products", JSON.stringify(jsonsVal));
            } else {
              alert("Sorry, the stock is not enough");
            }
          }
        });
      } else {
        var jsonsVal = rawValue;
        jsonsVal.push(newVal);
        window.localStorage.setItem("products", JSON.stringify(jsonsVal));
      }
    }
  },

  remove(value) {
    const rawValue = JSON.parse(window.localStorage.getItem("products"));
    var jsonsVal = rawValue;
    console.log(jsonsVal);
    const filtered = jsonsVal.filter(function (item) {
      return item.id !== value.id;
    });
    localStorage.removeItem("products");
    window.localStorage.setItem("products", JSON.stringify(filtered));
  },
};

export { storageCart };
