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
