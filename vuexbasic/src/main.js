import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue' 
import VueRouter from 'vue-router'

 
 
const store = createStore({
    state(){
        return {
            count:2,
            todos: [
              {id:1,text:'wakeup early', done:true},
              {id:2,text:'do breakfast', done:true},
              {id:3,text:'got to school', done:false},
            ],
        };
    },
    getters:{
        getTodoById: (state) => (id) => {
           return state.todos.find((todo) => todo.id ===id); 
        },

        doneTodos(state){
          return state.todos.filter((todo) => todo.done);
        },
       doneTodosList(state,getters){
        return getters.doneTodos.length
       },
    },
    mutations:{
        increment(state,payload) {
            state.count = state.count + payload.value;
        }
    }
})
const app = createApp(App);
app.use(store);
app.mount('#app')
