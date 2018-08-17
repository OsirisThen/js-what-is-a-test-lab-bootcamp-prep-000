var index = require("../index.js")
 var describe=0;
describe('what-is-a-test', () => {
  describe('name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })

 console.log(height);

  describe('height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
