const SimpStor = artifacts.require('SimpStor');

contract('SimpStor', ()=>{
    it('should', async ()=>{
        const simpStor = await SimpStor.deployed();
        await simpStor.setdata('this');
        const result = await simpStor.getdata();
        assert(result == 'this');
    });
});