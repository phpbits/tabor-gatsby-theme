import React from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
        response: '',
    }

    _handleChange = (e) => {
        this.setState({
            [`${e.target.name}`]: e.target.value,
        });
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            response: '',
        });
        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {

                if (result !== 'success') {
                    throw msg;
                }
                this.setState({
                    response: msg,
                });
            })
            .catch((err) => {
                this.setState({
                    response: err,
                });
            });
    }

    render() {
        return (
            <aside id="secondary" className="widget-area">
                <div className="widget-area__inner">
                    <div className="widget-area__wrapper">
                        <aside id="text-3" className="widget widget_text clearfix">     
                            <div className="textwidget">
                                <p>Follow my journey through your inbox! I promise to send stuff on this site only and no spam, only bacon!</p>
                            </div>
                        </aside>
                        <aside id="custom_html-2" className="widget_text widget widget_custom_html clearfix">
                            <div className="textwidget custom-html-widget">
                                <div id="mc_embed_signup">
                                    <form id="mc-embedded-subscribe-form" className="validate"  onSubmit={this._handleSubmit}>
                                        <input
                                            type="email"
                                            onChange={this._handleChange}
                                            name="email"
                                            placeholder="Email Address*"
                                            className="required email"
                                        />
                                        <input 
                                            className="submit" 
                                            type="submit" 
                                            value="Subscribe" 
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                        { this.state.response ? 
                                            <p 
                                            dangerouslySetInnerHTML= {{__html: this.state.response }}
                                            style={{
                                                marginTop: '20px'
                                            }}>
                                            </p> 
                                        : '' }
                                    </form>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </aside>
        );
    }
}