describe('calculadora', function() {
    beforeEach(function() {

    })

    afterEach(function() {

    })

    it('puedo sumar', function(){
        var calculadora = new Calculator();

        expect(calculadora.add(2, 3)).to.be.equal(5);
    })

})
