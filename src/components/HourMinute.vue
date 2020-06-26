<template>
    <div>
        <span class="border p-1">
            <select v-model="hours" @change="onChange">
                <option></option>
                <option v-for="(text,value) in options(24)" :key="value" :value="value" v-text="text"></option>
            </select>
            <span>：</span>
            <select v-model="minutes" @change="onChange">
                <option></option>
                <option v-for="(text,value) in options(60)" :key="value" :value="value" v-text="text"></option>
            </select>
            <input :name="name" type="hidden" v-model="value">
        </span>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        value: String        
    },
    data() {
        return {
            hours: '',
            minutes: '',
            //フォーマット
            DatePickerFormat: 'yyyy-MM-dd',
        }
    },
    methods: {
        onChange() {
            let time = '';
            if(this.hours && this.minutes) {
                time = this.hours.toString().padStart(2, '0') +':'+
                    this.minutes.toString().padStart(2, '0');
            }
            console.log(time)
            // this.$emit('input', time);
            this.$emit('gettime', time);
        },
        options(limitValue) {
            let options = {};
            for(let i = 0 ; i < limitValue ; i++) {
                options[i] = i.toString().padStart(2, '0');
            }
            return options;
        },
        setTime() {
            const matches = this.value.match(/([0-9]{2}):([0-9]{2})/);
            // すでに値が存在している場合
            if(matches) {
                this.hours = parseInt(matches[1]);
                this.minutes = parseInt(matches[2]);
            }
        }
    },
    watch: {
        value() {
            this.setTime();
        }
    },
    mounted() {
        this.setTime();
    }
}
</script>

<style>
    /* @import "../css/tailwind.min.css" */
    @import "https://unpkg.com/tailwindcss@1.4.6/dist/tailwind.min.css"
</style>
