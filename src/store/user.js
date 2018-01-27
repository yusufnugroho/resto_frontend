import { types, views } from 'mobx-state-tree';


const UserStore = types.model(
  'UserStore',
  {
    id: types.identifier(),
    username: types.string,
  }
).views(self => {
    return {
        get getUsername() {
            console.log("GET USERNAME")                    // 6
            return this.username;
        },
    };
}).actions(self => {
    return {
        changeName(username) {
            this.username = username;
          }
        }
    }
);

export default UserStore;
