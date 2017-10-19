import React from 'react';
import './About.css';
import { Switch, Route, Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Location from '../Location/Location';


export default function About() {
    return (
        <div>
            <div className="about_wrapper">
                <Switch>
                    <Route path='/about/contact' component={Contact} />
                    <Route path='/about/location' component={Location} />
                    <Route path='/about' render={() => (
                        <div className="about_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id molestie metus, a pharetra nunc. Suspendisse non quam mollis, pretium nibh sed, pellentesque purus. Donec purus purus, semper vestibulum bibendum et, hendrerit ac neque.<br /><br />

                            Nulla sed mollis nunc. Integer et odio ac erat feugiat sodales quis ac magna. Vestibulum sagittis, lectus eget accumsan pellentesque, mi magna cursus eros, sit amet mattis quam est et nulla. Praesent eget dui vitae augue luctus vehicula.<br /><br />

                            Mauris scelerisque mi quis maximus efficitur. Aliquam commodo sagittis posuere. Maecenas odio mi, congue aliquam erat ut, bibendum pharetra ipsum. Etiam libero magna, ultricies ac neque fringilla, elementum euismod magna.
                    </div>
                    )} />
                </Switch>
            </div>
            <div className="about_sub_menu">
                <ul>
                    <Link to='/about/contact'><li>Contact</li></Link>
                    <Link to='/about/location'><li>Location</li></Link>
                </ul>
            </div>
        </div>
    )
}