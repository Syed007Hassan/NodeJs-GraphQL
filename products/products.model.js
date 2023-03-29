module.exports = [
  {
    id: 1,
    description: "A great product",
    reviews: [
      {
        rating: 5,
        comment: "This product is great",
      },
    ],
    price: 9.99,
    category: "Electronics",
    orders: [
      {
        date: "2021-01-01",
        subtotal: 9.99,
        items: [
          {
            product: {
              id: 1,
            },
            quantity: 1,
          },
        ],
      },
    ],
  },
];
