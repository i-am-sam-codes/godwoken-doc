"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[5274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(4996);const i={id:"evmTask1",title:"1. Create account on the EVM Layer 2 Testnet"},s=void 0,l={unversionedId:"evmTask1",id:"version-1.2-rc1(WIP)/evmTask1",title:"1. Create account on the EVM Layer 2 Testnet",description:"Nervos supports the use of Ethereum compatible smart contracts which allow developers to create dApps using the popular Solidity smart contract language. This is done by running the EVM (Ethereum Virtual Machine) in a Layer 2 based execution environment using the Godwoken and Polyjuice frameworks.",source:"@site/versioned_docs/version-1.2-rc1(WIP)/evmTask1.md",sourceDirName:".",slug:"/evmTask1",permalink:"/evmTask1",draft:!1,tags:[],version:"1.2-rc1(WIP)",frontMatter:{id:"evmTask1",title:"1. Create account on the EVM Layer 2 Testnet"},sidebar:"sidebar2",previous:{title:"Setup and Requirements",permalink:"/evmPrep"},next:{title:"2. Deploy a Simple Ethereum Smart Contract on Polyjuice",permalink:"/evmTask2"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"1. Go to Godwoken Bridge",id:"1-go-to-godwoken-bridge",level:3},{value:"2. Fund an Account with CKBytes on Layer 1",id:"2-fund-an-account-with-ckbytes-on-layer-1",level:3},{value:"3. Create Layer 2 Account",id:"3-create-layer-2-account",level:3},{value:"Alternatives",id:"alternatives",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nervos supports the use of Ethereum compatible smart contracts which allow developers to create dApps using the popular Solidity smart contract language. This is done by running the EVM (Ethereum Virtual Machine) in a ",(0,a.kt)("a",{parentName:"p",href:"/structure#layer-1--layer-2"},"Layer 2")," based execution environment using the ",(0,a.kt)("a",{parentName:"p",href:"/frameworks#godwoken"},"Godwoken")," and ",(0,a.kt)("a",{parentName:"p",href:"/frameworks#polyjuice"},"Polyjuice")," frameworks."),(0,a.kt)("p",null,"EVM dApps run nearly identically on Nervos as they do on Ethereum. This, in turn, allows dApp users to continue using the popular ",(0,a.kt)("a",{parentName:"p",href:"/wallets#metamask"},"MetaMask")," wallet without having to install anything new. DApp users who are familiar with Ethereum will feel right at home!"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this tutorial you'll create a Godwoken account on Nervos' EVM Layer 2 ",(0,a.kt)("a",{parentName:"p",href:"/structure#mainnet-testnet-devnet"},"Testnet"),". Creating a Godwoken account is the first step that all users must perform on Nervos' ",(0,a.kt)("a",{parentName:"p",href:"/structure#layer-1--layer-2"},"Layer 1")," blockchain before they can begin interacting with EVM smart contracts on Layer 2."),(0,a.kt)("p",null,"We will be focusing on Layer 2 in this documentation, so you don't need to think about Layer 1 too much right now. Alright, let's start creating an account!"),(0,a.kt)("h3",{id:"1-go-to-godwoken-bridge"},"1. Go to Godwoken Bridge"),(0,a.kt)("p",null,"Start by visiting ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.bridge.godwoken.io/"},"testnet.bridge.godwoken.io"),". Make sure MetaMask wallet is installed in your browser."),(0,a.kt)("p",null,'Connect your MetaMask account to the page by clicking "Connect" button.'),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-1.png"),width:"40%"}),(0,a.kt)("h3",{id:"2-fund-an-account-with-ckbytes-on-layer-1"},"2. Fund an Account with CKBytes on Layer 1"),(0,a.kt)("p",null,'You have to fund your Layer 1 account. It will be the source of funds for Layer 2 deposit. To accomplish this click "Copy Address" to the right from "L1 Wallet Address".'," "),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-2.png"),width:"40%"}),(0,a.kt)("p",null,"Now, visit the Layer 1 faucet where you will be able to request Layer 1 testnet funds: ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"faucet.nervos.org"),"."),(0,a.kt)("p",null,'Paste the copied address into the faucet and click "Claim".'),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-3.png"),width:"40%"}),(0,a.kt)("p",null,"Now wait for your Layer 1 transaction to be completed. You should see your transaction in the list in the middle of the page."),(0,a.kt)("p",null,'After using Layer 1 faucet your "L1 Balance" should be equal to "10,000 CKB" or more.'),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-4.png"),width:"40%"}),(0,a.kt)("h3",{id:"3-create-layer-2-account"},"3. Create Layer 2 Account"),(0,a.kt)("p",null,"Make sure the previous step is complete and your Layer 1 account is funded."),(0,a.kt)("p",null,'Now type minimum "400" in "Deposit" field. Then click "Deposit" button.'),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-5.png"),width:"40%"}),(0,a.kt)("p",null,"You will be asked to sign a message in your wallet. The process will begin after you sign. Your account should be created after few minutes."),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-6.png"),width:"40%"}),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-7.png"),width:"40%"}),(0,a.kt)("p",null,'After you "Sign" the transaction you should see your deposit in "Pending" transactions.'),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-8.png"),width:"40%"}),(0,a.kt)("p",null,'After few minutes your deposit should land in "Completed" transactions.'),(0,a.kt)("img",{src:(0,o.Z)("img/evmTask1-9.png"),width:"40%"}),(0,a.kt)("p",null,"Congratulations! Your account is now created!"),(0,a.kt)("h3",{id:"alternatives"},"Alternatives"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A JavaScript library that can be integrated into application to programatically create an account: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Roger-Rumblefish/nervos-godwoken-integration"},"nervos-godwoken-integration")," (code examples in readme).")))}d.isMDXComponent=!0}}]);