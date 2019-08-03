const serverUrl = 'http://127.0.0.1:3000';
$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    //console.log("DIRECTION" + direction)
     //SwimTeam.move(direction.toLowerCase());
    $.ajax({
      type: 'POST',
      url: serverUrl,
      dataType: 'json',
      contentType: 'application/json',
      data: {arrow: JSON.stringify(direction)},
      processData: false,
      success: (data) => {
        console.log(data)
        SwimTeam.move(data)
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
});

console.log('Client is running in the browser!');

//remove swimteam.move invokation
//instead key press needs to do a POST to serverz
