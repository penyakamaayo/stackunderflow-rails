import React from "react";
import { Link } from "react-router-dom";

var SignIn = React.createClass({
  render: function() {
    return (
      <div>
        .container
        .row
        .col-md-3
        .col-md-6.text-center.box
        %sign_up 
        Log in to 
        = link_to 'StackUnderFlow', root_path
        = form_for(resource, as: resource_name, url: session_path(resource_name)) do |f|
        %br/
        .field
        %username_signup
        = f.label :username
        %br/
        = f.text_field :username, autofocus: true, autocomplete: "username"
        .field
        %pwd_signup
        %br/
        = f.label :password
        %br/
        = f.password_field :password, autocomplete: "current-password"
        - if devise_mapping.rememberable?
        .field
        %pwdconf_signup
        = f.check_box :remember_me
        = f.label :remember_me
        .actions
        %br
        = f.submit "Log in", class: "btn btn-primary"
        = render "devise/shared/links"
      </div>
    );
  }
});