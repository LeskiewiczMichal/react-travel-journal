/* eslint-disable import/no-anonymous-default-export */
import mallorca from "./images/mallorca.jpg";
import warsaw from "./images/warsaw.jpg";
import miedzyzdroje from "./images/miedzyzdroje.jpg"

export default [
  {
    title: 'Palma de Mallorca',
    location: 'Spain',
    googleMapsUrl: 'https://goo.gl/maps/HSYz73banXKqt2rY8',
    startDate: '04 Jun, 2022',
    endDate: '11 Jun, 2022',
    description:
      'Palma de Mallorca is a capital city of the biggest Balearic Island - Mallorca.',
    imageUrl: mallorca,
  },
  {
    title: 'Warsaw',
    location: 'Poland',
    googleMapsUrl: 'https://goo.gl/maps/dANUSmvyypPhXfsc9',
    startDate: '24 Jun, 2022',
    // endDate: '24 Jun, 2022',
    description:
      'Warsaw is ther capital city of Poland, a beautiful and a modern looking city with lots of things to do and see.',
    imageUrl: warsaw,
  },
  {
    title: 'Międzyzdroje',
    location: 'Poland',
    googleMapsUrl: 'https://goo.gl/maps/PfJyBtz2BghCkUb6A',
    startDate: '10 Jul, 2021',
    endDate: '24 Jul, 2021',
    description:
      'Międzyzdroje is a very touristic city placed by the Baltic Sea.',
    imageUrl: miedzyzdroje,
  }
];
