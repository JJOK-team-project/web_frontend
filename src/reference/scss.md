## 이건
```scss
div{
    margin : 80px;
    padding : 50px;
    h1{
        color : red;
        font-size : 10px;
    }
}
```
## 이거랑 같음

```css
div{
    marin : 80px;
    padding : 50px;
}
div > h1{
    color : red;
    font-size : 10px;
}
```
# sass 가 컴파일 오류를 일으킬 때

```bash
이거 하고
 > npm uninstall node-sass

이거하면 해결
 > npm install node-sass@4.41.1
```