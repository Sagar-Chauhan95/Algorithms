const sum = require('./sum')


test('prperly adds two numbers', ()=>{
    expect(sum(1,2)).toBe(3)
})