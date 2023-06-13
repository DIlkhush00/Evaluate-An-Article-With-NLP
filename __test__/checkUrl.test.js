import { checkUrl } from '../src/client/js/urlChecker';
  
describe("Test to insure that checkUrl() exists", () => {
    test("It should return true", () => {
        expect(checkUrl).toBeDefined();
    })}
);

describe("Testing to insure that checkUrl is a function", ()=>{
    test("It should return function", ()=>{
        expect(typeof checkUrl).toBe("function")
    })
})

describe("Testing to insure that checkUrl funciton is working correctly", ()=>{
    test("It should return true", ()=>{
        let url = 'https://github.com/'
        expect(checkUrl(url)).toBe(true)
    })
})