import { WebSiteFactory } from './flyweight.js'

let factory = new WebSiteFactory();
var fx = factory.getWebSite("产品展示");
fx.use('Alice');
var fx = factory.getWebSite("产品展示");
fx.use('Bob');
var fx = factory.getWebSite("产品展示");
fx.use('Caris');
console.log(factory.getSize())


// The Website 产品展示 is used by Alice
// The Website 产品展示 is used by Bob
// The Website 产品展示 is used by Caris
// 1