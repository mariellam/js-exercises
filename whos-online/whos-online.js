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

  let whosReallyOnline = {};

  function checkStatus() {
    if (isOnline.length < 1 && isOffline.length < 1 && isAway.length < 1) {
      whosReallyOnline = {};
    } else if (isOnline.length > 0 && isOffline.length < 1 && isAway.length < 1) {
      whosReallyOnline = { 'online': isOnline };
    } else if (isOnline.length < 1 && isOffline.length > 0 && isAway.length < 1) {
      whosReallyOnline = { 'offline': isOffline};
    } else if (isOnline.length < 1 && isOffline.length < 1 && isAway.length > 0) {
      whosReallyOnline = { 'away': isAway };
    } else if (isOnline.length > 0 && isOffline.length > 0 && isAway.length < 1) {
      whosReallyOnline = {
        'online': isOnline,
        'offline': isOffline
      };
    } else if (isOnline.length < 1 && isOffline.length > 0 && isAway.length > 0) {
      whosReallyOnline = {
        'offline': isOffline,
        'away': isAway
      };
    } else if (isOnline.length > 0 && isOffline.length < 1 && isAway.length > 0) {
      whosReallyOnline = {
        'online': isOnline,
        'away': isAway
      };
    } else if (isOnline.length > 0 && isOffline.length > 0 && isAway.length > 0) {
      whosReallyOnline = {
        'online': isOnline,
        'offline': isOffline,
        'away': isAway
      };
    }
  }
  checkStatus();

  //console.log(isOnline);
  //console.log(isOffline);
  //console.log(isAway);
  console.log(whosReallyOnline);
  //return whosReallyOnline;
}
whosOnline();