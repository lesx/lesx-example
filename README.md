# lesx-loader

lesx dsl webpack loader.


## 配置

```javascript
{
    test: /\.lesx$/,
    loader: 'lesx-loader',
    query: {
        loaders: {
            js: 'babel',
            css: 'style!css',
            sass: 'style!css!sass'
        }
    }
}
```
