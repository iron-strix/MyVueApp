<script setup>
import {ref} from 'vue'
import {nanoid} from 'nanoid'
import {useStorage} from '@vueuse/core'
import confetti from 'canvas-confetti'

const newGrocery = ref('')
//const groceries = ref([])
const groceries = useStorage('groceries', [])

const addGrocery = () => {
  if(newGrocery.value) {
    groceries.value.push({id: nanoid(), name: newGrocery.value})
    newGrocery.value = ''
  }
}

const deleteGrocery = id => {
  const removeIndex = groceries.value.findIndex(grocery => grocery.id === id)
  groceries.value.splice(removeIndex, 1)
  confetti({ particleCount: 300, spread: 1000, origin: { y: 1 } })
}
</script>

<template>
  <div class="behind">
    <main>
      <div class="top">
        <h1 class="title">Vue To Do List 👺</h1>
        <form class="newGroceryForm" @submit.prevent="addGrocery">
          <input id="newGrocery" 
          autocomplete="off" 
          type="text" 
          placeholder="Add an item to your list" 
          v-model="newGrocery"
          />
          <button id="addBtn" type="submit">Add</button>
        </form>
        <h3 class="strokeme">Pending Items: {{groceries.length}}</h3>
      </div>

      
      <ul>
        <li v-for="grocery in groceries" @click="deleteGrocery(grocery.id)">{{grocery.name}}</li>
      </ul>
    </main>
  </div>

</template>

<style lang="postcss" scoped>
  .behind{
    @apply ml-auto mr-auto bg-top w-5/6 min-h-screen bg-cats bg-repeat;
  }

  .top{
    @apply pt-8 flex flex-col justify-center items-center bg-background bg-opacity-60 rounded;
  }
  main{
    @apply pt-8 flex flex-col justify-center items-center;

    .title{
      @apply m-2 text-6xl font-light tracking-wide font-serif text-accent;
    }

    h3{
      @apply m-2 text-4xl font-light tracking-wide font-sans text-accent2 ;
    }

    form {
      @apply mt-8 flex focus-within:ring-4 focus-within:ring-accent2 focus-within:rounded-lg;
      
      input{
        @apply bg-foreground text-comment p-2 w-80 text-2xl rounded-l-md outline-none bg-opacity-90;
      }

      button {
        @apply bg-accent text-background p-2 text-3xl font-bold font-sans rounded-r-md;
        &:hover {
          @apply bg-accent2;
        }
      }
      
    }

    ul{
      @apply flex flex-col items-center justify-center rounded-lg pl-2 pr-2 mt-2 bg-foreground w-2/4 bg-opacity-60;
      li{
        @apply m-2 p-2 w-full bg-accent2 text-background text-left break-all;
        &:hover {
          @apply m-2 p-2 w-full bg-background text-foreground text-left font-bold cursor-pointer;
        }
      }
    }
  }

</style>