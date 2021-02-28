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
            view: false,
            src : ''
        }
    },

    methods: {
        inputSeach(texts) {
            this.inputTask = texts;
            this.view = false;
            this.src = '';
        },

        getIndex(index){
            this.src = this.tasks[index].image
            this.view = true;
        },
        close(){
            this.view = false;
            this.src = '';

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