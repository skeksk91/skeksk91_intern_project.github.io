  //var serverIP = 'http://localhost:8080';
  //var serverIP = 'https://192.168.25.32:8080';
  //var serverIP = 'https://10.252.44.76:8080/';
  var serverIP = 'https://skeksk91.github.io/'; 
  function setsave(name, value, expiredays) {  // setsave("userid", id, 7);  //-1삭제
        var today = new Date();
        today.setDate(today.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires="
                + today.toGMTString() + ";";
        return true;
    }

	function getLogin(userid, login) {
    // userid 쿠키에서 id 값을 가져온다.
        var val = "";
        var cook = document.cookie + ";";
        var idx = cook.indexOf("userid", 0);

        if (idx != -1) {
            cook = cook.substring(idx, cook.length);
            begin = cook.indexOf("=", 0) + 1;
            end = cook.indexOf(";", begin);
            val = unescape(cook.substring(begin, end));
        }
        //가져온 쿠키값이 있으면
        if (val != "") {
            //alert("cookie = " + val);
            return val;
        }
        else{
            if(login == true){ //로그인 성공이면 쿠키 저장
        	   setsave("userid", userid, 7);
               return 1;
            }
            else{
               return -1;  //로그인 성공이 아닌 쿠키 요청 (경로 임의 접근)
            }
        }
        return false;
    }

 function deleteCookie( cookieName )
 {
  var expireDate = new Date();
  
  //어제 날짜를 쿠키 소멸 날짜로 설정한다.
  expireDate.setDate( expireDate.getDate() - 1 );
  document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString() + "; path=/";
 }
