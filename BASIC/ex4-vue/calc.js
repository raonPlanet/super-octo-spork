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
    },
    template:`
    <section>
        <h1>뎃셈 계산기</h1>
        <form action="">
            <fieldset>
                <legend>계산시입력폼</legend>
                <label>x:</label>
                <input v-on:input="changeHandler" dir="rtl" v-model="x">
                <label>y:</label>
                <input v-on:input="changeHandler" dir="rtl" v-model="y">
                <span>=</span>
                <span>{{result}}</span>
            </div>
            <hr>
            <div>
                <input type="submit" v-on:click.prevent="resetHandler" value="초기화">
                <input type="submit" v-on:click.prevent="submitHandler" value="계산하기">                
            </div>
        </fieldset>
        <div>
        </form>
    </section>
    `
})
.mount("#calc-app");