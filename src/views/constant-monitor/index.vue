<template>
  <div id="allmap"></div>
</template>
<script>
import BMap from 'BMap'
export default {
  mounted() {
    //在此调用api
    let map = new BMap.Map("allmap")             // 创建Map实例
    map.centerAndZoom("上海", 15);
    map.enableScrollWheelZoom(true);
    map.addControl(new BMap.NavigationControl());
    map.addControl(new BMap.ScaleControl());
    map.setMapStyleV2({
      styleId: '64888e64e6eb2571005e04df05ca08b7'
    });
  }
}
</script>
<style lang="scss" scoped>
#allmap {
  height: calc(100% - 100px);
}
#app .pageMain > div {
  padding: 0;
}
</style>