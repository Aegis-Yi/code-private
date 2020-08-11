(function() {
    $(document).ready(function(){
      var storage=window.localStorage;
      var recordTime = storage.getItem('rateRecordTime_h5p_room');
      var recordObj = JSON.parse(recordTime);
      console.log(recordObj);
      recordObj.v = -888888;
      recordTime = JSON.stringify(recordObj);
      storage.setItem('rateRecordTime_h5p_room',recordTime);
    });
  })();