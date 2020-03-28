const posts = [
  {title: 'Post', date: new Date(), views: 22, comments: [1, 2], _id: 'id1'},
  {title: 'Post1', date: new Date(), views: 22, comments: [1, 2], _id: 'id2'},
  {title: 'Post2', date: new Date(), views: 22, comments: [1, 2], _id: 'id3'}
];

export const actions = {
  async fetchAdmin({}) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async remove({}, id) {

  },
  async update({}, {id, text}) {

  },
  async create({commit}, {title, text, image}) {
    try {
      const fd = new FormData();

      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);

      return await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
  async fetchAdminById({}, id) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id));
      }, 1000);
    });
  }
}
