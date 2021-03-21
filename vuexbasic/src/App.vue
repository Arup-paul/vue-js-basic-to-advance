<template>
   <div>

     <Counter />
     <div>
        <todo-list></todo-list>
      </div>
      <div>
         Todo List complete: {{doneListCount}}
        </div>
   </div>

</template>

<script> 
import Counter from "./components/counter.vue"
import TodoList from "./components/todolist.vue"
export default {
  name: 'App',
 
  components: {
    Counter,
    TodoList
  },
  computed:{
      count(){
        return this.$store.state.count;
      },
       doneListCount(){
           return this.$store.getters.doneTodosList
         }
  },
  methods:{
    onIncrement(){
     this.$store.commit({
       type:'increment',
       value:4,
     });
    },
     getDoneListCount(){
            
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
