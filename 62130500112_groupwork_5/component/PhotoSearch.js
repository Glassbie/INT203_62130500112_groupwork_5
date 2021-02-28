app.component('photo-search', {
  props: {},
  template:
    /*html*/
    `
  <i v-show="!doSearch" class="material-icons p-3 ml-60" v-on:click="doSearch = true">
  search
</i>

<div v-show="doSearch">

  <input v-model="text" @input="searchText" placeholder="Please enter text for searching photos"
    class='p-2 border-2 w-72' />

  <button v-on:click="cancelSeach" class='m-2 p-2 bg-blue-300'>cancel</button>

</div>

  `,
  // 
  data() {
    return {
      doSearch: false,
      text: ''
      

    }
  },
  methods: {
    cancelSeach() {
      this.text = '';
      this.$emit('search-text', this.text);
      this.doSearch = false;
    },
    searchText() {
      this.$emit('search-text', this.text);
 
    }

  }
})