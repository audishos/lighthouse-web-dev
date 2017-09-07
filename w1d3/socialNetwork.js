var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
  printConnections: function () {
    const connections = {};
    // for each person in data
    for (person in this) {
      if (this[person].follows !== undefined) {
        // add this person to the connections list as an array
        connections[this[person].name] = {
          following: this.following(person),
          followedBy: this.followedBy(person)
        };
      }
    }
    console.log(connections);
  },
  following: function(user) {
    const userList = [];
    // for each value in the follows array, locate the name of the person and
    // add it to the connections.person array
    this[user].follows.forEach(function(element) {
      userList.push(this[element].name);
    }, this);
    return userList;
  },
  followedBy: function(user) {
    const userList = [];
    for (person in this) {
      if (this[person].follows !== undefined) {
        this[person].follows.forEach(function(element) {
          //console.log(user + " === " + element + "?");
          if (user === element) {
            userList.push(this[person].name);
          }
        }, this);
      }
    }
    //console.log(userList);
    return userList;
  },
  countFollowing: function(user) {
    return this[user].follows.length;
  },
  countFollowers: function(user) {
    let followerCount = 0;
    for (person in this) {
      if (this[person].follows !== undefined) {
        this[person].follows.forEach(function(element) {
          //console.log(user + " === " + element + "?");
          if (user === element) {
            followerCount++;
          }
        }, this);
      }
    }
    return followerCount;
  },
  topFollowing: function() {
    let followingUser = "";
    let followingCount = 0;
    for (user in this) {
      if (this[user].follows !== undefined) {
        // console.log(this.countFollowing(person));
        // console.log(this[person].name);
        if (this.countFollowing(user) > followingCount) {
          followingCount = this.countFollowing(user);
          followingUser = this[user].name;
        }
      }
    }
    console.log(followingUser + " follows the most people with " + followingCount);
  },
  topFollowers: function() {
    let followedUser = "";
    let followedCount = 0;
    for (user in this) {
      if (this[user].follows !== undefined) {
        // console.log(this.countFollowers(user));
        // console.log(this[user].name);
        if (this.countFollowers(user) > followedCount) {
          followedCount = this.countFollowers(user);
          followedUser = this[user].name;
        }
      }
    }
    console.log(followedUser + " has the most followers with " + followedCount);
  }
};

// List everyone and for each of them, list the names of who they follow and who follows them
data.printConnections();
// Identify who follows the most people
data.topFollowing();
// Identify who has the most followers
data.topFollowers();
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)