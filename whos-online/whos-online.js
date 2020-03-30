function getUsername(item) {
  return item.username;
}

const whosOnline = (friends) => {
  friends = [
    {
      username: "Mark",
      status: "online",
      lastActivity: 5
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104
    }
  ];

  friends.forEach(friend => {
    if (friend.lastActivity > 10 && friend.status != "offline") {
      friend.status = "away";
    }
  });

  function getByStatus(status) {
    function getStatus(item) {
      return item.status === status;
    }
    return friends.filter(getStatus).map(getUsername);
  }

  let isOnline = getByStatus('online');
  let isOffline = getByStatus('offline');
  let isAway = getByStatus('away');

  const whosReallyOnline = {
      'online': isOnline,
      'offline': isOffline,
      'away': isAway
  };

  for (key in whosReallyOnline) {
    if (whosReallyOnline[key].length === 0) {
      delete whosReallyOnline[key];
    }
  }
  console.log(whosReallyOnline);
  //return whosReallyOnline;
}
whosOnline();