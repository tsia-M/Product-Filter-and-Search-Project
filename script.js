const dataArray = [
  {
    img: "images/regular-white-t.jpg",
    productName: "REGULAR WHITE T-SHIRT",
    category: "topwear",
    productPrice: "$30"
  },
  {
    img: "images/beige-short-skirt.jpg",
    productName: "BEIGE SHORT SKIRT",
    category: "bottomwear",
    productPrice: "$49"
  },
  {
    img: "images/sporty-smart-watch.jpg",
    productName: "SPORTY SMARTWATCH",
    category: "watch",
    productPrice: "$99"
  },
  {
    img: "images/basic-knitted-top.jpg",
    productName: "BASIC KNITTED TOP",
    category: "topwear",
    productPrice: "$29"
  },
  {
    img: "images/black-leather-jacket.jpg",
    productName: "BLACK LEATHER JACKET",
    category: "jacket",
    productPrice: "$129"
  },
  {
    img: "images/stylish-pink-trousers.jpg",
    productName: "STYLISH PINK TROUSERS",
    category: "bottomwear",
    productPrice: "$89"
  },
  {
    img: "images/comfy-sweatpants.jpg",
    productName: "COMFY GRAY PANTS",
    category: "bottomwear",
    productPrice: "$49"
  },
  {
    img: "images/vintage-leather-jacket-men.jpg",
    productName: "MEN'S BROWN VINTAGE LEATHER JACKET",
    category: "jacket",
    productPrice: "$189"
  }
];

const toggleButtonElem = document.querySelector('.js-toggle-button');
const dropdownContent = document.querySelector('.dropdown-content')
const chevronArrowElem = document.querySelector('.chevron-down');

toggleButtonElem.addEventListener('click', () => {
  dropdownContent.classList.toggle('open');

  chevronArrowElem.classList.toggle('chevron-up');
});

const displayElem = document.querySelector(".js-products-container");

const allButtonElem = document.querySelectorAll('.js-all-button');

const renderAllItems = () => {
  let html = "";
  dataArray.forEach((dataObject) => {
    const {img, productName, productPrice} = dataObject;
    html += `
    <div class="content-block-container">
    <img src="${img}" class="product-img">
    <h1 class="product-name">${productName}</h1>
    <p class="product-price">${productPrice}</p>
    </div>    
    `;
  });
  displayElem.innerHTML = html;
};

allButtonElem.forEach(allButton => {
  allButton.addEventListener('click', () => {
    renderAllItems();

    chevronArrowElem.classList.remove('chevron-up');
    dropdownContent.classList.remove('open');
  });
});

renderAllItems();

const topWearButtonElem = document.querySelectorAll('.js-topwear-button');

const renderTopWearItems = () => {
  const topWearArray = dataArray.filter(productObject => {
    const {category} = productObject;
    return category === "topwear";
  })
  
  let html = "";
  topWearArray.forEach((dataObject) => {
    const {img, productName, productPrice} = dataObject;
    html += `
    <div class="content-block-container">
    <img src="${img}" class="product-img">
    <h1 class="product-name">${productName}</h1>
    <p class="product-price">${productPrice}</p>
    </div>    
    `;
  });
  displayElem.innerHTML = html;
};

topWearButtonElem.forEach(topWearButtonAll => {
  topWearButtonAll.addEventListener('click', () => {
    renderTopWearItems();
    
    chevronArrowElem.classList.remove('chevron-up');
    dropdownContent.classList.remove('open');
  });
});

const bottomWearButtonElem = document.querySelectorAll('.js-bottomwear-button');

const renderBottomWearItems = () => {
  const bottomWearArray = dataArray.filter(productObject => {
    const {category} = productObject;
    return category === "bottomwear";
  });

  let html = "";
  bottomWearArray.forEach(dataObject => {
    const {img, productName, productPrice} = dataObject;
    html += `
    <div class="content-block-container">
    <img src="${img}" class="product-img">
    <h1 class="product-name">${productName}</h1>
    <p class="product-price">${productPrice}</p>
    </div>    
    `;
  });
  displayElem.innerHTML = html; 
};
bottomWearButtonElem.forEach((bottomWearButtonAll) => {
  bottomWearButtonAll.addEventListener('click', () => {
    renderBottomWearItems();

    chevronArrowElem.classList.remove('chevron-up');
    dropdownContent.classList.remove('open');
  });
});

const jacketButtonElem = document.querySelectorAll('.js-jacket-button');

const renderJacketItems = () => {
  const jacketArray = dataArray.filter(productObject => {
    const {category} = productObject;
    return category === "jacket";
  });

  let html = "";
  jacketArray.forEach(dataObject => {
    const {img, productName, productPrice} = dataObject;
    html += `
    <div class="content-block-container">
    <img src="${img}" class="product-img">
    <h1 class="product-name">${productName}</h1>
    <p class="product-price">${productPrice}</p>
    </div>    
    `;
  });
  displayElem.innerHTML = html; 
};

jacketButtonElem.forEach(jacketButtonAll => {
  jacketButtonAll.addEventListener('click', () => {
    renderJacketItems();

    chevronArrowElem.classList.remove('chevron-up');
    dropdownContent.classList.remove('open');
  });
});

const watchButtonElem = document.querySelectorAll('.js-watch-button');

const renderWatchItems = () => {
  const watchArray = dataArray.filter(productObject => {
    const {category} = productObject;
    return category === "watch";
  });

  let html = "";
  watchArray.forEach(dataObject => {
    const {img, productName, productPrice} = dataObject;
    html += `
    <div class="content-block-container">
    <img src="${img}" class="product-img">
    <h1 class="product-name">${productName}</h1>
    <p class="product-price">${productPrice}</p>
    </div>    
    `;
  });
  displayElem.innerHTML = html; 
};

watchButtonElem.forEach(watchButtonAll => {
  watchButtonAll.addEventListener('click', () => {
    renderWatchItems();

    chevronArrowElem.classList.remove('chevron-up');
    dropdownContent.classList.remove('open');
  });
});

const searchInputElem = document.querySelector('.js-search-input');

const searchButtonElem = document.querySelector('.js-search-button');

let timeoutId;

const renderSearchItems = (searchValue) => {
  const searchTerm = searchValue;

  const searchItems = dataArray.filter(items => {
    if(searchTerm.length < 3) {
      return false;
    }

    return items.productName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (searchItems.length === 0){
    displayElem.innerHTML = `<p>Results Not Found!</p>`;

   clearTimeout(timeoutId);

   return timeoutId = setTimeout(() => {
      renderAllItems();
    }, 5000);
  }

  let html = "";
  searchItems.forEach(dataObject => {
    const {img, productName, productPrice} = dataObject;
    html += `
    <div class="content-block-container">
    <img src="${img}" class="product-img">
    <h1 class="product-name">${productName}</h1>
    <p class="product-price">${productPrice}</p>
    </div>    
    `;
  });
  displayElem.innerHTML = html;
};

searchButtonElem.addEventListener('click', () => {
  renderSearchItems(searchInputElem.value);
  searchInputElem.value= "";
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    renderSearchItems(searchInputElem.value);
    searchInputElem.value= "";
  }
});

