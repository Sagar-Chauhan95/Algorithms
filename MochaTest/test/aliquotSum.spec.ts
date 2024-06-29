import { assert } from "chai";
import { aliquotSum } from "../src/aliquotSum.js";

describe("Calculate Aliquot sum", ()=>{
    it("Aliquot sum of 8", ()=>{
        assert.equal(aliquotSum(8),7)
    })

    it("Aliquot Sum 1", ()=>{
        assert.equal(aliquotSum(1),0)
    })


})