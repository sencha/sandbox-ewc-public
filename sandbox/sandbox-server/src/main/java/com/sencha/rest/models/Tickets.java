package com.sencha.rest.models;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Tickets {

    private List<Ticket> tickets = new ArrayList<Ticket>();

    public Tickets() {
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void add(Ticket ticket) {
        tickets.add(ticket);
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

}

