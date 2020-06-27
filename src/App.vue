<template>
  <div id="app" class="container">
    <Header v-bind:username='name' v-model="InputData.condition">
      <template v-slot:message>
        <p>Let's enjoy programming!</p>
      </template>
    <p>condition : {{ InputData.condition }} </p>
    </Header>
    <Body @add="add1"></Body>
    <Body @add="add2"></Body>
    <p>total : {{ totalcount }}</p>
    <p>condition : {{ InputData.condition }}</p>
    <button @click="componentName = 'Header'">Header</button>
    <button @click="componentName = 'Body'">Body</button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>"
    <HourMinute value="20:15" @gettime="gettime"></HourMinute>
    <p>選択された時刻：{{ time1 }}</p>
    <!-- <vuejs-datepicker anguage="ja" class="test" placeholder="日付"></vuejs-datepicker> -->
    <!-- <vuejs-datepicker name="datepicker" :format="DatePickerFormat"></vuejs-datepicker> -->
    <form>
      <!-- <div> -->
      <div class="col-3 mx-auto" style="width: 250px;">
        <!-- <datepicker :format="DatePickerFormat" :bootstrap-styling="true" :language="ja" placeholder="日付を選択してください"></datepicker> -->
        <datepicker  :bootstrap-styling="true"  :format="DatePickerFormat" :language="ja" placeholder="日付を選択してください"></datepicker>
      </div>
    </form>
    <!-- <el-date-picker v-model="value6" type="date" placeholder="Pick a date" /> -->
    <!-- <el-date-picker v-model="today" type="date" v-bind:placeholder="ph_d"  :editable="false" :clearable="fales" :default-value="new Date()" /> -->
    <!-- <el-date-picker v-model="today" type="date" v-init:today="ph_d" :editable="false" :clearable="fales" /> -->
    <el-date-picker v-model="ph_d" type="date" :editable="false" :clearable="false" />
    <!-- <el-date-picker v-model="today" type="date" v-bind:placeholder="ph_d"  v-init:today="ph_d" :editable="false"/> -->
    <!-- <el-date-picker v-model="today" type="date" v-init:today="new Date(new Date().setFullYear(new Date().getFullYear()-26))"  :editable="false" :default-value="new Date(new Date().setFullYear(new Date().getFullYear()-26))"/> -->
    <!-- <el-date-picker v-model="today" type="date" v-init:today="getdt"  :editable="false"/> -->
    <!-- <el-date-picker v-model="today" type="date" /> -->
    <br>
    <!-- <p>選択された日付：{{ today }}</p> -->
    <p>選択された日付：{{ ph_d }}</p>
    <!-- <el-time-picker v-model="startTime" placeholder="start time" :picker-options="{ format: 'HHmm' }"/> -->
    <!-- <el-time-picker v-model="startTime" v-bind:placeholder="ph_t"  v-init:startTime="ph_t"/> -->
    <el-time-picker v-model="ph_t" :editable="false" :clearable="false"  :picker-options="{ format: 'HHmmss' }"/>
    <el-time-picker v-model="ph_t" :editable="false" :clearable="false"  :picker-options="{ format: 'Ahhmm' }"/>
    <!-- <el-time-picker v-model="startTime"/> -->
    <!-- <p>選択された時間：{{ startTime }}</p> -->
    <p>選択された時間：{{ ph_t }}</p>
    <button @click="getdt">Date()関数</button>
    <p>{{datedt}}</p>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import HourMinute from './components/HourMinute.vue'
import datepicker from "vuejs-datepicker";
import {ja} from 'vuejs-datepicker/dist/locale'

export default {
  name:"app",
  // data(){
  data: function(){
    var _today = new Date()
    // var twoDigit = function(value) {
    //   return ('0' + value).slice(-2);
    // }
    return {
      name: "kiyokiyo",
      count1: 0,
      count2: 0,
      totalcount: 0,
      InputData: {
        condition: ""
      },
      componentName: "Header",
      time1:'',
      DatePickerFormat: 'yyyy-MM-dd',
     //日本語化
      ja:ja,
      // ph_d: [
      //   _today.getFullYear(),
      //   // "2019",
      //   twoDigit(_today.getMonth()+1),
      //   twoDigit(_today.getDate())
      // ].join('-'),
      ph_d:new Date(_today.getTime() - 30 *24 * 60 * 60*1000),
      ph_t: new Date() ,
      startTime:'',
      today: '',
      datedt:'',
      dateTime : new Date(_today.getTime() - 30*60*1000)
    }
  },
  components: {
    Header,
    Body,
    HourMinute,
    datepicker
  },
  methods:{
    add1(count){
      this.count1 = count;
      this.totalcount = this.count1 + this.count2;
    },
    add2(count){
      this.count2 = count;
      this.totalcount = this.count1 + this.count2;
    },
    gettime(time){
      this.time1 =time;
      console.log('gettime')
    },
    getdt(){
      // this.datedt = new Date(new Date().setFullYear(new Date().getFullYear()-26))
      this.datedt = this.dateTime.toString()
    }
  }
}
</script>

<style scoped>
  p{
    color: green
  }
 
</style>
