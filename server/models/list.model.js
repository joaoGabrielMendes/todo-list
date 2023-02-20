module.exports = (sequelize, Sequelize) => {
  const List = sequelize.define("list", {
    date: {
      type: Sequelize.STRING,
    },
    todo_title: {
      type: Sequelize.STRING(20),
    },
    todo_description: {
      type: Sequelize.STRING,
    },
    todo_status: {
      type: Sequelize.BOOLEAN,
    },
  });
  return List;
};
