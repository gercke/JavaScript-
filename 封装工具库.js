/*
1.判断数据类型
function type(target){
    var ret = typeof(target);
    var template = {
        "[object Array]" : "array",
        "[object Object]" : "object",
        "[object Number]" : "number - object",
        "[object Boolean]" : "boolean - object",
        "[object String]" : "string - object"
    }
    if(target === null){
      return "null";
    }else if(ret == "object"){
        var str = Object.prototype.toString.call(target);
        return template[str];
    }else{
        return ret;
    }
}*/

/*
2.数组去重
var arr = [1,1,1,2,3,3,3,2,1,1];
Array.prototype.unique = function () {
    var temp = {},
        arr = [],
        len = this.length;
    for(var i = 0; i < len; i ++){ //把数组的每一位当成对象的属性名,
        if(temp[this[i]]){

        }else{ //没有重复的值执行
            temp[this[i]] = "aaa";
            arr.push(this[i]);//新的已经去重的数组
        }
    }
    return arr;
}*/
/*
3.返回e元素的第n层祖先元素结点
function retParent(elem, n){
    while(elem && n){
        elem = elem.parentElement;
        n --;
    }
    return elem;
}
var i = document.getElementsByTagName('i')[0]; //看i的上级标签
*/
/*
4.获取子元素结点
Element.prototype.myChildren = function (){
    var child = this.childNodes; //获取所有子节点
    var len = child.length;
    var arr = [];
    for(var i = 0; i < len; i ++){
        if(child[i].nodeType == 1){ //判断是不是元素子节点
            arr.push(child[i]);
        }
    }
    return arr;
}
var div = document.getElementsByTagName('div')[0];
*/
/*
5.获取该节点的前后元素结点
function retSibling (e, n){
    while(e && n){
        if(n > 0){
            e = e.nextElementSibling;
            n --;
        }else{
            e = e.previousElementSibling;
            n ++;
        }
    }
    return e;
}
*/
/*
将新节点插入一个结点之后
 Element.prototype.insertAfter = function (targetNode, afterNode) { //在原型链上编程
     var beforeNode = afterNode.nextElementSbiling;
     if(beforeNode == null){
         this.appendChild(targetNode);
     }else {
         this.insertBefore(targetNode, beforeNode); 
     }
 }
 */
/*
滚动条滚动距离
 function getScrollOXffset(){
     if(window.pageXOffset){
         return {
             x: window.pageXOffset,
             y: window.pageYOffset
         }
     }else {
         return{
             x: document.body.scrollLeft + document.documentElement.scrollLeft,
             y: document.body.scrollTop + document.documentElement.scrollTop
             
         }
     }
 }
 */
/*
查看视口的尺寸
 function getViewportOffset(){
     if(window.innerWidth){
         return {
             w:window.innerWidth,
             h:window.innerHeight
         }
     }else {
         if(document.compatMode === "BackCompat" ){ //compatMode是用来判断是不是怪异模式
         return {
             w:window.body.clienWidth,
             h:window.body.cilenHeight
           } 
        }else {
           return {
               w:document.documentElement.innerWidth,
               h:document.documentElement.innerHeight
           }
        }
     }
 }
 */










 