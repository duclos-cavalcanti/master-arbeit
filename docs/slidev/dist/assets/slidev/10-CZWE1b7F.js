import{_ as o}from"../TUMLogo.vue_vue_type_script_setup_true_lang-BFklYim7.js";import{_ as g}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bh-WlPkB.js";import{_ as p}from"./Mermaid.vue_vue_type_script_setup_true_lang-DlY-H9aw.js";import{o as d,c,k as h,e as s,l as a,m as t,q as y,s as B,A as k,a6 as i}from"../modules/vue-C7iSKaD9.js";import{I as C}from"./two-cols-header-bWHaXWjy.js";import{ai as e}from"../index-DhXHQvE8.js";import{p as m,u as D,f}from"./context-D6txofD6.js";import"../modules/unplugin-icons-CquepfLA.js";import"../modules/file-saver-LUhfcczZ.js";import"../modules/shiki-BlbLwIsd.js";const Q=s("h1",null,"Manager x Worker: Workflow [Step_i = 0]",-1),_=s("ul",null,[s("li",null,[i("Manager reads in YAML "),s("em",null,"script")]),s("li",null,"Populates step queue"),s("li",null,"Fetches first step")],-1),w={alt:"StepQ",style:{transform:"scale(0.6)"},class:"absolute top--5 left-30% right-0 bottom-0"},u={alt:"Pool",style:{transform:"scale(0.9)"},class:"absolute top-13% left-60% right-0 bottom-0"},M={alt:"JobQ",style:{transform:"scale(0.6)"},class:"absolute top-18% left-30% right--1% bottom-0"},b={alt:"YAML",style:{transform:"scale(1.0)"},class:"absolute top-35% left-5%"},I=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-yaml"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"name"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}}," DEFAULT")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"hyperparameter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0.5")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"rate"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 10"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}}," ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"duration"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 10")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"addrs"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"localhost:9091"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"localhost:9092"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"localhost:9093"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"localhost:9094"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"localhost:9095"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"localhost:9096"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"steps"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," action"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"CONNECT"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    description"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Establish connection workers."),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  -"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," action"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"ROOT"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    description"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},' "'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Choose root among worker nodes."),s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    data"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 0")])])],-1),x={alt:"ManagerxWorker",style:{transform:"scale(1.1)"},class:"absolute bottom-13% right-16%"},U={__name:"10",setup(K){return m(e),D(),(Y,z)=>{const l=p,n=g,A=o;return d(),c(C,y(B(k(f)(k(e),9))),{left:h(r=>[s("div",b,[a(n,t({},{ranges:[]}),{default:h(()=>[I]),_:1},16)])]),right:h(r=>[s("div",x,[a(l,t({"code-lz":"OYJwhgDgFgBAMgJRgKBmmBZA2gHgGYD2AdgC4wDGBANgSALwDuUAliQKYB8GYRYwbIALqp0AZxIBPKm0ww8zKlQBcAYgBiagAzbNItKICuAI1CRYAFRBs2e9GgAmzK+RLNiMcwCFbdgOqasACJ8YjJKGnojKjByAGsOXxxDIw5NHAB6ZI5A4Ts/AEYgkNIKalo6KJj4xKz8jKycn3RfACYiwhLw8sq4hKTjDhb6gca85oBmdtDSiIro3pqB8eGU0bGYXwAWKc6yyPnq/pTNlezc9d8AVh2wvbmqvqzL07Wx3wA2G5nug8eB95ewiaaH8MAAtAA6MEbfLAjaacFQjYtZBw3z5RHQ3zjNEYyFYzao9bIzEbS5olqkj5E9biKQyUHyRSqHQ6OF06QwuQKZQqVnadmSTmtbnMvn8wX0jbjUW8/m6YkchmbWUsiWKoUMy6q8WsyXC946+W2NhEey2DDgsEcDxWNhAA==="},{}),null,16)]),a(A,{variant:"white"})]),default:h(()=>[Q,_,s("div",w,[a(l,t({"code-lz":"EYGw9gxg1gtMCmAXAhgKAASfQRQBQCIAeAMzADtF0IxwAnAXgHcALAS0XgD4BlDgB2z4AlBiwBnPsgjxRmUJCgAudvAC2Y2VkzUQAV1Vkx6AIyatAQQDa+AMIB5AHIP8AXXRmsAIWsAlO3YAVVw9MG2sAfUjw4K14MgATVE1sdBgYTnQVdSStMUQATxB4HHRiVhAQRQBiADEagAZG+qA"},{}),null,16)]),s("div",u,[a(l,t({"code-lz":"EYGw9gxg1gtMCmAXAhgKAASfQWQBQCIAeAMzADtF0IxwAnAXgHcALAS0XgD5tkzkBzeLXwBKDFgDOAB2QR44zAAUCJcpWp0mbDp0Vga6UQvTTZ8rOlCQoALkZhaUIROMWNAVwC2ZCegDMrlgA6gAMANr4QYQS7sCcIYQA9DFx+AC66IGYQQCMEVEpnDlJhelZ6EEATPnRsZyVJXVlFhZBfjWFfo2paeVBACwddf3dnM0t2QCsQ3GTo+MTQQBsM5xL870T2QDsq9sbxvBkACbG2DAwusaKF5z2js6oxhKIAJ4g8DjoxKwgIDYAYgAYkCQmCQs83h90Ipvr9/gCwdsQgBhEJAA"},{}),null,16)]),s("div",M,[a(l,t({"code-lz":"EYGw9gxg1gtMCmAXAhgKAASfQKQBQCIAeAMzADtF0IxwAnAXgHcALAS0XgD5sxgBnfAEoMWPgAdkEeCMyhIUAFzt4AWz4ysmaiACuKsn3QBGDZoCCAbXwB9W9fwBddKawAhK3ftON8MgBNUDWx0GBhOdGU1QM0+RABPEHgcdGJWEBAFAGIABly8oA==="},{}),null,16)])]),_:1},16)}}};export{U as default};
