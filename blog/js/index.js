//使用教程地址 http://mbraak.github.io/jqTree/

var data = [
    {
        name: '服务端技术',
        children: [
            { name: '<a href="/leaforheart.github.io/blog/shiro/shiro.html">Shiro</a>',
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