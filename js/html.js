var app = new Vue({
    el: "#app",
    data: {
        test: "hello github pages!"
    },
    methods:{
        onclick:function(){
            alert(this.test);
        }
    }
});