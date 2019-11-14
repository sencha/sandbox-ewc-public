package com.projectname.project.client.myview;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.event.logical.shared.AttachEvent;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.InlineHTML;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import com.sencha.gxt.core.client.XTemplates;
import com.sencha.gxt.core.client.dom.XElement;
import com.sencha.gxt.widget.core.client.box.AlertMessageBox;
import com.sencha.gxt.widget.core.client.container.AbstractHtmlLayoutContainer;
import com.sencha.gxt.widget.core.client.container.HtmlLayoutContainer;
import com.sencha.gxt.widget.core.client.form.CheckBox;
import com.sencha.gxt.widget.core.client.form.TextArea;
import com.sencha.gxt.widget.core.client.form.TextField;
import elemental2.dom.*;
import jsinterop.base.Js;

public class MyViewWidget implements IsWidget {
    // Import the FormTemplate
    public interface FormTemplate extends XTemplates {
        @XTemplate(source = "FormTemplate.html")
        SafeHtml getTemplate();
    }

    public interface OnTapCallback {
        void onTap();
    }

    private HtmlLayoutContainer widget;

    @Override
    public Widget asWidget() {
        if (widget == null) {
            widget = createForm();
            widget.setId("MyViewWidget");
            widget.addAttachHandler(new AttachEvent.Handler() {
                @Override
                public void onAttachOrDetach(AttachEvent event) {
                    if (widget.isAttached()) {
                        addEwcListeners();
                    }
                }
            });
        }
        return widget;
    }

    private void addEwcListeners() {
        Element buttonEl = Js.cast(widget.getElement());
        buttonEl.addEventListener("ext-button-tap", new EventListener() {
            @Override
            public void handleEvent(Event event) {
                new AlertMessageBox("Header", "Sent").show();
            }
        }, true);
    }

    private HtmlLayoutContainer createForm() {
        InlineHTML label1 = new InlineHTML("Name :");
        InlineHTML label2 = new InlineHTML("Select :");
        InlineHTML label3 = new InlineHTML("Description :");

        final TextField textField = new TextField();
        textField.addStyleName("flow");

        CheckBox checkBox = new CheckBox();
        checkBox.setBoxLabel("finished");
        final TextArea textArea = new TextArea();
        textArea.addStyleName("flow");

        FormTemplate template = GWT.create(FormTemplate.class);

        final HtmlLayoutContainer container = new HtmlLayoutContainer(template.getTemplate());
        container.add(label1, new AbstractHtmlLayoutContainer.HtmlData(".label1"));
        container.add(label2, new AbstractHtmlLayoutContainer.HtmlData(".label2"));
        container.add(label3, new AbstractHtmlLayoutContainer.HtmlData(".label3"));

        container.add(textField, new AbstractHtmlLayoutContainer.HtmlData(".content1"));
        container.add(checkBox, new AbstractHtmlLayoutContainer.HtmlData(".content2"));
        container.add(textArea, new AbstractHtmlLayoutContainer.HtmlData(".content3"));

        return container;
    }
}
