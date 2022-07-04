import {PureComponent} from 'react';
import { ListInterface } from './Model/ListInterface';
import { Linking } from 'react-native'
import {callAPIGetData} from './APICall'

interface props {
    navigation: any
}

type state = {
    page: number,
    pageEnd: number,
    list: Array<ListInterface>
}

export class FlatListController extends PureComponent<props,state>{

    constructor(props: any){
        super(props)
        this.state = {
            page: 0,
            pageEnd: 0,
            list: [],
        }

    }

    componentDidMount(){
        console.log("this is called");
        this.callAPIFetchPostData();

        let myInterval = setInterval(() => {
            if (this.state.page < this.state.pageEnd) {
                this.handleLoadMoreData();
            } else {
                console.log("Clear interval");
                clearInterval(myInterval);
            }
        }, 10000)

    }
    handleLoadMoreData = () => {
        console.log("loadMoreData", this.state.page, this.state.pageEnd)
        this.setState({ page: this.state.page + 1 }, () => {
            this.callAPIFetchPostData();
        });

    }
    async callAPIFetchPostData(){
       
        let resultJson = await callAPIGetData(this.state.page);

        // let result =  fetch(
        //     `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${this.state.page}`,
        // );
        // let resultJson = await (await result).json();
        console.log("this is called1", resultJson);
        const { hits, nbHits, page, nbPages, hitsPerPage, exhaustiveNbHits } = resultJson


        let listFinal = hits.map((value: ListInterface) => {
            return {
                title: value.title,
                url: value.url,
                created_at: value.created_at,
                author: value.author,
            };
        });
        console.log("this is called2", listFinal);

        this.setState({
            list:
                this.state.page === 0
                    ? listFinal
                    : [...this.state.list, ...listFinal],
          
        });
    }

    handleClick= (url: string) => {
    Linking.openURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log("Don't know how to open URI: " + url);
        }
    });
    }

    openDetails = (item: ListInterface) =>{
        this.props.navigation.navigate('ListDetailComponent',{item: item})
    }
   
}

