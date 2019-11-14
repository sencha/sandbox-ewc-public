package com.projectname.project.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.ScriptInjector;
import com.google.gwt.dom.client.Document;
import com.google.gwt.dom.client.ScriptElement;
import com.google.gwt.resources.client.*;
import com.google.gwt.safehtml.shared.SafeHtmlUtils;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.RootPanel;
import com.projectname.project.client.myview.MyViewWidget;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class GxtEwcProjectEntryPoint implements EntryPoint {

  interface Resources extends ClientBundle {
    Resources INSTANCE = GWT.create(Resources.class);

    @Source("ExtWebComponents.js")
    ExternalTextResource ewcJS();
  }

  @Override
  public void onModuleLoad() {
    // Used to load the content each time this app is loaded.
    // This will allow for changes to be loaded quickly
    try {
      Resources.INSTANCE.ewcJS().getText(new ResourceCallback<TextResource>() {
        @Override
        public void onError(ResourceException e) {
          GWT.log("Error loading resource");
        }

        @Override
        public void onSuccess(TextResource text) {
          // Append the ewc script
          ScriptElement scriptEl = Document.get().createScriptElement();
          scriptEl.setInnerHTML(text.getText());
          scriptEl.setType("module");
          RootPanel.get().getElement().appendChild(scriptEl);
        }
      });
    } catch (ResourceException e) {
      e.printStackTrace();
    }

    RootPanel.get().add(new MyViewWidget());
  }
  
}
