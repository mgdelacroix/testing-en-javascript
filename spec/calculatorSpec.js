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

    it('puedo revisar el histórico', function() {
        this.calculadora.add(30, 4, 60);
        this.calculadora.sub(10);

        var historico = [
            {method: 'add', value: 30},
            {method: 'add', value: 4},
            {method: 'add', value: 60},
            {method: 'sub', value: 10}
        ]

        console.log(historico);
        console.log(this.calculadora.record);

        expect(this.calculadora.record).to.be.eql(historico);
    })

})
