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
    if (rawValue === null) {
      var jsons = [];
      jsons.push(newVal);
      window.localStorage.setItem("products", JSON.stringify(jsons));
    } else {
      var jsonsVal = rawValue;
      jsonsVal.push(newVal);
      window.localStorage.setItem("products", JSON.stringify(jsonsVal));
    }
  },

  remove(value) {
    console.log(value);
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
