export const Service = {
  get_task: (id) => {},
  get_tasks: async (filter) => {
    let RESPONSE = {
      is_error: false,
      msg: 'OK',
      result: [],
    };
    try {
      RESPONSE.result = await Task.find({});
    } catch (error) {
      RESPONSE.is_error = true;
      console.error(error);
      throw Error(error);
    }
  },
  create_task: (payload) => {},
  update_task: (id, payload) => {},
  delete_task: (id) => {},
};
