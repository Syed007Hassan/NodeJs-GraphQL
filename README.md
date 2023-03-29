# NodeJs-GraphQL

GraphiQL available at localhost server

![image](https://user-images.githubusercontent.com/104893311/228365764-ac207fae-bc20-4c48-913c-3ff79e7ee858.png)

#### Schema Structure

```
  products: [
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
 ```
#### Query Parameter and Output

![image](https://user-images.githubusercontent.com/104893311/228392905-2af31502-5316-4681-b2bd-9054e8ba0594.png)

