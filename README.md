# object-url

Url object implementation.

Grammar
-------

    [type:]//host[/path...][?{params...}][#hash]

API
---
    class Object.Url.
      @parse(string)
      @instanceOf(obj)
      -toString()
      -setParams(params)
      -updateParams(params)


Example
-------
  
    var uri = Object.Url.parse("http://example.com/do?force=true#version2");
  
    alert(uri.host); // 'example.com'
  



Repo
----

[https://github.com/alitskevich/object-url]


Legal
-----

The MIT License (MIT)

Copyright (c) 2015 Alex Litskevich

