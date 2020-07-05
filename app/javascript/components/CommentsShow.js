import React from "react";
import { Link } from "react-router-dom";

var CommentsShow = React.createClass({
  render: function() {
    return (
      <div>
        .indexp
        .container
        .row
        .col-md-12.box.mt
        .row
        .col-md.12.mt-0
        %p#notice= notice
        %p
        %comment_show_body
        "
        = @comment.body
        "
        %p
        %comment_show_by
        = @comment.user.username
        Commented On #{'{'}@comment.created_at.strftime("%B %d %Y, %l:%M%P"){'}'}
        .row
        .col-md-12      
        = render 'replies/index', replies: @comment.replies
        = render 'replies/form', reply: Reply.new , comment_id: @comment.id
      </div>
    );
  }
});