<template>
  <div>
    <h1>Аналитика по постам</h1>
    <app-analytics-chart
      title="Колличество просмотров"
      :labels="views.labels"
      :data="views.data"
    />

    <app-analytics-chart
      title="Колличество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart';
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head: {
    title: `Аналитика | ${process.env.appName}`
  },
  async asyncData({store}) {
    const {views, comments} = await store.dispatch('post/getAnalytics');
    return {views, comments};
  },
  components: {AppAnalyticsChart}
}
</script>
