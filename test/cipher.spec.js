describe('cipher', () => {
    // it que voy a testear
    it('debería ser un objeto', () => {
        //assert que voy a mi comparacion
        assert.equal(typeof cipher, 'object');
    });


    describe('cipher.encode', () => {

        it('debería ser una función', () => {
            assert.equal(typeof cipher.encode, 'function');
        });

        it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
            assert.equal(window.cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG')
        });
    });

    describe('cipher.decode', () => {

        it('debería ser una función', () => {
            assert.equal(typeof cipher.decode, 'function');
        });

        it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
            assert.equal(window.cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        });
    });

});