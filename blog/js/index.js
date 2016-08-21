//使用教程地址 http://mbraak.github.io/jqTree/

var data = [
    {
        name: '服务端技术',
        children: [
            { name: 'Shiro',
              children:[
                  {name:'翻译',
                      children:[
                          {
                              name:'<a href="/leaforheart.github.io/blog/shiro/translate/introduction.html">1 Shiro简介</a>',
                          },{
                              name:'<a href="/leaforheart.github.io/blog/shiro/translate/terminology.html">2 Shiro术语</a>',
                          },{
                              name:'<a href="/leaforheart.github.io/blog/shiro/translate/tutorial.html">3 Shiro简短教程</a>',
                          }
                      ]
                  },
                  {name:'笔记'},
                  {name:'原创'},
              ]
            },
            { name: 'Activiti' }
        ]
    },
    {
        name: '客户端技术',

    },
    {
        name: '数据库技术',

    },
    {
        name: '架构类技术',

    },
    {
        name: '大数据技术',

    },
    {
        name: '其他类技术',

    }
];

$('#tree').tree({
    data: data,
    autoEscape: false,
    autoOpen: true
});