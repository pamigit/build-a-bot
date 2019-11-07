<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>
import getPartsMixins from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixins],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      return this.parts[this.partType].find(part => part.id === +this.id);
    },
  },
};
</script>
