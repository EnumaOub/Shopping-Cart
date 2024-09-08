import { describe, it, expect, vi, expectTypeOf } from "vitest";
import data from '../assets/initItems.json';
import { orderByReview, getBestSeller, getProdById, orderById } from "../utils/itemsTools";

beforeEach(() => {
    vi.clearAllMocks();
  });

describe("Utils Items", () => {
    it('should read initItems and get right data', () => {
        const items = data;
        expect(items).toHaveLength(20);
        expect(items).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(String),
                name: expect.any(String),
                imageUrl: expect.any(String),
                description: expect.any(String),
                isAvailable: expect.any(Boolean),
                rating: expect.any(Number),
                price: expect.any(Number),
              })
            ])
        );  
    });


    it('OrderByReview give an array with the same elements original but ordered', () => {
        const items = data;
        const itemsOrdered = orderByReview(items);
        expect(itemsOrdered.some(
            itemO => items.includes(itemO)
        )).toBe(true);
        expect(itemsOrdered.every((b, i, { [i - 1]: a }) => !a || a.rating >= b.rating))
        .toBe(true);
    });

    it('Check if best seller get good elements', () => {
        const items = data;
        const itemsOrdered = orderByReview(items);
        const arrSizeItems = Array.from(Array(items.length).keys());
        expect(arrSizeItems.every((n)=> getBestSeller(items, n).length === n)).toBe(true);
        expect(arrSizeItems.every((n)=> JSON.stringify(getBestSeller(items, n)) === JSON.stringify(itemsOrdered.slice(0, n))))
        .toBe(true);
    });

    it('Check can get element by id', () => {
        const items = data;
        const itemsOrdered = orderById(items);
        const arrSizeItems = Array.from(Array(items.length).keys());
        console.log(arrSizeItems)
        expect(arrSizeItems.every((n)=> {
            console.log(n)
            console.log(getProdById(items, String(n+1)))
            console.log(itemsOrdered[n])
            return JSON.stringify(getProdById(items, String(n+1))) === JSON.stringify(itemsOrdered[n])}
        )).toBe(true); // id are numbered by position starting at one for the moment
    });
  
})