"use strict";

import { IOrderEntity } from "./";

export let orders: IOrderEntity[] = [
  {
    id: 1,
    order: "00001",
    products: [
      {
        name: "Poc-Chuc",
        type: "Torta",
        quantity: 2,
        price: 25
      }
    ],
    date: "29/11/2018",
    total: 50
  },
  {
    id: 2,
    order: "00002",
    products: [
      {
        name: "Poc-Chuc",
        type: "Torta",
        quantity: 3,
        price: 25
      }
    ],
    date: "04/12/2018",
    total: 75
  },
  {
    id: 3,
    order: "00003",
    products: [
      {
        name: "Poc-Chuc",
        type: "Torta",
        quantity: 2,
        price: 25
      },
      {
        name: "Camarón",
        type: "Torta",
        quantity: 1,
        price: 25
      }
    ],
    date: "17/12/2018",
    total: 75
  },
  {
    id: 4,
    order: "00004",
    products: [
      {
        name: "Poc-Chuc",
        type: "Torta",
        quantity: 2,
        price: 25
      }
    ],
    date: "27/12/2018",
    total: 50
  },
  {
    id: 5,
    order: "00005",
    products: [
      {
        name: "Poc-Chuc",
        type: "Torta",
        quantity: 2,
        price: 25
      }
    ],
    date: "01/01/2019",
    total: 50
  }
];

export default orders;
