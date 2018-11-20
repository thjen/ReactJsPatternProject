var initialState = [
  {
    id: 1,
    name: "Spring mvc",
    price: 3423,
    status: true,
  }, {
    id: 2,
    name: "Codeigniter",
    price: 532,
    status: true,
  }, {
    id: 3,
    name: "Nodejs",
    price: 654,
    status: false,
  }, {
    id: 4,
    name: "React",
    price: 3443,
    status: false,
  }
];

const products = (state = initialState, action) => {
  switch(action.type) {
    default: return [...state];
  }
};

export default products;