import { PureComponent } from "react";
import { ListInterface } from "./Model/ListInterface";

interface props {
    navigation: any,
    route: any
}
interface state {
item : ListInterface;

 }

export default class ListDetailsController extends PureComponent<props, state>{

    constructor(props: any) {
        super(props)

        this.state = {
            item: props.route ? props.route.params.item : {}
        }
    }
}