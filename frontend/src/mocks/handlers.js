import { rest } from 'msw';
import { BASE_URL } from '../api';
import products from './mockResponses';

const handlers = [
  rest.post(`${BASE_URL}auth/login`, (req, res, ctx) => res(ctx.status(200), ctx.json('fakeToken'))),
  rest.get(`${BASE_URL}products`, (req, res, ctx) => res(ctx.status(200), ctx.json(products))),
  rest.post(`${BASE_URL}products`, (req, res, ctx) => res(ctx.status(201))),
  rest.put(`${BASE_URL}products/:id`, (req, res, ctx) => res(ctx.status(200))),
  rest.delete(`${BASE_URL}products/:id`, (req, res, ctx) => res(ctx.status(200))),
];

export default handlers;
