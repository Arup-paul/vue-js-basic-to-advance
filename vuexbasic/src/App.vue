<template>
   <div>
     <Counter />
     <div>
        <h3>
          App Vue Counter
        </h3>
        {{count}}
     </div>
      <div>
           <button @click.prevent="onIncrement()">Increment</button>
      </div>
   </div>

</template>

<script> 
import Counter from "./components/counter.vue"
export default {
  name: 'App',
  computed:{
      count(){
        return this.$store.state.count;
      }
  },
  components: {
    Counter
  },
  methods:{
    onIncrement(){
     this.$store.commit({
       type:'increment',
       value:4,
     });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
