app.component('photo-view', {
    props: {
        src: String
    },
    template:
        /*html*/
        `
   <div class="">
   <i class="material-icons text-white text-5xl top-0 right-0" @click='close' >
   cancel
   </i>
   <div>
      <img :src= "src" class='justify-center'/>
      </div>
    </div>
    `,
        
    data() {
        return {

        }
    },

    methods: {
        close() {
            this.$emit('close')
        }
    }
})