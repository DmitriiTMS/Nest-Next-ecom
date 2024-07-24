import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import * as dotenv from 'dotenv';

const builerManufactures = [
  'Ariston',
  'Samsung',
  'Panasonic',
  'Sony',
  'Ariel',
  'BMW',
  'Audi',
  'Simens',
];
const partsManufacture = [
  'Sensor',
  'Montano',
  'Aligator',
  'Gasoline',
  'Ibiza',
  'Aloha',
];

const prisma = new PrismaClient();

const fakerUser = (): any => ({
  boilerManufacture:
    builerManufactures[Math.floor(Math.random() * builerManufactures.length)],
  partsManufacture:
    partsManufacture[Math.floor(Math.random() * partsManufacture.length)],
  price: faker.number.float({ min: 10, max: 10000, multipleOf: 0.02 }),
  name: faker.lorem.sentence(2),
  description: faker.lorem.sentence(10),
  images: JSON.stringify(
    [...Array(7)].map(
      () => `${faker.image.urlLoremFlickr({ category: 'technics' })}`,
    ),
  ),
  vendorCode: faker.internet.password(),
  inStock: faker.number.int(1),
  bestsellers: faker.datatype.boolean(),
  new: faker.datatype.boolean(),
  popularity: faker.number.int(1),
  compatibility: faker.lorem.sentence(10),
});

async function main() {
  const fakerRounds = 100;
  dotenv.config();
  console.log('Seeding...');
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.boilerparts.create({ data: fakerUser() });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
