import { faker } from '@faker-js/faker';

const database = { products: [] };

for (let i = 1; i <= 25; i++) {
  const name = faker.commerce.product()
  const fabDate = faker.date.between('2021-01-01', '2022-01-01');
  const randomNumber = faker.datatype.number({ min: 10, max: 100 });
  const perishable = faker.datatype.boolean();
  const expDate = perishable ? faker.date.soon(randomNumber, fabDate) : '';
  const price = faker.commerce.price();
  const product = {
    id: i,
    name,
    fabDate,
    expDate,
    perishable,
    price,
  };
  database.products.push(product);
}

console.log(JSON.stringify(database));
