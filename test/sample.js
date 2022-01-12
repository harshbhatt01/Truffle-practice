const hi = artifacts.require('hi');

contract('hi', ()=>{
    it('should return hi harsh, testing done', async ()=> {
        const Hi = await hi.deployed();
        const result = await Hi.gethi();
        assert(result == 'hi harsh, testing done');
    });
});