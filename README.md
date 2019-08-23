# Vue学习之-仿写网易云音乐商城
 
## Preview

### Page of Index
 ![image](https://raw.githubusercontent.com/wiki/Patrick-Jun/Vue-neteaseMusicStore/index.jpg)

### Page of Detail
 ![image](https://raw.githubusercontent.com/wiki/Patrick-Jun/Vue-neteaseMusicStore/detail1.png)
 ![image](https://raw.githubusercontent.com/wiki/Patrick-Jun/Vue-neteaseMusicStore/detail2.png)

### Page of Personal(incomplete)
 ![image](https://raw.githubusercontent.com/wiki/Patrick-Jun/Vue-neteaseMusicStore/personal.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Components

### Goods
![image](https://raw.githubusercontent.com/wiki/Patrick-Jun/Vue-neteaseMusicStore/thing.png)

| Props | Type | Default | Description |
| ---  |  :---: | :---: | :---: |
| goods-info | Object | - | Goods information： {id:"",title:"",img:"",tips:"",newPrice: "",oldPrice: ""} |

### sideFloatMenu
![image](https://raw.githubusercontent.com/wiki/Patrick-Jun/Vue-neteaseMusicStore/menu.png)

| Props | Type | Default | Description |
| ---  |  :---: | :---: | :---: |
| fixedTop | String | 30% | Relative to top when fixed. |
| start | String | - | **Optional** Initial fixed absolute position. E.g: 300px |

> Tips: The button of toTop  will appear after scrolling.
