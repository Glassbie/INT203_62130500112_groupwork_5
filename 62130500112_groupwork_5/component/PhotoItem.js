
app.component('photo-item', {
  
    props: {
      tasks: {
        type: Array,
        require: true
    }
    },
    template:
    /*html*/
        `


    <div v-for="(task,index) in tasks" class="flex pb-6">

      <div>
        
        <p class="mb-2 text-xl">{{ task.article }}
          <i class="material-icons text-red-400 pl-3 cursor-pointer" v-on:click="task.done = true" v-show="!task.done">
            favorite_border
          </i>

          <i class="material-icons text-red-400 pl-3 cursor-pointer" v-on:click="task.done = false" v-show="task.done">
            favorite
          </i>
        </p>
        <img :src="task.image" @click='' class="h-64 w-64"  />

      </div>

    </div>

    


    `,
    data() {
        return {
            
        }
    },
    methods: {
      toggleDone(index) {
        this.tasks[index].done = !this.tasks[index].done
    },
    imgClick(){
      let index = this.task.index
      
    }
        
    }

})