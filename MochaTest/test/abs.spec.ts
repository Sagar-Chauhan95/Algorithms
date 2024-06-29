import {assert} from "chai"
import { abs } from "../src/abs.js"

describe("Testing abs function", ()=>{
    // it("Testing for invalid types", ()=>{
    //     assert.notEqual(abs("-11"), 11)
    // })

    it("Testing for number of string type", ()=>{
        assert.equal(abs('-10'),10)
    })

    it("Testing for a boolean type", ()=>{
        assert.equal(abs(true),1)
    })

    it("Should return an absolute value of a negative number", ()=>{
        assert.equal(abs(-10),10)
    })

    it("should return an absolute value of Zero", ()=>{
        assert.equal(abs(0),0)
    })

    it('should return an absolute value of any floating number', ()=>{
        assert.equal(abs(-20.2034), 20.2034)
    })
})


