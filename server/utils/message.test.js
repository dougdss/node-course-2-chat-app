var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {

        // store res in variable
        let from = 'Jen';
        let latitude = 1;
        let longitude = 1;
        let url = 'https://www.google.com/maps?q=1,1';

        let res = generateLocationMessage(from, latitude, longitude);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from, url});
        // expect(res.url).toBe(url);
    });

});
