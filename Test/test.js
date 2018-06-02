var xw = {
    name : "小王",
    gender : "男",
    age : 24,
    say : function(school,grade) {
            alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
    }
}
var xh = {
    name : "小红",
    gender : "女",
    age : 18
}
xw.say.call(xh,"实验小学","六年级"); 
xw.say.apply(xh,["实验小学","六年级"]);
xw.say.bind(xh,"实验小学","六年级")();
xw.say.bind(xh)("实验小学","六年级");