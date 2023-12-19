const {createApp} = Vue
createApp({
    data(){
        return{
            firstName: 'Muttaqeen',
            greetings: 'Hello',
            currYear: new Date(),
            yourInput: ''
        }
    }
}).mount('#app')