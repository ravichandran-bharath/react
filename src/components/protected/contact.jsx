import React, { Component } from 'react';
import { auth } from '../configurations/config';

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}


export default class Contact extends Component {

    state = { registerError: null }
    handleSubmit = (e) => {
      e.preventDefault()
      auth(this.email.value, this.pw.value)
        .catch(e => this.setState(setErrorMsg(e)))
    }


    render () {
        return (
            <div>
                <div className="bgimg-1">
                    <div className="caption">
                        <span className="border">Write your queries</span>

                        <div className="col-sm-6 col-sm-offset-3">  
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group space">
                                    <input className="form-control" ref={(name) => this.name = name} placeholder="Name"/>
                                </div>
                                <div className="form-group space">
                                    <input className="form-control" placeholder="Email" ref={(email) => this.email = email} />
                                </div>
                                <div className="form-group space">
                                    <input className="form-control" placeholder="Phone" ref={(phone) => this.phone = phone} />
                                </div>
                                <div className="form-group space">
                                    <input className="form-control" placeholder="Message" ref={(phone) => this.phone = phone} />
                                </div>
                                {
                                    this.state.registerError &&
                                    <div className="alert alert-danger" role="alert">
                                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                    <span className="sr-only">Error:</span>
                                    &nbsp;{this.state.registerError}
                                    </div>
                                }<br />
                                <button type="submit" className="btn btn-primary">Register with us..!</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Parallax Demo</h3>
                    <p>Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>

                <div className="bgimg-2">
                    <div className="caption">
                        <span className="border">LESS HEIGHT</span>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    </div>
                </div>

                <div className="bgimg-3">
                    <div className="caption">
                        <span className="border">SCROLL UP</span>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Scroll up and down to really get the feeling of how Parallax Scrolling works.</p>
                    </div>
                </div>
            </div>
        )
    }
}