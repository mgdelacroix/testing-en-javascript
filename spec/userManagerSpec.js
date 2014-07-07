describe('gestor de usuarios', function() {
    beforeEach(function() {
        this.userManager = new UserManager();
    });

    afterEach(function() {

    });

    it('puedo añadir usuarios', function() {
        var startWithStub = sinon.stub(Validator, "startWith");
        startWithStub.withArgs("alonso", "a").returns(true);
        startWithStub.withArgs("jimmy", "a").returns(false);

        this.userManager.add("alonso");
        this.userManager.add("jimmy");
        var userList = this.userManager.get();
        var expectedUserList = [ 'jimmy' ];

        expect(userList).to.be.eql(expectedUserList);

        startWithStub.restore();
    });
});
