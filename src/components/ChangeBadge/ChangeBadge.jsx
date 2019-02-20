import React from 'react'
import { Badge } from 'antd';
import { RED, GREEN, GREY } from './../../Constants';
import CompanyLogo from '../CompanyLogo/CompanyLogo';

const determineColor = (shares, price, quote) => {
    if((shares*quote)-(shares*price) === 0){
        return GREY
    }
    else if((shares*quote)-(shares*price) > 0){
        return GREEN;
    }
    else{
        return RED;
    }
}
const determineText = (shares, price, quote) => {
    if((shares*quote)-(shares*price) === 0){
        return 'No Equity'
    }
    else if((shares*quote)-(shares*price) > 0){
        return 'Equity Gain';
    }
    else{
        return 'Equity Loss';
    }
}

function ChangeBadge(props){
    if(props.company.shares){
        return(
            <Badge style={{backgroundColor: determineColor(props.company.shares.count, props.company.shares.price, props.quote)}} count={determineText(props.company.shares.count, props.company.shares.price, props.quote)} />
        )
    }
}

export default ChangeBadge;