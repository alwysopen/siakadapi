// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return function userdetail (hook) {
    hook.params.sequelize = {
      raw: false,
      include: [
        hook.app.services.users.Model,
        hook.app.services.kelas.Model
      ]
    }; 
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
