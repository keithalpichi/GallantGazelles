
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'John', password:'123!', profile: 'Profile for User1'},
        {username: 'Jack', password:'456!', profile: 'Profile for User2'},
        {username: 'Bob', password:'0123!', profile: 'Profile for User3'},
        {username: 'Jim', password:'789!', profile: 'Profile for User4'}
      ]);
    }).then(()=> {
      return knex('pitches').del()
      .then(() => {
        return knex('pitches').insert([
          {user_id: 1, name: 'Javascript RXjs', video: 'AslncyG8whg', website: 'youtube.com', profile: 'Pitch 1 Profile', blurb: 'Pitch 1 Blurb', category_id: '1', investment_status:'TRUE'},
          {user_id: 2, name: 'Reactive JS', video: 'uODxUJ5Jwis', website: 'youtube.com', profile: 'Pitch 2 Profile', blurb: 'Pitch 2 Blurb', category_id: '2', investment_status:'FALSE'},
          {user_id: 3, name: 'Learn JS', video: 'fju9ii8YsGs&t', website: 'youtube.com', profile: 'Pitch 3 Profile', blurb: 'Pitch 3 Blurb', category_id: '1', investment_status:'FALSE'},
          {user_id: 4, name: 'JS Event Loop', video: '8aGhZQkoFbQ', website: 'youtube.com', profile: 'Pitch 4 Profile', blurb: 'Pitch 4 Blurb', category_id: '1', investment_status:'FALSE'}
          ]);
      });
    }).then(()=> {
      return knex('followers').del()
      .then(() => {
        return knex('followers').insert([
          {user_id: 1, pitch_id: 1},
          {user_id: 1, pitch_id: 2},
          {user_id: 2, pitch_id: 2},
          {user_id: 4, pitch_id: 1},
          {user_id: 3, pitch_id: 1},
          {user_id: 4, pitch_id: 2},
          {user_id: 2, pitch_id: 1}
          ]);
      });
    }).then(()=> {
      return knex('categories').del()
      .then(() => {
        return knex('categories').insert([
          {name: 'Tech'},
          {name: 'Games'},
          {name: 'Books'},
          {name: 'iPhone'},
          {name: 'Android'},
          {name: 'Productivity'}
          ]);
      });
    }).then(()=> {
      return knex('votes').del()
      .then(() => {
        return knex('votes').insert([
          {user_id: 1, pitch_id: 1, vote_type: 1},
          {user_id: 1, pitch_id: 2, vote_type: -1},
          {user_id: 2, pitch_id: 1, vote_type: -1},
          {user_id: 2, pitch_id: 2, vote_type: 0}
          ]);
      });
    }).then(()=> {
      return knex('investments').del()
      .then(() => {
        return knex('investments').insert([
          {user_id: 1, pitch_id: 1},
          {user_id: 1, pitch_id: 2},
          {user_id: 2, pitch_id: 1},
          {user_id: 2, pitch_id: 3}
          ]);
      });
    }).then(()=> {
      return knex('comments').del()
      .then(() => {
        return knex('comments').insert([
          {comment: 'Hello', user_id: 1, pitch_id: 1},
          {comment: 'Yo', user_id: 2, pitch_id: 1},
          {comment: 'What', user_id: 3, pitch_id: 1},
          {comment: 'Yo', user_id: 2, pitch_id: 2},
          {comment: 'Yo', user_id: 3, pitch_id: 2},
          {comment: 'Yo', user_id: 2, pitch_id: 3},
          {comment: 'No', user_id: 1, pitch_id: 1}
          ]);
      });
    });
};
