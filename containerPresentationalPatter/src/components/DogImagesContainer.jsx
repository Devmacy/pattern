import DogImages from "./DogImages.jsx";
import {Component} from "react";

export default class DogImagesContainer extends Component {
    constructor() {
        super();
        this.state = {
            dogs: []
        };
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breed/labrador/images/random/6")
            .then(res => res.json())
            .then(({ message }) => this.setState({ dogs: message }));
    }

    render() {
        return <DogImages dogs={this.state.dogs} />;
    }
}
