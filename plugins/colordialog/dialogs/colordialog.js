﻿/*
Copyright (c) 2003-2010, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.dialog.add('colordialog',function(a){var b=CKEDITOR.dom.element,c=CKEDITOR.document,d=CKEDITOR.tools,e=a.lang.colordialog,f;function g(){return{type:'html',html:'&nbsp;'};};var h=new b('table');k();var i=function(r){var s=new b(r.data.getTarget()).getAttribute('title');c.getById(o).setStyle('background-color',s);c.getById(p).setHtml(s);},j=function(r){var s=new b(r.data.getTarget()).getAttribute('title');f.getContentElement('picker','selectedColor').setValue(s);};function k(){var r=['00','33','66','99','cc','ff'];function s(x,y){for(var z=x;z<x+3;z++){var A=h.$.insertRow(-1);for(var B=y;B<y+3;B++)for(var C=0;C<6;C++)t(A,'#'+r[B]+r[C]+r[z]);}};function t(x,y){var z=new b(x.insertCell(-1));z.setAttribute('class','ColorCell');z.setStyle('background-color',y);z.setStyle('width','15px');z.setStyle('height','15px');z.setAttribute('title',y);};s(0,0);s(3,0);s(0,3);s(3,3);var u=h.$.insertRow(-1);for(var v=0;v<6;v++)t(u,'#'+r[v]+r[v]+r[v]);for(var w=0;w<12;w++)t(u,'#000000');};function l(){c.getById(q).removeStyle('background-color');f.getContentElement('picker','selectedColor').setValue('');};var m=d.addFunction(function(){c.getById(o).removeStyle('background-color');c.getById(p).setHtml('&nbsp;');}),n=function(r){return r+CKEDITOR.tools.getNextNumber();},o=n('hicolor'),p=n('hicolortext'),q=n('selhicolor');return{title:e.title,minWidth:360,minHeight:220,onLoad:function(){f=this;},contents:[{id:'picker',label:e.title,accessKey:'I',elements:[{type:'hbox',padding:0,widths:['70%','10%','30%'],children:[{type:'html',html:'<table onmouseout="CKEDITOR.tools.callFunction( '+m+' );">'+h.getHtml()+'</table>',onLoad:function(){var r=CKEDITOR.document.getById(this.domId);r.on('mouseover',i);r.on('click',j);}},g(),{type:'vbox',padding:0,widths:['70%','5%','25%'],children:[{type:'html',html:'<span>'+e.highlight+'</span>\t\t\t\t\t\t\t\t\t\t\t\t<div id="'+o+'" style="border: 1px solid; height: 74px; width: 74px;"></div>\t\t\t\t\t\t\t\t\t\t\t\t<div id="'+p+'">&nbsp;</div>\t\t\t\t\t\t\t\t\t\t\t\t<span>'+e.selected+'</span>\t\t\t\t\t\t\t\t\t\t\t\t<div id="'+q+'" style="border: 1px solid; height: 20px; width: 74px;"></div>'},{type:'text',id:'selectedColor',style:'width: 74px',onChange:function(){try{c.getById(q).setStyle('background-color',this.getValue());}catch(r){l();}}},g(),{type:'button',id:'clear',style:'margin-top: 5px',label:e.clear,onClick:l}]}]}]}]};});
