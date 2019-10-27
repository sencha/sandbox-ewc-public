package com.sencha.rest.models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Ticket {

  private String label;
  private int value;

  public Ticket() {
  }

  public Ticket(String label, int total) {
    this.setLabel(label);
    this.setValue(total);
  }

  /**
   * @return the label
   */
  public String getLabel() {
    return label;
  }

  /**
   * @param label the label to set
   */
  public void setLabel(String label) {
    this.label = label;
  }

  /**
   * @return the value
   */
  public int getValue() {
    return value;
  }

  /**
   * @param value the value to set
   */
  public void setValue(int value) {
    this.value = value;
  }

}
