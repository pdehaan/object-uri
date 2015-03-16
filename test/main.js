var should = chai.should();

describe('object-uri', function () {

    before(function(cb){
        cb();
    });

    it('Parse', function (done) {

        var uri = Object.Uri.parse('http://example.com/path0/path1?id=some#hash');
        
        console.log(uri);
        
        uri.should.have.property('type').which.equal('http');
        uri.should.have.property('host').which.equal('example.com');
        uri.should.have.property('hash').which.equal('hash');
        uri.path[0].should.be.equal('path0');
        uri.path[1].should.be.equal('path1');
        uri.params['id'].should.be.equal('some');
                

        done();
        
    });

    after(function(){
    });
    
});
