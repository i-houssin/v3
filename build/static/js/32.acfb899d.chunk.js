(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[32],{1094:function(e,t,a){"use strict";a.r(t);var r=a(3),o=a(44),n=a(469),i=a(925),c=a(929),d=a(46),s=a(32),l=a(114),b=a(1),u=[{Header:"Client",accessor:"client",minWidth:200,Cell:function(e){var t=e.row.original,a=t.avatar,r=t.name,o=t.position;return Object(b.jsxs)(d.a,{alignItems:"center",children:[Object(b.jsx)(l.a,{src:a,alt:r,sx:{mr:1}}),Object(b.jsxs)(d.a,{flexDirection:"column",children:[Object(b.jsx)(s.f,{color:"text.primary",children:r}),Object(b.jsx)(s.j,{color:"text.disabled",children:o})]})]})}},{Header:"Name",accessor:"name",minWidth:200},{Header:"Date",accessor:"date",minWidth:150},{Header:"Amount",accessor:"amount",minWidth:150,Cell:function(e){var t=e.value;return Object(b.jsxs)(s.h,{children:["$",t]})}},{Header:"Status",accessor:"status",minWidth:130,maxWidth:130,Cell:function(e){var t=e.value;return Object(b.jsx)(s.h,{sx:{backgroundColor:"paid"===t.toLowerCase()?"success.main":"error.main",color:"background.paper",borderRadius:10,padding:".2rem 1rem"},children:t})}}],p=a(463),j=[{date:Object(p.a)(new Date(2021,11,2),"MMM dd, yyyy"),id:"615193a4c7e1363df77b9929",name:"Natalie Dormer",position:"UI Designer",amount:450,avatar:"/static/avatar/001-man.svg",status:"Unpaid"},{date:Object(p.a)(new Date(2021,10,2),"MMM dd, yyyy"),id:"615193bab7b256189c6fe997",name:"Kyle Williams",position:"Developer",amount:280,avatar:"/static/avatar/005-man-1.svg",status:"Unpaid"},{date:Object(p.a)(new Date(2021,10,2),"MMM dd, yyyy"),id:"615193d64696d4665abb8ea5",name:"Alan Mask",position:"Marketer",amount:120,avatar:"/static/avatar/014-man-3.svg",status:"Unpaid"}],m=a(915),h=a(912),x=a(904),g=a(34);t.default=function(){Object(h.a)("Invoice List");var e=Object(o.a)(),t=Object(g.g)(),a=Object(x.a)().t;return Object(b.jsxs)(i.a,{pt:2,pb:4,children:[Object(b.jsxs)(d.a,{justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[Object(b.jsx)(m.a,{placeholder:"Find Invoice"}),Object(b.jsx)(n.a,{variant:"contained",onClick:function(){return t("/dashboard/add-invoice")},sx:Object(r.a)({},e.breakpoints.down(500),{width:"100%",mt:1}),children:a("Add New")})]}),Object(b.jsx)(i.a,{mt:2,children:Object(b.jsx)(c.a,{showFooter:!0,hidePagination:!0,columnShape:u,data:j,rowClick:function(e){return function(){t("/dashboard/invoice-details",{state:e})}}})})]})}},912:function(e,t,a){"use strict";var r=a(184),o=a(0);t.a=function(e){var t=Object(o.useContext)(r.a),a=t.title,n=t.setTitle;return Object(o.useEffect)((function(){return n(e)}),[e,n]),a}},913:function(e,t,a){"use strict";var r=a(15),o=a(183),n=a(1);t.a=function(e){return Object(n.jsxs)(o.a,Object(r.a)(Object(r.a)({viewBox:"0 0 20 20"},e),{},{children:[Object(n.jsx)("path",{d:"M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.84769 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.84769 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.84769 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z",fill:"currentColor"}),Object(n.jsx)("path",{d:"M19.7617 18.6124L15.1005 13.9511C14.7829 13.6335 14.2685 13.6335 13.9509 13.9511C13.6332 14.2684 13.6332 14.7834 13.9509 15.1007L18.6121 19.762C18.7709 19.9208 18.9788 20.0002 19.1869 20.0002C19.3948 20.0002 19.6029 19.9208 19.7617 19.762C20.0794 19.4446 20.0794 18.9297 19.7617 18.6124Z",fill:"currentColor"})]}))}},915:function(e,t,a){"use strict";var r=a(15),o=a(3),n=a(8),i=a(57),c=a(913),d=a(1),s=Object(n.a)(i.c)((function(e){var t=e.theme;return Object(o.a)({height:45,fontSize:13,width:"100%",maxWidth:270,fontWeight:500,padding:"0 1rem",borderRadius:"8px",border:"1px solid ",borderColor:"light"===t.palette.mode?t.palette.secondary[300]:t.palette.divider,color:t.palette.text.primary,backgroundColor:t.palette.background.paper},t.breakpoints.down(500),{maxWidth:"100%"})}));t.a=function(e){return Object(d.jsx)(s,Object(r.a)(Object(r.a)({},e),{},{startAdornment:Object(d.jsx)(c.a,{sx:{fontSize:16,marginRight:1,color:"text.disabled"}})}))}},924:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return u}));var r=a(8),o=a(946),n=a(182),i=a(1077),c=a(57),d=a(913),s=Object(r.a)(o.a)((function(e){var t=e.theme;return"select"===e.selected_row?{backgroundColor:Object(n.a)(t.palette.primary.light,.5),position:"relative","&::after":{top:0,left:0,width:"3px",content:'""',height:"100%",position:"absolute",backgroundColor:t.palette.primary.main}}:{}})),l=Object(r.a)(i.a)((function(e){var t=e.theme;return{"& .MuiPaginationItem-root":{fontSize:12,fontWeight:500,color:t.palette.text.disabled},"& .MuiPaginationItem-page:hover":{borderRadius:20,backgroundColor:"transparent",color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main)},"& .MuiPaginationItem-page.Mui-selected":{borderRadius:20,backgroundColor:"transparent",color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main)},"& .MuiPaginationItem-previousNext":{margin:10,borderRadius:20,color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main),"&:hover":{backgroundColor:"transparent"}}}})),b=Object(r.a)(c.c)((function(e){return{height:40,fontSize:12,maxWidth:450,width:"100%",fontWeight:500,padding:"0.5rem",borderRadius:"4px",backgroundColor:"white",color:e.theme.palette.text.primary}})),u=Object(r.a)(d.a)((function(e){return{fontSize:16,marginLeft:"0.5rem",marginRight:"0.5rem",color:e.theme.palette.primary.main}}))},925:function(e,t,a){"use strict";var r=a(471),o=Object(r.a)();t.a=o},929:function(e,t,a){"use strict";var r=a(15),o=a(66),n=a(1),i=Object(o.a)(Object(n.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt"),c=a(44),d=a(157),s=a(954),l=a(955),b=a(946),u=a(953),p=a(956),j=a(968),m=a(809),h=a(924),x=a(46),g=a(32),f=a(0),O=a(931),C=a(185);t.a=function(e){var t=e.data,a=e.rowClick,o=e.showFooter,v=e.columnShape,y=e.hidePagination,w=Object(c.a)(),k=Object(f.useMemo)((function(){return t}),[t]),M=Object(f.useMemo)((function(){return v}),[v]),W=Object(O.useTable)({columns:M,data:k},O.useSortBy,O.useExpanded,O.usePagination,O.useRowSelect),R=W.getTableProps,S=W.getTableBodyProps,P=W.headerGroups,I=W.prepareRow,L=W.page,z=W.pageOptions,A=W.gotoPage,B="light"===w.palette.mode?"text.secondary":"divider";return Object(n.jsxs)(d.a,{children:[Object(n.jsx)(C.a,{children:Object(n.jsxs)(s.a,Object(r.a)(Object(r.a)({},R()),{},{sx:{borderSpacing:"0 1rem",borderCollapse:"separate"},children:[Object(n.jsx)(l.a,{children:P.map((function(e){return Object(n.jsx)(b.a,Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(n.jsx)(u.a,Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{sx:{paddingY:0,fontSize:13,fontWeight:600,borderBottom:0,color:"text.disabled",width:e.width,minWidth:e.minWidth,maxWidth:e.maxWidth,"&:last-child":{textAlign:"center"}},children:e.render("Header")}))}))}))}))}),Object(n.jsx)(p.a,Object(r.a)(Object(r.a)({},S()),{},{children:L.map((function(e){return I(e),Object(n.jsx)(b.a,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{onClick:a&&a(e.original),sx:{backgroundColor:"background.paper",cursor:a?"pointer":"unset","& td:first-of-type":{borderLeft:"1px solid",borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px",borderColor:B},"& td:last-of-type":{textAlign:"center",borderRight:"1px solid",borderTopRightRadius:"8px",borderBottomRightRadius:"8px",borderColor:B},"&:last-of-type .MuiTableCell-root":{borderBottom:"dark"===w.palette.mode?"1px solid ".concat(w.palette.divider," !important"):"1px solid ".concat(w.palette.text.secondary," !important")}},children:e.cells.map((function(e){return Object(n.jsx)(u.a,Object(r.a)(Object(r.a)({},e.getCellProps()),{},{sx:{fontSize:13,fontWeight:500,color:"text.disabled",borderTop:"1px solid",borderBottom:"1px solid",borderColor:B},children:e.render("Cell")}))}))}))}))}))]}))}),!y&&Object(n.jsx)(j.a,{alignItems:"flex-end",marginY:1,children:Object(n.jsx)(h.a,{count:z.length,shape:"rounded",onChange:function(e,t){A(t-1)}})}),o&&Object(n.jsxs)(x.a,{alignItems:"center",justifyContent:"space-between",children:[Object(n.jsx)(g.e,{color:"text.disabled",children:"Showing 1-12 of 24 result"}),Object(n.jsxs)(m.a,{disableRipple:!0,sx:{fontSize:14,fontWeight:600},children:["See All",Object(n.jsx)(i,{sx:{marginLeft:.5}})]})]})]})}}}]);
//# sourceMappingURL=32.acfb899d.chunk.js.map