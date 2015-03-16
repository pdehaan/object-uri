###

    Url class represents structure parsed from string.
    - type
    - host
    - path[]
    - params
    - hash 

    Url grammar: [type:]//host[/path...][?{(key=value)...}][#hash]
    
    @example usage
    
        uri = Url.parse "http://example.com/do?force=true#version2"
    
###
class Object.Url

    _decC = decodeURIComponent
    _encC = encodeURIComponent

    constructor: (params) ->

        @setParams params


    # set parameters
    setParams: (params)->

        @params = {}
        
        @updateParams params

    # update parameters
    updateParams: (delta)->

        @params[k]=v for own k,v of delta if delta

        @

    # represent as string
    toString: ->
        
        r = (if @host then (if @type then "#{@type}://#{@host}/" else "//#{@host}/") else '') + @path.join('/')

        sep='?'
        for own n,v of @params
            r += sep + n + "=" + _encC(v)
            (sep = '&') if sep is '?'

        r += "#" + @hash if @hash

        r

    #check if Url instance
    @instanceOf: (o) -> 
    
        o and o.constructor is Url

    # create a new Url instance parsed from string
    @parse: (s, params) ->

        r = new Url(params)

        return r unless s
        
        if @instanceOf s
            r.type = s.type
            r.host = s.host
            r.path = s.path
            r.params = s.params
            r.hash = s.hash
            return r

        s = "" + s  unless typeof s is 'string'

        # extract type:
        if (p = s.indexOf("://")) > -1
            r.type = s[0..p-1]
            s = s[p+1..]

        # extract hash:
        if (p = s.indexOf("#")) > -1
            r.hash = s[p+1..]
            s = s[0..p-1]

        # extract query:
        if (p = s.indexOf("?")) > -1
            q = s[p+1..]
            s = s[0..p-1]
            (r.params[p[0]] = _decC p[1]) for v in q.split("&") when (p = v.split "=").length > 1 if q

        # work with path:
        p = s.split("/")
        if p[0] is ""
            p.shift()
            if p[0] is ""
                p.shift()
        r.host = p.shift()

        r.path = p

        r
