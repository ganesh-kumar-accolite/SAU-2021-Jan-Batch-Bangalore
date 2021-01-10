package com.example.au.couchbasedemo.model;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.couchbase.core.mapping.Document;
import org.springframework.data.couchbase.core.mapping.Field;

import com.sun.istack.NotNull;

@Document
public class Blogs {
    
    @Id
    String id;
    
    @NotNull
    @Field
    String topic;
    
    @NotNull
    @Field
    String author;
    
    @Field
    List<String> tags;
    
    @Field
    Date date;

    @NotNull
    @Field
	String publisher;

    @NotNull
	@Field
	Boolean forKids;
	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public List<String> getTags() {
		return tags;
	}

	public void setTags(List<String> tags) {
		this.tags = tags;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getId() {
		return id;
	}

	public void setPublisher(String publisher)
	{
		this.publisher=publisher;
	}

	public String getPublisher(){ return this.publisher;}

	public void setForKids(Boolean forKids)
	{
		this.forKids=forKids;
	}

	public Boolean getForKids(){ return this.forKids;}
	public Blogs(String id, String topic, String author, List<String> tags, Date date,String publisher,Boolean forKids) {
		super();
		this.id = id;
		this.topic = topic;
		this.author = author;
		this.tags = tags;
		this.date = date;
		this.publisher=publisher;
		this.forKids=forKids;
	}
    
    
    
}
