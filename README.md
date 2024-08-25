# sandvpn
JavaScript library for sandvpn.com
# main
```js
async function main(){
    const {sandvpn} = require('./sandvpn');
    const vpn= new sandvpn();
    let req=await vpn.free_proxy()
    console.log(req)
}
main()
```
