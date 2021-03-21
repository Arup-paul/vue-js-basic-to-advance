<template>
 <div style="text-align:left">
     <h3>Todo List (Done: {{doneListCount}} )</h3>
      <ul> 
          <li v-for="todo in todoList" :key="todo.id"> 
              {{todo.text}} - ({{todo.done ? 'Done' : 'Not Done'}})
              </li>
          </ul>
     </div> 
</template>
<script>
 export default {
     data() {
         return {
             
         };
     },
     computed: {
         todoList(){
             return this.$store.state.todos;
         },
         doneListCount(){
           return this.$store.getters.doneTodosList
         }
     },
     methods:{
         getDoneListCount(){
             return this.todoList.filter((todo) => todo.done).length
         }
     }
 }
</script>

