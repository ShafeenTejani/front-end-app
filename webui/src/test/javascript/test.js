import React from "react"
import { mount } from "enzyme";
import expect from "must";
import Characters from "../../main/javascript/Characters";


describe('Characters', () => {
    it('TODO', () => {
        // TODO use sinon to mock/fake response from swazi.co call...
        const component = mount(<App />);

        expect(component.find('.character').map(i => i.text())).to.eql(["Alpha", "Beta", "Gamma"]);
    });


    it('renders each characters using a div with class .character', () => {
        const chars = [{name: 'Alpha'}, {name: 'Beta'}, {name: 'Gamma'}];
        const component = mount(<Characters data={chars} />);

        expect(component.find('.character').map(i => i.text())).to.eql(["Alpha", "Beta", "Gamma"]);
    });
});