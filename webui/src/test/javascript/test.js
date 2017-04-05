import React from "react"
import expect from "must";
import App from "../../main/javascript/App";
import {mount} from "enzyme";
import {after, before, describe, it} from "mocha";
import sinon from "sinon";

describe('Characters', () => {

    let server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    it('renders the characters as returned by the server', () => {
        const component = mount(<App />);

        server.requests[0].respond(
            200,
            { "Content-Type": "application/json" },
            JSON.stringify({results: [{name: 'Alpha'}, {name: 'Beta'}, {name: 'Gamma'}]})
        );

        expect(component.find('.character').map(i => i.text())).to.eql(["Alpha", "Beta", "Gamma"]);
    });
});