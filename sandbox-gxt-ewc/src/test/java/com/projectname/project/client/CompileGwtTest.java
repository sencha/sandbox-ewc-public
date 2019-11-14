package com.projectname.project.client;

import com.google.gwt.junit.client.GWTTestCase;

public class CompileGwtTest extends GWTTestCase {
  @Override
  public String getModuleName() {
    return "com.projectname.project.GxtEwcProject";
  }

  public void testSandbox() {
    assertTrue(true);
  }
}
