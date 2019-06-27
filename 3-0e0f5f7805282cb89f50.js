(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{175:function(e,n,t){"use strict";var a=t(0),i=t.n(a),d=t(5),r=t.n(d),c=t(41),s=t.n(c);t.d(n,"a",function(){return s.a});t(207),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},201:function(e,n,t){"use strict";var a=t(242),i=t.n(a),d=t(172);function r(){var e=i()(["\n  html {\n    font-size: 15px;\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6{\n    margin-top: 0;\n    font-family: 'Poppins',sans-serif;\n  }\n\n  body {\n    font-family: 'Fira Sans',sans-serif;\n    margin: 0;\n    padding: 0;\n    font-size: 15px;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  p{\n    line-height: 2;\n    margin: 0 0 1.7em 0;\n  }\n  \n  input, textarea, select, button{font-family: 'Fira Sans',sans-serif;}\n\n  ul,ol {\n    margin: 0;\n    padding: 0;\n  }\n\n  a {\n    text-decoration: none;\n    box-shadow: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  blockquote{\n    font-family: 'Poppins',sans-serif;\n    font-weight: 500;\n  }\n\n  :not(pre) > code[class*=\"language-\"], pre[class*=\"language-\"] {\n    background: #f5f5f5;\n  }\n\n  pre[class*=\"language-\"] {\n    padding: 1.5em;\n    margin: 2em 0;\n    overflow: auto;\n  }\n\n  table {\n    display: block;\n    overflow: auto;\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    margin-bottom: 2.7em;\n    line-height: 1.6;\n  }\n\n  table tr {\n    background-color: #fff;\n    border-top: 1px solid #c6cbd1;\n  }\n\n  table tr:nth-child(2n) {\n    background-color: #f6f8fa;\n  }\n\n  table th{\n    font-weight: 500;\n  }\n\n  table td,\n  table th {\n    border: 1px solid #dfe2e5;\n    padding: .4em 1em;\n  }\n\n  .nav-sticky{\n    .header {\n      box-shadow: 0 0 15px rgba(0,0,0,.08);\n      .navbar{\n        @media (min-width: 1400px) {\n          padding-top: 25px;\n          padding-bottom: 25px;\n        }\n        @media (min-width: 1200px) {\n          padding-top: 20px;\n          padding-bottom: 20px;\n        }\n      }\n    }\n    \n  }\n"]);return r=function(){return e},e}var c=Object(d.b)(r());n.a=c},202:function(e,n,t){"use strict";var a=t(243),i=t(0),d=t.n(i),r=t(305),c=t.n(r),s=function(e){var n=e.description,t=e.lang,i=e.meta,r=e.keywords,s=e.title,o=a.data.site,l=n||o.siteMetadata.description;return d.a.createElement(c.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})};s.defaultProps={lang:"en",meta:[],keywords:[],description:""},n.a=s},203:function(e,n,t){"use strict";t(40);var a=t(96),i=t.n(a),d=t(0),r=t.n(d),c=t(175),s=t(174),o={isOpen:!1};function l(e,n){switch(n.type){case"TOGGLE":return Object.assign({},e,{isOpen:!e.isOpen});default:return e}}var p=r.a.createContext({}),f=function(e){var n=e.children,t=Object(d.useReducer)(l,o),a=t[0],i=t[1];return r.a.createElement(p.Provider,{value:{state:a,dispatch:i}},n)},m=t(172),w=t(173),g=m.c.header.withConfig({displayName:"Navbarstyle__HeaderWrapper",componentId:"sc-1o9pd7q-0"})(["\n  position: relative;\n  z-index: 99999;\n  transition: 0.25s ease-in-out;\n"]),h=m.c.div.withConfig({displayName:"Navbarstyle__NavbarWrapper",componentId:"sc-1o9pd7q-1"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n  padding: 30px 75px;\n  background-color: #fff;\n  transition: 0.25s ease-in-out;\n  @media (max-width: 1400px) {\n    padding: 25px 45px;\n  }\n  @media (max-width: 990px) {\n    padding: 15px 25px;\n  }\n  @media (max-width: 575px) {\n    padding: 3px 15px;\n  }\n"],Object(w.a)("borderColor","#DBDBDB")),b=m.c.div.withConfig({displayName:"Navbarstyle__Logo",componentId:"sc-1o9pd7q-2"})(["\n  margin-right: 50px;\n  flex-shrink: 0;\n  @media (max-width: 990px) {\n    margin: 0 25px;\n  }\n  @media (max-width: 575px) {\n    max-width: 90px;\n  }\n  img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n  }\n"]),x=m.c.div.withConfig({displayName:"Navbarstyle__MenuWrapper",componentId:"sc-1o9pd7q-3"})(["\n  display: flex;\n  flex-grow: 1;\n  @media (max-width: 990px) {\n    display: none;\n  }\n"]),u=m.c.ul.withConfig({displayName:"Navbarstyle__MenuItemWrapper",componentId:"sc-1o9pd7q-4"})(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"]),v=m.c.li.withConfig({displayName:"Navbarstyle__MenuItem",componentId:"sc-1o9pd7q-5"})(["\n  margin: 0 20px;\n  list-style: none;\n  a {\n    padding: 5px 10px;\n    white-space: nowrap;\n    font-size: ","px;\n    line-height: ",";\n    font-weight: ",";\n    color: ",";\n    transition: 0.15s ease-in-out;\n\n    &:hover {\n      color: ",";\n    }\n    &.active-link {\n      color: ",";\n      font-weight: ",";\n    }\n  }\n"],Object(w.a)("fontSizes.3","15"),Object(w.a)("lineHeights.normal","1"),Object(w.a)("fontWeights.3","400"),Object(w.a)("colors.lightTextColor","#757575"),Object(w.a)("colors.textColor","#292929"),Object(w.a)("colors.textColor","#292929"),Object(w.a)("fontWeights.4","500")),y=m.c.button.withConfig({displayName:"Navbarstyle__NavSearchButton",componentId:"sc-1o9pd7q-6"})(["\n  background: transparent;\n  border: 0;\n  outline: 0;\n  padding: 5px 0 5px 10px;\n  margin-left: 15px;\n  cursor: pointer;\n  @media (max-width: 990px) {\n    margin-left: 0;\n  }\n  svg {\n    display: block;\n  }\n"]),j=m.c.button.withConfig({displayName:"Navbarstyle__SearchCloseButton",componentId:"sc-1o9pd7q-7"})(["\n  width: 54px;\n  height: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: 0;\n  outline: none;\n  position: relative;\n  cursor: pointer;\n  z-index: 1;\n  padding: 0;\n  color: #757575;\n  font-size: 45px;\n  margin-left: -54px;\n  @media (max-width: 990px) {\n    font-size: 35px;\n  }\n  @media (max-width: 767px) {\n    font-size: 30px;\n  }\n  svg {\n    display: block;\n  }\n"]),E=m.c.div.withConfig({displayName:"Navbarstyle__NavSearchWrapper",componentId:"sc-1o9pd7q-8"})(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fafafa;\n  height: 0;\n  visibility: hidden;\n  transition: 0.35s ease-in-out;\n\n  > * {\n    opacity: 0;\n    transition: 0.35s ease-in-out;\n  }\n\n  &.expand {\n    height: 145px;\n    visibility: visible;\n    @media (max-width: 1199px) {\n      height: 120px;\n    }\n    @media (max-width: 990px) {\n      height: 100px;\n    }\n    @media (max-width: 767px) {\n      height: 75px;\n    }\n    .nav-search-input,\n    > * {\n      opacity: 1;\n    }\n  }\n\n  .nav-search-input {\n    width: 870px;\n    transition: 0.35s ease-in-out;\n\n    .inner-wrap {\n      .search-icon {\n        width: 70px;\n      }\n      input,\n      .icon-left {\n        height: 54px;\n        padding: 0 70px;\n        border-radius: 3px;\n        ::placeholder {\n          color: #757575;\n        }\n      }\n    }\n  }\n"]),S=m.c.div.withConfig({displayName:"Navbarstyle__NavSearchFromWrapper",componentId:"sc-1o9pd7q-9"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  @media (min-width: 990px) {\n    width: 900px;\n  }\n  @media (min-width: 1200px) {\n    width: 1050px;\n  }\n  @media (min-width: 1400px) {\n    width: 1170px;\n  }\n  @media (max-width: 990px) {\n    padding: 0 45px;\n  }\n  @media (max-width: 767px) {\n    padding: 0 25px;\n  }\n"]),N=m.c.div.withConfig({displayName:"Navbarstyle__MobileMenuWrapper",componentId:"sc-1o9pd7q-10"})(["\n  @media (min-width: 991px) {\n    display: none;\n  }\n"]),C=m.c.div.withConfig({displayName:"Navbarstyle__DrawerContentWrapper",componentId:"sc-1o9pd7q-11"})(['\n  .mobile-menu {\n    display: block;\n    padding-top: 60px;\n    li {\n      margin: 0 0 38px 0;\n      a {\n        display: block;\n        position: relative;\n        padding-left: 30px;\n        padding-right: 30px;\n        &.active-link {\n          &:before {\n            opacity: 1;\n          }\n        }\n        &:before {\n          content: "";\n          position: absolute;\n          width: 3px;\n          height: 18px;\n          top: 50%;\n          left: 0;\n          opacity: 0;\n          background: ',";\n          transform: translateY(-50%);\n        }\n      }\n    }\n  }\n"],Object(w.a)("colors.textColor","#292929")),k=m.c.div.withConfig({displayName:"Navbarstyle__DrawerHead",componentId:"sc-1o9pd7q-12"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #dbdbdb;\n  padding: 3px 0;\n"]),I=m.c.div.withConfig({displayName:"Navbarstyle__DrawerLogo",componentId:"sc-1o9pd7q-13"})(["\n  max-width: 110px;\n  padding-left: 30px;\n  img {\n    max-width: 100%;\n  }\n"]),z=m.c.div.withConfig({displayName:"Navbarstyle__DrawerClose",componentId:"sc-1o9pd7q-14"})(["\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 23px;\n  padding: 0 15px;\n"]),_=m.c.div.withConfig({displayName:"Navbarstyle__HamburgerIcon",componentId:"sc-1o9pd7q-15"})(["\n  width: 30px;\n  height: 45px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  span {\n    display: block;\n    height: 2px;\n    background-color: ",";\n    margin-bottom: 5px;\n    &:last-child {\n      margin-bottom: 0;\n      width: 20px;\n    }\n  }\n"],Object(w.a)("colors.textColor","#292929")),O=g,A=function(e){var n=e.items,t=e.className,a=i()(e,["items","className"]),d=["menu"];return t&&d.push(t),r.a.createElement(u,Object.assign({className:d.join(" ")},a),n.map(function(e,n){return r.a.createElement(v,{key:n},e.external?r.a.createElement("a",{href:e.url},e.label):r.a.createElement(c.a,{to:e.url,activeClassName:"active-link"},e.label))}))},R=t(311),T=(t(163),function(e){var n=e.className,t=e.children,a=e.closeButton,c=e.closeButtonStyle,s=e.drawerHandler,o=e.toggleHandler,l=e.open,p=e.width,f=e.placement,m=i()(e,["className","children","closeButton","closeButtonStyle","drawerHandler","toggleHandler","open","width","placement"]),w=["drawer"];return n&&w.push(n),r.a.createElement(d.Fragment,null,r.a.createElement(R.a,Object.assign({open:l,onMaskClick:o,className:w.join(" "),width:p,placement:f,handler:!1,level:null,duration:".4s"},m),a&&r.a.createElement("div",{className:"drawer__close",onClick:o,style:c},a),t),r.a.createElement("div",{className:"drawer__handler",style:{display:"inline-block"},onClick:o},s))});T.defaultProps={width:"300px",placement:"left"};var M=T,W=t(300),D=function(e){var n=e.items,t=e.logo,a=i()(e,["items","logo"]),s=Object(d.useContext)(p),o=s.state,l=s.dispatch,f=function(){l({type:"TOGGLE"})};return r.a.createElement(N,a,r.a.createElement(M,{width:"285px",placement:"left",drawerHandler:r.a.createElement(_,null,r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),open:o.isOpen,toggleHandler:f},r.a.createElement(C,null,r.a.createElement(k,null,r.a.createElement(I,null,r.a.createElement(c.a,{to:"/"},r.a.createElement("img",{src:t,alt:"logo"}))),r.a.createElement(z,{onClick:f},r.a.createElement(W.a,null))),r.a.createElement(A,{items:n,className:"mobile-menu"}))))},L=(t(99),t(240)),H={totalData:[],search:[],searchResults:[],isLoading:!0,isError:!1,searchQuery:""};function V(e,n){switch(n.type){case"SET_DATA":return Object.assign({},e,{totalData:n.payload});case"SET_SEARCH":return Object.assign({},e,{search:n.payload,isLoading:!1});case"SET_SEARCH_QUERY":return Object.assign({},e,{searchQuery:n.payload.searchQuery,searchResults:n.payload.searchResults});default:return e}}var q=t(301),Q=t(302),G=function(e){var n=new Q.Search("title");return n.indexStrategy=new Q.PrefixIndexStrategy,n.sanitizer=new Q.LowerCaseSanitizer,n.searchIndex=new Q.TfIdfSearchIndex("title"),n.addIndex("title"),n.addIndex("description"),n.addIndex("tags"),n.addDocuments(e),n},B=t(177),P=t.n(B),U=m.c.div.withConfig({displayName:"PostListstyle__PostListWrapper",componentId:"sc-13jz7ro-0"})(["\n  a {\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding: 30px 60px 30px 30px;\n    @media (max-width: 990px) {\n      padding: 25px;\n    }\n    @media (max-width: 575px) {\n      padding: 15px 20px;\n    }\n  }\n"]),F=m.c.div.withConfig({displayName:"PostListstyle__PostPreview",componentId:"sc-13jz7ro-1"})(["\n  flex: 0 0 62px;\n  flex-shrink: 0;\n  margin-right: 30px;\n  border-radius: 3px;\n  overflow: hidden;\n  @media (max-width: 990px) {\n    flex: 0 0 52px;\n    margin-right: 20px;\n  }\n"]),K=m.c.div.withConfig({displayName:"PostListstyle__PostDetails",componentId:"sc-13jz7ro-2"})(["\n  flex-grow: 1;\n"]),X=m.c.h1.withConfig({displayName:"PostListstyle__PostTitle",componentId:"sc-13jz7ro-3"})(["\n  font-size: 21px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 12px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 990px) {\n    font-size: 16px;\n    margin-bottom: 10px;\n  }\n  @media (max-width: 575px) {\n    font-size: 14px;\n    margin-bottom: 8px;\n  }\n"],Object(w.a)("colors.textColor","#292929"),Object(w.a)("colors.textColor","#292929")),Y=m.c.div.withConfig({displayName:"PostListstyle__PostMeta",componentId:"sc-13jz7ro-4"})(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]),J=m.c.div.withConfig({displayName:"PostListstyle__PostDate",componentId:"sc-13jz7ro-5"})(["\n  font-size: 15px;\n  font-weight: normal;\n  color: ",";\n  @media (max-width: 575px) {\n    font-size: 13px;\n  }\n"],Object(w.a)("colors.textColor","#292929")),Z=m.c.div.withConfig({displayName:"PostListstyle__PostTags",componentId:"sc-13jz7ro-6"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  a,\n  span {\n    display: block;\n    margin-left: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-left: 25px;\n    }\n  }\n"],Object(w.a)("primary","#D10068")),$=function(e){var n=e.image,t=e.title,a=e.url,r=e.date,s=e.tags,o=e.className,l=e.imageType,p=i()(e,["image","title","url","date","tags","className","imageType"]),f=["post_list"];return o&&f.push(o),d.createElement(U,Object.assign({className:f.join(" ")},p),d.createElement(c.a,{to:a},null==n?null:d.createElement(F,{className:"post_preview"},"fluid"===l?d.createElement(P.a,{fluid:n,alt:"post preview"}):d.createElement(P.a,{fixed:n,alt:"post preview"})),d.createElement(K,null,d.createElement(X,{className:"post_title"},t),d.createElement(Y,null,r&&d.createElement(J,{dangerouslySetInnerHTML:{__html:r},className:"post_date"}),null==s?null:d.createElement(Z,{className:"post_tags"},s.map(function(e,n){return d.createElement("span",{key:n},"#"+e)}))))))};$.defaultProps={imageType:"fluid"};var ee=$,ne=m.c.div.withConfig({displayName:"SearchContainerstyle__SearchWrapper",componentId:"sc-3skitx-0"})(["\n  display: block;\n  flex-grow: 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n"]),te=m.c.form.withConfig({displayName:"SearchContainerstyle__SearchForm",componentId:"sc-3skitx-1"})(["\n  width: calc(100% - 60px);\n  input {\n    width: 100%;\n    font-size: 21px;\n    font-weight: normal;\n    color: ",";\n    border: 0;\n    background: transparent;\n    &:focus {\n      outline: none;\n    }\n    @media (max-width: 990px) {\n      font-size: 18px;\n    }\n    @media (max-width: 767px) {\n      font-size: 15px;\n    }\n  }\n"],Object(w.a)("colors.textColor","#292929")),ae=m.c.div.withConfig({displayName:"SearchContainerstyle__SearchResult",componentId:"sc-3skitx-2"})(["\n  position: absolute;\n  width: 100%;\n  background: #fff;\n  top: 100%;\n  left: 0;\n  display: block;\n  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.08);\n\n  .post_list {\n    border-bottom: 1px solid #f3f3f3;\n    &:last-child {\n      border: 0;\n    }\n  }\n\n  .search-scrollbar {\n    @media (max-height: 700px) {\n      max-height: 400px !important;\n    }\n    > div {\n      @media (max-height: 700px) {\n        max-height: 400px !important;\n      }\n    }\n  }\n"]),ie=(m.c.div.withConfig({displayName:"SearchContainerstyle__SearchResultContainer",componentId:"sc-3skitx-3"})(["\n  max-height: 405px;\n  overflow-x: hidden;\n"]),m.c.div.withConfig({displayName:"SearchContainerstyle__NoResult",componentId:"sc-3skitx-4"})(["\n  padding: 30px;\n  font-size: 30px;\n  text-align: center;\n  color: #cccccc;\n  @media (max-width: 990px) {\n    font-size: 24px;\n    padding: 25px;\n  }\n  @media (max-width: 767px) {\n    font-size: 18px;\n    padding: 20px;\n  }\n"]));var de=function(){var e=Object(d.useReducer)(V,H),n=e[0],t=e[1],a=L.data.allMarkdownRemark.edges;Object(d.useEffect)(function(){if(0!==a.length){var e=[];a.forEach(function(n){var t=n.node,a=Object.assign({},t.frontmatter,{slug:t.fields.slug});e.push(a)}),t({type:"SET_DATA",payload:e});var n=G(e);n&&t({type:"SET_SEARCH",payload:n})}},[a]),n.totalData;var i=n.searchResults,c=n.searchQuery,s=i;return r.a.createElement(ne,null,r.a.createElement(te,{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{id:"Search",value:c,onChange:function(e){var a=n.search.search(e.target.value);t({type:"SET_SEARCH_QUERY",payload:{searchQuery:e.target.value,searchResults:a}})},placeholder:"Enter Your Search Topic"})),r.a.createElement(ae,null,0==s.length&&""!==c?r.a.createElement(ie,null,"No result found"):"",0!==s.length&&r.a.createElement(q.Scrollbars,{autoHeight:!0,autoHeightMax:505,className:"search-scrollbar"},s.map(function(e){return r.a.createElement(ee,{key:e.slug,title:e.title,url:e.slug,image:null==e.cover?null:e.cover.childImageSharp.fluid,date:e.date,tags:e.tags})}))))},re=t(241),ce=t.n(re),se=[{label:"Home",url:"/"},{label:"About",url:"/about"}];n.a=function(e){var n=e.className,t=i()(e,["className"]),a=Object(d.useState)({toggle:!1,search:""}),o=a[0],l=a[1],p=function(){l(Object.assign({},o,{toggle:!o.toggle}))},m=["header"];return n&&m.push(n),r.a.createElement(O,Object.assign({className:m.join(" ")},t),r.a.createElement(h,{className:"navbar"},r.a.createElement(f,null,r.a.createElement(D,{items:se,logo:ce.a})),r.a.createElement(b,null,r.a.createElement(c.a,{to:"/"},r.a.createElement("img",{src:ce.a,alt:"logo"}))),r.a.createElement(x,null,r.a.createElement(A,{items:se})),r.a.createElement(y,{type:"button","aria-label":"search",onClick:p},r.a.createElement(s.d,{size:"23px"}))),r.a.createElement(E,{className:!0===o.toggle?"expand":""},r.a.createElement(S,null,r.a.createElement(de,null),r.a.createElement(j,{type:"submit","aria-label":"close",onClick:p},r.a.createElement(s.b,null)))))}},204:function(e,n,t){"use strict";var a=t(96),i=t.n(a),d=t(0),r=t(172),c=t(173),s=r.c.footer.withConfig({displayName:"Footerstyle__FooterWrapper",componentId:"pml96q-0"})(["\n  position: relative;\n  overflow: hidden;\n  color: ",";\n  font-size: ","px;\n  padding: 30px 15px;\n  text-align: center;\n  border-top: 1px solid #f3f3f3;\n  margin-top: 120px;\n  @media (max-width: 1200px) {\n    margin-top: 90px;\n  }\n  @media (max-width: 990px) {\n    margin-top: 90px;\n  }\n  @media (max-width: 575px) {\n    margin-top: 60px;\n    padding: 22px 15px;\n  }\n\n  a {\n    color: ",";\n    font-size: ","px;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: ",";\n    }\n  }\n"],Object(c.a)("colors.textColor","#292929"),Object(c.a)("fontSizes.3","15"),Object(c.a)("colors.textColor","#292929"),Object(c.a)("fontSizes.3","15"),Object(c.a)("colors.primary","#D10068"));n.a=function(e){var n=e.children,t=i()(e,["children"]);return d.createElement(s,t,n)}},207:function(e,n,t){var a;e.exports=(a=t(232))&&a.default||a},232:function(e,n,t){"use strict";t.r(n);t(40);var a=t(0),i=t.n(a),d=t(5),r=t.n(d),c=t(66),s=function(e){var n=e.location,t=e.pageResources;return t?i.a.createElement(c.a,Object.assign({location:n,pageResources:t},t.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=s},240:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/Installing-Multiple-Versions/"},frontmatter:{date:"April 16, 2019",title:"Installing Multiple Versions of Node.js Using NVM",description:null,tags:["javaScript","tips","node"],cover:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3e%3cpath d='M0 31v31h63V0H0v31m47-4l-2 1h-1l-2-1c-2 0-3 1-3 2l-3 1c-2 0-2 0 0-2 1-1 1-1-1-1s-3 1-3 4c0 5 3 6 6 3 1-1 2-2 4-1v1l-3 1 1 1h2l2-1 1-2c0 2 3 3 5 2 3-3 1-9-3-8' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg",srcSet:"/static/756dd00204b0e473f73c523440dea61f/4025f/preview.jpg 16w,\n/static/756dd00204b0e473f73c523440dea61f/250ff/preview.jpg 31w,\n/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg 62w,\n/static/756dd00204b0e473f73c523440dea61f/f9d5d/preview.jpg 93w,\n/static/756dd00204b0e473f73c523440dea61f/7e3dc/preview.jpg 124w,\n/static/756dd00204b0e473f73c523440dea61f/57698/preview.jpg 1170w",srcWebp:"/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp",srcSetWebp:"/static/756dd00204b0e473f73c523440dea61f/b0654/preview.webp 16w,\n/static/756dd00204b0e473f73c523440dea61f/529fc/preview.webp 31w,\n/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp 62w,\n/static/756dd00204b0e473f73c523440dea61f/90f68/preview.webp 93w,\n/static/756dd00204b0e473f73c523440dea61f/bbab0/preview.webp 124w,\n/static/756dd00204b0e473f73c523440dea61f/f0d12/preview.webp 1170w",sizes:"(max-width: 62px) 100vw, 62px"}}}}}},{node:{fields:{slug:"/an-example-can-be/"},frontmatter:{date:"March 6, 2019",title:"An example can be illustrative",description:null,tags:["markdown","test","tips"],cover:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3e%3cpath d='M0 31v31h63V0H0v31m47-4l-2 1h-1l-2-1c-2 0-3 1-3 2l-3 1c-2 0-2 0 0-2 1-1 1-1-1-1s-3 1-3 4c0 5 3 6 6 3 1-1 2-2 4-1v1l-3 1 1 1h2l2-1 1-2c0 2 3 3 5 2 3-3 1-9-3-8' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg",srcSet:"/static/756dd00204b0e473f73c523440dea61f/4025f/preview.jpg 16w,\n/static/756dd00204b0e473f73c523440dea61f/250ff/preview.jpg 31w,\n/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg 62w,\n/static/756dd00204b0e473f73c523440dea61f/f9d5d/preview.jpg 93w,\n/static/756dd00204b0e473f73c523440dea61f/7e3dc/preview.jpg 124w,\n/static/756dd00204b0e473f73c523440dea61f/57698/preview.jpg 1170w",srcWebp:"/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp",srcSetWebp:"/static/756dd00204b0e473f73c523440dea61f/b0654/preview.webp 16w,\n/static/756dd00204b0e473f73c523440dea61f/529fc/preview.webp 31w,\n/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp 62w,\n/static/756dd00204b0e473f73c523440dea61f/90f68/preview.webp 93w,\n/static/756dd00204b0e473f73c523440dea61f/bbab0/preview.webp 124w,\n/static/756dd00204b0e473f73c523440dea61f/f0d12/preview.webp 1170w",sizes:"(max-width: 62px) 100vw, 62px"}}}}}},{node:{fields:{slug:"/markdown-test/"},frontmatter:{date:"April 22, 2019",title:"This is markdown unity test!",description:null,tags:["markdown","test","unity"],cover:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3e%3cpath d='M0 31v31h63V0H0v31m47-4l-2 1h-1l-2-1c-2 0-3 1-3 2l-3 1c-2 0-2 0 0-2 1-1 1-1-1-1s-3 1-3 4c0 5 3 6 6 3 1-1 2-2 4-1v1l-3 1 1 1h2l2-1 1-2c0 2 3 3 5 2 3-3 1-9-3-8' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/756dd00204b0e473f73c523440dea61f/ef19d/preview-1.jpg",srcSet:"/static/756dd00204b0e473f73c523440dea61f/4025f/preview-1.jpg 16w,\n/static/756dd00204b0e473f73c523440dea61f/250ff/preview-1.jpg 31w,\n/static/756dd00204b0e473f73c523440dea61f/ef19d/preview-1.jpg 62w,\n/static/756dd00204b0e473f73c523440dea61f/f9d5d/preview-1.jpg 93w,\n/static/756dd00204b0e473f73c523440dea61f/7e3dc/preview-1.jpg 124w,\n/static/756dd00204b0e473f73c523440dea61f/57698/preview-1.jpg 1170w",srcWebp:"/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview-1.webp",srcSetWebp:"/static/756dd00204b0e473f73c523440dea61f/b0654/preview-1.webp 16w,\n/static/756dd00204b0e473f73c523440dea61f/529fc/preview-1.webp 31w,\n/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview-1.webp 62w,\n/static/756dd00204b0e473f73c523440dea61f/90f68/preview-1.webp 93w,\n/static/756dd00204b0e473f73c523440dea61f/bbab0/preview-1.webp 124w,\n/static/756dd00204b0e473f73c523440dea61f/f0d12/preview-1.webp 1170w",sizes:"(max-width: 62px) 100vw, 62px"}}}}}},{node:{fields:{slug:"/role-of-libraries/"},frontmatter:{date:"March 5, 2019",title:"Role of libraries in a social world",description:null,tags:["test","hooks","node"],cover:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3e%3cpath d='M0 31v31h63V0H0v31m47-4l-2 1h-1l-2-1c-2 0-3 1-3 2l-3 1c-2 0-2 0 0-2 1-1 1-1-1-1s-3 1-3 4c0 5 3 6 6 3 1-1 2-2 4-1v1l-3 1 1 1h2l2-1 1-2c0 2 3 3 5 2 3-3 1-9-3-8' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg",srcSet:"/static/756dd00204b0e473f73c523440dea61f/4025f/preview.jpg 16w,\n/static/756dd00204b0e473f73c523440dea61f/250ff/preview.jpg 31w,\n/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg 62w,\n/static/756dd00204b0e473f73c523440dea61f/f9d5d/preview.jpg 93w,\n/static/756dd00204b0e473f73c523440dea61f/7e3dc/preview.jpg 124w,\n/static/756dd00204b0e473f73c523440dea61f/57698/preview.jpg 1170w",srcWebp:"/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp",srcSetWebp:"/static/756dd00204b0e473f73c523440dea61f/b0654/preview.webp 16w,\n/static/756dd00204b0e473f73c523440dea61f/529fc/preview.webp 31w,\n/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp 62w,\n/static/756dd00204b0e473f73c523440dea61f/90f68/preview.webp 93w,\n/static/756dd00204b0e473f73c523440dea61f/bbab0/preview.webp 124w,\n/static/756dd00204b0e473f73c523440dea61f/f0d12/preview.webp 1170w",sizes:"(max-width: 62px) 100vw, 62px"}}}}}},{node:{fields:{slug:"/tech-companies-can-do-more/"},frontmatter:{date:"March 5, 2019",title:"Technology companies can do more",description:null,tags:["unity","hooks","react"],cover:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3e%3cpath d='M0 31v31h63V0H0v31m47-4l-2 1h-1l-2-1c-2 0-3 1-3 2l-3 1c-2 0-2 0 0-2 1-1 1-1-1-1s-3 1-3 4c0 5 3 6 6 3 1-1 2-2 4-1v1l-3 1 1 1h2l2-1 1-2c0 2 3 3 5 2 3-3 1-9-3-8' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg",srcSet:"/static/756dd00204b0e473f73c523440dea61f/4025f/preview.jpg 16w,\n/static/756dd00204b0e473f73c523440dea61f/250ff/preview.jpg 31w,\n/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg 62w,\n/static/756dd00204b0e473f73c523440dea61f/f9d5d/preview.jpg 93w,\n/static/756dd00204b0e473f73c523440dea61f/7e3dc/preview.jpg 124w,\n/static/756dd00204b0e473f73c523440dea61f/57698/preview.jpg 1170w",srcWebp:"/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp",srcSetWebp:"/static/756dd00204b0e473f73c523440dea61f/b0654/preview.webp 16w,\n/static/756dd00204b0e473f73c523440dea61f/529fc/preview.webp 31w,\n/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp 62w,\n/static/756dd00204b0e473f73c523440dea61f/90f68/preview.webp 93w,\n/static/756dd00204b0e473f73c523440dea61f/bbab0/preview.webp 124w,\n/static/756dd00204b0e473f73c523440dea61f/f0d12/preview.webp 1170w",sizes:"(max-width: 62px) 100vw, 62px"}}}}}},{node:{fields:{slug:"can-i-use-hooks-today"},frontmatter:{date:"March 20, 2019",title:"Can I Use Hooks Today?",description:"Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage’s HTML, to be run client-side by a JavaScript engine in the user’s web browser.",tags:["javascript","hooks","test"],cover:{childImageSharp:{fluid:{tracedSVG:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='62' height='62'%3e%3cpath d='M0 31v31h63V0H0v31m47-4l-2 1h-1l-2-1c-2 0-3 1-3 2l-3 1c-2 0-2 0 0-2 1-1 1-1-1-1s-3 1-3 4c0 5 3 6 6 3 1-1 2-2 4-1v1l-3 1 1 1h2l2-1 1-2c0 2 3 3 5 2 3-3 1-9-3-8' fill='%23d3d3d3' fill-rule='evenodd'/%3e%3c/svg%3e",aspectRatio:1,src:"/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg",srcSet:"/static/756dd00204b0e473f73c523440dea61f/4025f/preview.jpg 16w,\n/static/756dd00204b0e473f73c523440dea61f/250ff/preview.jpg 31w,\n/static/756dd00204b0e473f73c523440dea61f/ef19d/preview.jpg 62w,\n/static/756dd00204b0e473f73c523440dea61f/f9d5d/preview.jpg 93w,\n/static/756dd00204b0e473f73c523440dea61f/7e3dc/preview.jpg 124w,\n/static/756dd00204b0e473f73c523440dea61f/57698/preview.jpg 1170w",srcWebp:"/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp",srcSetWebp:"/static/756dd00204b0e473f73c523440dea61f/b0654/preview.webp 16w,\n/static/756dd00204b0e473f73c523440dea61f/529fc/preview.webp 31w,\n/static/756dd00204b0e473f73c523440dea61f/4fd0e/preview.webp 62w,\n/static/756dd00204b0e473f73c523440dea61f/90f68/preview.webp 93w,\n/static/756dd00204b0e473f73c523440dea61f/bbab0/preview.webp 124w,\n/static/756dd00204b0e473f73c523440dea61f/f0d12/preview.webp 1170w",sizes:"(max-width: 62px) 100vw, 62px"}}}}}}]}}}},241:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAfCAYAAADuiY/xAAAACXBIWXMAAAsSAAALEgHS3X78AAAF+0lEQVR4nO1cS3LiSBBNObw3fQLobS0wNwCfYOgTGC9ZNX2CUZ/AeMVy8AkGn6DxDYBFrfEN5BNoIoknR7nIlEoCbHnQi1B0WJRK9XmVn1eljtI0JQnGmCER8dUhoj6KrIloS0RLIlpYa7fiww122ERjHruRMBrzbjrLHbtNNB5h7F1su+lsfqrR3UTjARH98W4/d9PZoEw9l/4NY0yPO01E10L5a1x/EdG9MebBWjsp3frzAZPib6G3SyzOPIycxZzhGXNTa7wjlTGGOzIloqvARv80xrSstdJqzOr0WZ5Ya1dnSrKzwBupYKHKECrDrTFmZa2dKr/vmVMiKmVOG3wtXDitrUKoDOwKW83cN6CMVMaYjuC/Ga9E9IuIvltrI/6XiJ6Uuob+DVi/BmeGzP1pkz+x1r4FhpztIe7aelbtRXu+IdT5IZdULqGce4kxJkZctCctwOpNYLnaQrUdPM/YSu/w6ul5VpRjMg70p3mSBsjvp+RzLIwB6u2hDTHuSbHeQksscp7htiVa246JTTSOher2JAtFolh209kypDl4nufUDXP4HYtuOlu4ZTNSiQNgjJlIATjuaYE5N/xnTvvaTpotpsggnZSKEwjWR+b5QESxMoFSSr5E3bfe/RhjIL1TIw5hDHzpZc0kVcqfAqGShTQeWdk8tDbReAEZyQfXd7uJxqxfDjMiXxZUfI8Vv4R1WJ1aDjDGLJXOS2DyDthiBFoGiQQ7cL+MMc/Cu/scG/r9Rrwo1aUtNhe9TTQuKlOXxOdaGzOvzIrF3m46S3akwoC+KO7qXaXGGHIszOKYZt4YMy9BKLd9i0CZomhwYkECIbhhX4uT4sUXzZ17uA8o89Vwlc2DKymUCap54v9hdgriZiWgHt8tBbcHFvUgWGuXWDA+bhHj7QD5RGpr7dXuE6PPWz1vpLLWMsvuSr6TLdsfb0LZTdzgehSeWTu/u0TWSM11fIOk8Y2IfivlyiyKV9T7WyCRFg+59UsEfg10fV8R3Le7bjqL+CqQlkbvtmnYdBtjEgyO5Ao1TDkW4swK7nAXoylWLIFF8CEFgk/uFhDqjuGC/QD1mq1JwCb3I6QS0W1z25TYasRBPp6TCHzUUKBmGLkZHgLy4SYaS/HvYG9DGRZrgVMKPcQqvQK1/QorvJILyhFJNasxVbKeTsFG7Wseobz3+rEV93GCREJacGUyvrWWcTsoGvOPwosvGTiYCqRqS6cUOF7oZORy7ndAsFgZ1D1FvQTETEfLNKGVVXnPMsSa5FkrRdN7KnkMaFKkDylW4DOQ1y9xLC9BooFzXUMhfyeUYdA4EGUXuRWIdfRVhRMQx3QpZeQQyVq1lQX1f42lKuECK+9faD5Zyt0uyOo0c1gV2mSL1u8j9hQR960Diq6VGPEz8c4gbKJxK2crrgh9PC9B5MhFzoDM3TQ6Ayyblv1UAqyRtH8Y+6cf8LeYup9gckMsUB2tlD8/wwM9yV4fN9G4pyQsz1lM9SjoLm3oUHNkcwnYPlIaGDqhfWyVsHVqOWLhXAi+uQ1bp3zWEckFSfLFQUA2rMWQVELsPCVehflg65JgTAcBom8RbnE0eo4Ya5jDg0VGqlhh8xXcYt5eXgZpxWpBnrT3NwVhpDaEKNCn2m+LIfRKqIPYuVTkmKvAeQtFPyBxYILPd+IngvBDjqk8KK5nEeoW4QKrquJ3p/oIA5ZIcs11ETvr5H5Zz0pcRX0ORb1sbPSoffyQIxSKcFT9Mm24O6ULQgwnub9aiJ2QJrRdBhdVY96XwGfvMj3L3fvLiNULjE84M/qR99EDVSCr0wZpD84F/37zATGNtig+8nhLLrrpLMYJXW2MfykWbS8RE7BFXKbVvZsH99OxvO/+Wo6a7iKBiFj6CIwgU6zyVrsjuLqdTz7ym0NsW/lxHoudh4i9JwO+3cvmbBV6CC8EqDubwxXq35sHlVQN3k6PSkH6TQ21qdrg4ou087Mgubg6ip21QkMqBXDVzZZMBTSk0nHIyc6zRkMqAUgQJEGxIVQA9o6+NHjDjTAUzf8BUQQi+g/XbXt710snCAAAAABJRU5ErkJggg=="},243:function(e){e.exports={data:{site:{siteMetadata:{title:"StoryHub",description:"A Gatsby Blog",author:"Monnisa"}}}}}}]);
//# sourceMappingURL=3-0e0f5f7805282cb89f50.js.map