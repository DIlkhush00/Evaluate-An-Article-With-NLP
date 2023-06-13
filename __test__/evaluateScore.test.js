import { evaluateScore } from "../src/client/js/formHandler";

describe("Test to insure that evaluateScore() function exists", () => {
    test("It should return true", () => {
        expect(evaluateScore).toBeDefined();
    })}
);

describe("Testing to insure that evaluateScore is a function", ()=>{
    test("It should return function", ()=>{
        expect(typeof evaluateScore).toBe("function")
    })
})

describe("Testing to insure that evaluateScore is working correctly", ()=>{
    test("It should return Positive", ()=>{
        expect(evaluateScore('P')).toBe("Positive")
    })
})