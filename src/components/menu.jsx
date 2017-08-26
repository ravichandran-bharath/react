import React, { Component } from 'react'

export default class Menu extends Component {
  render () {
    return (
      <div>
        Profile component. This is a protected route. You can only see this if you're authed.
        <div className="panel-group" id="accordion">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><span class="glyphicon glyphicon-folder-close">
                        </span>Content</a>
                    </h4>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <table className="table">
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-pencil text-primary"></span><a href="http://www.jquery2dotnet.com">Articles</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-flash text-success"></span><a href="http://www.jquery2dotnet.com">News</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div><br/>
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-folder-close">
                        </span>users</a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <table className="table">
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-pencil text-primary"></span><a href="http://www.jquery2dotnet.com">Articles</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-flash text-success"></span><a href="http://www.jquery2dotnet.com">News</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </div><br />

            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><span class="glyphicon glyphicon-folder-close">
                        </span>users</a>
                    </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <table className="table">
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-pencil text-primary"></span><a href="http://www.jquery2dotnet.com">Articles</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="glyphicon glyphicon-flash text-success"></span><a href="http://www.jquery2dotnet.com">News</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            </div>
      </div>
    )
  }
}