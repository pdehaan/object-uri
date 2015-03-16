# object-uri

Uri object implementation.

Grammar
-------

    [type:]//host[/path...][?{params...}][#hash]

API
---
    class Object.Uri
      @parse(string)
      @instanceOf(obj)
      -toString()
      -setParams(params)
      -updateParams(params)


Example
-------
  
    var uri = Object.Uri.parse("http://example.com/do?force=true#version2");
  
    alert(uri.host); // 'example.com'
  



Repo
----

[https://github.com/alitskevich/object-uri]


Legal
-----

The MIT License (MIT)

Copyright (c) 2015 Alex Litskevich

