<template>
  <div class="task-container">
    <el-checkbox v-model="taskStatus"></el-checkbox>
    <div class="task-name">
      {{task.name}}
    </div>
    <div class="task-delete hide">
      <i class="el-icon-close" @click="onDelete"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      default: () =>  ''
    }
  },
  computed: {
    taskStatus: {
      get: function () {
        return this.task.status === 'completed'
      },
      set: function ()  {
        this.updateTaskStatus(this.task)
      }
    }
  },
  methods: {
    ...mapActions('todos', ['updateTaskStatus', 'deleteTask']),
    onDelete () {
      this.deleteTask(this.task.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    background-color: #ffffff;
    height: 65px;
    width: 1000px;
    border: 1px solid #E0E0E0;
    border-top: 0;

    .hide {
      display: none;
    }

    &:hover {
      background-color: #dee5ef;

      .hide {
        display: block;
      }
    }

    .el-checkbox {
      display: inline;
      padding-left: 20px;
    }

    .task-name {
      display: inline;
      padding-left: 10px;
    }

    .task-delete {
      margin-left: auto;
      padding-right: 20px;
      font-size: 20px;
      cursor: pointer;

      .el-icon-close {
        font-weight: bold;
        color: #5174b1;
      }
    }
  }
</style>