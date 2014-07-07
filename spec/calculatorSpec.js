describe('calculadora', function() {
    beforeEach(function() {
        this.calculadora = new Calculator();
    })

    afterEach(function() {
    })

    it('puedo sumar', function(){
        expect(this.calculadora.add(2, 3)).to.be.equal(5);
        expect(this.calculadora.add(7)).to.be.equal(12);
    })

    it('puedo restar', function() {
        expect(this.calculadora.sub(1)).to.be.equal(-1);
        expect(this.calculadora.sub(20, 30)).to.be.equal(-51);
    })

    it('puedo comprobar que un número sea mayor que otro', function() {
        this.calculadora.value = 50;

        expect(this.calculadora.bigger(100)).to.be.true;
        expect(this.calculadora.bigger(10)).not.to.be.true;
    })

    it('puedo comprobar que un número sea menor que otro', function() {
        this.calculadora.value = 50;

        expect(this.calculadora.smaller(100)).not.to.be.true;
        expect(this.calculadora.smaller(10)).to.be.true;
    })

})
