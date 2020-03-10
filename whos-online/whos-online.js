const whosOnline = (friends) => {
  
  friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
    }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }]

  function userNewStatus(item){
    if (item.lastActivity > 10 && item.status != 'offline') {
      item.status = 'away';
    };
  }
  friends.map(userNewStatus);
  console.log(Object.values(friends))

  function getUsername(item) {
    return item.username;
  }

  function getByStatus(status) {
    function getStatus(item){
      return item.status === status;
    }
    return friends.filter(getStatus).map(getUsername);
  }

  let whosReallyOnline = {
    'online': getByStatus('online'),
    'offline': getByStatus('offline'),
    'away': getByStatus('away')
  };

  console.log(whosReallyOnline);
}
whosOnline();