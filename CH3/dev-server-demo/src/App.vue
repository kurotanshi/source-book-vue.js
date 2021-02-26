<template>

<div>
  <pre>{{ stops }}</pre>
</div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      stops: []
    }
  },
  mounted() {
    // 跨網域被阻擋
    //fetch('https://data.ntpc.gov.tw/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview')

    // 透過 dev-server 建立 localhost 的 proxy
    fetch('/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview')
      .then(res => res.json())
      .then(data => {
        this.stops = data;
      });
  }
}
</script>
