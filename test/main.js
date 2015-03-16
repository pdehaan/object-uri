var should = chai.should();

describe('object-url', function () {

    before(function(cb){
        cb();
    });

    it('Parse', function (done) {

        var url = Object.Url.parse('http://example.com/path0/path1?id=some#hash');
        
        console.log(url);
        
        url.should.have.property('type').which.equal('http');
        url.should.have.property('host').which.equal('example.com');
        url.should.have.property('hash').which.equal('hash');
        url.path[0].should.be.equal('path0');
        url.path[1].should.be.equal('path1');
        url.params['id'].should.be.equal('some');
                

        done();
        
    });

    after(function(){
    });
    
});
