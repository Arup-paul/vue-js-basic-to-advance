<template>
 <div style="text-align:left">
     <h3>Todo List (Done: {{doneListCount}} )</h3>
      <ul> 
          <li v-for="todo in todoList" :key="todo.id"> 
              <a href="#" @click.prevent="onTodoSelected(todo.id)">
              {{todo.text}} - ({{todo.done ? 'Done' : 'Not Done'}})
              </a>
              </li>
          </ul>
          
          <div v-if="todo">
          <h3>Selected Todos</h3>
          <p>Id : {{todo.id}}</p>
          <p>Text: {{todo.text}}</p>
          <p>Done: {{todo.done}}</p>
          </div>
          <h3>Completed Todos</h3>
          <ul>
          <li v-for="todo in doneTodos" :key="todo.id"> 
              {{todo.text}} - ({{todo.done ? 'Done' : 'Not Done'}})
              </li>
          </ul>
     </div> 
</template>
<script>
 export default {
     data() {
         return {
             selectedId: 0
         };
     },
     computed: {
         todoList(){
             return this.$store.state.todos;
         },
         doneListCount(){
           return this.$store.getters.doneTodosList
         },
         doneTodos(){
             return this.$store.getters.doneTodos 
         },
         todo(){
             return this.$store.getters.getTodoById(this.selectedId);
         }

     },
     methods:{
         onTodoSelected(id){
             this.selectedId = id;
         }
     }
 }
</script>

