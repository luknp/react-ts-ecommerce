const opinions = [
  {
    author: 'Joe Doe',
    datetime: '03/04/2021 11:23',
    text: 'Do dupy',
    rating: 4.4,
  },
  {
    author: 'Joe Doe',
    datetime: '03/04/2021 11:23',
    text: 'Do dupy',
    rating: 4.4,
  },
  {
    author: 'Joe Doe',
    datetime: '03/04/2021 11:23',
    text: 'Do dupy',
    rating: 4.4,
  },
];

const products = [
  {
    id: 231,
    name: 'Smartphone Xiaomi Redmi 8 XXX 6/128GB BEST First',
    kategory: 'smartphones',
    rating: 2.5,
    opinions,
    shortDesc: 'woda mineral opiss hsiozf',
    variantsId: 11,
    parameters: [
      'Wyświetlacz 6.7, 3200 x 1440px, Dynamic AMOLED',
      'Procesor Exynos 990, Ośmiordzeniowy',
      'Pamięć RAM 8 GB Pamięć wbudowana [GB] 128',
      'Aparat Tylny 64 Mpx + 2 x 12 Mpx, Przedni 10 Mpx',
    ],
    price: 199.99,
    promotion: 299.99,
    available: 2,
    unit: 'items',
    currency: 'zł',
    photo: 'https://a.allegroimg.com/s128/11621c/78b18a03437da22a4b192abc96ca/Smartfon-Xiaomi-POCO-X3-Pro-6-128GB-Phantom-Black',
  },
  {
    id: 232,
    name: 'Samsung Galaxy 10 XXX 6/128GB',
    kategory: 'smartphones',
    rating: 2.5,
    opinions,
    shortDesc: 'woda mineral opiss hsiozf',
    parameters: [
      'Wyświetlacz 6.7, 3200 x 1440px, Dynamic AMOLED',
      'Procesor Exynos 990, Ośmiordzeniowy',
      'Pamięć RAM 8 GB Pamięć wbudowana [GB] 128',
      'Aparat Tylny 64 Mpx + 2 x 12 Mpx, Przedni 10 Mpx',
    ],
    price: 199.99,
    promotion: 299.99,
    available: 4,
    unit: 'items',
    currency: 'zł',
    photo: 'https://a.allegroimg.com/s180/11fb79/c0855995424dabf90111465ddba4/SMARTFON-ARCHOS-40-NEON-4-5MPx-4x1-3GHz-DUAL-SIM',
  },
];

const variantsProducts = [
  {
    id: 234,
    name: 'Smartphone Xiaomi Redmi 6 XXX 12/128GB',
    kategory: 'smartphones',
    rating: 2.5,
    opinions,
    shortDesc: 'woda mineral opiss hsiozf',
    variantsId: 11,
    parameters: [
      'Wyświetlacz 6.7, 3200 x 1440px, Dynamic AMOLED',
      'Procesor Exynos 990, Ośmiordzeniowy',
      'Pamięć RAM 8 GB Pamięć wbudowana [GB] 128',
      'Aparat Tylny 64 Mpx + 2 x 12 Mpx, Przedni 10 Mpx',
    ],
    price: 199.99,
    promotion: 299.99,
    available: 2,
    unit: 'items',
    currency: 'zł',
    photo: 'https://a.allegroimg.com/s128/11621c/78b18a03437da22a4b192abc96ca/Smartfon-Xiaomi-POCO-X3-Pro-6-128GB-Phantom-Black',
  },
];

const variants = [
  {
    id: 11,
    productsId: [231, 234],
    shortDesc: ['6GB RAM', '12GB RAM'],
  },
];

export function fetchProductsApi() {
  return new Promise<{ data: any }>(resolve => setTimeout(() => resolve({ data: { products, variantsProducts, variants } }), 1000));
}
