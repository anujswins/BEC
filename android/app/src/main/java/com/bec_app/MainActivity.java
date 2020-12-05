package com.bec_app;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {
  @Override
  protected void onDestroy() {
    super.onDestroy();
    System.out.print("inside on Destroy");
    Log.e("inside on Destroy", "inside on Destroy");
  }

  public void onStart() {
    super.onStart();
    System.out.print("inside on start");
    Log.e("inside on start", "inside on start");
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    System.out.print("inside on oncreate");
    Log.e("inside on create", "inside on create");
  }

  @Override
  protected void onStop() {
    super.onStop();
    System.out.print("inside on stop");
    Log.e("inside on stop", "inside on stop");
  }

  @Override
  protected void onRestart() {
    super.onRestart();
    System.out.print("inside on Restart");
    Log.e("inside on restart", "inside on restart");
  }

  @Override
  protected void onPause() {
    super.onPause();
    System.out.print("inside on onPause");
    Log.e("inside on pause", "inside on pause");
  }

  public void onResume() {
    super.onResume();
    System.out.print("inside on Resume");
    Log.e("inside on Resume", "inside on Resume");


  }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BEC_App";
  }







}
