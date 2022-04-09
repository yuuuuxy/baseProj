<template>
  <div>
    <div
      v-if="loading"
      class="loading"
    >
      is loading…
    </div>
    <div
      class="card"
      :class="{selected:item.selected}"
      v-for="(item,index) of articles"
      :key="index"
      @click="showCard(item)"
    >
      {{item.title}}
    </div>
    <CardModal
      :visible="showCardModal"
      :cardItem="selectedItem"
      @save="onCardChange"
    >
    </CardModal>

  </div>
</template>
<script>
import CardModal from "../card/card.vue";

export default {
  name: "loginComp",
  props: {
    dataList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardModal,
  },
  methods: {
    showCard(item) {
      this.articles.forEach((item1) => (item1.selected = false));
      item.selected = true;
      this.showCardModal = true;
      this.selectedItem = item;
    },
    onCardChange(value) {
      this.loading = true;
      this.showCardModal = false;
      if (value) {
        const totalLength = this.articles.length;
        for (let index = 0; index < totalLength; index++) {
          let element = this.articles[index];
          if (element.selected) {
            this.articles[index] = value;
            break;
          }
        }
      }

      this.loading = false;
    },
  },
  mounted: function () {},
  data() {
    return {
      name: "here is login",
      showCardModal: false,
      selectedItem: {},
      loading: false,
    };
  },
  computed: {
    articles: function () {
      return this.dataList;
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid transparent;
  cursor: pointer;
  &.selected {
    background: #adc;
    color: #fff;
  }
}
.card:hover {
  border: 1px solid #adc;
}
.loading {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #a0d0c030;
  color: #666;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>