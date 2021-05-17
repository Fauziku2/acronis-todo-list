<template>
  <div>
    <div class="container">
      <p class="page-header">Simple ToDo List Tool</p>
      <p>Do any of the following seem familiar?</p>
      <ul>
        <li>You often feel completely overwhelmed with the amount of work you’ve got to do?</li>
        <li>You sometimes forget to do things that are important</li>
        <li>People have to chase you to get things done</li>
        <li>You find it a struggle to keep to deadlines</li>
      </ul>
      <p>
        Don’t think you’re unusual because there are thousands of people who struggle with the same every day, not just
        in the workplace but in their personal life too. Luckily, there is something very simple you can do to keep your
        life and work more organised.
      </p>
      <div class="section">
        <div class="section-marker"></div>
        <p class="section-header">What is a ToDo List?</p>
      </div>
      <p>
        What is a ToDo List? The definition is a simple one.
        <strong>It’s a list of tasks you need to complete, or things that you want to do.</strong>
      </p>
      <p>
        Traditionally, they’re written on a piece of paper or post it notes and acts as a memory aid. As technology has
        evolved we have been able to create a todo lists with excel spreadsheets, word documents, email lists, todo list
        apps. You can use a to do list in your home and personal life, or in the workplace.
      </p>
      <p>
        Having a list of everything you need to do written down in one place means you shouldn’t forget anything
        important.
      </p>
      <div class="section">
        <div class="section-marker"></div>
        <p class="section-header">The Benefits of Using a To Do List</p>
      </div>
      <ul>
        <li>Help you stay organised</li>
        <li>Helps you focus</li>
        <li>Improves your memory</li>
        <li>Increases productivity</li>
        <li>Helps with motivation</li>
      </ul>
      <div class="section">
        <div class="section-marker"></div>
        <p class="section-header">What is a ToDo List in business and why is it important</p>
      </div>
      <p>
        It seem such a simple solution by putting pen to paper and taking time out of your day to create a to do list, a
        plan for your day helps define your challenges and goals. To-do lists offer a way to increase productivity,
        stopping you forgetting things, manage tasks effectively, use time wisely and improve time management as well as
        workflow.
      </p>

    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  background-color: #ffffff;
  width: 1000px;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  padding: 20px;

  p {
    font-size: 18px;

    &.page-header {
      font-size: 30px;
      font-weight: bold;
    }

    &.section-header {
      font-size: 20px;
      font-weight: bold;
      margin: 7px;
      padding-left: 17px;
    }
  }

  li {
    font-size: 18px;
  }

  .section {
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;

    .section-marker {
      width: 8px;
      background-color: #5174b1;
    }
  }
}

</style>