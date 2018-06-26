var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {

    it('should generate the correct message object', () => {
        // store res in variable
        var from = 'Jen';
        var text = 'Some message';

        var res = generateMessage(from, text);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({
            from,
            text
        });

    }); 

});