<template>
  <div>
    <div class="input-container">
      <div class="input-div">
        <el-input
            class="input-box"
            :class="{'error': inputError}"
            placeholder="Please input"
            v-model="input"
            @keyup.enter.native="addTodo"
            clearable>
        </el-input>
        <el-button class="add-btn" type="primary" :disabled="!input.length" @click="addTodo">Add</el-button>
      </div>
      <div v-if="inputError" class="error-msg">
        Please input a valid task
      </div>
    </div>
    <transition-group name="task-list">
      <activity v-for="task of tasks" :task="task" :key="task.id"></activity>
    </transition-group>
    <div v-if="!tasks.length" class="empty-list">
      No items
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapGetters, mapActions } from 'vuex'
import Activity from './Activity'

export default {
  data () {
    return {
      input: '',
      inputError: false
    }
  },
  computed: {
    ...mapGetters('todos', ['tasks'])
  },
  methods: {
    ...mapActions('todos', ['addTask']),
    addTodo () {
      if (!this.input.length) {
        this.inputError = true
        return
      }
      this.addTask({
        id: uuidv4(),
        name: this.input,
        status: 'not completed'
      })
      this.input = ''
      this.inputError = false
    }
  },
  components: {
    Activity
  }
}
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto 0;
  background-color: #ffffff;
  width: 1000px;
  height: 100px;
  border: 1px solid #E0E0E0;
  border-radius: 5px 5px 0 0;

  .error-msg {
    padding-left: 60px;
    padding-top: 5px;
    color: red;
  }

  .input-div {
    display: flex;
    justify-content: center;
    align-self: center;

    .input-box {
      width: 800px;
    }

    &.error {
      ::v-deep.el-input__inner {
        border-color: red;
      }
    }

    .add-btn {
      margin-left: 10px;
    }
  }
}

.empty-list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #ffffff;
  height: 65px;
  width: 1000px;
  border: 1px solid #E0E0E0;
  color: #C8C8C8;
  border-top: 0;
}

.error {
  ::v-deep .el-input__inner {
    border-color: red;
  }
}

.task-list-enter {
  opacity: 0;
}

.task-list-enter-active {
  animation: growDown 300ms ease-in-out forwards;
  transition: opacity .5s ease-out;
}

.task-list-enter-to {
  opacity: 1;
}
</style>
