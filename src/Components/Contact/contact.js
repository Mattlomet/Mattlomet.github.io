import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state={
      name : '',
      email: '',
      subject: '',
      body: ''
    }
  }
  handleInput = event => {
    //used for setting username and password states
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
    render() {
        return (
            < div className="hero is-large"
                id="contact" >
                <div className="container has-text-centered">
                    <h1 className="title">
                        Contact Me!
      </h1>
      <div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name" name="name" onChange={this.handleInput}/>
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        < input class = "input"
        type = "email"
        placeholder = "Email@email.com"
        name = "email"
        onChange = {
          this.handleInput
        }
        />
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>





<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        < input class = "input"
        type = "text"
        placeholder = "e.g. Partnership opportunity"
        name = "subject"
        onChange = {
          this.handleInput
        }
        />
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Body</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        < textarea class = "textarea"
        placeholder = ""
        name = "body"
        onChange = {
          this.handleInput
        } > </textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        );
    }
}

export default Contact;