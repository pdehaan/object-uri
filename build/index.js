
/*

    Url class represents structure parsed from string.
    - type
    - host
    - path[]
    - params
    - hash 

    Url grammar: [type:]//host[/path...][?{(key=value)...}][#hash]
    
    @example usage
    
        uri = Url.parse "http://example.com/do?force=true#version2"
 */

(function() {
  var hasProp = {}.hasOwnProperty;

  Object.Url = (function() {
    var _decC, _encC;

    _decC = decodeURIComponent;

    _encC = encodeURIComponent;

    function Url(params) {
      this.setParams(params);
    }

    Url.prototype.setParams = function(params) {
      this.params = {};
      return this.updateParams(params);
    };

    Url.prototype.updateParams = function(delta) {
      var k, v;
      if (delta) {
        for (k in delta) {
          if (!hasProp.call(delta, k)) continue;
          v = delta[k];
          this.params[k] = v;
        }
      }
      return this;
    };

    Url.prototype.toString = function() {
      var n, r, ref, sep, v;
      r = (this.host ? (this.type ? this.type + "://" + this.host + "/" : "//" + this.host + "/") : '') + this.path.join('/');
      sep = '?';
      ref = this.params;
      for (n in ref) {
        if (!hasProp.call(ref, n)) continue;
        v = ref[n];
        r += sep + n + "=" + _encC(v);
        if (sep === '?') {
          sep = '&';
        }
      }
      if (this.hash) {
        r += "#" + this.hash;
      }
      return r;
    };

    Url.instanceOf = function(o) {
      return o && o.constructor === Url;
    };

    Url.parse = function(s, params) {
      var i, len, p, q, r, ref, v;
      r = new Url(params);
      if (!s) {
        return r;
      }
      if (this.instanceOf(s)) {
        r.type = s.type;
        r.host = s.host;
        r.path = s.path;
        r.params = s.params;
        r.hash = s.hash;
        return r;
      }
      if (typeof s !== 'string') {
        s = "" + s;
      }
      if ((p = s.indexOf("://")) > -1) {
        r.type = s.slice(0, +(p - 1) + 1 || 9e9);
        s = s.slice(p + 1);
      }
      if ((p = s.indexOf("#")) > -1) {
        r.hash = s.slice(p + 1);
        s = s.slice(0, +(p - 1) + 1 || 9e9);
      }
      if ((p = s.indexOf("?")) > -1) {
        q = s.slice(p + 1);
        s = s.slice(0, +(p - 1) + 1 || 9e9);
        if (q) {
          ref = q.split("&");
          for (i = 0, len = ref.length; i < len; i++) {
            v = ref[i];
            if ((p = v.split("=")).length > 1) {
              r.params[p[0]] = _decC(p[1]);
            }
          }
        }
      }
      p = s.split("/");
      if (p[0] === "") {
        p.shift();
        if (p[0] === "") {
          p.shift();
        }
      }
      r.host = p.shift();
      r.path = p;
      return r;
    };

    return Url;

  })();

}).call(this);
