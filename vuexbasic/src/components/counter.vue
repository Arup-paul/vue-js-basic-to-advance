<template>
    <div>
        <div>
            {{$store.state.count}}
            </div>
         <div>
             <button @click.prevent="onIncrement()">Increment</button>
         </div>
    </div>
</template>


<script>
 export default {
     data(){
         return {
              
         }
     },
     computed:{
        count() {
            return this.$store.state.count;
        }
     },
     methods:{
         onIncrement(){
             this.$store.commit({
              type:'increment',
               value:2,
             });
         }
     }
 }
</script>


