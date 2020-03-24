const whosOnline = (friends) => {
  
  friends = [
     {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }
  ]

  function userNewStatus(item){
    if (item.lastActivity > 10 && item.status != 'offline') {
      item.status = 'away';
    };
  }
  friends.map(userNewStatus);

  function getUsername(item) {
    return item.username;
  }

  function getByStatus(status) {
    function getStatus(item){
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
  //console.log(whosReallyOnline);
  return whosReallyOnline;
}
whosOnline();