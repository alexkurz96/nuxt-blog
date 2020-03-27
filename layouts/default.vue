<template>
  <el-container>
    <el-header>
      <app-Navigation />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer />
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation';
export default {
  components: {
    AppNavigation
  }
};
</script>

<style>
</style>
