$wnd.showcase.runAsyncCallback11("function pkc(){}\nfunction rkc(){}\nfunction kkc(a,b){a.b=b}\nfunction lkc(a){if(a==akc){return true}uC();return a==dkc}\nfunction mkc(a){if(a==_jc){return true}uC();return a==$jc}\nfunction qkc(a){this.b=(Ulc(),Plc).a;this.e=(Zlc(),Ylc).a;this.a=a}\nfunction jkc(a,b){var c;c=ogb(a.fb,179);c.e=b.a;!!c.d&&efc(c.d,b)}\nfunction ikc(a,b){var c;c=ogb(a.fb,179);c.b=b.a;!!c.d&&cfc(c.d,b)}\nfunction ekc(){ekc=zDb;Zjc=new pkc;akc=new pkc;_jc=new pkc;$jc=new pkc;bkc=new pkc;ckc=new pkc;dkc=new pkc}\nfunction nkc(){ekc();gfc.call(this);this.b=(Ulc(),Plc);this.c=(Zlc(),Ylc);(Sbc(),this.e)[ZSc]=0;this.e[$Sc]=0}\nfunction fkc(a,b,c){var d;if(c==Zjc){if(b==a.a){return}else if(a.a){throw VCb(new kDc('Only one CENTER widget may be added'))}}Sh(b);dwc(a.j,b);c==Zjc&&(a.a=b);d=new qkc(c);b.fb=d;ikc(b,a.b);jkc(b,a.c);hkc(a);Uh(b,a)}\nfunction gkc(a){var b,c,d,e,f,g,h;Mvc((Sbc(),a.hb),'',yUc);g=new TKc;h=new nwc(a.j);while(h.b<h.c.c){b=lwc(h);f=ogb(b.fb,179).a;d=ogb(cGc(jLc(g.d,f)),111);c=!d?1:d.a;e=f==bkc?'north'+c:f==ckc?'south'+c:f==dkc?'west'+c:f==$jc?'east'+c:f==akc?'linestart'+c:f==_jc?'lineend'+c:yRc;Mvc(Yo(b.hb),yUc,e);oGc(g,f,xDc(c+1))}}\nfunction hkc(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;b=(Sbc(),a.d);while(vdc(b)>0){Co(b,udc(b,0))}o=1;e=1;for(i=new nwc(a.j);i.b<i.c.c;){d=lwc(i);f=ogb(d.fb,179).a;f==bkc||f==ckc?++o:(f==$jc||f==dkc||f==akc||f==_jc)&&++e}p=xfb(pxb,uOc,289,o,0,1);for(g=0;g<o;++g){p[g]=new rkc;p[g].b=$doc.createElement(XSc);yo(b,Zbc(p[g].b))}k=0;l=e-1;m=0;q=o-1;c=null;for(h=new nwc(a.j);h.b<h.c.c;){d=lwc(h);j=ogb(d.fb,179);r=$doc.createElement(YSc);j.d=r;j.d[KSc]=j.b;j.d.style[LSc]=j.e;j.d[MOc]=j.f;j.d[LOc]=j.c;if(j.a==bkc){Vbc(p[m].b,r,p[m].a);yo(r,Zbc(d.hb));r[PTc]=l-k+1;++m}else if(j.a==ckc){Vbc(p[q].b,r,p[q].a);yo(r,Zbc(d.hb));r[PTc]=l-k+1;--q}else if(j.a==Zjc){c=r}else if(lkc(j.a)){n=p[m];Vbc(n.b,r,n.a++);yo(r,Zbc(d.hb));r[zUc]=q-m+1;++k}else if(mkc(j.a)){n=p[m];Vbc(n.b,r,n.a);yo(r,Zbc(d.hb));r[zUc]=q-m+1;--l}}if(a.a){n=p[m];Vbc(n.b,c,n.a);yo(c,Zbc(fh(a.a)))}}\nvar yUc='cwDockPanel';yDb(445,1,xRc);_.Ec=function mWb(){var a,b,c;OFb(this.a,(a=new nkc,(Sbc(),a.hb).className='cw-DockPanel',a.e[ZSc]=4,kkc(a,(Ulc(),Olc)),fkc(a,new Mic('This is the first north component'),(ekc(),bkc)),fkc(a,new Mic('This is the first south component'),ckc),fkc(a,new Mic('This is the east component'),$jc),fkc(a,new Mic('This is the west component'),dkc),fkc(a,new Mic('This is the second north component'),bkc),fkc(a,new Mic('This is the second south component'),ckc),b=new Mic(\"This is a <code>ScrollPanel<\\/code> contained at the center of a <code>DockPanel<\\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!\"),c=new fgc(b),c.hb.style[MOc]='400px',c.hb.style[LOc]='100px',fkc(a,c,Zjc),gkc(a),a))};yDb(900,281,ROc,nkc);_.gc=function okc(a){var b;b=_dc(this,a);if(b){a==this.a&&(this.a=null);hkc(this)}return b};var Zjc,$jc,_jc,akc,bkc,ckc,dkc;var qxb=QCc(POc,'DockPanel',900);yDb(178,1,{},pkc);var nxb=QCc(POc,'DockPanel/DockLayoutConstant',178);yDb(179,1,{179:1},qkc);_.c='';_.f='';var oxb=QCc(POc,'DockPanel/LayoutData',179);yDb(289,1,{289:1},rkc);_.a=0;var pxb=QCc(POc,'DockPanel/TmpRow',289);_Nc(Fl)(11);\n//# sourceURL=showcase-11.js\n")
