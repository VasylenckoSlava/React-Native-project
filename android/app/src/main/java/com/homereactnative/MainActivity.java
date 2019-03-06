package com.homereactnative;

import com.reactnativenavigation.controllers.SplashActivity;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends SplashActivity implements OnImagePickerPermissionsCallback {
  @Override
  public LinearLayout createSplashLayout() {
    LinearLayout view = new LinearLayout(this);
    TextView textView = new TextView(this);

    view.setBackgroundColor(Color.parseColor("#521751"));
    view.setGravity(Gravity.CENTER);

    textView.setTextColor(Color.parseColor("#fa923f"));
    textView.setText("Itomych prodge");
    textView.setGravity(Gravity.CENTER);
    textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

    view.addView(textView);
    return view;
  }
  private PermissionListener listener; // <- add this attribute

    // Your methods here

    // Copy from here

    @Override
    public void setPermissionListener(PermissionListener listener)
    {
      this.listener = listener;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
    {
      if (listener != null)
      {
        listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
      }
      super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

}
