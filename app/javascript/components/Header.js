import React from "react";
import { Link } from "react-router-dom";

var Header = React.createClass({
  render: function() {
    return (
      <div>
        .container
        .row
        .col-12.pt-3.pb-3.mb-1
        .float-right
        - if user_signed_in?
        = link_to "Logout", destroy_user_session_path, method: :delete, class: "btn btn-primary"
        - else
        = link_to "Login", new_user_session_path, class: "btn btn-primary"
        = link_to "Signup", new_user_registration_path, class: "btn btn-primary"
        %home
        = link_to "StackUnderFlow.", root_path
      </div>
    );
  }
});