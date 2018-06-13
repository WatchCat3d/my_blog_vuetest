<template>
  <div id="user_comment">
      comment
  </div>
</template>

<script>
export default {
  name: 'User_comment',
  data: function () {
      return {

      }
  },
  filters: {
      standard_date: function (value) {
          return (new Date(parseInt(value))).toLocaleDateString();
      }
  },
  created: function () {

  }
}
</script>

<style scoped>

</style>

