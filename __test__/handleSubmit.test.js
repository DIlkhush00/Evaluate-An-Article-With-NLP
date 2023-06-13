import { handleSubmit } from "../src/client/js/formHandler";

describe("Test to insure that handleSubmit() function exists", () => {
    test("It should return true", () => {
        expect(handleSubmit).toBeDefined();
    })}
);

describe("Testing to insure that handleSubmit is a function", ()=>{
    test("It should return function", ()=>{
        expect(typeof handleSubmit).toBe("function")
    })
})