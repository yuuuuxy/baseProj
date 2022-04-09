<template lang="">
  <a-modal
    title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="save"
      @cancel="handleCancel"
    >
    <a-input addon-before="title" v-model="item.title"/>
    <a-input addon-before="content" v-model="item.content"/>
  </a-modal>
</template>
<script>
export default {
  name: "cardComp",
  props: {
    cardItem: {
      type: Object,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.item = JSON.parse(JSON.stringify(this.cardItem));
  },
  methods: {
    save() {
      this.$emit("save", this.item);
    },
    handleCancel() {
      this.$emit("save", null);
    },
  },
  data() {
    return {
      item: {},
      confirmLoading: false,
    };
  },
  watch: {
    cardItem: function (newData, oldata) {
      this.item = JSON.parse(JSON.stringify(newData));
    },
  },
  computed: {
    cardItemChange: function () {
      return this.item.title + "--" + this.item.content;
    },
  },
};
</script>
<style lang="">
</style>