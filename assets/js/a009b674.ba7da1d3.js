"use strict";(self.webpackChunkckb_sdk=self.webpackChunkckb_sdk||[]).push([[4583],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),i=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=i(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=i(t),p=r,m=k["".concat(c,".").concat(p)]||k[p]||u[p]||a;return t?o.createElement(m,l(l({ref:n},d),{},{components:t})):o.createElement(m,l({ref:n},d))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=k;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(7294),r=t(6010);const a="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>p});var o=t(7462),r=t(7294),a=t(6010),l=t(2389),s=t(7392),c=t(7094),i=t(2466);const d="tabList__CuJ",u="tabItem_LNqP";function k(e){var n,t;const{lazy:l,block:k,defaultValue:p,values:m,groupId:g,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:h.map((e=>{let{props:{value:n,label:t,attributes:o}}=e;return{value:n,label:t,attributes:o}})),w=(0,s.l)(f,((e,n)=>e.value===n.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===p?p:null!=(n=null!=p?p:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:_}=(0,c.U)(),[N,D]=(0,r.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&f.some((n=>n.value===e))&&D(e)}const S=e=>{const n=e.currentTarget,t=x.indexOf(n),o=f[t].value;o!==N&&(E(n),D(o),null!=g&&_(g,String(o)))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var o;const n=x.indexOf(e.currentTarget)+1;t=null!=(o=x[n])?o:x[0];break}case"ArrowLeft":{var r;const n=x.indexOf(e.currentTarget)-1;t=null!=(r=x[n])?r:x[x.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":k},b)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>x.push(e),onKeyDown:T,onFocus:S,onClick:S},l,{className:(0,a.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":N===n})}),null!=t?t:n)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function p(e){const n=(0,l.Z)();return r.createElement(k,(0,o.Z)({key:String(n)},e))}},1071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=t(7462),r=(t(7294),t(3905)),a=(t(4996),t(5488)),l=t(5162);const s={id:"deployLocalNetwork",title:"Deploy Local Network with Godwoken-kicker"},c=void 0,i={unversionedId:"deployLocalNetwork",id:"deployLocalNetwork",title:"Deploy Local Network with Godwoken-kicker",description:"Godwoken-kicker is a one-line command to start a Godwoken network on\xa0Devnet. This deployment method helps developers deploy Ethereum contracts and quickly migrate Ethereum DApps to CKB Devnet in testing and development environments.",source:"@site/docs/deployLocalNetwork.md",sourceDirName:".",slug:"/deployLocalNetwork",permalink:"/next/deployLocalNetwork",draft:!1,tags:[],version:"current",frontMatter:{id:"deployLocalNetwork",title:"Deploy Local Network with Godwoken-kicker"},sidebar:"sidebar2",previous:{title:"Hands-On EVM Training",permalink:"/next/evmTraining"},next:{title:"Deploy a Simple Contract with Hardhat",permalink:"/next/deployContractHardhat"}},d={},u=[],k={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Godwoken-kicker is a one-line command to start a Godwoken network on\xa0Devnet. This deployment method helps developers deploy Ethereum contracts and quickly migrate Ethereum DApps to CKB Devnet in testing and development environments."),(0,r.kt)("p",null,"Godwoken-kicker provides a quick mode and a manual-build mode for deployment."),(0,r.kt)(a.Z,{defaultValue:"quick",values:[{label:"Quick Mode",value:"quick"},{label:"Manual-build Mode",value:"manual-build"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"quick",mdxType:"TabItem"},(0,r.kt)("p",null,"The quick mode is fast and simple. It executes the builds of all components from pre-built docker images."),(0,r.kt)("b",null,"Environment"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Ubuntu 20.04 LTS"))),(0,r.kt)("b",null,"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/engine/install/ubuntu/"},"Docker\xa0Engine")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/compose/install/"},"Docker\xa0Compose >= 1.29.0")),(0,r.kt)("li",null,"Metamask Wallet"))),(0,r.kt)("p",null,(0,r.kt)("b",null,"Steps")),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"Clone the source of Godwoken-kicker under the branch ",(0,r.kt)("code",null,"compatibility-change"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone -b compatibility-changes https://github.com/RetricSu/godwoken-kicker\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Start Godwoken devenet_v1."),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker start")," command can be used to initialize the Godwoken services. The first-time launch might take a few minutes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd godwoken-kicker\n$ ./kicker start\n\nNOTE: The docker-compose version should be newer than 1.29.0\nNOTE: This might take several minutes on the first run\n\n:> docker-compose -f docker/docker-compose.yml up -d --build\n\ndocker_postgres_1 is up-to-date\ndocker_redis_1 is up-to-date\ndocker_ckb-miner_1 is up-to-date\nStarting docker_ckb_1 ... done\nStarting docker_check-ckb-started-successfully_1 ... done\ndocker_ckb-indexer_1 is up-to-date\nRecreating docker_godwoken_1                     ... done\nRecreating docker_web3_1                         ... done\nCreating docker_web3-indexer_1                   ... done\n[start] Services started successfully\n")),(0,r.kt)("p",null,"The command above deploys the Godwoken local network. The following docker containers should start running once deployment completed:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_ckb_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_ckb-miner_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_ckb-indexer_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_godwoken_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_web3_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_web3-indexer_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_postgres_1")),(0,r.kt)("li",null,(0,r.kt)("code",null,"docker_redis_1")))),(0,r.kt)("p",null,"More information can be viewed at ",(0,r.kt)("a",{href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml"},(0,r.kt)("code",null,"docker-compose.yml")),"."),(0,r.kt)("li",null,(0,r.kt)("p",null,"Deposit CKB to a Layer 2 account for testing."),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker get-balance <'eth-address'>")," command can be used to check the layer 2 account balance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker get-balance 0xCD1d13450cFA630728D0390C99957C6948BF7d19 # check account balance\nCreating docker_godwoken_run ... done\nCreating docker_godwoken_run ... done\n[2022-04-14T18:06:14Z INFO  gw_tools::get_balance] Balance: 0\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker deposit <'eth-address'> <'amount'>")," command can be used to deposit CKB to the layer 2 account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker deposit 0xCD1d13450cFA630728D0390C99957C6948BF7d19 999 # deposit ckb to account\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[2022-04-14T18:07:55Z INFO  gw_tools::deposit_ckb] eth address: 0xcd1d13450cfa630728d0390c99957c6948bf7d19\n[2022-04-14T18:07:55Z INFO  gw_tools::deposit_ckb] layer2 script hash: 0xfe56afaef792f6d3de0d7271b995a6d663fa85483bf9ec757d6d2ce1346989a4\n[2022-04-14T18:07:55Z INFO  gw_tools::deposit_ckb] short script hash: 0xfe56afaef792f6d3de0d7271b995a6d663fa8548\n[2022-04-14T18:07:57Z INFO  gw_tools::deposit_ckb] tx_hash: 0xb8c84c7a2907b8765f7e6df6f95531466be83c76f8797d05ddf99be4f03d3552\n[2022-04-14T18:07:57Z INFO  gw_tools::utils::transaction] waiting tx b8c84c7a2907b8765f7e6df6f95531466be83c76f8797d05ddf99be4f03d3552\n[2022-04-14T18:08:02Z INFO  gw_tools::utils::transaction] tx pending\n[2022-04-14T18:08:07Z INFO  gw_tools::utils::transaction] tx pending\n[2022-04-14T18:08:12Z INFO  gw_tools::utils::transaction] tx pending\n[2022-04-14T18:08:17Z INFO  gw_tools::utils::transaction] tx proposed\n[2022-04-14T18:08:22Z INFO  gw_tools::utils::transaction] tx proposed\n[2022-04-14T18:08:27Z INFO  gw_tools::utils::transaction] tx commited\n[2022-04-14T18:08:29Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 2 secs.\n[2022-04-14T18:08:31Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 4 secs.\n[2022-04-14T18:08:33Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 6 secs.\n[2022-04-14T18:08:35Z INFO  gw_tools::deposit_ckb] current balance: 0, waiting for 8 secs.\n[2022-04-14T18:08:37Z INFO  gw_tools::deposit_ckb] current balance: 99900000000, waiting for 10 secs.\n[2022-04-14T18:08:37Z INFO  gw_tools::deposit_ckb] deposit success!\n[2022-04-14T18:08:37Z INFO  gw_tools::deposit_ckb] Your account id: 7\nDeposit finished\n")))),(0,r.kt)("p",null," Verify that the transfer executed successfully."),"```bash $ ./kicker get-balance 0xCD1d13450cFA630728D0390C99957C6948BF7d19 Creating docker_godwoken_run ... done Creating docker_godwoken_run ... done [2022-04-14T18:13:20Z INFO  gw_tools::get_balance] Balance: 99900000000 ```",(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," Note that the accounts are defined in ",(0,r.kt)("a",{href:"https://github.com/nervosnetwork/godwoken-tests/blob/develop/contracts/hardhat.config.js"},"contract/hardhat.config.js"),".")))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Run Godwoken-test cases with ",(0,r.kt)("a",{href:"https://hardhat.org/"},"Hardhat"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/nervosnetwork/godwoken-tests\n$ cd godwoken-tests\n$ cd contracts\n$ npm install\n$ npm run test\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'> contracts@1.0.0 test\n> hardhat test --network gw_devnet_v1\n\ncontracts/Token.sol: Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/Calc.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/ErrorHandling.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/Memory.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/RecursionContract.sol\n\n\nWarning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing "SPDX-License-Identifier: <SPDX-License>" to each source file. Use "SPDX-License-Identifier: UNLICENSED" for non-open-source code. Please see https://spdx.org for more information.\n--\x3e contracts/Storage.sol\n\n\nWarning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.\n --\x3e contracts/Storage.sol:9:3:\n  |\n9 |   constructor() public {\n  |   ^ (Relevant source part starts here and spans across multiple lines).\n\n\nWarning: Function state mutability can be restricted to pure\n  --\x3e contracts/Calc.sol:24:5:\n   |\n24 |     function add(uint256 x, uint256 y) public view returns (uint256) {\n   |     ^ (Relevant source part starts here and spans across multiple lines).\n\n\nWarning: Function state mutability can be restricted to pure\n  --\x3e contracts/Calc.sol:28:5:\n   |\n28 |     function sub(uint256 x, uint256 y) public view returns (uint256) {\n   |     ^ (Relevant source part starts here and spans across multiple lines).\n\n\nWarning: Function state mutability can be restricted to pure\n --\x3e contracts/ErrorHandling.sol:5:5:\n  |\n5 |     function getRevertMsg(uint value) public view returns (uint) {\n  |     ^ (Relevant source part starts here and spans across multiple lines).\n\n\nCompiled 18 Solidity files successfully\n\n\n  BlockInfo Contract\nchainId 8521215115268\ncontractChainId 8521215115268\n    \u2714 should compare web3 chain id and EVM with same results\ncontractMiner 0x0Aa49d060c257758846d8E409421AD128c6d5080\nminer 0x0000000000000000000000000000000000000000\n    \u2714 should compare web3 coinbase and conibase from EVM with same results (181ms)\nblockNumber 606\ncontractBlockNumber BigNumber { value: "607" }\n    \u2714 should compare web3 block number and block number from EVM with same results\nblockHash 0xd16d5455af88c73301a3fced98d5fe7cf3fe8dc6d82616bde133c21baa11eebc\n    \u2714 should compare web3 block hash and block hash from EVM with same results\ntxBlockNumber 607\neventBlockNumber 607\ntxBlockHash 0xd16d5455af88c73301a3fced98d5fe7cf3fe8dc6d82616bde133c21baa11eebd\neventBlockHash 0x0000000000000000000000000000000000000000000000000000000000000000\n    \u2714 should mine correct event with block number and hash with OK results (125ms)\n\n  Calc contract\n    \u2714 Deployment computing contract (232ms)\n\n  HeadTail\n    Setup test\n      \u2714 deploys contract (4336ms)\n      \u2714 has valid initial values (202ms)\n    Stage 1\n      \u2714 allows to deposit BET_VALUE (129ms)\n      \u2714 saves address of user (142ms)\n      \u2714 allows depositing 777 wei (242ms)\n    Stage 2\n      \u2714 allows to save both users addresses (4247ms)\n    Stage 5\n      \u2714 sends ether to a second user after a correct guess (4317ms)\n\n  Memory Contract\n    \u2714 Deploy and new some memory (509ms)\n\n  Recursion Contract\ndepth: 1\n     sum =  1\ndepth: 2\n     sum =  3\ndepth: 3\n     sum =  6\ndepth: 4\n     sum =  10\ndepth: 5\n     sum =  15\ndepth: 6\n     sum =  21\ndepth: 7\n     sum =  28\ndepth: 8\n     sum =  36\ndepth: 9\n     sum =  45\ndepth: 10\n     sum =  55\ndepth: 11\n     sum =  66\ndepth: 12\n     sum =  78\ndepth: 13\n     sum =  91\ndepth: 14\n     sum =  105\ndepth: 15\n     sum =  120\ndepth: 16\n     sum =  136\ndepth: 17\n     sum =  153\ndepth: 18\n     sum =  171\ndepth: 19\n     sum =  190\ndepth: 20\n     sum =  210\ndepth: 21\n     sum =  231\ndepth: 22\n     sum =  253\ndepth: 23\n     sum =  276\ndepth: 24\n     sum =  300\ndepth: 25\n     sum =  325\ndepth: 26\n     sum =  351\ndepth: 27\n     sum =  378\ndepth: 28\n     sum =  406\ndepth: 29\n     sum =  435\ndepth: 30\n     sum =  465\ndepth: 31\n     sum =  496\ndepth: 32\n     sum =  528\ndepth: 33\n     sum =  561\ndepth: 34\n     sum =  595\ndepth: 35\n     sum =  630\ndepth: 36\n     sum =  666\n    \u2714 Deploy and call recursive functions (3167ms)\n\n  SisyphusGamble\nsender\'s address: 0x966B30e576A4d6731996748B48Dd67C94eF29067\nDeploying contract SisyphusGambleVenues\n  Sisyphus gamble venues deployed on address: 0x1f4D5204c51007007fD21cF3e94B2Bb6dE8a2f2C\nDeploying contract testERC20\n  TestERC20 on address: 0x5B0AdFF638E2862e4834948e559fd821680dc8DF\n  sender\'s balnace = 10000\nStart a new sisyphus gamble\n  Getting Sisyphus Gamble Venues...\ngameList: [\n  [\n    \'0x6421e4Ea26E11C895266ab9EE4d724613276a588\',\n    1,\n    2,\n    \'0x5B0AdFF638E2862e4834948e559fd821680dc8DF\',\n    BigNumber { value: "1" },\n    \'0x0000000000000000000000000000000000000000\',\n    BigNumber { value: "115792089237316195423570985008687907853269984665640564039457584007913129639935" },\n    BigNumber { value: "1" },\n    sisyphusGamble: \'0x6421e4Ea26E11C895266ab9EE4d724613276a588\',\n    weight: 1,\n    gamblingBlocks: 2,\n    token: \'0x5B0AdFF638E2862e4834948e559fd821680dc8DF\',\n    totalPrize: BigNumber { value: "1" },\n    lastGambler: \'0x0000000000000000000000000000000000000000\',\n    endBlock: BigNumber { value: "115792089237316195423570985008687907853269984665640564039457584007913129639935" },\n    minGamble: BigNumber { value: "1" }\n  ]\n]\n  Sisyphus gamble venues deployed on address: 0x6421e4Ea26E11C895266ab9EE4d724613276a588\nSisyphusGambling...\n>> Claim Prize\n  sender\'s balnace = 9996\n    \u2714 Start a new sisyphus gamble -> gamble -> claimPrize (13045ms)\n\n  Token contract\n    Deployment\n      \u2714 Should set the right owner\n      \u2714 Should assign the total supply of tokens to the owner (52ms)\n    Transactions\n      \u2714 Should transfer tokens between accounts (117ms)\n      \u2714 Should update balances after transfers (182ms)\n\n\n  20 passing (53s)\n')))),(0,r.kt)("p",null,"User can configurate any network in the ",(0,r.kt)("code",null,"hardhat.config.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat run --network <your-network> scripts/deploy.js\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Discontinue Godwoken devnet_v1."),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker stop")," command can be used to stop the Godwoken services."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker stop\n:> docker-compose -f docker/docker-compose.yml down --remove-orphans\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"OUTPUT"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nStopping docker_web3-indexer_1 ... done\nStopping docker_web3_1         ... done\nStopping docker_godwoken_1     ... done\nStopping docker_ckb-indexer_1  ... done\nStopping docker_ckb_1          ... done\nStopping docker_postgres_1     ... done\nStopping docker_ckb-miner_1    ... done\nStopping docker_redis_1        ... done\nRemoving docker_godwoken_run_9a9824b6ed91        ... done\nRemoving docker_godwoken_run_48fed4562d8b        ... done\nRemoving docker_godwoken_run_1c4cbcafa53a        ... done\nRemoving docker_godwoken_run_73d931a6e2dd        ... done\nRemoving docker_godwoken_run_c9242edc0541        ... done\nRemoving docker_web3-indexer_1                   ... done\nRemoving docker_web3_1                           ... done\nRemoving docker_godwoken_1                       ... done\nRemoving docker_godwoken_run_f22dac2cb072        ... done\nRemoving docker_godwoken_run_20ec58f86f45        ... done\nRemoving docker_ckb-indexer_1                    ... done\nRemoving docker_check-ckb-started-successfully_1 ... done\nRemoving docker_ckb_1                            ... done\nRemoving docker_postgres_1                       ... done\nRemoving docker_ckb-miner_1                      ... done\nRemoving docker_redis_1                          ... done\nRemoving network docker_default\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"kicker clean")," command can be used to remove the volumed data of containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo ./kicker clean\n:> docker-compose -f docker/docker-compose.yml ps --quiet\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"OUTPUT"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nrm -rf docker/layer2/data/\nrm -f  docker/layer2/config/scripts-deployment.json\nrm -f  docker/layer2/config/rollup-genesis-deployment.json\nrm -f  docker/layer2/config/godwoken-config.toml\nrm -f  docker/layer2/config/polyjuice-root-account-id\nrm -f  docker/layer2/config/web3-config.env\nrm -f  docker/layer2/config/web3-indexer-config.toml\nrm -rf docker/ckb-indexer/\nrm -rf docker/layer1/ckb/data/\nrm -rf docker/layer1/ckb2/data/\nrm -rf docker/layer1/ckb3/data/\nrm -rf docker/postgres/data\nrm -rf docker/redis/data\nrm -rf docker/manual-artifacts\n"))))),(0,r.kt)("p",null,"For more information on the use of the Godwoken-Kicker command line, see Godwoken-kicker Usage."))),(0,r.kt)(l.Z,{value:"manual-build",mdxType:"TabItem"},(0,r.kt)("p",null,"The manual-build mode is more flexible for custom requirements. It can build the components from local packages and executes the builds locally."),(0,r.kt)("b",null,"Environment"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,"Ubuntu 20.04 LTS"))),(0,r.kt)("b",null,"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/engine/install/ubuntu/"},"Docker Engine")),(0,r.kt)("li",null,(0,r.kt)("a",{href:"https://docs.docker.com/compose/install/"},"Docker Compose >= 1.29.0")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p><b>Steps</b></p>\n")),(0,r.kt)("ol",null,(0,r.kt)("li",null,(0,r.kt)("p",null,"Clone the source of Godwoken-kicker under the branch ",(0,r.kt)("code",null,"compatibility-changes"),"."),"```bash $ git clone -b compatibility-changes https://github.com/RetricSu/godwoken-kicker ```",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'</li>\n\n<li><p>Define a basic Godwoken service that runs on a pre-built image in <a href="https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docker/docker-compose.yml"><code>docker/docker-compose.yml</code></a>.</p>\n\n```bash\ngodwoken:\n')),(0,r.kt)("p",null,"  image: ghcr.io/flouse/godwoken-prebuilds:v1.0.x-202203160423\nenvironment:\nRUST_LOG: info,gw_generator=debug\nGODWOKEN_MODE: fullnode\nRUST_BACKTRACE: full\nvolumes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- ./layer2:/var/lib/layer2\n")),(0,r.kt)("p",null,"  ports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- 8119:8119\n- 8120:8120\n")),(0,r.kt)("p",null,"  command: ",'[ "godwoken", "run", "-c", "/var/lib/layer2/config/godwoken-config.toml" ]'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>Navigate to /usr/bin/godwoken to locate the Godwoken binary. </p>\n\n</li>\n\n<li><p>Build the godwoken binary manually and place it in\xa0<code>docker/manual-artifacts/godwoken</code>.</p>\n\n```bash\nMANUAL_BUILD_GODWOKEN=true \\\nGODWOKEN_GIT_URL=ssh://git@github.com/nervosnetwork/godwoken \\\nGODWOKEN_GIT_CHECKOUT=compatibility-breaking-changes \\\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("code",null,"./kicker manual-build"),"to build the binary. Or, users can build on their own, just make sure that the binary is placed in ",(0,r.kt)("code",null,"docker/manual-artifacts/"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kicker manual-build\n"))),(0,r.kt)("li",null,(0,r.kt)("p",null,"Replace the prebuild godwoken and gw-tools with manual-build in the file\xa0",(0,r.kt)("code",null,"docker/manual-godwoken.compose.yml"),"."),"```bash services: godwoken: volumes: # Volume our manual-build godwoken to # `/usr/bin/godwoken` inside container - ./manual-artifacts/godwoken:/usr/bin/godwoken ```"),(0,r.kt)("li",null,(0,r.kt)("p",null,"Launch the Godwoken service with manual-build artifacts."),"```bash MANUAL_BUILD_GODWOKEN=true ./kicker start # Starts all services MANUAL_BUILD_GODWOKEN=true ./kicker start godwoken # Starts only a single godwoken service ```")))),(0,r.kt)("p",null,"For more details on manual-build mode of Godwoken-kicker, refer to ]",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RetricSu/godwoken-kicker/blob/compatibility-changes/docs/manual-build.md"},"manual-build mode"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/godwoken-info/tree/info/testnet_v1"},"the example of a one-click launch readonly node"),"."))}p.isMDXComponent=!0}}]);