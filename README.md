# lesx-example

lesx dsl webpack loader example.

## What

The loader can transform the following DSL:

```html
<style>
    a {
        color: red;
    }
</style>

<template>
    <div>
        <a onClick={() => {
            alert(1);
        }}>点我</a>

        {console.log(this.props)}

        <If condition={ this.props.valid }>
            <div>{this.state.name}</div>
        </If>

        <Button type="primary" onClick={() => {
            alert('I am a button!');
        }}>antd button</Button>
    </div>
</template>

<script>
    module.exports = {
        props: {
            valid: true
        },

        state: {
            name: 'xiangzhong.wxz'
        },
    };
</script>
```

into a `React Component`!

## 特性

- 1、`style/template/script`三元素分离，方便代码维护；
- 2、`script`中注入的方法及变量在DSL中可以通过`this.xxx`的方式使用；
- 3、`script`中注入的方法会被自动绑定到`this`作用域；
- 4、DSL中自动支持[jsx-control-statements](https://www.npmjs.com/package/jsx-control-statements)控制流标签(If/Choose/When/Otherwise/For/With)；
- 5、DSL默认自带`antd`组件（可以配置为其他UI组件库），无需引入，可以直接在DSL中使用antd所有的组件；
- 6、DSL transform后的组件支持`components`属性，可以引入组件库没有的其他组件（自定义或者第三方的）；
- 7、`style`支持自定义语言(css/sass/less)，默认`sass`。

## loader setting

```javascript
{
    test: /\.lesx$/,
    loader: 'lesx-loader',
    query: {
        loaders: {
            js: 'babel',
            css: 'style!css',
            sass: 'style!css!sass'
        },
        uiLib: {
            libName: 'antd',
            libDirectory: 'lib'
        }
    }
}
```
