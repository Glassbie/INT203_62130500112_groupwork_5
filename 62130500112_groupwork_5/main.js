const app = Vue.createApp( {
    data() {
        return {
            tasks: [{
                image: './images/r.jpg',
                article: 'Red Rose',
                zoom: false,
                done: false
            },
            {
                image: './images/y.jpg',
                article: 'Yellow Rose',
                zoom: false,
                done: false
            },
            {
                image: './images/b.jpg',
                article: 'Blue Rose',
                zoom: false,
                done: false
            },
            {
                image: './images/w.jpg',
                article: 'White Rose',
                zoom: false,
                done: false
            }

        ],
            inputTask: '',
            notFound: false,
            doSearch: false,
            notFound: false,
            index: 0
        }
    },

    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done
        },

        inputSeach(texts) {
            this.inputTask = texts;
        },

        getIndex(index){
            this.index = index;
        },
        zoom(index) {
            this.tasks[index].zoom = !this.tasks[index].zoom;
        }
    },



    computed: {



        search() {
            this.notFound = false;
            let g;
            if (this.inputTask == '') {
                g = this.tasks;
                return g;
            } else {
                this.inputTask = this.inputTask.toLowerCase();
                g = this.tasks.filter(n => n.article.toLowerCase().includes(this.inputTask.toLowerCase()));  
                if (g == '') {
                    this.notFound = true;
                } else {
                    return g;
                }
            }
            // alert(this.notFound)
        }


    }

}
)