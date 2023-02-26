Vue.createApp({
    data(){
        return {
            x:11,
            y:10,
            result:30
        }
    },
    methods:{
        resetHandler:function(){
            // 1 way binding
            this.x = 0;
            this.y = 0;
            this.result = 0;
        },
        submitHandler(){ // ES6방식
            // console.log(this.x); 
            // console.log(typeof this.x); 
            let x = parseInt(this.x);
            let y = parseInt(this.y);
            this.result = x + y;
        },
        changeHandler(){
            let x = parseInt(this.x);
            let y = parseInt(this.y);
            this.result = x + y;
        }
    }
})
.mount("#calc-app");