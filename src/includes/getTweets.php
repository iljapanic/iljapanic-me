<?php
  session_start();

  require "twitteroauth/autoload.php";
  use Abraham\TwitterOAuth\TwitterOAuth;

  $twitteruser = "iljapanic"; //user id you want to reference
  $notweets = 10; //how many tweets you want to retrieve
  $consumerkey = "5VviA00FkUQgqACq8otExG1AA";
  $consumersecret = "KPyBsZXLow7ykEQHhWjNgmD0L6cumb6Dlip3ENObkhLtKezXIB";
  $accesstoken = "191790729-4diaKTrqZGVxd5wBK1XjS4tcee5muh6yfy5Cn16l";
  $accesstokensecret = "6o6BkqbN0IgI5oFeNkJ38eUq3u4SASFnbVOTKpSCeUZcs";

  function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
    $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
    return $connection;
  }

  $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);


  // $tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=".$twitteruser."&count=".$notweets);

  $tweets = $connection->get("statuses/user_timeline", ["screen_name" => $twitteruser, "count" => $notweets]);

  echo json_encode($tweets);
  // echo $tweets; //testing remove for production
?>
